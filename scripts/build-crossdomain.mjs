#!/usr/bin/env node
// Build the Faultline cross-domain snapshot.
//
//   node scripts/build-crossdomain.mjs [--repos <dir>] [--date YYYY-MM-DD]
//
// Reads the data files of the four sibling platform repos (read only), derives
// cross-domain links from fields that already exist in those files, and writes
// a static JSON snapshot to src/data/crossdomain.json and
// public/data/crossdomain.json. The snapshot is committed so the hub can build
// on Vercel without access to the sibling repos.
//
// Rules of the road:
//   * Every link comes from a named field in a source record. No link, record
//     or fact is added by hand.
//   * Where values from different platforms must be compared (state names,
//     infrastructure categories, legal instruments) the comparison goes
//     through a crosswalk table that is published inside the snapshot.
//   * Orbital records titled "ILLUSTRATIVE" are fictional. They are listed
//     separately and never take part in links or counts of real records.

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createLoader } from "./crossdomain/load-module.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const argVal = (flag) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};
const REPOS = path.resolve(argVal("--repos") ?? path.join(ROOT, ".."));
const GENERATED = argVal("--date") ?? new Date().toISOString().slice(0, 10);

const SNAPSHOT_VERSION = "1.0.0";
const SCHEMA_VERSION = 1;

