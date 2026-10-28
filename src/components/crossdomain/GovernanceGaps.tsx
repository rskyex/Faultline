"use client";

import { useMemo, useState } from "react";
import { BASIS_META, DOMAIN_META, DOMAINS, TIER_META, type CrossDomainData, type Domain } from "@/lib/crossdomainMeta";
import { instrumentsFor, junctionStatus, pairKey, STATUS_META, type Index, type InstrumentView, type JunctionStatus } from "./model";

type Props = {
  data: CrossDomainData;
  idx: Index;
  onFollow: (id: string) => void;
  includeContextual: boolean;
  setIncludeContextual: (v: boolean) => void;
};

const PAIRS: [Domain, Domain][] = [];
DOMAINS.forEach((a, i) => DOMAINS.slice(i + 1).forEach((b) => PAIRS.push([a, b])));
const STATUSES: JunctionStatus[] = ["shared", "both-no-common", "one-side-none", "neither"];
const PAGE = 12;

function SideInstruments({ v }: { v: InstrumentView }) {
  return (
    <div className="text-[12px] leading-relaxed">
      {v.record.length ? (
        <p className="text-text-primary/85">{v.record.map((r) => r.label).join("; ")}</p>
      ) : (
        <p className="text-cyber-400/90">No instrument referenced in the dataset</p>
      )}
      {v.context.length > 0 && (
        <p className="text-text-secondary mt-0.5">
          <span className="text-text-muted">State level ({v.contextScope}):</span> {[...new Set(v.context.map((c) => c.label))].join("; ")}
        </p>
      )}
    </div>
  );
}

