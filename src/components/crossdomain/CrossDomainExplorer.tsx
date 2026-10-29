"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { LINK_BASES, type CrossDomainData, type LinkBasis } from "@/lib/crossdomainMeta";
import { buildIndex } from "./model";
import NetworkView from "./NetworkView";
import FollowView from "./FollowView";
import InstrumentCoverage from "./InstrumentCoverage";

const DEFAULT_RECORD = "cyber:viasat-kasat";

function SectionHead({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-6 lg:mb-8">
      <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-2 text-orbital-500">{eyebrow}</p>
      <h2 id={id} className="wordmark text-2xl md:text-3xl text-text-primary leading-tight scroll-mt-20">
        {title}
      </h2>
      {children && <div className="mt-3 text-text-primary/70 text-sm max-w-3xl leading-relaxed">{children}</div>}
    </div>
  );
}

export default function CrossDomainExplorer({ data }: { data: CrossDomainData }) {
  const idx = useMemo(() => buildIndex(data), [data]);
  const [selected, setSelected] = useState(DEFAULT_RECORD);
  const [bases, setBases] = useState<Set<LinkBasis>>(new Set(LINK_BASES));
  const [pair, setPair] = useState<string | null>(null);

  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("record");
    if (r && idx.records.has(r)) setSelected(r);
  }, [idx]);

  const select = useCallback(
    (id: string) => {
      if (!idx.records.has(id)) return;
      setSelected(id);
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("record", id);
        window.history.replaceState(null, "", url.toString());
      } catch {
        /* ignore */
      }
    },
    [idx],
  );

  const followAndScroll = useCallback(
    (id: string) => {
      select(id);
      document.getElementById("follow")?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [select],
  );

  return (
    <>
      <section className="relative py-12 lg:py-16" aria-labelledby="map">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionHead id="map" eyebrow="View 1" title="Connection map">
            Each dot is a record in one of the four platforms. A line is drawn only where two records are about the same thing. One incident, the Viasat KA-SAT attack of February 2022, is recorded in two domains (cyber and orbital): that is the only same-event link. Five other cyber cases attributed to Sandworm link to the same orbital record because it names Sandworm too; they are the same intrusion set, not the same event. Shared states and infrastructure categories are not drawn as lines. Click a dot, or use the node list, to follow a record.
          </SectionHead>
          <NetworkView data={data} idx={idx} selected={selected} onSelect={select} bases={bases} setBases={setBases} pair={pair} setPair={setPair} />
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-white/6" />
      </div>

      <section className="relative py-12 lg:py-16" aria-labelledby="follow">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionHead id="follow" eyebrow="View 2" title="Follow an incident">
            Pick any record to see its record links, and the states and infrastructure categories it shares with the other datasets. The default is the Viasat KA-SAT attack, the one incident recorded in both the cyber and the orbital data.
          </SectionHead>
          <FollowView data={data} idx={idx} selected={selected} onSelect={select} />
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-white/6" />
      </div>

      <section className="relative py-12 lg:py-16" aria-labelledby="coverage">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionHead id="coverage" eyebrow="View 3" title="Instrument coverage in the datasets">
            For each record link, this view lists the legal and normative instruments each dataset associates with the records on either side. Orbital incident and nuclear plant records reference no instrument at record level: those datasets have no field for it. So a junction marked “no instrument referenced” mostly reflects the schema of the source dataset. It is not a legal finding that no rule applies, and not evidence of a governance gap.
          </SectionHead>
          <InstrumentCoverage data={data} idx={idx} onFollow={followAndScroll} />
        </div>
      </section>
    </>
  );
}
