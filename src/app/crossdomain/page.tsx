import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrossDomainExplorer from "@/components/crossdomain/CrossDomainExplorer";
import { BASIS_META, DOMAIN_META, DOMAINS, LINK_BASES, TIER_META, TIERS, getCrossDomainData, getSnapshotMeta, type Domain } from "@/lib/crossdomain";

export const metadata: Metadata = {
  title: "Cross-Domain Layer · Faultline",
  description:
    "Links between records in the cyber, orbital, nuclear and lunar governance datasets, each with the field it comes from. Includes a record follower, a governance gap view, the method, and the data snapshot.",
};

const BASIS_RULES: Record<string, string> = {
  same_incident:
    "Cyber case and orbital incident. The cyber case name or short name appears as whole words in the orbital incident title, and both records give the same year. Matching malware names in the orbital title or tags are noted when present.",
  same_threat_group:
    "Cyber case and orbital incident. A group name listed in the cyber case attribution aliases (four characters or longer) appears as a whole word in the orbital incident actor field.",
  same_attributed_state:
    "Any two of: cyber case attribution.country, orbital incident actor, lunar country profile name. Both resolve to the same state through the state crosswalk. Parentheticals are removed first, so an orbital actor of “Russia (GRU Sandworm)” resolves to Russia, while “Unknown (attributed: China)” resolves to nothing.",
  energy_target_host_state:
    "Cyber case and nuclear plant. The cyber case lists energy in targetSectors and lists the plant’s host country in targetCountries. The nuclear atlas digital I&C and critical infrastructure overlap flags for the plant are reported in the basis text but do not create links on their own.",
  shared_instrument:
    "Two records in different domains reference the same canonical instrument at record level. The current data produce no such pair: cyber records reference cyber law and norms, lunar records reference space law documents, and orbital incident and nuclear plant records reference no instrument directly.",
};

function fmt(n: number) {
  return n.toLocaleString("en-GB");
}

