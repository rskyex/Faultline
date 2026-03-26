import FaultlineLogo from "./FaultlineLogo";

export default function Footer() {
  return (
    <footer className="relative border-t border-steel-500/10 py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <FaultlineLogo size={28} />
              <span className="text-white text-lg font-semibold tracking-tight">
                Faultline
              </span>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed max-w-sm">
              Cross-domain strategic infrastructure mapping. Revealing the
              dependencies, escalation pathways, and governance fractures across
              orbital, nuclear, and cyber systems.
            </p>
          </div>

          {/* Platforms */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-steel-300 mb-4">
              Platforms
            </p>
            <ul className="space-y-3">
              {[
                {
                  name: "Orbital Risk Tracker",
                  url: "https://orbitalrisktracker.vercel.app/",
                },
                {
                  name: "Nuclear Infrastructure Atlas",
                  url: "https://globalnuclearinfrastructureatlas.vercel.app/",
                },
                {
                  name: "Cyber Escalation Atlas",
                  url: "https://cyber-escalation-atlas-5yp5.vercel.app/",
                },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-steel-300 mb-4">
              Project
            </p>
            <p className="text-steel-400/60 text-xs leading-relaxed">
              A cross-domain research interface for strategic infrastructure
              analysis.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-steel-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-400/40 text-xs">
            &copy; {new Date().getFullYear()} Faultline. All rights reserved.
          </p>
          <p className="text-steel-400/30 text-xs">
            Strategic infrastructure mapping platform
          </p>
        </div>
      </div>
    </footer>
  );
}
