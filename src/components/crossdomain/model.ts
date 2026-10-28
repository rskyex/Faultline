import type { AttrEdge, ContextEdge, CrossDomainData, Domain, EntityNode, LinkEdge, RecordNode } from "@/lib/crossdomainMeta";

export type InstrumentRef = { id: string; label: string; details: string[] };
export type ContextRef = { id: string; label: string; status: string; state: string; text: string };
export type InstrumentView = { record: InstrumentRef[]; context: ContextRef[]; contextScope: string | null };

export type Index = {
  records: Map<string, RecordNode>;
  entities: Map<string, EntityNode>;
  linksByRecord: Map<string, LinkEdge[]>;
  attrsByRecord: Map<string, AttrEdge[]>;
  contextByState: Map<string, ContextEdge[]>;
};

export function buildIndex(data: CrossDomainData): Index {
  const records = new Map(data.records.map((r) => [r.id, r]));
  const entities = new Map(data.entities.map((e) => [e.id, e]));
  const linksByRecord = new Map<string, LinkEdge[]>();
  for (const l of data.links) {
    for (const id of [l.s, l.t]) {
      if (!linksByRecord.has(id)) linksByRecord.set(id, []);
      linksByRecord.get(id)!.push(l);
    }
  }
  const attrsByRecord = new Map<string, AttrEdge[]>();
  for (const a of data.attrs) {
    if (!attrsByRecord.has(a.r)) attrsByRecord.set(a.r, []);
    attrsByRecord.get(a.r)!.push(a);
  }
  const contextByState = new Map<string, ContextEdge[]>();
  for (const c of data.context) {
    if (!contextByState.has(c.state)) contextByState.set(c.state, []);
    contextByState.get(c.state)!.push(c);
  }
  return { records, entities, linksByRecord, attrsByRecord, contextByState };
}

export const otherEnd = (l: LinkEdge, id: string) => (l.s === id ? l.t : l.s);

/**
 * Instruments the source data associate with a record.
 * record: referenced by the record itself.
 * context: listed for the record's state in the same platform's own state-level
 * tables (nuclear host state treaty obligations, orbital actor treaty matrix).
 */
export function instrumentsFor(idx: Index, recordId: string): InstrumentView {
  const rec = idx.records.get(recordId);
  const attrs = idx.attrsByRecord.get(recordId) ?? [];
  const byId = new Map<string, InstrumentRef>();
  for (const a of attrs) {
    if (a.basis !== "instrument_referenced") continue;
    const ent = idx.entities.get(a.e);
    if (!ent) continue;
    if (!byId.has(a.e)) byId.set(a.e, { id: a.e, label: ent.label, details: [] });
    if (a.detail && !byId.get(a.e)!.details.includes(a.detail)) byId.get(a.e)!.details.push(a.detail);
  }
  const context: ContextRef[] = [];
  let contextScope: string | null = null;
  if (rec && (rec.domain === "nuclear" || rec.domain === "orbital")) {
    const basis = rec.domain === "nuclear" ? "host_state" : "attributed_state";
    contextScope = rec.domain === "nuclear" ? "Host state, nuclear atlas country table" : "Actor state, orbital treaty matrix";
    for (const a of attrs) {
      if (a.basis !== basis) continue;
      for (const c of idx.contextByState.get(a.e) ?? []) {
        if (c.domain !== rec.domain) continue;
        if (c.positive === false) continue;
        context.push({ id: c.instrument, label: idx.entities.get(c.instrument)?.label ?? c.instrument, status: c.status, state: idx.entities.get(a.e)?.label ?? a.e, text: c.text });
      }
    }
  }
  return { record: [...byId.values()], context, contextScope };
}

export type JunctionStatus = "shared" | "both-no-common" | "one-side-none" | "neither";

export const STATUS_META: Record<JunctionStatus, { label: string; tone: string }> = {
  shared: { label: "Instrument referenced on both sides", tone: "#34d399" },
  "both-no-common": { label: "Instruments on both sides, none in common", tone: "#facc15" },
  "one-side-none": { label: "One side: no instrument referenced in the dataset", tone: "#fb923c" },
  neither: { label: "Neither side: no instrument referenced in the dataset", tone: "#f87171" },
};

export function junctionStatus(a: InstrumentView, b: InstrumentView): { status: JunctionStatus; common: string[] } {
  const ids = (v: InstrumentView) => new Set([...v.record.map((r) => r.id), ...v.context.map((c) => c.id)]);
  const A = ids(a), B = ids(b);
  const common = [...A].filter((x) => B.has(x));
  if (common.length) return { status: "shared", common };
  if (A.size && B.size) return { status: "both-no-common", common };
  if (A.size || B.size) return { status: "one-side-none", common };
  return { status: "neither", common };
}

export const pairKey = (a: Domain, b: Domain) => [a, b].sort().join("-");

export const RECORD_TYPE_LABEL: Record<string, string> = {
  case: "Case",
  incident: "Incident",
  plant: "Power plant",
  "discretion-point": "Discretion point",
  "country-profile": "Country profile",
  "infrastructure-link": "Infrastructure link",
};
