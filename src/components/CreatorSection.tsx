"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function CreatorSection() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-steel-500/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-4">
              <div className="relative max-w-[320px] mx-auto lg:mx-0">
                <div className="relative overflow-hidden border border-steel-500/15">
                  <Image
                    src="/images/risa-og.png"
                    alt="Risa Koyanagi"
                    width={640}
                    height={336}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-8 space-y-5">
              <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">
                Creator
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em]">
                Risa Koyanagi
              </h2>
              <p className="text-base leading-[1.75] text-steel-400 max-w-2xl">
                Born in 2003, Risa Koyanagi is a Cambridge Future Scholar and
                researcher working at the intersection of space governance,
                nuclear governance, cyber governance, strategic risk, and
                emerging technology governance. Her research is especially
                concerned with legitimation theory, dual-use governance,
                authority architecture, responsible behaviour norms, and
                international security.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href="https://risakoyanagi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-steel-300/80 hover:text-white transition-colors duration-200"
                >
                  risakoyanagi.com
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
