"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function CreatorSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Sister project */}
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: "#8a6d20" }}>
                Sister Project
              </p>
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
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-950 mb-2 group-hover:text-steel-500 transition-colors">
                    Govern the Human
                  </h3>
                  <span className="text-navy-500 text-sm group-hover:text-steel-500 transition-colors">
                    Visit Project &rarr;
                  </span>
                </div>
              </a>
            </div>

            {/* Right: Creator */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: "#8a6d20" }}>
                Creator
              </p>
              <div className="flex items-start gap-5 mb-5">
                <div className="w-20 h-20 shrink-0 overflow-hidden border border-navy-800/8 rounded-sm">
                  <Image
                    src="/images/risa-og.png"
                    alt="Risa Koyanagi"
                    width={160}
                    height={84}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-navy-950 tracking-[-0.01em]">
                    Risa Koyanagi
                  </h3>
                  <a
                    href="https://risakoyanagi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-navy-600 hover:text-steel-500 transition-colors duration-200 mt-1"
                  >
                    risakoyanagi.com
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <p className="text-sm leading-[1.75] text-navy-600 max-w-lg">
                Born in 2003, Risa Koyanagi is a Cambridge Future Scholar and
                researcher working at the intersection of space governance,
                nuclear governance, cyber governance, strategic risk, and
                emerging technology governance. Her research is especially
                concerned with legitimation theory, dual-use governance,
                authority architecture, responsible behaviour norms, and
                international security.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
