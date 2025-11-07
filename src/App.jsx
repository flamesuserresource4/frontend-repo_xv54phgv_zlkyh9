import { useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Sections from './components/Sections';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [theme, setTheme] = useState('dark');
  const sections = useMemo(
    () => [
      { id: 'hero', label: 'Intro' },
      { id: 'about', label: 'About' },
      { id: 'education', label: 'Education' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'certifications', label: 'Certs' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const refs = useRef({});
  const handleJump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0f0f1e] transition-colors duration-300">
      <Header theme={theme} setTheme={setTheme} sections={sections} onJump={handleJump} />
      <ScrollProgress />

      <main className="pt-20 space-y-24">
        <Hero />
        <Sections />
      </main>

      <Timeline sections={sections} onJump={handleJump} />

      <footer className="mt-24 py-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} ChronoFlow — Crafted with care.
      </footer>
    </div>
  );
}

export default App;
