import { BASIS_META, DOMAIN_META, DOMAINS, TIER_META, getSnapshotMeta, type LinkBasis } from "@/lib/crossdomain";

export default function CrossDomainCallout() {
  const meta = getSnapshotMeta();
  const c = meta.counts;
  const bases = Object.entries(c.linksByBasis).sort((a, b) => b[1] - a[1]) as [LinkBasis, number][];

  return (
    <section id="crossdomain" className="relative py-14 lg:py-20 overflow-hidden" aria-labelledby="xd-callout-title">
      <div className="absolute inset-0 bg-deep" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3 text-orbital-500">Cross-domain layer</p>
            <h2 id="xd-callout-title" className="wordmark text-3xl md:text-4xl text-text-primary leading-tight max-w-xl">
              The links, with their evidence
            </h2>
            <p className="mt-5 text-text-primary/70 text-sm max-w-xl leading-relaxed">
              The cross-domain layer reads the records of all four platforms and links them only where a coded field matches: the same named incident or the same threat group (direct links), or a shared acting state or an energy sector target in a state that hosts a nuclear plant (contextual links, which share context rather than evidence). Every link shows its basis and tier. You can follow a single incident across domains, see where junctions have no instrument referenced in the data, and download the snapshot.
            </p>
            <a
              href="/crossdomain"
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-orbital-500/10 border border-orbital-500/25 text-orbital-400 text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-orbital-500/15 hover:border-orbital-500/40 transition-all duration-300"
            >
              Open the cross-domain layer
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="lg:col-span-6">
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/6 border border-white/6">
              {DOMAINS.map((d) => (
                <div key={d} className="bg-surface p-4">
                  <dt className={`text-[10px] tracking-[0.16em] uppercase ${DOMAIN_META[d].textClass}`}>{DOMAIN_META[d].label}</dt>
                  <dd className="mt-1 font-mono-data text-lg text-text-primary">{meta.sources[d].records}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 bg-surface border border-white/6 p-4">
              <p className="text-[10px] tracking-[0.16em] uppercase text-text-secondary mb-3">
                {c.links} record links in snapshot v{meta.version} ({meta.generated}): {c.linksByTier.direct} direct, {c.linksByTier.contextual} contextual
              </p>
              <ul className="space-y-2">
                {bases.map(([b, n]) => (
                  <li key={b} className="flex items-center gap-3 text-[12.5px] text-text-primary/85">
                    <span className="inline-block w-3 h-[2px] shrink-0" style={{ backgroundColor: BASIS_META[b]?.color ?? "#8892a4" }} aria-hidden="true" />
                    <span className="flex-1">
                      {BASIS_META[b]?.label ?? b}{" "}
                      <span className="text-[10px] tracking-[0.12em] uppercase text-text-muted">{BASIS_META[b] ? TIER_META[BASIS_META[b].tier].label : ""}</span>
                    </span>
                    <span className="font-mono-data text-text-secondary">{n}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11.5px] text-text-secondary">
                {c.illustrativeExcluded} fictional orbital sample records are excluded from all links and counts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
