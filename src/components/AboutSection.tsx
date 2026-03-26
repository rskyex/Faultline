export default function AboutSection() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Label */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
                About the Platform
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                What Faultline Is
              </h2>
              <div className="mt-6 w-16 h-px bg-steel-500/40" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-slate-200">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {[
                {
                  label: "Orbital",
                  desc: "Space systems, satellite infrastructure, and orbital risk dynamics",
                  color: "steel-400",
                },
                {
                  label: "Nuclear",
                  desc: "Global nuclear infrastructure, facilities, and strategic posture",
                  color: "steel-300",
                },
                {
                  label: "Cyber",
                  desc: "Cyber operations, escalation patterns, and attack surface mapping",
                  color: "gold-400",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-t border-steel-500/20 pt-4"
                >
                  <p
                    className={`text-${item.color} text-xs font-medium tracking-[0.15em] uppercase mb-2`}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm text-steel-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