const SOURCES = {
  cyber: {
    name: "Cyber Escalation Atlas",
    repo: "cyber-escalation-atlas",
    url: "https://cyber-escalation-atlas.vercel.app",
  },
  orbital: {
    name: "Orbital Risk Tracker",
    repo: "Orbital-Risk-Tracker",
    url: "https://orbitalrisktracker.vercel.app",
  },
  nuclear: {
    name: "Global Nuclear Infrastructure Atlas",
    repo: "Global-Nuclear-Infrastructure-Atlas",
    url: "https://globalnuclearinfrastructureatlas.vercel.app",
  },
  lunar: {
    name: "Lunar Governance Authority Tracker",
    repo: "lunar-mandate-atlas",
    url: "https://lunar-mandate-atlas.vercel.app",
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const slug = (s) =>
  String(s)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const clip = (s, n = 220) => {
  if (!s) return "";
  const t = String(s).replace(/\s+/g, " ").trim();
  return t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, "") + "…";
};

const uniq = (arr) => [...new Set(arr)];
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function gitInfo(repoDir) {
  try {
    const commit = execSync("git rev-parse HEAD", { cwd: repoDir }).toString().trim();
    const date = execSync("git log -1 --format=%cs", { cwd: repoDir }).toString().trim();
    // True when the data directory has no uncommitted changes, so the commit
    // hash fully describes what was read.
    const dirty = execSync("git status --porcelain -- src/data", { cwd: repoDir }).toString().trim();
    return { commit, commitDate: date, dataClean: dirty === "" };
  } catch {
    return { commit: null, commitDate: null, dataClean: null };
  }
}

// ---------------------------------------------------------------------------
// Crosswalk 1: state names
// Canonical id -> label + exact spellings used in the four datasets. A value is
// linked to a state only when, after removing any parenthetical, it equals one
// of these spellings exactly (case-insensitive). Anything else is not linked.
// ---------------------------------------------------------------------------

const STATES = [
  ["united-states", "United States", ["United States", "USA", "US"]],
  ["russia", "Russia", ["Russia"]],
  ["china", "China", ["China"]],
  ["united-kingdom", "United Kingdom", ["United Kingdom", "UK"]],
  ["france", "France", ["France"]],
  ["germany", "Germany", ["Germany"]],
  ["ukraine", "Ukraine", ["Ukraine"]],
  ["japan", "Japan", ["Japan"]],
  ["south-korea", "South Korea", ["South Korea"]],
  ["north-korea", "North Korea", ["North Korea"]],
  ["india", "India", ["India"]],
  ["pakistan", "Pakistan", ["Pakistan"]],
  ["iran", "Iran", ["Iran"]],
  ["israel", "Israel", ["Israel"]],
  ["united-arab-emirates", "United Arab Emirates", ["United Arab Emirates", "UAE"]],
  ["luxembourg", "Luxembourg", ["Luxembourg"]],
  ["eu-esa", "European Union / ESA", ["ESA / European Union", "EU / ESA"]],
  ["canada", "Canada", ["Canada"]],
  ["australia", "Australia", ["Australia"]],
  ["taiwan", "Taiwan", ["Taiwan"]],
  ["italy", "Italy", ["Italy"]],
  ["netherlands", "Netherlands", ["Netherlands"]],
  ["sweden", "Sweden", ["Sweden"]],
  ["switzerland", "Switzerland", ["Switzerland"]],
  ["brazil", "Brazil", ["Brazil"]],
  ["belgium", "Belgium", ["Belgium"]],
  ["saudi-arabia", "Saudi Arabia", ["Saudi Arabia"]],
  ["bangladesh", "Bangladesh", ["Bangladesh"]],
  ["egypt", "Egypt", ["Egypt"]],
];
const STATE_BY_SPELLING = new Map();
for (const [id, label, spellings] of STATES) {
  for (const s of spellings) STATE_BY_SPELLING.set(s.toLowerCase(), { id, label });
}
const stripParens = (s) => String(s).replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();

/** Exact lookup; nuclear and lunar country names not in STATES are added on the fly. */
function stateOf(value, { allowNew = false } = {}) {
  const key = String(value).trim().toLowerCase();
  if (STATE_BY_SPELLING.has(key)) return STATE_BY_SPELLING.get(key);
  if (allowNew) {
    const entry = { id: slug(value), label: String(value).trim() };
    STATE_BY_SPELLING.set(key, entry);
    STATES.push([entry.id, entry.label, [entry.label]]);
    return entry;
  }
  return null;
}

/** "Russia (GRU Sandworm)" -> [Russia]; "United States / Israel" -> [US, Israel]. */
function statesInActorField(raw) {
  const stripped = stripParens(raw);
  const parts = stripped.split("/").map((p) => p.trim()).filter(Boolean);
  const out = [];
  for (const p of parts) {
    const s = stateOf(p);
    if (!s) return []; // any unmatched part means the field is not a plain state list
    out.push(s);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Crosswalk 2: infrastructure categories shared by at least two platforms
// ---------------------------------------------------------------------------

const SECTORS = [
  {
    id: "energy-power",
    label: "Energy and power",
    rules: [
      { domain: "cyber", field: "infrastructure.targetSectors", match: "energy" },
      { domain: "nuclear", field: "(record type)", match: "every commercial nuclear power plant record" },
      { domain: "lunar", field: "INFRA_GOVERNANCE_LINKS.infrastructure", match: "power" },
    ],
  },
  {
    id: "communications",
    label: "Communications",
    rules: [
      { domain: "cyber", field: "infrastructure.targetSectors", match: "telecommunications" },
      {
        domain: "orbital",
        field: "target or subtype",
        match: "text contains: communication, satellite internet, broadband, Starlink, KA-SAT, SATCOM",
      },
      { domain: "lunar", field: "INFRA_GOVERNANCE_LINKS.infrastructure", match: "comms" },
    ],
  },
  {
    id: "navigation-timing",
    label: "Navigation and timing",
    rules: [
      {
        domain: "orbital",
        field: "type, subtype, target",
        match: "type is spoofing, or subtype or target text contains GNSS or GPS",
      },
      { domain: "lunar", field: "INFRA_GOVERNANCE_LINKS.infrastructure", match: "nav" },
    ],
  },
];
const ORBITAL_COMMS_RE = /communication|satellite internet|broadband|starlink|ka-sat|satcom/i;
const ORBITAL_NAV_RE = /\bGNSS\b|\bGPS\b/i;

// ---------------------------------------------------------------------------
// Crosswalk 3: legal and normative instruments
// Strings from the datasets are mapped to a canonical instrument when they match
// one of these patterns. Unmatched strings keep their own instrument node, so
// nothing is dropped.
// ---------------------------------------------------------------------------

const INSTRUMENTS = [
  { id: "outer-space-treaty", label: "Outer Space Treaty (1967)", re: /^(outer space treaty|ost)\b/i, ids: ["OST-1967", "OST"] },
  { id: "liability-convention", label: "Liability Convention (1972)", re: /^liability convention/i, ids: ["LIABILITY"] },
  { id: "registration-convention", label: "Registration Convention (1975)", re: /^registration convention/i, ids: ["REGISTRATION"] },
  { id: "copuos-lts-guidelines", label: "COPUOS LTS Guidelines (2019)", re: /^copuos lts guidelines/i, ids: ["LTS"] },
  { id: "artemis-accords", label: "Artemis Accords", re: /^artemis accords$/i, ids: ["AA-2020", "ARTEMIS"] },
  { id: "itu-framework", label: "ITU Coordination", re: /^itu coordination/i, ids: ["ITU"] },
  { id: "tallinn-manual-2", label: "Tallinn Manual 2.0", re: /^tallinn manual 2\.0/i, ids: ["tallinn"] },
  { id: "un-charter", label: "UN Charter", re: /^un charter/i, ids: ["un-charter"] },
  { id: "ihl", label: "Geneva Conventions / IHL", re: /^(geneva conventions|ihl\b)/i, ids: ["ihl"] },
  { id: "un-gge-2015", label: "UN GGE Voluntary Norms (2015)", re: /^un gge 2015/i, ids: ["gge-norms"] },
  { id: "npt", label: "NPT", re: /^npt$/i, ids: [] },
  { id: "iaea-additional-protocol", label: "IAEA Additional Protocol", re: /^additional protocol$/i, ids: [] },
  { id: "euratom", label: "EURATOM", re: /^euratom$/i, ids: [] },
  { id: "tlatelolco", label: "Treaty of Tlatelolco", re: /^tlatelolco treaty$/i, ids: [] },
  { id: "pelindaba", label: "Treaty of Pelindaba", re: /^pelindaba treaty$/i, ids: [] },
];

const instrumentNodes = new Map(); // id -> node
function instrumentFor(text, { sourceId } = {}) {
  if (sourceId) {
    const byId = INSTRUMENTS.find((i) => i.ids.includes(sourceId));
    if (byId) return ensureInstrument(byId.id, byId.label);
  }
  const t = String(text).trim();
  const hit = INSTRUMENTS.find((i) => i.re.test(t));
  if (hit) return ensureInstrument(hit.id, hit.label);
  return ensureInstrument(slug(sourceId ?? t), t);
}
function ensureInstrument(id, label) {
  const nid = `instrument:${id}`;
  if (!instrumentNodes.has(nid)) {
    instrumentNodes.set(nid, { id: nid, kind: "entity", type: "instrument", domain: "shared", label, domains: [] });
  }
  return instrumentNodes.get(nid);
}

// ---------------------------------------------------------------------------
// Graph containers
// ---------------------------------------------------------------------------

const nodes = new Map();
const edges = [];
const edgeKeys = new Set();
const contextEdges = []; // state-level context (entity -> instrument)

function addNode(n) {
  if (!nodes.has(n.id)) nodes.set(n.id, n);
  return nodes.get(n.id);
}
function ensureState(st) {
  return addNode({ id: `state:${st.id}`, kind: "entity", type: "state", domain: "shared", label: st.label, domains: [] });
}
function ensureSector(id) {
  const s = SECTORS.find((x) => x.id === id);
  return addNode({ id: `sector:${id}`, kind: "entity", type: "sector", domain: "shared", label: s.label, domains: [] });
}
function touch(entity, domain) {
  if (!entity.domains.includes(domain)) entity.domains.push(domain);
}

function addAttr(recordId, entity, basis, basisText, extra = {}) {
  const key = `${recordId}|${entity.id}|${basis}`;
  if (edgeKeys.has(key)) return;
  edgeKeys.add(key);
  const rec = nodes.get(recordId);
  touch(entity, rec.domain);
  edges.push({ id: `e${edges.length + 1}`, kind: "attribute", source: recordId, target: entity.id, basis, basisText, ...extra });
}

const linkMap = new Map(); // "a|b" -> link edge with bases[]
function addLink(a, b, basis, basisText, extra = {}) {
  const [s, t] = a < b ? [a, b] : [b, a];
  const key = `${s}|${t}`;
  let link = linkMap.get(key);
  if (!link) {
    link = { id: null, kind: "link", source: s, target: t, domains: [nodes.get(s).domain, nodes.get(t).domain].sort(), bases: [] };
    linkMap.set(key, link);
  }
  if (!link.bases.some((x) => x.basis === basis && x.via === extra.via)) {
    link.bases.push({ basis, basisText, ...extra });
  }
}

// ---------------------------------------------------------------------------
// Load sources
// ---------------------------------------------------------------------------

const load = {};
const sourceMeta = {};
for (const [key, src] of Object.entries(SOURCES)) {
  const dir = path.join(REPOS, src.repo);
  if (!fs.existsSync(dir)) {
    console.error(`Missing sibling repo: ${dir}`);
    process.exit(1);
  }
  load[key] = createLoader(path.join(dir, "src")).load;
  sourceMeta[key] = { ...src, ...gitInfo(dir), files: [] };
}

// ---- Cyber ----------------------------------------------------------------
const cyberIncidents = load.cyber("data/incidents/index.ts").seedIncidents;
const cyberLegal = load.cyber("data/legalFrameworks.ts").legalFrameworks;
const cyberNorms = load.cyber("data/norms.ts").normsData;
const cyberActors = load.cyber("data/actors.ts").actorProfiles;
sourceMeta.cyber.files = [
  "src/data/incidents/index.ts (seed.ts, newCases2024.ts, newCasesGlobal.ts, newCasesAttribution.ts, attributionData.ts)",
  "src/data/legalFrameworks.ts",
  "src/data/norms.ts",
  "src/data/actors.ts",
];

// ---- Orbital --------------------------------------------------------------
const orbitalAll = load.orbital("data/incidents.js").INCIDENTS;
const isIllustrative = (i) => /^ILLUSTRATIVE\b/.test(i.title) || /ILLUSTRATIVE/.test(i.actor ?? "");
const orbitalReal = orbitalAll.filter((i) => !isIllustrative(i));
const orbitalIllustrative = orbitalAll.filter(isIllustrative);
const orbitalLegal = load.orbital("data/legalFramework.js");
const orbitalActors = load.orbital("data/actors.js").ACTOR_PROFILES;
sourceMeta.orbital.files = ["src/data/incidents.js", "src/data/legalFramework.js", "src/data/actors.js"];

// ---- Nuclear --------------------------------------------------------------
const nuclearPlants = load.nuclear("data/enrichedFacilities.js").enrichedFacilities;
const nuclearCountryGov = load.nuclear("data/countryGovernance.js").default;
const nuclearPolicies = load.nuclear("data/countryPolicies.js").countryPolicies;
sourceMeta.nuclear.files = [
  "src/data/commercialPlants.js",
  "src/data/enrichedFacilities.js (digital I&C and cyber overlay fields)",
  "src/data/countryGovernance.js",
  "src/data/countryPolicies.js",
];

// ---- Lunar ----------------------------------------------------------------
const lunar = load.lunar("data/index.ts");
const lunarDPs = lunar.DISCRETION_POINTS;
const lunarCountries = lunar.COUNTRIES;
const lunarInfra = lunar.INFRA_GOVERNANCE_LINKS;
const lunarInfraTypes = lunar.INFRASTRUCTURE_TYPES;
sourceMeta.lunar.files = ["src/data/discretionPoints.ts", "src/data/countries.ts", "src/data/infrastructure.ts", "src/data/constants.ts"];

// ---------------------------------------------------------------------------
// Record nodes
// ---------------------------------------------------------------------------

for (const c of cyberIncidents) {
  addNode({
    id: `cyber:${c.slug}`,
    kind: "record",
    domain: "cyber",
    type: "case",
    label: c.name,
    date: c.dateRange,
    year: c.year,
    url: `${SOURCES.cyber.url}/cases/${c.slug}`,
    urlPrecision: "record",
    summary: clip(c.summary),
    fields: {
      incidentType: c.incidentType,
      attributionCountry: c.attribution.country,
      attributionConfidence: c.attribution.confidence,
      aliases: c.attribution.aliases,
      targetSectors: c.infrastructure.targetSectors,
      targetCountries: c.infrastructure.targetCountries,
    },
  });
}

for (const o of orbitalReal) {
  addNode({
    id: `orbital:${o.id}`,
    kind: "record",
    domain: "orbital",
    type: "incident",
    label: o.title,
    date: o.date,
    year: o.year,
    url: `${SOURCES.orbital.url}/#/incidents/${o.id}`,
    urlPrecision: "record",
    summary: clip(o.summary),
    fields: { actor: o.actor, type: o.type, subtype: o.subtype, target: o.target, orbit: o.orbit, confidence: o.confidence, severity: o.severity },
  });
}

for (const p of nuclearPlants) {
  addNode({
    id: `nuclear:${p.id}`,
    kind: "record",
    domain: "nuclear",
    type: "plant",
    label: p.name,
    date: p.firstPower ? String(p.firstPower) : null,
    year: p.firstPower ?? null,
    url: `${SOURCES.nuclear.url}/infrastructure`,
    urlPrecision: "page",
    summary: clip(p.overview),
    fields: {
      country: p.country,
      status: p.status,
      reactorType: p.reactorType,
      digitalIandC: p.digital_i_and_c,
      reportedCyberIncident: p.reported_cyber_incident === true,
      criticalInfrastructureOverlap: p.critical_infrastructure_overlap,
      safeguardsStatus: p.safeguards_status,
    },
  });
}

for (const d of lunarDPs) {
  addNode({
    id: `lunar:${d.id}`,
    kind: "record",
    domain: "lunar",
    type: "discretion-point",
    label: `${d.term} (${d.document})`,
    date: null,
    year: null,
    url: `${SOURCES.lunar.url}/`,
    urlPrecision: "root",
    summary: clip(d.implication),
    fields: { term: d.term, document: d.document, documentId: d.documentId, section: d.section, holder: d.holder, coalition: d.coalition, type: d.type },
  });
}
for (const c of lunarCountries) {
  addNode({
    id: `lunar:country-${c.id}`,
    kind: "record",
    domain: "lunar",
    type: "country-profile",
    label: `${c.name} lunar authority profile`,
    date: null,
    year: null,
    url: `${SOURCES.lunar.url}/`,
    urlPrecision: "root",
    summary: clip(c.specificAuthority),
    fields: { country: c.name, coalition: c.coalition, documents: c.documents.map((d) => d.title) },
  });
}
for (const l of lunarInfra) {
  addNode({
    id: `lunar:${l.id}`,
    kind: "record",
    domain: "lunar",
    type: "infrastructure-link",
    label: `${lunarInfraTypes[l.infrastructure]?.label ?? l.infrastructure}: ${l.controller}`,
    date: null,
    year: null,
    url: `${SOURCES.lunar.url}/`,
    urlPrecision: "root",
    summary: clip(l.translationMechanism),
    fields: { infrastructure: l.infrastructure, controller: l.controller, coalition: l.coalition, example: l.example },
  });
}

// ---------------------------------------------------------------------------
// Attribute edges: states
// ---------------------------------------------------------------------------

for (const c of cyberIncidents) {
  const rid = `cyber:${c.slug}`;
  for (const st of statesInActorField(c.attribution.country)) {
    addAttr(rid, ensureState(st), "attributed_state", `Cyber case field attribution.country reads "${c.attribution.country}".`, {
      role: "attributed",
      confidence: c.attribution.confidence,
      raw: `cyber attribution.country "${c.attribution.country}"`,
    });
  }
  for (const tc of c.infrastructure.targetCountries) {
    const st = stateOf(tc);
    if (st) addAttr(rid, ensureState(st), "target_state", `Cyber case field infrastructure.targetCountries lists "${tc}".`, { role: "target" });
  }
}
for (const o of orbitalReal) {
  const rid = `orbital:${o.id}`;
  for (const st of statesInActorField(o.actor)) {
    addAttr(rid, ensureState(st), "attributed_state", `Orbital incident field actor reads "${o.actor}".`, { role: "attributed", confidence: o.confidence, raw: `orbital actor "${o.actor}"` });
  }
}
for (const p of nuclearPlants) {
  const st = stateOf(p.country, { allowNew: true });
  addAttr(`nuclear:${p.id}`, ensureState(st), "host_state", `Nuclear plant field country reads "${p.country}".`, { role: "host" });
}
for (const c of lunarCountries) {
  const st = stateOf(c.name, { allowNew: true });
  addAttr(`lunar:country-${c.id}`, ensureState(st), "profiled_state", `Lunar country profile name reads "${c.name}".`, { role: "profiled", raw: `lunar country profile "${c.name}"` });
}

// ---------------------------------------------------------------------------
// Attribute edges: infrastructure categories
// ---------------------------------------------------------------------------

for (const c of cyberIncidents) {
  const rid = `cyber:${c.slug}`;
  if (c.infrastructure.targetSectors.includes("energy"))
    addAttr(rid, ensureSector("energy-power"), "infrastructure_category", 'Cyber case targetSectors includes "energy".');
  if (c.infrastructure.targetSectors.includes("telecommunications"))
    addAttr(rid, ensureSector("communications"), "infrastructure_category", 'Cyber case targetSectors includes "telecommunications".');
}
for (const o of orbitalReal) {
  const rid = `orbital:${o.id}`;
  const text = `${o.target ?? ""} ${o.subtype ?? ""}`;
  if (ORBITAL_COMMS_RE.test(text))
    addAttr(rid, ensureSector("communications"), "infrastructure_category", `Orbital incident target or subtype mentions a communications service ("${clip(o.target, 90)}").`);
  if (o.type === "spoofing" || ORBITAL_NAV_RE.test(text))
    addAttr(rid, ensureSector("navigation-timing"), "infrastructure_category", `Orbital incident type is "${o.type}" and the record concerns satellite navigation signals.`);
}
for (const p of nuclearPlants) {
  addAttr(`nuclear:${p.id}`, ensureSector("energy-power"), "infrastructure_category", "Nuclear atlas record is a commercial nuclear power plant.");
}
const LUNAR_SECTOR = { power: "energy-power", comms: "communications", nav: "navigation-timing" };
for (const l of lunarInfra) {
  const sid = LUNAR_SECTOR[l.infrastructure];
  if (sid) addAttr(`lunar:${l.id}`, ensureSector(sid), "infrastructure_category", `Lunar infrastructure link type is "${l.infrastructure}".`);
}

// ---------------------------------------------------------------------------
// Attribute edges: instruments referenced by records
// ---------------------------------------------------------------------------

// Cyber: legalFrameworks.ts rule -> case slugs
for (const fw of cyberLegal) {
  const inst = instrumentFor(fw.name, { sourceId: fw.id });
  for (const rule of fw.rules) {
    for (const cs of rule.cases) {
      const rid = `cyber:${cs.caseSlug}`;
      if (!nodes.has(rid)) continue;
      addAttr(rid, inst, "instrument_referenced", `Cyber legal framework table lists this case under ${fw.name}, ${rule.name}.`, {
        level: "record",
        detail: rule.name,
        via: `legalFrameworks:${rule.ruleId}`,
      });
    }
  }
}
// Cyber: norms.ts anchor instruments -> case slugs
for (const nm of cyberNorms) {
  for (const anchor of nm.anchorInstruments) {
    const inst = instrumentFor(anchor);
    for (const cs of nm.cases) {
      const rid = `cyber:${cs}`;
      if (!nodes.has(rid)) continue;
      addAttr(rid, inst, "instrument_referenced", `Cyber norms table lists this case under the norm "${nm.title}", anchored in ${anchor}.`, {
        level: "record",
        detail: anchor,
        via: `norms:${nm.normId}`,
      });
    }
  }
}
// Lunar discretion points -> documents
const lunarDocInstruments = new Map(); // normalised document title -> instrument
for (const d of lunarDPs) {
  const ids = d.documentId.split(" / ").map((s) => s.trim());
  const docs = d.document.split(/\s+\+\s+|\s+\/\s+/).map((s) => s.trim());
  ids.forEach((docId, i) => {
    const title = docs.length === ids.length ? docs[i] : d.document;
    const inst = instrumentFor(title, { sourceId: docId });
    if (!lunarDocInstruments.has(norm(title))) lunarDocInstruments.set(norm(title), inst);
    addAttr(`lunar:${d.id}`, inst, "instrument_referenced", `Lunar discretion point is located in ${title} (${docId}), ${d.section}.`, {
      level: "record",
      detail: `${d.section}: "${d.term}"`,
      via: `discretionPoints:${docId}`,
    });
  });
}
// Lunar country profiles -> their governance documents. A document is joined to
// a discretion-point document only on an exact title match or when one title
// contains the other and the match is unique; otherwise it is its own node.
const unmatchedLunarDocs = [];
for (const c of lunarCountries) {
  for (const doc of c.documents) {
    const n = norm(doc.title);
    let inst = lunarDocInstruments.get(n);
    let how = "exact title match";
    if (!inst) {
      const cands = [...lunarDocInstruments.entries()].filter(([k]) => k.includes(n) || n.includes(k));
      if (cands.length === 1) {
        inst = cands[0][1];
        how = "title containment match";
      }
    }
    if (!inst) {
      inst = instrumentFor(doc.title, { sourceId: doc.title.match(/^artemis accords$/i) ? "AA-2020" : undefined });
      how = "own document";
      unmatchedLunarDocs.push({ country: c.name, title: doc.title });
    }
    addAttr(`lunar:country-${c.id}`, inst, "instrument_referenced", `Lunar country profile lists the document "${doc.title}" (${how}).`, {
      level: "record",
      detail: doc.title,
      via: `countries:${doc.id}`,
    });
  }
}
// Lunar infrastructure links have an "example" field. When it names an
// instrument already in the graph by exact canonical label it is linked.
for (const l of lunarInfra) {
  for (const inst of instrumentNodes.values()) {
    if (inst.domains.includes("lunar") && new RegExp(`\\b${escapeRe(inst.label)}\\b`, "i").test(l.example)) {
      addAttr(`lunar:${l.id}`, inst, "instrument_referenced", `Lunar infrastructure link example names ${inst.label}: "${l.example}".`, {
        level: "record",
        detail: l.example,
        via: `infrastructure:${l.id}`,
      });
    }
  }
}

// ---------------------------------------------------------------------------
// State-level context (not record-level references)
// ---------------------------------------------------------------------------

// Nuclear: host-state treaty obligations (countryGovernance.js)
for (const [country, g] of Object.entries(nuclearCountryGov)) {
  const st = stateOf(country, { allowNew: true });
  for (const t of g.treaty_obligations ?? []) {
    const inst = instrumentFor(t);
    touch(inst, "nuclear");
    contextEdges.push({ state: `state:${st.id}`, instrument: inst.id, domain: "nuclear", status: "listed", basisText: `Nuclear atlas countryGovernance.treaty_obligations for ${country} lists ${t}.` });
  }
}
// Orbital: actor treaty matrix (legalFramework.js TREATY_COMPLIANCE_MATRIX)
const TREATY_LABELS = Object.fromEntries(orbitalLegal.TREATY_COLUMNS.map((c) => [c.key, c.label]));
const POSITIVE = new Set(["ratified", "signed", "adopted", "partially_adopted", "signatory", "compliant", "filings_pending"]);
for (const row of orbitalLegal.TREATY_COMPLIANCE_MATRIX) {
  const st = stateOf(row.actor);
  if (!st) continue; // non-state rows such as an operator are skipped
  for (const key of Object.keys(TREATY_LABELS)) {
    const inst = instrumentFor(TREATY_LABELS[key], { sourceId: key });
    touch(inst, "orbital");
    contextEdges.push({
      state: `state:${st.id}`,
      instrument: inst.id,
      domain: "orbital",
      status: row[key],
      positive: POSITIVE.has(row[key]),
      basisText: `Orbital treaty compliance matrix: ${row.actor}, ${TREATY_LABELS[key]} = ${row[key]}.`,
    });
  }
}
for (const ce of contextEdges) ensureState({ id: ce.state.slice(6), label: nodes.get(ce.state)?.label ?? ce.state.slice(6) });

// ---------------------------------------------------------------------------
// Cross-domain record links
// ---------------------------------------------------------------------------

// Link strength tiers.
//   direct: record-level evidence that the two records concern the same event
//           or the same named actor (same incident, same threat group).
//   contextual: the records share context only (an acting state, an energy
//           target and host state, or an instrument both cite). Shared context
//           is not evidence that the records are about the same thing.
const TIER_OF_BASIS = {
  same_incident: "direct",
  same_threat_group: "direct",
  same_attributed_state: "contextual",
  energy_target_host_state: "contextual",
  shared_instrument: "contextual",
};
const TIERS = {
  direct: "Record-level evidence: the same named incident or the same named threat group appears in both records.",
  contextual: "Shared context only: the records name the same acting state, pair an energy sector target with a host state, or cite the same instrument. Not evidence that they concern the same event.",
};

const BASIS = {
  same_incident: "Same named incident in two datasets",
  same_threat_group: "Same named threat group",
  same_attributed_state: "Same state named as actor",
  energy_target_host_state: "Energy-sector cyber target and nuclear host state are the same",
  shared_instrument: "Same instrument referenced at record level",
};

// L1 same incident: cyber name/shortName appears in orbital title, same year.
const sameIncidentPairs = [];
for (const c of cyberIncidents) {
  for (const o of orbitalReal) {
    const t = norm(o.title);
    const names = uniq([c.shortName, c.name.replace(/\s*\(.*\)\s*/, "")]).filter((n) => norm(n).split(" ").length >= 2 || norm(n).length >= 6);
    const hit = names.find((n) => new RegExp(`\\b${escapeRe(norm(n))}\\b`).test(t));
    if (hit && c.year === o.year) {
      const mal = (c.infrastructure.malwareFamilies ?? []).filter((m) => new RegExp(`\\b${escapeRe(m)}\\b`, "i").test(`${o.title} ${(o.tags ?? []).join(" ")} ${o.subtype}`));
      addLink(`cyber:${c.slug}`, `orbital:${o.id}`, "same_incident",
        `Cyber case "${c.name}" and orbital incident "${o.title}" share the name "${hit}" and the year ${c.year}.` +
          (mal.length ? ` The orbital record also names the malware ${mal.join(", ")}, listed in the cyber case malwareFamilies.` : ""),
        { via: "name" });
      sameIncidentPairs.push({ c, o });
    }
  }
}

// L2 same threat group: a cyber alias appears as a whole word in the orbital actor field.
for (const c of cyberIncidents) {
  for (const o of orbitalReal) {
    for (const alias of c.attribution.aliases ?? []) {
      if (alias.length < 4) continue;
      if (new RegExp(`\\b${escapeRe(alias)}\\b`, "i").test(o.actor)) {
        addLink(`cyber:${c.slug}`, `orbital:${o.id}`, "same_threat_group",
          `Orbital actor field "${o.actor}" names ${alias}, which is listed in the cyber case attribution aliases.`,
          { via: `alias:${slug(alias)}` });
      }
    }
  }
}

// L3 same attributed / profiled state across cyber, orbital and lunar country profiles.
const actorStateEdges = edges.filter((e) => e.kind === "attribute" && (e.basis === "attributed_state" || e.basis === "profiled_state"));
const byState = new Map();
for (const e of actorStateEdges) {
  if (!byState.has(e.target)) byState.set(e.target, []);
  byState.get(e.target).push(e);
}
for (const [stateId, list] of byState) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const a = list[i], b = list[j];
      const da = nodes.get(a.source).domain, db = nodes.get(b.source).domain;
      if (da === db) continue;
      const label = nodes.get(stateId).label;
      addLink(a.source, b.source, "same_attributed_state",
        `Both records name ${label} as the acting state (${a.raw}; ${b.raw}).`,
        { via: stateId });
    }
  }
}