export default function CrossDomainPage() {
  const data = getCrossDomainData();
  const meta = getSnapshotMeta();
  const c = meta.counts;
  const downloadName = `${meta.snapshotId}.json`;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="pt-14">
        {/* Header */}
        <section className="relative py-14 lg:py-20 overflow-hidden" aria-labelledby="xd-title">
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(56,189,248,0.04) 0%, transparent 70%)" }} />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <a href="/" className="inline-flex items-center gap-2 text-text-secondary text-[11px] tracking-[0.08em] hover:text-text-primary transition-colors mb-6">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M8 2L3 6l5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Faultline
            </a>
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-orbital-500 mb-3">Cross-domain layer</p>
            <h1 id="xd-title" className="wordmark text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight max-w-3xl">
              Where the four datasets meet
            </h1>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-16 h-px bg-orbital-500/40" />
              <div className="w-2 h-px bg-nuclear-500/40" />
              <div className="w-2 h-px bg-space-500/40" />
              <div className="w-2 h-px bg-cyber-500/40" />
            </div>
            <p className="mt-5 text-sm md:text-base leading-[1.75] text-text-secondary max-w-3xl">
              This page reads the records of the four Faultline platforms side by side and shows where they connect. Every link comes from a field that already exists in the source data, and every link states its basis. Nothing here is added by hand.
            </p>

            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/6 border border-white/6 max-w-4xl">
              {DOMAINS.map((d: Domain) => (
                <div key={d} className="bg-surface p-4">
                  <dt className={`text-[10px] tracking-[0.18em] uppercase ${DOMAIN_META[d].textClass}`}>{DOMAIN_META[d].label}</dt>
                  <dd className="mt-1">
                    <span className="font-mono-data text-xl text-text-primary">{meta.sources[d].records}</span>
                    <span className="block text-[11px] text-text-secondary mt-0.5">records</span>
                  </dd>
                </div>
              ))}
              <div className="bg-surface p-4">
                <dt className="text-[10px] tracking-[0.18em] uppercase text-orbital-400">Direct links</dt>
                <dd className="mt-1">
                  <span className="font-mono-data text-xl text-text-primary">{fmt(c.linksByTier.direct)}</span>
                  <span className="block text-[11px] text-text-secondary mt-0.5">same incident or threat group</span>
                </dd>
              </div>
              <div className="bg-surface p-4">
                <dt className="text-[10px] tracking-[0.18em] uppercase text-text-secondary">Contextual links</dt>
                <dd className="mt-1">
                  <span className="font-mono-data text-xl text-text-primary">{fmt(c.linksByTier.contextual)}</span>
                  <span className="block text-[11px] text-text-secondary mt-0.5">shared context only</span>
                </dd>
              </div>
              <div className="bg-surface p-4">
                <dt className="text-[10px] tracking-[0.18em] uppercase text-text-secondary">Snapshot</dt>
                <dd className="mt-1 font-mono-data text-sm text-text-primary">
                  v{meta.version}, {meta.generated}
                </dd>
              </div>
              <div className="bg-surface p-4">
                <dt className="text-[10px] tracking-[0.18em] uppercase text-text-secondary">Fictional records excluded</dt>
                <dd className="mt-1 font-mono-data text-xl text-text-primary">{c.illustrativeExcluded}</dd>
              </div>
            </dl>

            <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2">
              {[
                ["#map", "Connection map"],
                ["#follow", "Follow an incident"],
                ["#gaps", "Governance gaps"],
                ["#method", "Method and limits"],
                ["#download", "Download"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="px-3 py-1.5 border border-white/10 text-[11px] font-medium tracking-[0.06em] uppercase text-text-secondary hover:text-text-primary hover:border-white/20 transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <CrossDomainExplorer data={data} />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="h-px bg-white/6" />
        </div>

        {/* Methodology */}
        <section className="relative py-12 lg:py-16" aria-labelledby="method">
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-2 text-orbital-500">Method</p>
            <h2 id="method" className="wordmark text-2xl md:text-3xl text-text-primary leading-tight scroll-mt-20 mb-6">
              How links are derived, and what they do not show
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-6 text-[13.5px] leading-[1.75] text-text-primary/80">
                <p>
                  A build script (<code className="font-mono-data text-text-primary">{meta.generator}</code>) reads the data files of the four platform repositories, without changing them, and writes the snapshot used on this page. Snapshot{" "}
                  <span className="font-mono-data text-text-primary">{meta.snapshotId}</span> was generated on {meta.generated}. The site does not recompute anything at runtime.
                </p>
                <p>
                  Each record keeps a stable id made of its platform and its id in that platform (for example <code className="font-mono-data text-text-primary">cyber:viasat-kasat</code> or{" "}
                  <code className="font-mono-data text-text-primary">orbital:21</code>). Records also connect to shared entities: states, infrastructure categories and instruments. Values from different platforms are compared only through the three crosswalk tables listed below, which are published inside the snapshot.
                </p>

                <div>
                  <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-3 font-[family-name:var(--font-body)]">Link strength tiers</h3>
                  <ul className="space-y-2 text-[13px]">
                    {TIERS.map((t) => (
                      <li key={t}>
                        <span className="text-text-primary font-medium">
                          {TIER_META[t].label} <span className="font-mono-data text-text-secondary">({fmt(c.linksByTier[t])} links)</span>
                        </span>
                        <span className="text-text-secondary">: {TIER_META[t].explain}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[13px] text-text-secondary mt-2">
                    A link is direct when at least one of its bases is direct; otherwise it is contextual. Contextual links are hidden by default on this page. They are kept because shared actors and shared exposure are part of the cross-domain picture, but they say only that two records sit in the same context. For example, a cyber case that targeted the French energy sector is contextually linked to every French nuclear plant in the atlas; the data do not say any of those plants was affected.
                  </p>
                </div>

                <div>
                  <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-3 font-[family-name:var(--font-body)]">Link rules</h3>
                  <ul className="space-y-4">
                    {LINK_BASES.map((b) => (
                      <li key={b} className="border-l-2 pl-4" style={{ borderColor: BASIS_META[b].color }}>
                        <p className="text-text-primary font-medium">
                          {BASIS_META[b].label} <span className="font-mono-data text-text-secondary">({c.linksByBasis[b] ?? 0} links)</span>{" "}
                          <span className="text-[10px] tracking-[0.12em] uppercase text-text-muted">{TIER_META[BASIS_META[b].tier].label}</span>
                        </p>
                        <p className="text-text-secondary text-[13px]">{BASIS_RULES[b]}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[12.5px] text-text-secondary mt-3">One pair of records can have more than one basis, so the counts above add up to more than the {fmt(c.links)} links.</p>
                </div>

                <div>
                  <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-3 font-[family-name:var(--font-body)]">Instrument references</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-[13px]">
                    <li>Cyber: the legal framework table (rule to case lists) and the norms table (anchor instruments to case lists).</li>
                    <li>Lunar: the document behind each discretion point, and the documents listed in each country profile.</li>
                    <li>Orbital: incident records name no instrument. The treaty compliance matrix gives state level context for the acting state.</li>
                    <li>Nuclear: plant records name no instrument. The country governance table gives host state treaty obligations as state level context.</li>
                  </ul>
                  <p className="text-[13px] text-text-secondary mt-2">
                    State level context is shown separately from record level references and is never presented as a record level citation.
                  </p>
                </div>

                <div>
                  <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-3 font-[family-name:var(--font-body)]">Limitations</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-[13px]">
                    {meta.limitations.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-elevated border border-white/6 p-5">
                  <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-3 font-[family-name:var(--font-body)]">Sources in this snapshot</h3>
                  <ul className="space-y-3 text-[12.5px]">
                    {DOMAINS.map((d) => {
                      const s = meta.sources[d];
                      return (
                        <li key={d}>
                          <p className={DOMAIN_META[d].textClass}>
                            {s.name} <span className="font-mono-data text-text-secondary">({s.records} records)</span>
                          </p>
                          <p className="text-text-secondary">
                            {Object.entries(s.recordTypes)
                              .map(([t, n]) => `${n} ${t.replace(/-/g, " ")}`)
                              .join(", ")}
                          </p>
                          <p className="font-mono-data text-[11px] text-text-muted break-all">
                            {s.repo} @ {s.commit ? s.commit.slice(0, 7) : "unknown"} ({s.commitDate})
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="text-[12px] text-text-secondary mt-4 leading-relaxed">
                    The Orbital Risk Tracker holds {c.orbitalIncidentsTotalInSource} incident records. {c.illustrativeExcluded} of them are fictional samples titled ILLUSTRATIVE and are excluded from all links and counts:
                  </p>
                  <ul className="mt-1 space-y-0.5 text-[11.5px] text-text-muted">
                    {meta.illustrative.map((i) => (
                      <li key={i.id}>
                        <span className="font-mono-data">{i.id}</span> {i.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <details className="bg-surface border border-white/6 p-5 group">
                  <summary className="cursor-pointer text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary hover:text-text-primary">Crosswalk tables</summary>
                  <div className="mt-4 space-y-4 text-[12px] text-text-secondary leading-relaxed">
                    <div>
                      <p className="text-text-primary mb-1">States</p>
                      <p>{meta.crosswalks.stateRule}</p>
                      <p className="mt-1 text-text-muted">{meta.crosswalks.states.map((s) => `${s.label} [${s.spellings.join(", ")}]`).join("; ")}</p>
                    </div>
                    <div>
                      <p className="text-text-primary mb-1">Infrastructure categories</p>
                      <ul className="space-y-1.5">
                        {meta.crosswalks.sectors.map((s) => (
                          <li key={s.id}>
                            <span className="text-text-primary/85">{s.label}:</span> {s.rules.map((r) => `${r.domain} ${r.field} (${r.match})`).join("; ")}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-text-primary mb-1">Instruments</p>
                      <p>{meta.crosswalks.instrumentRule}</p>
                      <p className="mt-1 text-text-muted">{meta.crosswalks.instruments.map((i) => i.label).join("; ")}</p>
                    </div>
                  </div>
                </details>

                <div className="bg-surface border border-white/6 p-5">
                  <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-3 font-[family-name:var(--font-body)]">
                    Dataset checks ({meta.checks.length})
                  </h3>
                  <p className="text-[12px] text-text-secondary mb-3 leading-relaxed">
                    Differences between or within the source datasets, found while building the snapshot. They are reported here and left for the platform maintainers to resolve.
                  </p>
                  <ul className="space-y-3 text-[12px] leading-relaxed">
                    {meta.checks.map((ch) => (
                      <li key={ch.id}>
                        <p className="text-text-primary/90">
                          <span className={ch.severity === "warning" ? "text-cyber-400" : "text-orbital-400"}>{ch.severity === "warning" ? "Mismatch" : "Note"}:</span> {ch.title}
                        </p>
                        <p className="text-text-secondary">{ch.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="h-px bg-white/6" />
        </div>

        {/* Download */}
        <section className="relative py-12 lg:py-16" aria-labelledby="download">
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-2 text-orbital-500">Data</p>
            <h2 id="download" className="wordmark text-2xl md:text-3xl text-text-primary leading-tight scroll-mt-20 mb-4">
              Download the snapshot
            </h2>
            <p className="text-[13.5px] text-text-primary/75 leading-relaxed max-w-3xl mb-5">
              One JSON file with every record, shared entity, link and basis shown on this page, plus the crosswalk tables, source commits, dataset checks and the excluded fictional records. It holds {fmt(c.nodes)} nodes ({fmt(c.records)} records and {fmt(c.entities)} shared entities), {fmt(c.attributeEdges)} record to entity edges and {fmt(c.links)} record links ({fmt(c.linksByTier.direct)} direct, {fmt(c.linksByTier.contextual)} contextual). Each link carries a <code className="font-mono-data text-text-primary">tier</code> field.
            </p>
            <a
              href="/data/crossdomain.json"
              download={downloadName}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-orbital-500/10 border border-orbital-500/25 text-orbital-400 text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-orbital-500/15 hover:border-orbital-500/40 transition-all duration-300"
            >
              Download JSON
              <span className="font-mono-data normal-case text-text-secondary">{downloadName}</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
