// Client-safe types and constants for the cross-domain layer (no data import).

export type Domain = "cyber" | "orbital" | "nuclear" | "lunar";
export const DOMAINS: Domain[] = ["cyber", "orbital", "lunar", "nuclear"];

export const DOMAIN_META: Record<Domain, { label: string; platform: string; color: string; textClass: string }> = {
  cyber: { label: "Cyber", platform: "Cyber Escalation Atlas", color: "#f59e0b", textClass: "text-cyber-400" },
  orbital: { label: "Orbital", platform: "Orbital Risk Tracker", color: "#38bdf8", textClass: "text-orbital-400" },
  lunar: { label: "Lunar governance", platform: "Lunar Governance Authority Tracker", color: "#a78bfa", textClass: "text-space-400" },
  nuclear: { label: "Nuclear", platform: "Global Nuclear Infrastructure Atlas", color: "#2dd4bf", textClass: "text-nuclear-400" },
};

export const LINK_BASES = [
  "same_incident",
  "same_threat_group",
  "same_attributed_state",
  "energy_target_host_state",
  "shared_instrument",
] as const;
export type LinkBasis = (typeof LINK_BASES)[number];

export type Tier = "direct" | "contextual";
export const TIERS: Tier[] = ["direct", "contextual"];

export const TIER_META: Record<Tier, { label: string; explain: string }> = {
  direct: {
    label: "Direct",
    explain: "Record-level evidence: the same named incident or the same named threat group appears in both records.",
  },
  contextual: {
    label: "Contextual",
    explain: "Shared context, not evidence: the records name the same acting state, pair an energy sector target with the state that hosts a plant, or cite the same instrument.",
  },
};

export const BASIS_META: Record<LinkBasis, { label: string; short: string; color: string; tier: Tier }> = {
  same_incident: { label: "Same named incident in two datasets", short: "Same incident", color: "#f472b6", tier: "direct" },
  same_threat_group: { label: "Same named threat group", short: "Same threat group", color: "#fb923c", tier: "direct" },
  same_attributed_state: { label: "Same state named as actor", short: "Same acting state", color: "#94a3b8", tier: "contextual" },
  energy_target_host_state: { label: "Energy sector target in a state that hosts the plant", short: "Energy target, host state", color: "#34d399", tier: "contextual" },
  shared_instrument: { label: "Same instrument referenced by both records", short: "Shared instrument", color: "#facc15", tier: "contextual" },
};

export type RecordNode = {
  id: string;
  domain: Domain;
  type: string;
  label: string;
  date: string | null;
  url: string;
  urlPrecision: "record" | "page" | "root";
  summary: string;
  facts: [string, string][];
};

export type EntityNode = {
  id: string;
  type: "state" | "sector" | "instrument";
  label: string;
  domains: Domain[];
};

export type AttrEdge = {
  r: string;
  e: string;
  basis: string;
  text: string;
  detail?: string;
  role?: string;
};

export type LinkEdge = {
  s: string;
  t: string;
  domains: [Domain, Domain];
  tier: Tier;
  bases: { basis: LinkBasis; text: string; via?: string; tier: Tier }[];
};

export type ContextEdge = {
  state: string;
  instrument: string;
  domain: Domain;
  status: string;
  positive?: boolean;
  text: string;
};

export type Check = { id: string; severity: string; title: string; detail: string; records: string[] };

export type CrossDomainData = {
  version: string;
  snapshotId: string;
  generated: string;
  records: RecordNode[];
  entities: EntityNode[];
  attrs: AttrEdge[];
  links: LinkEdge[];
  context: ContextEdge[];
  checks: Check[];
};