export default function GovernanceGaps({ data, idx, onFollow, includeContextual, setIncludeContextual }: Props) {
  const [pair, setPair] = useState<string>(pairKey("cyber", "orbital"));
  const [statusFilter, setStatusFilter] = useState<JunctionStatus | null>(null);
  const [limit, setLimit] = useState(PAGE);

  const [da, db] = PAIRS.find(([a, b]) => pairKey(a, b) === pair)!;

  const pairLinks = useMemo(() => data.links.filter((l) => pairKey(l.domains[0], l.domains[1]) === pair), [data.links, pair]);
  const pairTiers = {
    direct: pairLinks.filter((l) => l.tier === "direct").length,
    contextual: pairLinks.filter((l) => l.tier === "contextual").length,
  };

  const junctions = useMemo(() => {
    return pairLinks
      .filter((l) => includeContextual || l.tier === "direct")
      .map((l) => {
        const aId = idx.records.get(l.s)!.domain === da ? l.s : l.t;
        const bId = aId === l.s ? l.t : l.s;
        const ia = instrumentsFor(idx, aId);
        const ib = instrumentsFor(idx, bId);
        return { link: l, a: idx.records.get(aId)!, b: idx.records.get(bId)!, ia, ib, ...junctionStatus(ia, ib) };
      })
      .sort(
        (x, y) =>
          (x.link.tier === y.link.tier ? 0 : x.link.tier === "direct" ? -1 : 1) ||
          STATUSES.indexOf(x.status) - STATUSES.indexOf(y.status) ||
          x.a.label.localeCompare(y.a.label),
      );
  }, [pairLinks, idx, da, includeContextual]);

  const statusCounts = useMemo(() => {
    const m = new Map<JunctionStatus, number>();
    for (const j of junctions) m.set(j.status, (m.get(j.status) ?? 0) + 1);
    return m;
  }, [junctions]);

  // Instruments present in both domains anywhere in the snapshot, by level.
  const shared = useMemo(() => {
    const recordLevel = new Map<string, Set<Domain>>();
    for (const a of data.attrs) {
      if (a.basis !== "instrument_referenced") continue;
      const d = idx.records.get(a.r)!.domain;
      if (!recordLevel.has(a.e)) recordLevel.set(a.e, new Set());
      recordLevel.get(a.e)!.add(d);
    }
    const stateLevel = new Map<string, Set<Domain>>();
    for (const c of data.context) {
      if (!stateLevel.has(c.instrument)) stateLevel.set(c.instrument, new Set());
      stateLevel.get(c.instrument)!.add(c.domain);
    }
    const out: { label: string; levelA: string; levelB: string }[] = [];
    for (const e of data.entities) {
      if (e.type !== "instrument") continue;
      const lvl = (d: Domain) => (recordLevel.get(e.id)?.has(d) ? "record level" : stateLevel.get(e.id)?.has(d) ? "state level" : null);
      const la = lvl(da), lb = lvl(db);
      if (la && lb) out.push({ label: e.label, levelA: la, levelB: lb });
    }
    return out;
  }, [data, idx, da, db]);

  const sharedEntities = useMemo(() => {
    const st = data.entities.filter((e) => e.type === "state" && e.domains.includes(da) && e.domains.includes(db));
    const sec = data.entities.filter((e) => e.type === "sector" && e.domains.includes(da) && e.domains.includes(db));
    return { st, sec };
  }, [data.entities, da, db]);

  const filtered = statusFilter ? junctions.filter((j) => j.status === statusFilter) : junctions;

  return (
    <div className="space-y-6">
      <div role="group" aria-label="Domain pair" className="flex flex-wrap gap-2">
        {PAIRS.map(([a, b]) => {
          const k = pairKey(a, b);
          const pl = data.links.filter((l) => pairKey(l.domains[0], l.domains[1]) === k);
          const nd = pl.filter((l) => l.tier === "direct").length;
          const nc = pl.length - nd;
          const active = k === pair;
          return (
            <button
              key={k}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setPair(k);
                setStatusFilter(null);
                setLimit(PAGE);
              }}
              className={`px-3 py-2 border text-[11px] font-medium tracking-[0.06em] uppercase transition-colors ${
                active ? "border-orbital-500/50 bg-orbital-500/10 text-text-primary" : "border-white/10 text-text-secondary hover:text-text-primary hover:border-white/20"
              }`}
            >
              <span className={DOMAIN_META[a].textClass}>{DOMAIN_META[a].label}</span> + <span className={DOMAIN_META[b].textClass}>{DOMAIN_META[b].label}</span>{" "}
              <span className="font-mono-data text-text-secondary normal-case">
                ({nd} direct, {nc} contextual)
              </span>
            </button>
          );
        })}
      </div>

      <label className="flex items-center gap-3 text-[13px] text-text-primary cursor-pointer">
        <input type="checkbox" className="accent-orbital-500 w-4 h-4" checked={includeContextual} onChange={(e) => setIncludeContextual(e.target.checked)} />
        Include contextual links
        <span className="text-text-secondary text-[12px]">(off by default; they share context, not evidence)</span>
      </label>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <section className="lg:col-span-5 bg-elevated border border-white/6 p-5" aria-label="Pair summary">
          <h3 className="text-base font-semibold text-text-primary mb-1 font-[family-name:var(--font-body)]">
            {DOMAIN_META[da].label} and {DOMAIN_META[db].label}
          </h3>
          <p className="text-[12.5px] text-text-secondary leading-relaxed mb-4">
            {pairTiers.direct + pairTiers.contextual === 0
              ? "No record link between these two datasets can be derived from the coded fields."
              : `${pairTiers.direct} direct and ${pairTiers.contextual} contextual record links (junctions) between the two datasets. ${
                  includeContextual ? "Showing both tiers, direct first." : "Showing direct links only."
                }`}
          </p>
          {junctions.length > 0 && (
            <div className="space-y-1.5 mb-5" role="group" aria-label="Filter junctions by instrument status">
              {STATUSES.map((s) => {
                const n = statusCounts.get(s) ?? 0;
                const active = statusFilter === s;
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={active}
                    disabled={!n}
                    onClick={() => {
                      setStatusFilter(active ? null : s);
                      setLimit(PAGE);
                    }}
                    className={`w-full flex items-center gap-3 text-left px-3 py-2 border text-[12.5px] transition-colors ${
                      active ? "border-white/25 bg-white/5" : "border-white/6 hover:border-white/15"
                    } ${n ? "text-text-primary/90" : "text-text-muted cursor-not-allowed"}`}
                  >
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: STATUS_META[s].tone }} aria-hidden="true" />
                    <span className="flex-1">{STATUS_META[s].label}</span>
                    <span className="font-mono-data">{n}</span>
                  </button>
                );
              })}
            </div>
          )}
          <div className="space-y-3 text-[12.5px]">
            <div>
              <p className="text-[10px] tracking-[0.12em] uppercase text-text-muted mb-1">Instruments that appear in both datasets</p>
              {shared.length ? (
                <ul className="space-y-0.5">
                  {shared.map((s) => (
                    <li key={s.label} className="text-text-primary/85">
                      {s.label}{" "}
                      <span className="text-text-secondary">
                        ({DOMAIN_META[da].label}: {s.levelA}; {DOMAIN_META[db].label}: {s.levelB})
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-cyber-400/90">None. No instrument is referenced by both datasets.</p>
              )}
            </div>
            <div>
              <p className="text-[10px] tracking-[0.12em] uppercase text-text-muted mb-1">Shared entities</p>
              <p className="text-text-secondary">
                States in both: {sharedEntities.st.length ? sharedEntities.st.map((e) => e.label).join(", ") : "none"}.
                <br />
                Infrastructure categories in both: {sharedEntities.sec.length ? sharedEntities.sec.map((e) => e.label).join(", ") : "none"}.
              </p>
            </div>
          </div>
        </section>

        <section className="lg:col-span-7 min-w-0" aria-label="Junctions">
          {filtered.length === 0 ? (
            <div className="bg-surface border border-white/6 p-5 text-[12.5px] text-text-secondary leading-relaxed">
              {pairTiers.direct + pairTiers.contextual === 0
                ? "With no record links for this pair, there are no junctions to compare. The summary lists the states and categories both datasets mention, which is where a future coding pass could look."
                : junctions.length === 0
                  ? `No direct link for this pair. Turn on contextual links to see the ${pairTiers.contextual} junctions that share context only.`
                  : "No junction has this status."}
            </div>
          ) : (
            <ul className="space-y-3">
              {filtered.slice(0, limit).map((j) => (
                <li key={j.link.s + j.link.t} className="bg-surface border border-white/6 p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: STATUS_META[j.status].tone }} aria-hidden="true" />
                    <p className="text-[12px] text-text-primary/90">
                      {STATUS_META[j.status].label}
                      {j.common.length > 0 && <span className="text-text-secondary"> ({j.common.map((c) => idx.entities.get(c)?.label).join("; ")})</span>}
                      <span className="block text-text-secondary text-[11.5px]">
                        <span className={j.link.tier === "direct" ? "text-orbital-400" : "text-text-muted"}>{TIER_META[j.link.tier].label} link</span>, by:{" "}
                        {[...new Set(j.link.bases.map((b) => BASIS_META[b.basis].short))].join(", ")}
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { r: j.a, v: j.ia },
                      { r: j.b, v: j.ib },
                    ].map(({ r, v }) => (
                      <div key={r.id} className="min-w-0">
                        <p className={`text-[10px] tracking-[0.16em] uppercase mb-1 ${DOMAIN_META[r.domain].textClass}`}>{DOMAIN_META[r.domain].label}</p>
                        <button type="button" onClick={() => onFollow(r.id)} className="text-left text-[13px] text-text-primary hover:text-orbital-400 leading-snug mb-1.5">
                          {r.label}
                        </button>
                        <SideInstruments v={v} />
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
          {filtered.length > limit && (
            <button
              type="button"
              onClick={() => setLimit(limit + PAGE)}
              className="mt-3 px-4 py-2 border border-white/10 text-[11px] font-medium tracking-[0.06em] uppercase text-text-secondary hover:text-text-primary hover:border-white/20"
            >
              Show more ({filtered.length - limit} remaining)
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
