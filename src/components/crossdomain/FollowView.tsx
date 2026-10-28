"use client";

import { useMemo, useState } from "react";
import { BASIS_META, DOMAIN_META, DOMAINS, LINK_BASES, TIER_META, type CrossDomainData, type LinkBasis, type LinkEdge, type RecordNode, type Tier } from "@/lib/crossdomainMeta";
import { instrumentsFor, otherEnd, RECORD_TYPE_LABEL, type Index } from "./model";

type Props = { data: CrossDomainData; idx: Index; selected: string; onSelect: (id: string) => void };

const GROUP_LIMIT = 6;

export function RecordLink({ rec, className = "" }: { rec: RecordNode; className?: string }) {
  const where = rec.urlPrecision === "record" ? "record page" : rec.urlPrecision === "page" ? "platform page, no per-record page" : "platform home, no per-record page";
  return (
    <a
      href={rec.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-[11px] tracking-[0.04em] text-text-secondary hover:text-text-primary underline underline-offset-2 decoration-white/20 ${className}`}
    >
      Open in {DOMAIN_META[rec.domain].platform} ({where})
      <svg width="10" height="10" viewBox="0 0 11 11" fill="none" aria-hidden="true">
        <path d="M4 1h6v6M10 1L4.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export function RecordSelect({ data, selected, onSelect, id }: { data: CrossDomainData; selected: string; onSelect: (id: string) => void; id: string }) {
  return (
    <select
      id={id}
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="w-full bg-elevated border border-white/10 text-text-primary text-[13px] px-3 py-2.5 focus:border-orbital-500/50"
    >
      {DOMAINS.map((d) => (
        <optgroup key={d} label={`${DOMAIN_META[d].label} (${DOMAIN_META[d].platform})`}>
          {data.records
            .filter((r) => r.domain === d)
            .map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
                {r.date ? ` (${r.date})` : ""}
              </option>
            ))}
        </optgroup>
      ))}
    </select>
  );
}

function primaryBasis(l: LinkEdge): LinkBasis {
  return LINK_BASES.find((b) => l.bases.some((x) => x.basis === b)) ?? l.bases[0].basis;
}

export default function FollowView({ data, idx, selected, onSelect }: Props) {
  const rec = idx.records.get(selected)!;
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const groups = useMemo(() => {
    const links = idx.linksByRecord.get(selected) ?? [];
    const build = (tier: Tier) => {
      const out: { domain: (typeof DOMAINS)[number]; bases: { basis: LinkBasis; links: LinkEdge[] }[]; total: number }[] = [];
      for (const d of DOMAINS) {
        if (d === rec.domain) continue;
        const inDomain = links.filter((l) => l.tier === tier && idx.records.get(otherEnd(l, selected))?.domain === d);
        const bases = LINK_BASES.map((b) => ({ basis: b, links: inDomain.filter((l) => primaryBasis(l) === b) })).filter((g) => g.links.length);
        out.push({ domain: d, bases, total: inDomain.length });
      }
      return out;
    };
    return { direct: build("direct"), contextual: build("contextual") };
  }, [idx, selected, rec.domain]);
  const tierTotals = {
    direct: groups.direct.reduce((n, g) => n + g.total, 0),
    contextual: groups.contextual.reduce((n, g) => n + g.total, 0),
  };

  const renderGroups = (tier: Tier) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {groups[tier].map((g) => (
        <section key={g.domain} className="bg-surface border border-white/6 p-4 min-w-0" aria-label={`${DOMAIN_META[g.domain].label}, ${TIER_META[tier].label.toLowerCase()} links`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: DOMAIN_META[g.domain].color }} aria-hidden="true" />
            <h4 className={`text-[11px] font-medium tracking-[0.18em] uppercase ${DOMAIN_META[g.domain].textClass} font-[family-name:var(--font-body)]`}>
              {DOMAIN_META[g.domain].label} ({g.total})
            </h4>
          </div>
          {g.total === 0 && (
            <p className="text-[12px] text-text-muted leading-relaxed">No {TIER_META[tier].label.toLowerCase()} link to this domain can be derived from the coded fields.</p>
          )}
          <div className="space-y-4">
            {g.bases.map((b) => {
              const key = `${tier}:${g.domain}:${b.basis}`;
              const open = expanded.has(key);
              const shown = open ? b.links : b.links.slice(0, GROUP_LIMIT);
              return (
                <div key={b.basis}>
                  <p className="flex items-center gap-2 text-[11px] text-text-primary/80 mb-2">
                    <span className="inline-block w-3 h-[2px]" style={{ backgroundColor: BASIS_META[b.basis].color }} aria-hidden="true" />
                    {BASIS_META[b.basis].label} <span className="font-mono-data text-text-secondary">({b.links.length})</span>
                  </p>
                  <ul className="space-y-2.5">
                    {shown.map((l) => {
                      const other = idx.records.get(otherEnd(l, selected))!;
                      return (
                        <li key={other.id} className="border-l border-white/10 pl-3">
                          <button type="button" onClick={() => onSelect(other.id)} className="text-left text-[13px] text-text-primary hover:text-orbital-400 leading-snug">
                            {other.label}
                            {other.date ? <span className="font-mono-data text-text-secondary"> {other.date}</span> : null}
                          </button>
                          {l.bases.map((x, i) => (
                            <p key={i} className="text-[11.5px] text-text-secondary leading-relaxed mt-1">
                              <span className="text-text-primary/70">
                                {BASIS_META[x.basis].short}
                                {tier === "direct" && x.tier === "contextual" ? " (contextual)" : ""}:
                              </span>{" "}
                              {x.text}
                            </p>
                          ))}
                          <RecordLink rec={other} className="mt-1" />
                        </li>
                      );
                    })}
                  </ul>
                  {b.links.length > GROUP_LIMIT && (
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => {
                        const next = new Set(expanded);
                        if (open) next.delete(key);
                        else next.add(key);
                        setExpanded(next);
                      }}
                      className="mt-2 text-[11px] text-orbital-400 hover:text-text-primary underline underline-offset-2"
                    >
                      {open ? "Show fewer" : `Show all ${b.links.length}`}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );

  const attrs = idx.attrsByRecord.get(selected) ?? [];
  const states = attrs.filter((a) => ["attributed_state", "target_state", "host_state", "profiled_state"].includes(a.basis));
  const sectors = attrs.filter((a) => a.basis === "infrastructure_category");
  const inst = instrumentsFor(idx, selected);
  const checks = data.checks.filter((c) => c.records.includes(selected));

  const roleLabel: Record<string, string> = { attributed: "named as actor", target: "named as target", host: "host state", profiled: "profiled state" };

  return (
    <div className="space-y-8">
      <div className="max-w-xl">
        <label htmlFor="xd-follow-select" className="block text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-2">
          Pick a record
        </label>
        <RecordSelect id="xd-follow-select" data={data} selected={selected} onSelect={onSelect} />
      </div>

      {/* Record card */}
      <article className="bg-elevated border border-white/6 p-5 lg:p-6" aria-labelledby="xd-follow-title">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: DOMAIN_META[rec.domain].color }} aria-hidden="true" />
          <p className={`text-[10px] font-medium tracking-[0.2em] uppercase ${DOMAIN_META[rec.domain].textClass}`}>
            {DOMAIN_META[rec.domain].label} &middot; {RECORD_TYPE_LABEL[rec.type] ?? rec.type}
          </p>
          <span className="font-mono-data text-text-muted text-[11px] ml-auto">{rec.id}</span>
        </div>
        <h3 id="xd-follow-title" className="text-lg md:text-xl font-semibold text-text-primary leading-snug font-[family-name:var(--font-body)]">
          {rec.label}
        </h3>
        {rec.date && <p className="font-mono-data text-text-secondary mt-1">{rec.date}</p>}
        <p className="text-[13px] text-text-secondary leading-[1.7] mt-3 max-w-3xl">{rec.summary}</p>
        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[12px]">
          {rec.facts.map(([k, v]) => (
            <div key={k} className="min-w-0">
              <dt className="text-text-muted text-[10px] tracking-[0.12em] uppercase">{k}</dt>
              <dd className="text-text-primary/85 break-words">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4">
          <RecordLink rec={rec} />
        </div>
      </article>

      {/* Connections: direct first, contextual collapsed */}
      <div>
        <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-1 font-[family-name:var(--font-body)]">
          Direct links ({tierTotals.direct})
        </h3>
        <p className="text-[12px] text-text-secondary mb-4 max-w-3xl">{TIER_META.direct.explain}</p>
        {tierTotals.direct === 0 ? (
          <p className="bg-surface border border-white/6 p-4 text-[12.5px] text-text-secondary leading-relaxed">
            No direct link. No other dataset names this record&apos;s incident or threat group.
          </p>
        ) : (
          renderGroups("direct")
        )}

        <details className="mt-6 bg-surface/40 border border-white/6">
          <summary className="cursor-pointer p-4 text-[12.5px] text-text-primary hover:text-orbital-400">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase">Contextual links ({tierTotals.contextual})</span>
            <span className="block text-text-secondary mt-1 normal-case">
              These records share context with this one (an acting state, or an energy target and host state). They are not evidence about the same event.
            </span>
          </summary>
          <div className="p-4 pt-0">
            {tierTotals.contextual === 0 ? (
              <p className="text-[12.5px] text-text-secondary">No contextual link.</p>
            ) : (
              renderGroups("contextual")
            )}
          </div>
        </details>
      </div>

      {/* Shared entities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <section className="bg-surface border border-white/6 p-4" aria-label="States in this record">
          <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-text-secondary mb-3 font-[family-name:var(--font-body)]">States</h4>
          {states.length ? (
            <ul className="space-y-1.5 text-[12.5px]">
              {states.map((a) => (
                <li key={a.e + a.basis} title={a.text}>
                  <span className="text-text-primary">{idx.entities.get(a.e)?.label}</span>{" "}
                  <span className="text-text-secondary">({roleLabel[a.role ?? ""] ?? a.basis})</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[12px] text-text-muted">No state field that matches the state crosswalk.</p>
          )}
        </section>
        <section className="bg-surface border border-white/6 p-4" aria-label="Infrastructure categories">
          <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-text-secondary mb-3 font-[family-name:var(--font-body)]">Shared infrastructure categories</h4>
          {sectors.length ? (
            <ul className="space-y-2 text-[12.5px]">
              {sectors.map((a) => {
                const ent = idx.entities.get(a.e)!;
                return (
                  <li key={a.e}>
                    <span className="text-text-primary">{ent.label}</span>
                    <span className="text-text-secondary"> (also used by {ent.domains.filter((d) => d !== rec.domain).map((d) => DOMAIN_META[d].label).join(", ") || "no other domain"})</span>
                    <p className="text-[11.5px] text-text-secondary">{a.text}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-[12px] text-text-muted">None in the sector crosswalk.</p>
          )}
        </section>
        <section className="bg-surface border border-white/6 p-4" aria-label="Instruments referenced">
          <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-text-secondary mb-3 font-[family-name:var(--font-body)]">Instruments referenced</h4>
          {inst.record.length ? (
            <ul className="space-y-2 text-[12.5px]">
              {inst.record.map((i) => (
                <li key={i.id}>
                  <span className="text-text-primary">{i.label}</span>
                  {i.details.length > 0 && <p className="text-[11.5px] text-text-secondary">{i.details.join("; ")}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[12px] text-cyber-400/90">No instrument referenced in the dataset for this record.</p>
          )}
          {inst.context.length > 0 && (
            <div className="mt-3 pt-3 border-t border-white/6">
              <p className="text-[10px] tracking-[0.12em] uppercase text-text-muted mb-1.5">State level context: {inst.contextScope}</p>
              <p className="text-[12px] text-text-secondary leading-relaxed">
                {inst.context.map((c) => `${c.label} (${c.state}: ${c.status.replace(/_/g, " ")})`).join("; ")}
              </p>
            </div>
          )}
        </section>
      </div>

      {checks.length > 0 && (
        <section className="border border-cyber-500/20 bg-cyber-500/5 p-4" aria-label="Dataset checks for this record">
          <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-cyber-400 mb-2 font-[family-name:var(--font-body)]">Dataset check</h4>
          {checks.map((c) => (
            <div key={c.id} className="text-[12.5px] leading-relaxed">
              <p className="text-text-primary">{c.title}</p>
              <p className="text-text-secondary">{c.detail}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
