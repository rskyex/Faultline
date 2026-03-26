export default function AboutSection() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Label */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
                About the Platform
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-[-0.01em]">
                What Faultline Is
              </h2>
              <div className="mt-6 w-16 h-px bg-gradient-to-r from-steel-500/50 to-transparent" />

              {/* Small structural diagram */}
              <div className="hidden lg:block mt-12">
                <svg viewBox="0 0 200 160" fill="none" className="w-48 opacity-60">
                  {/* Three connected nodes */}
                  <circle cx="100" cy="20" r="6" stroke="#4a6fa5" strokeWidth="0.8" fill="#4a6fa5" fillOpacity="0.15" />
                  <circle cx="40" cy="130" r="6" stroke="#6b8fc0" strokeWidth="0.8" fill="#6b8fc0" fillOpacity="0.15" />
                  <circle cx="160" cy="130" r="6" stroke="#d4a843" strokeWidth="0.8" fill="#d4a843" fillOpacity="0.15" />
                  {/* Lines */}
                  <line x1="100" y1="26" x2="40" y2="124" stroke="#4a6fa5" strokeWidth="0.5" opacity="0.4" strokeDasharray="3 4" />
                  <line x1="100" y1="26" x2="160" y2="124" stroke="#6b8fc0" strokeWidth="0.5" opacity="0.4" strokeDasharray="3 4" />
                  <line x1="46" y1="130" x2="154" y2="130" stroke="#d4a843" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 4" />
                  {/* Center convergence */}
                  <circle cx="100" cy="90" r="3" fill="#8eb0d8" opacity="0.4" />
                  {/* Labels */}
                  <text x="100" y="10" textAnchor="middle" fill="#4a6fa5" fontSize="7" fontFamily="Inter, sans-serif" opacity="0.5">ORB</text>
                  <text x="22" y="145" fill="#6b8fc0" fontSize="7" fontFamily="Inter, sans-serif" opacity="0.5">NUC</text>
                  <text x="160" y="145" textAnchor="middle" fill="#d4a843" fontSize="7" fontFamily="Inter, sans-serif" opacity="0.5">CYB</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg md:text-xl leading-[1.7] text-slate-200 font-serif-accent">
              Faultline is a connective research interface linking three
              domain-specific platforms: orbital infrastructure, nuclear
              infrastructure, and cyber escalation. Its purpose is not only to
              display separate systems, but to reveal the structural fault lines
              that form between them.
            </p>
            <p className="text-base leading-relaxed text-steel-400">
              Each platform maps one domain in depth. Faultline provides the
              connective layer&mdash;identifying where dependencies accumulate,
              where escalation pathways cross boundaries, and where governance
              structures remain fragmented across sectors that are increasingly
              coupled in practice.
            </p>

            {/* Three domains inline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
              <div className="border-t border-steel-500/25 pt-5">
                <p className="text-steel-300 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">
                  Orbital
                </p>
                <p className="text-sm text-steel-400 leading-relaxed">
                  Space systems, satellite infrastructure, and orbital risk dynamics
                </p>
              </div>
              <div className="border-t border-steel-500/25 pt-5">
                <p className="text-steel-300 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">
                  Nuclear
                </p>
                <p className="text-sm text-steel-400 leading-relaxed">
                  Global nuclear infrastructure, facilities, and strategic posture
                </p>
              </div>
              <div className="border-t border-gold-400/25 pt-5">
                <p className="text-gold-400 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">
                  Cyber
                </p>
                <p className="text-sm text-steel-400 leading-relaxed">
                  Cyber operations, escalation patterns, and attack surface mapping
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
