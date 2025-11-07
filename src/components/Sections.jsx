import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Sections() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 space-y-24 pb-24">
      {/* About */}
      <motion.section id="about" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="scroll-mt-28">
        <Card>
          <h2 className="section-title">About Me</h2>
          <p className="section-body">
            I'm a product-focused engineer who enjoys turning ideas into polished, real-world experiences. I value clarity, thoughtful systems, and incremental impact.
          </p>
        </Card>
      </motion.section>

      {/* Education */}
      <motion.section id="education" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="scroll-mt-28">
        <Card>
          <h2 className="section-title">Education</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">B.S. Computer Science</p>
                <p>University of Somewhere</p>
              </div>
              <span className="text-neutral-500 dark:text-neutral-400">2016 — 2020</span>
            </li>
            <li className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">Relevant Coursework</p>
                <p>Algorithms, HCI, Systems, Databases, AI</p>
              </div>
            </li>
          </ul>
        </Card>
      </motion.section>

      {/* Skills */}
      <motion.section id="skills" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="scroll-mt-28">
        <Card>
          <h2 className="section-title">Skills</h2>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              'React',
              'TypeScript',
              'Node.js',
              'Python',
              'FastAPI',
              'MongoDB',
              'Tailwind',
              'Framer Motion',
            ].map((skill) => (
              <span key={skill} className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 shadow-sm text-neutral-800 dark:text-neutral-200 ring-1 ring-inset ring-orange-500/10">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent font-semibold mr-2">•</span>
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="scroll-mt-28">
        <Card>
          <h2 className="section-title">Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />)
            )}
          </div>
        </Card>
      </motion.section>

      {/* Certifications */}
      <motion.section id="certifications" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="scroll-mt-28">
        <Card>
          <h2 className="section-title">Certifications</h2>
          <ul className="mt-4 list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
            <li>AWS Certified Cloud Practitioner</li>
            <li>Google Data Analytics Professional Certificate</li>
            <li>Scrum Fundamentals Certified</li>
          </ul>
        </Card>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="scroll-mt-28">
        <Card>
          <h2 className="section-title">Contact</h2>
          <p className="section-body">I’m open to interesting opportunities and collaborations.</p>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required type="text" placeholder="Your name" className="input" />
            <input required type="email" placeholder="Email address" className="input" />
            <textarea required placeholder="Message" rows={5} className="input sm:col-span-2" />
            <button type="submit" className="btn-gradient sm:col-span-2">Send message</button>
          </form>

          <div className="mt-6 flex items-center gap-4 text-sm">
            <a className="link" href="mailto:alex@example.com"><Mail className="h-4 w-4 mr-1" /> alex@example.com</a>
            <a className="link" href="https://github.com" target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-1" /> GitHub</a>
            <a className="link" href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-1" /> LinkedIn</a>
          </div>
        </Card>
      </motion.section>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-xl">
      {children}
    </div>
  );
}

function ProjectCard({ title, description, tech, image }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-md">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
        <p className="mt-1 text-neutral-700 dark:text-neutral-300 text-sm">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 rounded-md text-xs bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-violet-600/10 text-neutral-800 dark:text-neutral-200 ring-1 ring-orange-500/20">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-orange-500/10 via-pink-500/10 to-violet-600/10" />
    </div>
  );
}

const projects = [
  {
    title: 'FlowBoard',
    description: 'Realtime kanban with multiplayer presence and AI summaries.',
    tech: ['React', 'Supabase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Atlas API',
    description: 'High-availability geospatial API with FastAPI and Caching.',
    tech: ['FastAPI', 'PostGIS', 'Redis'],
    image: 'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Chronicle',
    description: 'Notebook app with local-first sync and conflict-free merges.',
    tech: ['Tauri', 'Rust', 'CRDT'],
    image: 'https://images.unsplash.com/photo-1715170264551-e07ee56732fe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaHJvbmljbGV8ZW58MHwwfHx8MTc2MjUwODcxNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Pulse',
    description: 'Lightweight monitoring with anomaly detection and alerts.',
    tech: ['Python', 'TimescaleDB', 'Grafana'],
    image: 'https://images.unsplash.com/photo-1682706841289-9d7ddf5eb999?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQdWxzZXxlbnwwfDB8fHwxNzYyNTA4NzE2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

// Utilities
export function GradientDivider() {
  return <div className="h-px w-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 opacity-60" />;
}
