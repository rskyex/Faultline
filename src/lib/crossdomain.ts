// Server-side shaping for the cross-domain snapshot.
// The snapshot itself is produced by scripts/build-crossdomain.mjs.

import snapshot from "@/data/crossdomain.json";
import type { Check, ContextEdge, CrossDomainData, Domain, EntityNode, Facet, LinkBasis, LinkEdge, RecordNode, AttrEdge, Tier } from "./crossdomainMeta";

export * from "./crossdomainMeta";

type RawNode = {
  id: string;
  kind: string;
  domain: string;
  type: string;
  label: string;
  date?: string | null;
  url?: string;
  urlPrecision?: string;
  summary?: string;
  fields?: Record<string, unknown>;
  domains?: string[];
};

const FACT_LABELS: Record<string, string> = {
  incidentType: "Operation type",
  attributionCountry: "Attribution (country field)",
  attributionConfidence: "Attribution confidence",
  aliases: "Group names",
  targetSectors: "Target sectors",
  targetCountries: "Target countries",
  actor: "Actor",
  type: "Type",
  subtype: "Subtype",
  target: "Target",
  orbit: "Orbit",
  confidence: "Confidence",
  severity: "Severity",
  country: "Country",
  status: "Status",
  reactorType: "Reactor type",
  digitalIandC: "Digital I&C (nuclear overlay)",
  reportedCyberIncident: "Reported cyber incident",
  criticalInfrastructureOverlap: "Critical infrastructure overlap flag",
  safeguardsStatus: "Safeguards",
  term: "Term",
  document: "Document",
  section: "Section",
  holder: "Interpretive holder",
  coalition: "Coalition",
  documents: "Documents",
  infrastructure: "Infrastructure type",
  controller: "Controller",
  example: "Example",
};
const SKIP_FACTS = new Set(["documentId"]);

function factValue(v: unknown): string | null {
  if (v === null || v === undefined || v === "") return null;
  if (Array.isArray(v)) return v.length ? v.join(", ") : null;
  if (typeof v === "boolean") return v ? "Yes" : "No";
  return String(v);
}

/** Shape the committed snapshot into the props the explorer needs. Runs on the server. */
export function getCrossDomainData(): CrossDomainData {
  const s = snapshot as unknown as {
    version: string;
    snapshotId: string;
    generated: string;
    nodes: RawNode[];
    edges: Record<string, unknown>[];
    stateContext: Record<string, unknown>[];
    facets: Facet[];
    checks: Check[];
  };

  const records: RecordNode[] = s.nodes
    .filter((n) => n.kind === "record")
    .map((n) => ({
      id: n.id,
      domain: n.domain as Domain,
      type: n.type,
      label: n.label,
      date: n.date ?? null,
      url: n.url ?? "",
      urlPrecision: (n.urlPrecision ?? "root") as RecordNode["urlPrecision"],
      summary: n.summary ?? "",
      facts: Object.entries(n.fields ?? {})
        .filter(([k]) => !SKIP_FACTS.has(k))
        .map(([k, v]) => [FACT_LABELS[k] ?? k, factValue(v)] as [string, string | null])
        .filter((f): f is [string, string] => f[1] !== null),
    }));

  const entities: EntityNode[] = s.nodes
    .filter((n) => n.kind === "entity")
    .map((n) => ({ id: n.id, type: n.type as EntityNode["type"], label: n.label, domains: (n.domains ?? []) as Domain[] }));

  const attrs: AttrEdge[] = s.edges
    .filter((e) => e.kind === "attribute")
    .map((e) => ({
      r: e.source as string,
      e: e.target as string,
      basis: e.basis as string,
      text: e.basisText as string,
      ...(e.detail ? { detail: e.detail as string } : {}),
      ...(e.role ? { role: e.role as string } : {}),
    }));

  const links: LinkEdge[] = s.edges
    .filter((e) => e.kind === "link")
    .map((e) => ({
      s: e.source as string,
      t: e.target as string,
      domains: e.domains as [Domain, Domain],
      tier: e.tier as Tier,
      bases: (e.bases as { basis: LinkBasis; basisText: string; via?: string; tier: Tier }[]).map((b) => ({ basis: b.basis, text: b.basisText, via: b.via, tier: b.tier })),
    }));

  const context: ContextEdge[] = s.stateContext.map((c) => ({
    state: c.state as string,
    instrument: c.instrument as string,
    domain: c.domain as Domain,
    status: c.status as string,
    ...(c.positive !== undefined ? { positive: c.positive as boolean } : {}),
    text: c.basisText as string,
  }));

  return { version: s.version, snapshotId: s.snapshotId, generated: s.generated, records, entities, attrs, links, context, facets: s.facets, checks: s.checks };
}

/** Full snapshot metadata for the methodology section (server only). */
export function getSnapshotMeta() {
  const s = snapshot as unknown as {
    version: string;
    snapshotId: string;
    generated: string;
    generator: string;
    sources: Record<
      Domain,
      {
        name: string;
        url: string;
        repo: string;
        commit: string | null;
        commitDate: string | null;
        dataClean: boolean | null;
        branch: string | null;
        deployedBranch: string | null;
        deployedBranchSource: string | null;
        onDeployedBranch: boolean | null;
        files: string[];
        records: number;
        recordTypes: Record<string, number>;
      }
    >;
    counts: {
      records: number;
      entities: number;
      entitiesByType: Record<string, number>;
      nodes: number;
      attributeEdges: number;
      attributeEdgesByBasis: Record<string, number>;
      links: number;
      linksByBasis: Record<string, number>;
      linksByDomainPair: Record<string, number>;
      linksByTier: Record<Tier, number>;
      linksByTierAndDomainPair: Record<string, Record<Tier, number>>;
      illustrativeExcluded: number;
      orbitalIncidentsTotalInSource: number;
      stateContextEdges: number;
      facets: number;
      facetsByType: Record<string, number>;
      actorsNotResolved: number;
    };
    facetRule: string;
    facets: Facet[];
    crosswalks: {
      states: { id: string; label: string; spellings: string[] }[];
      stateRule: string;
      sectors: { id: string; label: string; rules: { domain: string; field: string; match: string }[] }[];
      instruments: { id: string; label: string; pattern: string; sourceIds: string[] }[];
      instrumentRule: string;
    };
    illustrative: { id: string; label: string; date: string; note: string; url: string }[];
    checks: Check[];
    limitations: string[];
  };
  return s;
}
