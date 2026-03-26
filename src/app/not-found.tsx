import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950">
      <div className="text-center px-6">
        <Image src="/images/logo.png" alt="Faultline" width={48} height={48} className="mx-auto mb-8 w-12 h-12" />
        <p className="text-steel-500 text-xs font-medium tracking-[0.2em] uppercase mb-4">
          Signal Lost
        </p>
        <h1 className="wordmark text-5xl text-white mb-4">
          404
        </h1>
        <p className="text-steel-400 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          This coordinate does not map to any known infrastructure node.
          The page you requested could not be located.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-950 text-sm font-semibold tracking-[0.03em] hover:bg-white/90 transition-all duration-300"
        >
          Return to Faultline
        </a>
      </div>
    </div>
  );
}