// L4 cyber case targets energy in state X, nuclear plant hosted in X.
for (const c of cyberIncidents) {
  if (!c.infrastructure.targetSectors.includes("energy")) continue;
  for (const tc of c.infrastructure.targetCountries) {
    const st = stateOf(tc);
    if (!st) continue;
    for (const p of nuclearPlants) {
      if (stateOf(p.country)?.id !== st.id) continue;
      const flags = [];
      if (p.digital_i_and_c) flags.push("the nuclear atlas codes this plant with digital I&C");
      if (p.reported_cyber_incident) flags.push("the nuclear atlas records a reported cyber incident at this plant");
      flags.push(p.critical_infrastructure_overlap
        ? "the nuclear atlas sets critical_infrastructure_overlap = true for this host state"
        : "the nuclear atlas sets critical_infrastructure_overlap = false for this host state");
      addLink(`cyber:${c.slug}`, `nuclear:${p.id}`, "energy_target_host_state",
        `Cyber case targets the energy sector in ${st.label} (targetSectors, targetCountries); the plant is hosted in ${st.label}. Also: ${flags.join("; ")}.`,
        { via: `state:${st.id}`, digitalIandC: !!p.digital_i_and_c, plantStatus: p.status });
    }
  }
}

// L5 same instrument referenced at record level by two domains.
const instByRecord = new Map();
for (const e of edges) {
  if (e.basis !== "instrument_referenced") continue;
  if (!instByRecord.has(e.target)) instByRecord.set(e.target, []);
  instByRecord.get(e.target).push(e.source);
}
for (const [instId, recs] of instByRecord) {
  for (let i = 0; i < recs.length; i++)
    for (let j = i + 1; j < recs.length; j++) {
      if (nodes.get(recs[i]).domain === nodes.get(recs[j]).domain) continue;
      addLink(recs[i], recs[j], "shared_instrument", `Both records reference ${nodes.get(instId).label}.`, { via: instId });
    }
}

