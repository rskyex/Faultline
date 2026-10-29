// Client-safe types and constants for the cross-domain layer (no data import).

export type Domain = "cyber" | "orbital" | "nuclear" | "lunar";
export const DOMAINS: Domain[] = ["cyber", "orbital", "lunar", "nuclear"];

export const DOMAIN_META: Record<Domain, { label: string; platform: string; color: string; textClass: string }> = {
  cyber: { label: "Cyber", platform: "Cyber Escalation Atlas", color: "#f59e0b", textClass: "text-cyber-400" },
  orbital: { label: "Orbital", platform: "Orbital Risk Tracker", color: "#38bdf8", textClass: "text-orbital-400" },
  lunar: { label: "Lunar governance", platform: "Lunar Governance Tracker", color: "#a78bfa", textClass: "text-space-400" },
  nuclear: { label: "Nuclear", platform: "Global Nuclear Infrastructure Atlas", color: "#2dd4bf", textClass: "text-nuclear-400" },
};

export const LINK_BASES = ["same_event", "same_intrusion_set"] as const;
export type LinkBasis = (typeof LINK_BASES)[number];

export type Tier = "same-event" | "same-intrusion-set";
export const TIERS: Tier[] = ["same-event", "same-intrusion-set"];

export const TIER_META: Record<Tier, { label: string; explain: string }> = {
  "same-event": {
    label: "Same event",
    explain: "One incident recorded in two datasets: same name and year, a cited source naming both, or the same named target in the same year.",
  },
  "same-intrusion-set": {
    label: "Same intrusion set",
    explain: "Both records list the same MITRE ATT&CK group. They can be different operations by that group.",
  },
};

export const BASIS_META: Record<LinkBasis, { label: string; short: string; color: string; tier: Tier }> = {
  same_event: { label: "Same incident recorded in two datasets", short: "Same event", color: "#f472b6", tier: "same-event" },
  same_intrusion_set: { label: "Same intrusion set named in both records", short: "Same intrusion set", color: "#fb923c", tier: "same-intrusion-set" },
};

/** Role of a record towards a shared state or infrastructure category. */
export type FacetRole = "actor" | "target" | "host" | "profiled" | "category";
export const ROLE_META: Record<FacetRole, { one: string; many: string }> = {
  actor: { one: "record names it as the actor", many: "records name it as the actor" },
  target: { one: "record lists it as a target country", many: "records list it as a target country" },
  host: { one: "plant is hosted there", many: "plants are hosted there" },
  profiled: { one: "country profile: state profiled in lunar data", many: "country profiles: state profiled in lunar data" },
  category: { one: "record in this category", many: "records in this category" },
};

export type Facet = {
  entity: string;
  type: "state" | "sector";
  label: string;
  domains: Domain[];
  byDomain: Partial<Record<Domain, Partial<Record<FacetRole, string[]>>>>;
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
  facets: Facet[];
  checks: Check[];
};

