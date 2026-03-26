"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function CreatorSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Sister project: Govern the Human */}
            <a
              href="https://govern-the-human.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden border border-navy-800/8 rounded-sm hover-lift"
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/govern-og.png"
                  alt="Govern the Human"
                  width={640}
                  height={336}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: "#8a6d20" }}>
                  Sister Project
                </p>
                <h3 className="text-lg font-semibold text-navy-950 mb-1 group-hover:text-steel-500 transition-colors">
                  Govern the Human
                </h3>
                <span className="text-navy-500 text-sm group-hover:text-steel-500 transition-colors">
                  Visit Project &rarr;
                </span>
              </div>
            </a>

            {/* Creator */}
            <a
              href="https://risakoyanagi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden border border-navy-800/8 rounded-sm hover-lift"
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/risa-og.png"
                  alt="Risa Koyanagi"
                  width={640}
                  height={336}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: "#8a6d20" }}>
                  Creator
                </p>
                <h3 className="text-lg font-semibold text-navy-950 mb-2 group-hover:text-steel-500 transition-colors">
                  Risa Koyanagi
                </h3>
                <p className="text-sm leading-[1.7] text-navy-600 mb-2">
                  Cambridge Future Scholar. Research at the intersection of space governance, nuclear governance, cyber governance, strategic risk, and emerging technology governance.
                </p>
                <span className="text-navy-500 text-sm group-hover:text-steel-500 transition-colors">
                  risakoyanagi.com &rarr;
                </span>
              </div>
            </a>

            {/* Sister project: MYTHERA — Coming Soon */}
            <div className="relative block overflow-hidden border border-navy-800/8 rounded-sm">
              <div className="overflow-hidden">
                <Image
                  src="/images/mythera-og.png"
                  alt="MYTHERA"
                  width={640}
                  height={336}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: "#8a6d20" }}>
                  Sister Project
                </p>
                <h3 className="text-lg font-semibold text-navy-950 mb-1">
                  MYTHERA
                </h3>
                <span className="inline-block text-xs font-medium tracking-[0.1em] uppercase text-navy-500 border border-navy-800/15 px-3 py-1 rounded-sm">
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
