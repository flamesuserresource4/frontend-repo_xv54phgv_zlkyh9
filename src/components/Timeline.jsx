import { useEffect, useRef, useState } from 'react';

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

export default function Timeline({ sections, onJump }) {
  const containerRef = useRef(null);
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <aside
      ref={containerRef}
      className="fixed right-4 sm:right-8 top-24 bottom-6 z-40 hidden md:flex flex-col items-center"
    >
      <div className="relative h-full w-1 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-pink-500 to-violet-600 opacity-70 dark:opacity-100 shadow-[0_0_20px_2px_rgba(255,128,0,0.25)]" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-between py-2">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onJump(s.id)}
            className="group relative -ml-2"
            aria-label={`Jump to ${s.label}`}
          >
            <span
              className={`block h-4 w-4 rounded-full ring-2 transition-all duration-300 ${
                active === s.id
                  ? 'bg-gradient-to-tr from-orange-500 to-violet-600 ring-orange-500/40 scale-110 shadow-[0_0_16px_rgba(255,128,0,0.5)]'
                  : 'bg-white dark:bg-neutral-900 ring-black/10 dark:ring-white/15'
              }`}
            />
            <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-1 rounded-md text-xs bg-white/80 dark:bg-neutral-900/80 border border-black/5 dark:border-white/10 text-neutral-800 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
