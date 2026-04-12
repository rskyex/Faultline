"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function CreatorSection() {
  return (
    <section className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-deep" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sister project: Govern the Human */}
            <a
              href="https://govern-the-human.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden border border-white/6 bg-elevated hover:border-white/12 card-glow"
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/govern-og.png"
                  alt="Govern the Human"
                  width={640}
                  height={336}
                  className="w-full h-auto opacity-75 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase mb-2 text-orbital-500/70">
                  Sister Project
                </p>
                <h3 className="text-sm font-semibold text-text-primary mb-1 group-hover:text-orbital-400 transition-colors">
                  Govern the Human
                </h3>
                <p className="text-[12px] leading-[1.6] text-text-muted mb-2">
                  A research platform on what AI governance misses: how AI-mediated environments may reshape the human subject.
                </p>
                <span className="text-text-muted text-[11px] group-hover:text-orbital-400 transition-colors">
                  Visit Project &rarr;
                </span>
              </div>
            </a>

            {/* Creator */}
            <a
              href="https://risakoyanagi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden border border-white/6 bg-elevated hover:border-white/12 card-glow"
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/risa-og.png"
                  alt="Risa Koyanagi"
                  width={640}
                  height={336}
                  className="w-full h-auto opacity-75 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase mb-2 text-orbital-500/70">
                  Creator
                </p>
                <h3 className="text-sm font-semibold text-text-primary mb-1 group-hover:text-orbital-400 transition-colors">
                  Risa Koyanagi
                </h3>
                <p className="text-[12px] leading-[1.7] text-text-muted mb-2">
                  Cambridge Future Scholar. Research at the intersection of space governance, nuclear governance, cyber governance, strategic risk, and emerging technology governance.
                </p>
                <span className="text-text-muted text-[11px] group-hover:text-orbital-400 transition-colors">
                  risakoyanagi.com &rarr;
                </span>
              </div>
            </a>

            {/* Sister project: MYTHERA */}
            <div className="relative block overflow-hidden border border-white/6 bg-elevated">
              <div className="overflow-hidden">
                <Image
                  src="/images/mythera-og.png"
                  alt="MYTHERA"
                  width={640}
                  height={336}
                  className="w-full h-auto opacity-50"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase mb-2 text-orbital-500/70">
                  Sister Project
                </p>
                <h3 className="text-sm font-semibold text-text-primary mb-1">
                  MYTHERA
                </h3>
                <p className="text-[12px] leading-[1.6] text-text-muted mb-2">
                  The interactive mythic world of cultural and philosophical interfaces where memory, meaning, and selfhood can be explored.
                </p>
                <span className="inline-block text-[10px] font-medium tracking-[0.12em] uppercase text-text-muted border border-white/8 px-3 py-1">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
