// Guards on the committed cross-domain snapshot (src/data/crossdomain.json).
// Run after `npm run build:crossdomain`; the test reads the file it wrote.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const snap = JSON.parse(readFileSync(new URL("../src/data/crossdomain.json", import.meta.url), "utf8"));
const links = snap.edges.filter((e) => e.kind === "link");
const attrs = snap.edges.filter((e) => e.kind === "attribute");
const node = (id) => snap.nodes.find((n) => n.id === id);

test("pairwise links are only same event or same intrusion set", () => {
  assert.deepEqual(Object.keys(snap.tiers).sort(), ["same-event", "same-intrusion-set"]);
  for (const l of links) {
    assert.ok(["same-event", "same-intrusion-set"].includes(l.tier), l.id);
    for (const b of l.bases) assert.ok(["same_event", "same_intrusion_set"].includes(b.basis), `${l.id} ${b.basis}`);
  }
});

test("Viasat is the one same-event link and Sandworm cases are same intrusion set", () => {
  const same = links.filter((l) => l.tier === "same-event");
  assert.equal(same.length, 1);
  assert.equal(same[0].source, "cyber:viasat-kasat");
  for (const l of links.filter((x) => x.tier === "same-intrusion-set")) assert.match(l.bases[0].basisText, /Sandworm/);
});

test("criminal or non-state qualifiers never resolve to a state", () => {
  for (const n of snap.nodes.filter((x) => x.domain === "cyber" && /criminal|not (directly )?state|individuals/i.test(x.fields?.attributionCountry ?? ""))) {
    assert.equal(attrs.filter((a) => a.source === n.id && a.basis === "attributed_state").length, 0, n.id);
  }
  assert.ok(attrs.some((a) => a.source === "cyber:viasat-kasat" && a.basis === "attributed_state" && a.target === "state:russia"));
});

test("actor states need high or confirmed confidence", () => {
  for (const a of attrs.filter((x) => x.basis === "attributed_state")) assert.ok(["high", "confirmed"].includes(String(a.confidence).toLowerCase()), a.source);
});

test("lunar country profiles are profiled states, not actors", () => {
  const lunar = attrs.filter((a) => node(a.source).type === "country-profile");
  assert.ok(lunar.length > 0);
  for (const a of lunar.filter((x) => x.target.startsWith("state:"))) {
    assert.equal(a.basis, "profiled_state");
    assert.match(a.basisText, /State profiled in lunar data/);
  }
});

test("shared states and sectors are facets, and no text pairs a sector with a country", () => {
  assert.ok(snap.facets.length > 0);
  const russia = snap.facets.find((f) => f.entity === "state:russia");
  assert.ok(russia.byDomain.cyber.actor.length > 0 && russia.byDomain.orbital.actor.length > 0);
  assert.doesNotMatch(JSON.stringify(snap.edges), /energy sector in /);
});

test("every source records its branch and the deployed branch", () => {
  for (const [k, s] of Object.entries(snap.sources)) {
    assert.ok("branch" in s && "deployedBranch" in s, k);
    if (s.onDeployedBranch === false) assert.ok(snap.checks.some((c) => c.id === `source-branch-${k}`), k);
  }
});

test("intrusion sets join by MITRE ID and Viasat's same-event link has structured evidence", () => {
  for (const l of links.filter((x) => x.tier === "same-intrusion-set")) assert.ok(l.bases.some((b) => b.via === "mitre:G0034"), l.id);
  const viasat = links.find((l) => l.tier === "same-event");
  const vias = viasat.bases.map((b) => b.via);
  for (const v of ["name", "related-record", "target-entity"]) assert.ok(vias.includes(v), v);
});

test("cyber target countries are ISO codes mapped to states", () => {
  const n = snap.nodes.find((x) => x.id === "cyber:kyivstar");
  assert.deepEqual(n.fields.targetCountries, ["UA"]);
  assert.ok(attrs.some((a) => a.source === "cyber:kyivstar" && a.basis === "target_state" && a.target === "state:ukraine"));
});
