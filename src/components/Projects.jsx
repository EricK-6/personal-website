import Section from './Section.jsx'

const PROJECTS = [
  {
    title: 'Winnie the Bot',
    tag: '3rd Place — ECSE Design Competition',
    year: '2025',
    role: 'Team · Hardware & software integration',
    description:
      'An interactive robot featuring face recognition, speech input/output, servo-based movement, and ChatGPT-powered dialogue. I contributed across hardware integration, Python interfacing, and exhibition materials.',
    highlights: [
      'Face recognition + speech pipeline',
      'ChatGPT-driven dialogue loop',
      'Servo-based expressive movement',
    ],
    tech: ['Python', 'Embedded C', 'ChatGPT API', 'OpenCV', 'Servos'],
    color: 'from-amber-500/20 to-rose-500/20',
    initial: 'W',
    href: null, // add repo/demo link once public
  },
  {
    title: 'Smart Energy Monitor',
    tag: 'Embedded Systems Design',
    year: '2025',
    role: 'Team · Firmware + PCB',
    description:
      'An embedded system that measures and displays real-time household energy usage. Built on ATmega microcontrollers with full-stack embedded work — sensor interfacing, ADC data handling, signal conditioning, PCB design, and simulation.',
    highlights: [
      'ATmega firmware in embedded C',
      'Altium PCB design + LTspice simulation',
      'ADC pipeline with signal conditioning',
    ],
    tech: ['ATmega', 'Embedded C', 'Altium', 'LTspice', 'ADC'],
    color: 'from-emerald-500/20 to-teal-500/20',
    initial: 'E',
    href: null,
  },
  {
    title: 'KEB Project Playground',
    tag: 'Web Design',
    year: '2025',
    role: 'Team · Front-end',
    description:
      'A React-based website for the Korean Engineering Body (KEB) at UoA, showcasing events and executives. Collaborated with senior students on Figma designs and implemented interactive layouts and reusable components.',
    highlights: [
      'React component architecture',
      'Figma → code collaboration',
      'Responsive interactive layouts',
    ],
    tech: ['React', 'JavaScript', 'Figma', 'HTML/CSS'],
    color: 'from-sky-500/20 to-indigo-500/20',
    initial: 'K',
    href: null,
  },
  {
    title: 'Java OOP Projects',
    tag: 'Individual',
    year: '2025',
    role: 'Solo · Software engineering fundamentals',
    description:
      'Multiple Java command-line systems — an operator management tool, an adaptive AI Mind Game, and a graph-based routing app — applying OOP, design patterns (Strategy, Factory), and core data structures with Maven and JUnit.',
    highlights: [
      'Strategy & Factory design patterns',
      'Graph algorithms for routing',
      'Test-driven with Maven + JUnit',
    ],
    tech: ['Java', 'Maven', 'JUnit', 'OOP', 'Graphs'],
    color: 'from-violet-500/20 to-fuchsia-500/20',
    initial: 'J',
    href: null,
  },
]

export default function Projects() {
  return (
    <Section
      id="projects"
      kicker="Projects"
      title="Things I've built"
      subtitle="A mix of hardware, software, and everything in between. Each project stretched a different part of the Computer Systems Engineering stack."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
        More on my <a href="https://github.com/EricK-6" target="_blank" rel="noreferrer" className="underline hover:text-accent dark:hover:text-accent-dark">GitHub</a>.
      </p>
    </Section>
  )
}

function ProjectCard({ project }) {
  const { title, tag, year, role, description, highlights, tech, color, initial, href } = project
  return (
    <article className="card flex flex-col overflow-hidden">
      {/* Image placeholder — swap <div> for <img src="..."> when you have screenshots */}
      <div
        className={`relative -m-6 mb-6 h-44 overflow-hidden bg-gradient-to-br ${color} flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.3),transparent_50%)]" />
        <span className="relative text-6xl font-extrabold text-white/90 drop-shadow-sm">
          {initial}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:bg-zinc-900/80 dark:text-zinc-200">
          {year}
        </span>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="text-xs font-medium uppercase tracking-widest text-accent dark:text-accent-dark">
          {tag}
        </div>
        <h3 className="mt-1 text-xl font-semibold">{title}</h3>
        <div className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-500">{role}</div>
        <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {description}
        </p>

        {highlights?.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent dark:bg-accent-dark" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {tech?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline dark:text-accent-dark"
          >
            View project →
          </a>
        )}
      </div>
    </article>
  )
}
