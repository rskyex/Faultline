import FaultlineLogo from "@/components/FaultlineLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950">
      <div className="text-center px-6">
        <FaultlineLogo size={48} className="mx-auto mb-8" />
        <p className="text-steel-500 text-xs font-medium tracking-[0.2em] uppercase mb-4">
          Signal Lost
        </p>
        <h1 className="text-4xl font-semibold text-white mb-4 tracking-tight">
          404
        </h1>
        <p className="text-steel-400 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          This coordinate does not map to any known infrastructure node.
          The page you requested could not be located.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-steel-500/15 border border-steel-500/30 text-white text-sm font-medium tracking-[0.05em] hover:bg-steel-500/25 hover:border-steel-400/50 transition-all duration-300"
        >
          Return to Faultline
        </a>
      </div>
    </div>
  );
}