// Finalise link ids and push into edges.
const links = [...linkMap.values()].sort((a, b) => (a.source + a.target).localeCompare(b.source + b.target));
links.forEach((l, i) => {
  l.id = `l${i + 1}`;
  l.basis = l.bases.map((b) => b.basis).sort((x, y) => Object.keys(BASIS).indexOf(x) - Object.keys(BASIS).indexOf(y))[0];
  for (const b of l.bases) b.tier = TIER_OF_BASIS[b.basis];
  l.tier = l.bases.some((b) => b.tier === "direct") ? "direct" : "contextual";
  edges.push(l);
});

// Instrument nodes into graph
for (const inst of instrumentNodes.values()) addNode(inst);

// ---------------------------------------------------------------------------
// Dataset checks: cross-dataset discrepancies found while building. Reported,
// never corrected here.
// ---------------------------------------------------------------------------

const checks = [];
const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
for (const { c, o } of sameIncidentPairs) {
  const phaseDates = (c.escalation.phases ?? []).map((p) => p.date).filter(Boolean).sort();
  const firstMonth = MONTHS.findIndex((m) => c.dateRange.toLowerCase().startsWith(m));
  const oMonth = Number(o.date.slice(5, 7)) - 1;
  const dateAgrees = (firstMonth < 0 || firstMonth === oMonth) && (!phaseDates.length || phaseDates.includes(o.date) || phaseDates[0].startsWith(o.date.slice(0, 7)));
  const cStates = statesInActorField(c.attribution.country).map((s) => s.id).join(",");
  const oStates = statesInActorField(o.actor).map((s) => s.id).join(",");
  checks.push({
    id: `same-incident-${c.slug}`,
    severity: dateAgrees && cStates === oStates ? "info" : "warning",
    title: `${c.shortName}: cyber and orbital records compared`,
    detail:
      `Date: cyber dateRange "${c.dateRange}" (escalation phases ${phaseDates.join(", ") || "none"}) vs orbital date ${o.date}: ${dateAgrees ? "consistent" : "different"}. ` +
      `Acting state: cyber "${c.attribution.country}" vs orbital "${o.actor}": ${cStates === oStates ? "consistent" : "different"}. ` +
      `Sources: cyber cites ${c.sources.map((s) => s.title).join("; ")}. Orbital cites ${o.source}. No source is shared between the two records.`,
    records: [`cyber:${c.slug}`, `orbital:${o.id}`],
  });
}

