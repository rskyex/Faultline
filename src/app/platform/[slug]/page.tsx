import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import { notFound } from "next/navigation";
import { platforms } from "@/lib/platformData";

type PlatformKey = keyof typeof platforms;

export function generateStaticParams() {
  return Object.keys(platforms).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = platforms[slug as PlatformKey];
  if (!platform) return {};
  return {
    title: `${platform.name} \u2014 Faultline`,
    description: platform.description,
  };
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = platforms[slug as PlatformKey];
  if (!platform) notFound();

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-14">
        {/* Hero */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 30% 50%, ${platform.accentDim.replace("0.15", "0.04")} 0%, transparent 70%)`,
            }}
          />

          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-5">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-text-secondary text-[11px] tracking-[0.08em] hover:text-text-primary transition-colors mb-3"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M8 2L3 6l5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back to Faultline
                </a>

                <p className="text-[11px] font-medium tracking-[0.25em] uppercase" style={{ color: platform.accent }}>
                  {platform.tagline}
                </p>

                <h1 className="wordmark text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
                  {platform.name}
                </h1>

                <div className="w-12 h-px" style={{ backgroundColor: platform.accent, opacity: 0.3 }} />

                <p className="text-sm md:text-base leading-[1.75] text-text-secondary max-w-2xl">
                  {platform.description}
                </p>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 border text-text-primary text-[12px] font-medium tracking-[0.08em] uppercase transition-all duration-300 mt-2 hover:bg-white/5"
                  style={{
                    borderColor: platform.accentBorder,
                    backgroundColor: platform.accentDim.replace("0.15", "0.05"),
                  }}
                >
                  Enter Platform
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                    <path d="M4 1h6v6M10 1L4.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden border border-white/8">
                  <Image
                    src={platform.ogImage}
                    alt={`${platform.name} platform screenshot`}
                    width={640}
                    height={360}
                    className="w-full h-auto opacity-85"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="absolute inset-0 bg-surface" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platform.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="font-mono-data text-2xl md:text-3xl font-medium" style={{ color: platform.accent }}>
                    {s.value}
                  </p>
                  <p className="text-text-secondary text-[11px] tracking-[0.15em] uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Capabilities */}
        <section className="relative py-14 lg:py-20">
          <div className="absolute inset-0 bg-deep" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3" style={{ color: platform.accent }}>
                  Capabilities
                </p>
                <h2 className="wordmark text-2xl md:text-3xl text-text-primary">
                  What This Platform Maps
                </h2>
              </div>
              <div className="lg:col-span-8">
                <ul className="space-y-3">
                  {platform.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary text-[13px] leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: platform.accent, opacity: 0.6 }} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Features */}
        <section className="relative py-14 lg:py-20">
          <div className="absolute inset-0 bg-surface" />
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3" style={{ color: platform.accent }}>
              Core Features
            </p>
            <h2 className="wordmark text-2xl md:text-3xl text-text-primary mb-10">
              Analytical Depth
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platform.features.map((f, i) => (
                <div key={i} className="p-5 lg:p-6 bg-elevated border border-white/6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono-data font-medium text-[12px]" style={{ color: platform.accent }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 h-px" style={{ backgroundColor: platform.accent, opacity: 0.12 }} />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-2">{f.title}</h3>
                  <p className="text-[13px] text-text-secondary leading-[1.75]">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology — only for Lunar Governance Authority Tracker */}
        {platform.methodology && (
          <>
            <SectionDivider />
            <section className="relative py-14 lg:py-20">
              <div className="absolute inset-0 bg-deep" />
              <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3" style={{ color: platform.accent }}>
                  Analytical Architecture
                </p>
                <h2 className="wordmark text-2xl md:text-3xl text-text-primary mb-10">
                  Three-Stage Framework
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {platform.methodology.map((m, i) => (
                    <div key={i} className="p-5 bg-elevated border border-white/6">
                      <p className="font-mono-data text-[11px] mb-3" style={{ color: platform.accent }}>
                        STAGE {i + 1}
                      </p>
                      <h3 className="text-sm font-semibold text-text-primary mb-2">{m.title}</h3>
                      <p className="text-[12px] text-text-secondary leading-[1.7]">{m.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <SectionDivider />

        {/* Key Insights */}
        <section className="relative py-14 lg:py-20">
          <div className="absolute inset-0 bg-surface" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3" style={{ color: platform.accent }}>
              Key Insights
            </p>
            <h2 className="wordmark text-2xl md:text-3xl text-text-primary mb-8">
              What the Analysis Reveals
            </h2>

            <div className="space-y-3">
              {platform.keyInsights.map((insight, i) => (
                <div key={i} className="p-4 border-l-2 bg-elevated/40" style={{ borderColor: `${platform.accent}40` }}>
                  <p className="text-[13px] text-text-secondary leading-[1.75]">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Cross-domain */}
        <section className="relative py-14 lg:py-20">
          <div className="absolute inset-0 bg-deep" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <p className="text-orbital-500 text-[11px] font-medium tracking-[0.25em] uppercase mb-3">
                Cross-Domain Significance
              </p>
              <h2 className="wordmark text-2xl md:text-3xl text-text-primary mb-5">
                Why This Domain Cannot Be Analyzed in Isolation
              </h2>
              <p className="text-sm leading-[1.75] text-text-secondary">
                {platform.crossDomain}
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* CTA — other platforms */}
        <section className="relative py-14 lg:py-20">
          <div className="absolute inset-0 bg-surface" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <Image src="/images/logo.png" alt="Faultline" width={32} height={32} className="mx-auto mb-5 w-8 h-8 opacity-50" />
            <p className="text-text-secondary text-[12px] mb-5 tracking-[0.08em]">
              Explore the other strategic layers
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.values(platforms)
                .filter((p) => p.slug !== platform.slug)
                .map((p) => (
                  <a
                    key={p.slug}
                    href={`/platform/${p.slug}`}
                    className="px-5 py-2.5 border border-white/8 text-text-secondary text-[12px] font-medium tracking-[0.05em] hover:border-white/15 hover:text-text-primary transition-all duration-300"
                  >
                    {p.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
