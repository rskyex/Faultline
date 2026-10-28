"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { LINK_BASES, type CrossDomainData, type LinkBasis } from "@/lib/crossdomainMeta";
import { buildIndex } from "./model";
import NetworkView from "./NetworkView";
import FollowView from "./FollowView";
import GovernanceGaps from "./GovernanceGaps";

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
  // Default view: direct links only. Contextual links are opt in.
  const [includeContextual, setIncludeContextual] = useState(false);

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
            Each dot is a record in one of the four platforms. A line is drawn only when the two records share a coded field. The map opens on direct links, where both records name the same incident or the same threat group. Contextual links, where records only share an acting state or an energy target and host state, can be switched on. Click a dot to follow that record, or select a cell in the matrix to show one pair of domains.
          </SectionHead>
          <NetworkView data={data} idx={idx} selected={selected} onSelect={select} bases={bases} setBases={setBases} pair={pair} setPair={setPair} includeContextual={includeContextual} setIncludeContextual={setIncludeContextual} />
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-white/6" />
      </div>

      <section className="relative py-12 lg:py-16" aria-labelledby="follow">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionHead id="follow" eyebrow="View 2" title="Follow an incident">
            Pick any record to see what it connects to in the other three datasets, and why. Direct links come first. Contextual links are collapsed below them. The default is the Viasat KA-SAT attack, which appears in both the cyber and the orbital data.
          </SectionHead>
          <FollowView data={data} idx={idx} selected={selected} onSelect={select} />
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-white/6" />
      </div>

      <section className="relative py-12 lg:py-16" aria-labelledby="gaps">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionHead id="gaps" eyebrow="View 3" title="Governance gaps">
            For every junction between two domains (direct links by default), this view lists the legal and normative instruments each dataset associates with the records on either side. A flag means no instrument is referenced in the dataset. That is a statement about the coded data, not a legal finding that no rule applies.
          </SectionHead>
          <GovernanceGaps data={data} idx={idx} onFollow={followAndScroll} includeContextual={includeContextual} setIncludeContextual={setIncludeContextual} />
        </div>
      </section>
    </>
  );
}