// Nuclear overlay sets that name plant ids absent from commercialPlants.js.
{
  const src = fs.readFileSync(path.join(REPOS, SOURCES.nuclear.repo, "src/data/enrichedFacilities.js"), "utf8");
  const plantIds = new Set(nuclearPlants.map((p) => p.id));
  for (const setName of ["digitalICFacilities", "cyberIncidentFacilities"]) {
    const m = src.match(new RegExp(`const ${setName} = new Set\\(\\[([\\s\\S]*?)\\]\\)`));
    if (!m) continue;
    const ids = [...m[1].replace(/\/\/.*$/gm, "").matchAll(/'([^']+)'/g)].map((x) => x[1]);
    const missing = ids.filter((id) => !plantIds.has(id));
    if (missing.length)
      checks.push({
        id: `nuclear-${setName}-orphans`,
        severity: "warning",
        title: `Nuclear overlay ${setName} lists ids not present in commercialPlants.js`,
        detail: `${missing.length} of ${ids.length} ids do not match a plant record, so their flags never reach the map: ${missing.join(", ")}.`,
        records: [],
      });
  }
}

// Nuclear critical_infrastructure_overlap vs cyber target countries.
{
  const overlapTrue = new Set(nuclearPlants.filter((p) => p.critical_infrastructure_overlap).map((p) => p.country));
  const hostStates = new Set(nuclearPlants.map((p) => p.country));
  const cyberTargets = new Map();
  for (const c of cyberIncidents)
    for (const tc of c.infrastructure.targetCountries) {
      const st = stateOf(tc);
      if (!st) continue;
      if (!cyberTargets.has(st.label)) cyberTargets.set(st.label, []);
      cyberTargets.get(st.label).push(c.slug);
    }
  const notFlagged = [...hostStates].filter((h) => cyberTargets.has(stateOf(h)?.label) && !overlapTrue.has(h));
  const flaggedNoCase = [...overlapTrue].filter((h) => !cyberTargets.has(stateOf(h)?.label));
  if (notFlagged.length || flaggedNoCase.length)
    checks.push({
      id: "nuclear-overlap-vs-cyber-targets",
      severity: "warning",
      title: "Nuclear critical_infrastructure_overlap flag does not match cyber atlas target countries",
      detail:
        (notFlagged.length ? `Host states targeted in at least one cyber case but flagged false: ${notFlagged.map((h) => `${h} (${cyberTargets.get(stateOf(h).label).join(", ")})`).join("; ")}. ` : "") +
        (flaggedNoCase.length ? `Host states flagged true with no cyber case listing them as a target: ${flaggedNoCase.join(", ")}.` : ""),
      records: [],
    });
}

