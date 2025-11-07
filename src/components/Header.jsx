import { useEffect } from 'react';
import { Sun, Moon, Hourglass } from 'lucide-react';

export default function Header({ theme, setTheme, sections, onJump }) {
  // Attach/remove dark class on the html element for Tailwind dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white shadow-lg">
            <Hourglass className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">ChronoFlow</span>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onJump(s.id)}
              className="px-3 py-1.5 rounded-full text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-900/5 dark:hover:bg-white/5 transition-colors"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/0 via-pink-500/0 to-violet-600/0 group-hover:from-orange-500/10 group-hover:to-violet-600/10 transition-all" />
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 text-amber-300 transition-transform duration-300 rotate-0 group-active:rotate-45" />
          ) : (
            <Moon className="h-5 w-5 text-violet-700 transition-transform duration-300 rotate-0 group-active:-rotate-45" />
          )}
        </button>
      </div>
    </header>
  );
}
