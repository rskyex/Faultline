import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-void">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="relative text-center px-6">
        <Image src="/images/logo.png" alt="Faultline" width={40} height={40} className="mx-auto mb-6 w-10 h-10 opacity-50" />
        <p className="text-orbital-500 text-[10px] font-medium tracking-[0.25em] uppercase mb-3">
          Signal Lost
        </p>
        <h1 className="wordmark text-5xl text-text-primary mb-3">
          404
        </h1>
        <p className="text-text-secondary text-[13px] mb-6 max-w-sm mx-auto leading-relaxed">
          This coordinate does not map to any known infrastructure node.
          The page you requested could not be located.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-orbital-500/10 border border-orbital-500/25 text-orbital-400 text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-orbital-500/15 transition-all duration-300"
        >
          Return to Faultline
        </a>
      </div>
    </div>
  );
}