// Cyber: Tallinn rule numbering in norms.ts vs legalFrameworks.ts.
{
  const ruleNames = new Map();
  for (const fw of cyberLegal) for (const r of fw.rules) {
    const m = r.name.match(/^Rule (\d+), (.+)$/);
    if (m && fw.id === "tallinn") ruleNames.set(m[1], m[2]);
  }
  for (const nm of cyberNorms)
    for (const a of nm.anchorInstruments) {
      const m = a.match(/^Tallinn Manual 2\.0 Rule (\d+) \(([^)]+)\)/);
      if (m && ruleNames.has(m[1]) && norm(ruleNames.get(m[1])) !== norm(m[2]) && !norm(m[2]).includes(norm(ruleNames.get(m[1]))))
        checks.push({
          id: `cyber-tallinn-r${m[1]}-${nm.normId}`,
          severity: "warning",
          title: `Cyber atlas labels Tallinn Rule ${m[1]} two ways`,
          detail: `norms.ts (${nm.normId}) cites "${a}"; legalFrameworks.ts names Rule ${m[1]} "${ruleNames.get(m[1])}".`,
          records: [],
        });
    }
}

// Orbital: actor profile treaty status vs treaty compliance matrix.
{
  for (const row of orbitalLegal.TREATY_COMPLIANCE_MATRIX) {
    const prof = orbitalActors.find((a) => a.id === row.actorId);
    if (!prof || !stateOf(row.actor)) continue;
    const diffs = Object.keys(TREATY_LABELS).filter((k) => prof.treatyStatus?.[k] !== undefined && prof.treatyStatus[k] !== row[k]);
    if (diffs.length)
      checks.push({
        id: `orbital-treaty-${row.actorId}`,
        severity: "info",
        title: `Orbital treaty status for ${row.actor} differs between two tables`,
        detail: diffs.map((k) => `${k}: matrix "${row[k]}" vs actor profile "${prof.treatyStatus[k]}"`).join("; ") + ".",
        records: [],
      });
  }
}

