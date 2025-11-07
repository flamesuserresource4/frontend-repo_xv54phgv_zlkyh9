import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/30 dark:to-neutral-950/80 pointer-events-none" />

      <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="backdrop-blur-sm bg-white/50 dark:bg-neutral-900/40 rounded-2xl p-6 sm:p-10 border border-black/5 dark:border-white/10 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-violet-600/10 text-orange-600 dark:text-amber-300 ring-1 ring-orange-500/20">
            Journey begins
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50" style={{ fontFamily: 'Roboto Slab, serif' }}>
            Hi, I'm Alex — Building thoughtful products over time.
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-2xl" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
            ChronoFlow is a timeline-driven portfolio that guides you through my story — from foundations to impact.
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <a href="#projects" className="relative px-5 py-2.5 rounded-xl text-white font-semibold transition-transform active:scale-[0.98]">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600" />
              <span className="relative">View projects</span>
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl border border-black/10 dark:border-white/15 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/5 dark:hover:bg-white/5">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
