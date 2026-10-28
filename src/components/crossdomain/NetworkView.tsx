"use client";

import { useMemo, useState } from "react";
import { BASIS_META, DOMAIN_META, DOMAINS, LINK_BASES, TIER_META, TIERS, type CrossDomainData, type Domain, type LinkBasis, type Tier } from "@/lib/crossdomainMeta";
import { pairKey, type Index } from "./model";

const SIZE = 880;
const C = SIZE / 2;
const R = 300;
const GAP = 14; // degrees between domain arcs

type Props = {
  data: CrossDomainData;
  idx: Index;
  selected: string;
  onSelect: (id: string) => void;
  bases: Set<LinkBasis>;
  setBases: (b: Set<LinkBasis>) => void;
  pair: string | null;
  setPair: (p: string | null) => void;
  includeContextual: boolean;
  setIncludeContextual: (v: boolean) => void;
};

const TYPE_ORDER = ["case", "incident", "country-profile", "discretion-point", "infrastructure-link", "plant"];

export default function NetworkView({ data, idx, selected, onSelect, bases, setBases, pair, setPair, includeContextual, setIncludeContextual }: Props) {
  const [hover, setHover] = useState<string | null>(null);

  const layout = useMemo(() => {
    const pos = new Map<string, { x: number; y: number; a: number }>();
    const arcs: { domain: Domain; start: number; end: number; count: number }[] = [];
    DOMAINS.forEach((d, i) => {
      const recs = data.records
        .filter((r) => r.domain === d)
        .sort((a, b) => TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type) || (a.date ?? "").localeCompare(b.date ?? "") || a.label.localeCompare(b.label));
      const start = -90 + i * 90 + GAP / 2;
      const end = -90 + (i + 1) * 90 - GAP / 2;
      arcs.push({ domain: d, start, end, count: recs.length });
      recs.forEach((r, j) => {
        const a = recs.length === 1 ? (start + end) / 2 : start + ((end - start) * j) / (recs.length - 1);
        const rad = (a * Math.PI) / 180;
        pos.set(r.id, { x: C + R * Math.cos(rad), y: C + R * Math.sin(rad), a });
      });
    });
    return { pos, arcs };
  }, [data.records]);

  // A basis is active when its checkbox is on and its tier is shown. With
  // contextual links hidden, a direct link still shows through its direct bases.
  const activeBases = useMemo(
    () => new Set(LINK_BASES.filter((b) => bases.has(b) && (includeContextual || BASIS_META[b].tier === "direct"))),
    [bases, includeContextual],
  );
  const isVisible = (l: (typeof data.links)[number]) => l.bases.some((b) => activeBases.has(b.basis));

  const visibleLinks = useMemo(
    () => data.links.filter((l) => isVisible(l) && (!pair || pairKey(l.domains[0], l.domains[1]) === pair)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.links, activeBases, pair],
  );

  const degree = useMemo(() => {
    const m = new Map<string, number>();
    for (const l of visibleLinks) {
      m.set(l.s, (m.get(l.s) ?? 0) + 1);
      m.set(l.t, (m.get(l.t) ?? 0) + 1);
    }
    return m;
  }, [visibleLinks]);

  // Per pair: links shown with the current filters, plus the full count by tier.
  const matrix = useMemo(() => {
    const m = new Map<string, { shown: number; direct: number; contextual: number }>();
    for (const l of data.links) {
      const k = pairKey(l.domains[0], l.domains[1]);
      if (!m.has(k)) m.set(k, { shown: 0, direct: 0, contextual: 0 });
      const cell = m.get(k)!;
      cell[l.tier] += 1;
      if (isVisible(l)) cell.shown += 1;
    }
    return m;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.links, activeBases]);

  const tierCounts = useMemo(() => {
    const m: Record<Tier, number> = { direct: 0, contextual: 0 };
    for (const l of data.links) m[l.tier] += 1;
    return m;
  }, [data.links]);

  const basisCounts = useMemo(() => {
    const m = new Map<LinkBasis, number>();
    for (const l of data.links) for (const b of new Set(l.bases.map((x) => x.basis))) m.set(b, (m.get(b) ?? 0) + 1);
    return m;
  }, [data.links]);

  const focus = hover ?? selected;
  const linkColor = (l: (typeof visibleLinks)[number]) => {
    const order = LINK_BASES.filter((b) => activeBases.has(b));
    const top = order.find((b) => l.bases.some((x) => x.basis === b)) ?? l.bases[0].basis;
    return BASIS_META[top].color;
  };
  const path = (s: string, t: string) => {
    const a = layout.pos.get(s)!, b = layout.pos.get(t)!;
    return `M${a.x.toFixed(1)},${a.y.toFixed(1)} Q${C},${C} ${b.x.toFixed(1)},${b.y.toFixed(1)}`;
  };

  const focusLinks = visibleLinks.filter((l) => l.s === focus || l.t === focus);
  const hoverRec = hover ? idx.records.get(hover) : null;
  const selRec = idx.records.get(selected);

  const toggleBasis = (b: LinkBasis) => {
    const next = new Set(bases);
    if (next.has(b)) next.delete(b);
    else next.add(b);
    setBases(next);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      <div className="lg:col-span-7">
        <div className="bg-surface border border-white/6 p-3 sm:p-4">
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="w-full h-auto block"
            role="img"
            aria-labelledby="xd-net-title xd-net-desc"
          >
            <title id="xd-net-title">Cross-domain link network</title>
            <desc id="xd-net-desc">
              {`Records from four platforms are arranged around a circle by domain. ${visibleLinks.length} cross-domain links are drawn with the current filters. The matrix and the record selector next to this chart give the same information as text.`}
            </desc>
            {/* domain arcs */}
            {layout.arcs.map((arc) => {
              const r = R + 26;
              const p = (deg: number) => [C + r * Math.cos((deg * Math.PI) / 180), C + r * Math.sin((deg * Math.PI) / 180)];
              const [x1, y1] = p(arc.start), [x2, y2] = p(arc.end);
              const mid = (arc.start + arc.end) / 2;
              const [lx, ly] = [C + (R + 44) * Math.cos((mid * Math.PI) / 180), C + (R + 44) * Math.sin((mid * Math.PI) / 180)];
              const anchor = Math.cos((mid * Math.PI) / 180) > 0 ? "start" : "end";
              const dy = Math.sin((mid * Math.PI) / 180) > 0 ? 8 : -22;
              const meta = DOMAIN_META[arc.domain];
              return (
                <g key={arc.domain}>
                  <path d={`M${x1},${y1} A${r},${r} 0 0 1 ${x2},${y2}`} stroke={meta.color} strokeOpacity={0.45} strokeWidth={2} fill="none" />
                  <text x={lx} y={ly + dy} textAnchor={anchor} dominantBaseline="middle" fill={meta.color} fontSize={17} letterSpacing="0.08em" style={{ textTransform: "uppercase", fontFamily: "var(--font-heading)" }}>
                    {meta.label.split(" ")[0]}
                  </text>
                  <text x={lx} y={ly + dy + 21} textAnchor={anchor} dominantBaseline="middle" fill="#8892a4" fontSize={13} style={{ fontFamily: "var(--font-mono)" }}>
                    {arc.count} records
                  </text>
                </g>
              );
            })}
            {/* links */}
            <g fill="none">
              {visibleLinks.map((l, i) => (
                <path
                  key={i}
                  d={path(l.s, l.t)}
                  stroke={linkColor(l)}
                  strokeOpacity={focusLinks.length ? 0.06 : 0.22}
                  strokeWidth={1}
                />
              ))}
              {focusLinks.map((l, i) => (
                <path key={`f${i}`} d={path(l.s, l.t)} stroke={linkColor(l)} strokeOpacity={0.95} strokeWidth={1.8} />
              ))}
            </g>
            {/* nodes */}
            {data.records.map((r) => {
              const p = layout.pos.get(r.id)!;
              const isSel = r.id === selected;
              const isFocusEnd = focusLinks.some((l) => l.s === r.id || l.t === r.id);
              const deg = degree.get(r.id) ?? 0;
              return (
                <circle
                  key={r.id}
                  cx={p.x}
                  cy={p.y}
                  r={isSel ? 8 : isFocusEnd ? 5 : deg ? 3.6 : 2.4}
                  fill={DOMAIN_META[r.domain].color}
                  fillOpacity={isSel || isFocusEnd ? 1 : deg ? 0.75 : 0.25}
                  stroke={isSel ? "#e8ecf2" : "none"}
                  strokeWidth={2}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHover(r.id)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => onSelect(r.id)}
                >
                  <title>{`${DOMAIN_META[r.domain].label}: ${r.label}`}</title>
                </circle>
              );
            })}
          </svg>
          <div className="mt-3 min-h-[44px] text-[12px] leading-relaxed text-text-secondary" aria-live="polite">
            {hoverRec ? (
              <p>
                <span className={DOMAIN_META[hoverRec.domain].textClass}>{DOMAIN_META[hoverRec.domain].label}</span>{" "}
                <span className="text-text-primary">{hoverRec.label}</span>. {(idx.linksByRecord.get(hoverRec.id) ?? []).length} cross-domain links. Click to follow it.
              </p>
            ) : selRec ? (
              <p>
                Selected: <span className={DOMAIN_META[selRec.domain].textClass}>{DOMAIN_META[selRec.domain].label}</span>{" "}
                <span className="text-text-primary">{selRec.label}</span>, {focusLinks.length} {focusLinks.length === 1 ? "link" : "links"} shown with current filters.{" "}
                <a href="#follow" className="text-orbital-400 underline underline-offset-2 hover:text-text-primary">
                  See its connections
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="border border-white/8 bg-elevated p-4">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-3">Link strength</p>
          <ul className="space-y-2 text-[12.5px] leading-relaxed mb-3">
            {TIERS.map((t) => (
              <li key={t}>
                <span className="text-text-primary font-medium">
                  {TIER_META[t].label} <span className="font-mono-data text-text-secondary">({tierCounts[t]})</span>
                </span>
                <span className="text-text-secondary">: {TIER_META[t].explain}</span>
              </li>
            ))}
          </ul>
          <label className="flex items-center gap-3 text-[13px] text-text-primary cursor-pointer">
            <input
              type="checkbox"
              className="accent-orbital-500 w-4 h-4"
              checked={includeContextual}
              onChange={(e) => setIncludeContextual(e.target.checked)}
            />
            Include contextual links ({tierCounts.contextual})
          </label>
          {!includeContextual && (
            <p className="mt-2 text-[11.5px] text-text-secondary">Showing direct links only. Dots without a line have no direct link.</p>
          )}
        </div>

        <fieldset>
          <legend className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary mb-3">Link basis</legend>
          <div className="space-y-2">
            {LINK_BASES.map((b) => {
              const n = basisCounts.get(b) ?? 0;
              const tierOff = BASIS_META[b].tier === "contextual" && !includeContextual;
              return (
                <label key={b} className={`flex items-start gap-3 text-[13px] ${n && !tierOff ? "text-text-primary/90 cursor-pointer" : "text-text-muted"}`}>
                  <input
                    type="checkbox"
                    className="mt-1 accent-orbital-500"
                    checked={bases.has(b) && !tierOff}
                    onChange={() => toggleBasis(b)}
                    disabled={!n || tierOff}
                  />
                  <span className="inline-block w-3 h-[2px] mt-[9px] shrink-0" style={{ backgroundColor: BASIS_META[b].color }} aria-hidden="true" />
                  <span>
                    {BASIS_META[b].label} <span className="font-mono-data text-text-secondary">({n})</span>{" "}
                    <span className="text-[10px] tracking-[0.12em] uppercase text-text-muted">{TIER_META[BASIS_META[b].tier].label}</span>
                    {!n && <span className="block text-[11px] text-text-muted">No link of this type can be derived from the current data.</span>}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <div className="flex items-center justify-between mb-3 gap-3">
            <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary font-[family-name:var(--font-body)]">
              Links by domain pair
            </h3>
            {pair && (
              <button type="button" onClick={() => setPair(null)} className="text-[11px] text-orbital-400 hover:text-text-primary underline underline-offset-2">
                Show all pairs
              </button>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <caption className="sr-only">Number of cross-domain links between each pair of domains, with the current basis filters. Select a cell to show only that pair in the network.</caption>
              <thead>
                <tr>
                  <th scope="col" className="p-1.5" />
                  {DOMAINS.map((d) => (
                    <th key={d} scope="col" className={`p-1.5 font-medium text-[10px] tracking-[0.12em] uppercase ${DOMAIN_META[d].textClass}`}>
                      {DOMAIN_META[d].label.split(" ")[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DOMAINS.map((row) => (
                  <tr key={row}>
                    <th scope="row" className={`p-1.5 text-left font-medium text-[10px] tracking-[0.12em] uppercase ${DOMAIN_META[row].textClass}`}>
                      {DOMAIN_META[row].label.split(" ")[0]}
                    </th>
                    {DOMAINS.map((col) => {
                      if (row === col)
                        return (
                          <td key={col} className="p-1.5 text-center text-text-muted" aria-label="Same domain, not counted">
                            &middot;
                          </td>
                        );
                      const k = pairKey(row, col);
                      const cell = matrix.get(k) ?? { shown: 0, direct: 0, contextual: 0 };
                      const n = cell.shown;
                      const active = pair === k;
                      return (
                        <td key={col} className="p-0.5">
                          <button
                            type="button"
                            aria-pressed={active}
                            aria-label={`${DOMAIN_META[row].label} and ${DOMAIN_META[col].label}: ${n} links shown; ${cell.direct} direct, ${cell.contextual} contextual in total`}
                            onClick={() => setPair(active ? null : k)}
                            className={`w-full py-1.5 font-mono-data border transition-colors flex flex-col items-center leading-tight ${
                              active
                                ? "border-orbital-500/60 bg-orbital-500/15 text-text-primary"
                                : n
                                  ? "border-white/8 bg-elevated text-text-primary hover:border-white/20"
                                  : "border-white/5 bg-surface text-text-muted hover:border-white/15"
                            }`}
                          >
                            <span className="text-[13px]">{n}</span>
                            <span className="text-[9.5px] text-text-secondary whitespace-nowrap" aria-hidden="true">
                              {cell.direct}D {cell.contextual}C
                            </span>
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12px] text-text-secondary leading-relaxed">
            Large number: links shown with the current filters. Small line: all direct (D) and contextual (C) links for the pair. A zero means no link of the selected types can be derived from the coded fields for that pair. It does not mean the two domains are unrelated.
          </p>
        </div>
      </div>
    </div>
  );
}