// Orbital: actor profile recentBehaviour dates vs incident dates for named objects.
{
  for (const prof of orbitalActors) {
    for (const ev of prof.recentBehaviour ?? []) {
      for (const o of orbitalReal) {
        const objs = (o.title.match(/(Cosmos|Kosmos)[- ](\d{3,4})/gi) ?? []).map((s) => s.replace(/[- ]/, " ").toLowerCase().replace("kosmos", "cosmos"));
        const evObjs = (ev.event.match(/(Cosmos|Kosmos)[- ]?(\d{3,4})/gi) ?? []).map((s) => s.replace(/[- ]?(\d)/, " $1").toLowerCase().replace("kosmos", "cosmos"));
        const shared = objs.filter((x) => evObjs.includes(x));
        if (shared.length && o.date.slice(0, 7) !== ev.date && o.date.slice(0, 4) !== ev.date.slice(0, 4))
          checks.push({
            id: `orbital-date-${prof.id}-${o.id}`,
            severity: "warning",
            title: `Orbital dates differ for ${shared[0].replace("cosmos", "Cosmos")}`,
            detail: `Actor profile ${prof.name} dates "${clip(ev.event, 120)}" to ${ev.date}; incident ${o.id} "${o.title}" is dated ${o.date}.`,
            records: [`orbital:${o.id}`],
          });
      }
      if (/starlink/i.test(ev.event) && /jamm/i.test(ev.event)) {
        const o = orbitalReal.find((x) => /starlink/i.test(x.title));
        if (o && o.date.slice(0, 7) !== ev.date)
          checks.push({
            id: `orbital-date-${prof.id}-${o.id}`,
            severity: "info",
            title: "Orbital dates differ for Starlink jamming in Ukraine",
            detail: `Actor profile ${prof.name} dates "${clip(ev.event, 120)}" to ${ev.date}; incident ${o.id} "${o.title}" is dated ${o.date}.`,
            records: [`orbital:${o.id}`],
          });
      }
    }
  }
}

// Lunar: one documentId shown under different document titles.
{
  const byId = new Map();
  for (const d of lunarDPs) {
    const ids = d.documentId.split(" / ");
    const docs = d.document.split(/\s+\+\s+|\s+\/\s+/);
    ids.forEach((id, i) => {
      const t = docs.length === ids.length ? docs[i] : d.document;
      if (!byId.has(id)) byId.set(id, new Set());
      byId.get(id).add(t.trim());
    });
  }
  for (const [id, titles] of byId)
    if (titles.size > 1)
      checks.push({ id: `lunar-doc-${slug(id)}`, severity: "info", title: `Lunar document ${id} appears under ${titles.size} titles`, detail: [...titles].map((t) => `"${t}"`).join(" and ") + ". Treated as one instrument because the documentId is the same.", records: [] });
  if (unmatchedLunarDocs.length)
    checks.push({
      id: "lunar-country-docs-unmatched",
      severity: "info",
      title: "Lunar country profile documents with no matching discretion point document",
      detail: `These titles did not match a discretion point document by exact title or unique containment, so they are kept as separate instruments. Some may be the same document under another title: ${unmatchedLunarDocs.map((d) => `${d.country}: "${d.title}"`).join("; ")}.`,
      records: [],
    });
}

// Nuclear: NPT status in countryPolicies.js vs countryGovernance.js.
{
  const diffs = [];
  for (const p of nuclearPolicies) {
    const g = nuclearCountryGov[p.country];
    if (!g) continue;
    for (const k of ["npt_status", "tpnw_status", "additional_protocol"]) if (g[k] !== undefined && p[k] !== undefined && g[k] !== p[k]) diffs.push(`${p.country} ${k}: policies "${p[k]}" vs governance "${g[k]}"`);
  }
  if (diffs.length) checks.push({ id: "nuclear-treaty-tables", severity: "warning", title: "Nuclear treaty status differs between countryPolicies.js and countryGovernance.js", detail: diffs.join("; ") + ".", records: [] });
}

// ---------------------------------------------------------------------------
// Assemble snapshot
// ---------------------------------------------------------------------------

const recordNodes = [...nodes.values()].filter((n) => n.kind === "record");
const entityNodes = [...nodes.values()].filter((n) => n.kind === "entity");
for (const e of entityNodes) e.domains.sort();

const countBy = (arr, f) => arr.reduce((acc, x) => ((acc[f(x)] = (acc[f(x)] ?? 0) + 1), acc), {});
const linkEdges = edges.filter((e) => e.kind === "link");
const attrEdges = edges.filter((e) => e.kind === "attribute");
const linkBasisCounts = {};
for (const l of linkEdges) for (const b of uniq(l.bases.map((x) => x.basis))) linkBasisCounts[b] = (linkBasisCounts[b] ?? 0) + 1;
const domainPairCounts = countBy(linkEdges, (l) => l.domains.join("-"));
const tierCounts = { direct: 0, contextual: 0, ...countBy(linkEdges, (l) => l.tier) };
const tierByPair = {};
for (const l of linkEdges) {
  const k = l.domains.join("-");
  tierByPair[k] ??= { direct: 0, contextual: 0 };
  tierByPair[k][l.tier] += 1;
}

const snapshot = {
  schemaVersion: SCHEMA_VERSION,
  version: SNAPSHOT_VERSION,
  snapshotId: `faultline-crossdomain-${SNAPSHOT_VERSION}-${GENERATED}`,
  generated: GENERATED,
  generator: "scripts/build-crossdomain.mjs",
  description:
    "Cross-domain linkage snapshot for Faultline. Records come from four analyst-coded platform datasets. Links are derived only from fields present in those datasets, through the crosswalk tables included here.",
  sources: Object.fromEntries(
    Object.entries(sourceMeta).map(([k, m]) => [
      k,
      {
        name: m.name,
        url: m.url,
        repo: m.repo,
        commit: m.commit,
        commitDate: m.commitDate,
        dataClean: m.dataClean,
        files: m.files,
        records: recordNodes.filter((n) => n.domain === k).length,
        recordTypes: countBy(recordNodes.filter((n) => n.domain === k), (n) => n.type),
      },
    ]),
  ),
  counts: {
    records: recordNodes.length,
    entities: entityNodes.length,
    entitiesByType: countBy(entityNodes, (n) => n.type),
    nodes: recordNodes.length + entityNodes.length,
    attributeEdges: attrEdges.length,
    attributeEdgesByBasis: countBy(attrEdges, (e) => e.basis),
    links: linkEdges.length,
    linksByBasis: linkBasisCounts,
    linksByDomainPair: domainPairCounts,
    linksByTier: tierCounts,
    linksByTierAndDomainPair: tierByPair,
    illustrativeExcluded: orbitalIllustrative.length,
    orbitalIncidentsTotalInSource: orbitalAll.length,
    stateContextEdges: contextEdges.length,
  },
  tiers: TIERS,
  tierOfBasis: TIER_OF_BASIS,
  tierRule: "A link is direct when at least one of its bases is direct; otherwise it is contextual.",
  basisTypes: {
    ...BASIS,
    attributed_state: "Record names this state as the acting state",
    target_state: "Record names this state as a target",
    host_state: "Record is located in this state",
    profiled_state: "Record profiles this state",
    infrastructure_category: "Record falls in this shared infrastructure category (see crosswalk)",
    instrument_referenced: "Record references this instrument",
  },
  crosswalks: {
    states: STATES.map(([id, label, spellings]) => ({ id: `state:${id}`, label, spellings })),
    stateRule:
      "A field is linked to a state only when its value, with any parenthetical removed and split on '/', matches a listed spelling exactly. Values such as 'Unknown', 'Multiple', 'Global' or 'Central Europe' are not linked.",
    sectors: SECTORS,
    instruments: INSTRUMENTS.map((i) => ({ id: `instrument:${i.id}`, label: i.label, pattern: i.re.source, sourceIds: i.ids })),
    instrumentRule:
      "Instrument strings are mapped to a canonical instrument when they match a listed pattern or source id. Unmatched strings keep their own instrument node.",
  },
  nodes: [...recordNodes, ...entityNodes],
  edges,
  stateContext: contextEdges,
  illustrative: orbitalIllustrative.map((o) => ({
    id: `orbital:${o.id}`,
    domain: "orbital",
    label: o.title,
    date: o.date,
    note: "Fictional sample record in the Orbital Risk Tracker. Excluded from all links and real-world counts.",
    url: `${SOURCES.orbital.url}/#/incidents/${o.id}`,
  })),
  checks,
  limitations: [
    "All four source datasets are analyst-coded from public sources. Coding choices in those datasets carry into this layer.",
    "The datasets are not exhaustive. A missing link means no link can be derived from the coded fields, not that no relationship exists.",
    "State-level links (same acting state, energy target and host state) show co-occurrence in the data, not causation or coordination.",
    "Instrument references show which instruments each dataset associates with a record. A junction with no instrument referenced is a gap in the dataset, not a legal conclusion that no law applies.",
    "Free-text fields (summaries, policy responses) are not parsed for links, except the short keyword rules listed in the sector crosswalk.",
    "This layer describes recorded events. It makes no prediction.",
  ],
};

// The copy imported by the site is compact; the downloadable copy is indented
// for people reading it. Content is identical.
const json = JSON.stringify(snapshot, null, 1);
const outputs = [
  [path.join(ROOT, "src/data/crossdomain.json"), JSON.stringify(snapshot)],
  [path.join(ROOT, "public/data/crossdomain.json"), json],
];
for (const [out, text] of outputs) {
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, text + "\n");
}

console.log(`Snapshot ${snapshot.snapshotId}`);
console.log(JSON.stringify(snapshot.counts, null, 2));
console.log(`Records per source: ${Object.entries(snapshot.sources).map(([k, s]) => `${k}=${s.records}`).join(", ")}`);
console.log(`Checks: ${checks.length}`);
console.log(`Size: ${(json.length / 1024).toFixed(0)} KB`);
