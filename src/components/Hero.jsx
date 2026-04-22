export default function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* subtle background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]
                   bg-gradient-to-b from-blue-50/60 via-white to-transparent
                   dark:from-blue-950/30 dark:via-zinc-950 dark:to-transparent"
      />
      <div className="container-page">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to summer 2026/27 internships
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Dohyun <span className="text-zinc-500 dark:text-zinc-500">(</span>Eric<span className="text-zinc-500 dark:text-zinc-500">)</span> Kim
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Computer Systems Engineering student at the{' '}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">University of Auckland</span>.
            I build at the boundary of{' '}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">embedded systems</span> and{' '}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">software</span> — microcontrollers,
            PCBs, React front-ends, and the glue in between.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/CV.pdf" download className="btn-primary" aria-label="Download CV as PDF">
              <DownloadIcon /> Download CV
            </a>
            <a href="#projects" className="btn-secondary">
              View projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/EricK-6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <GitHubIcon /> EricK-6
            </a>
            <a
              href="https://www.linkedin.com/in/erick06/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <LinkedInIcon /> erick06
            </a>
            <span className="inline-flex items-center gap-1.5">
              <PinIcon /> Auckland, NZ
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.11 0 1.52-.01 2.75-.01 3.12 0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.38-1.86c3.61 0 4.28 2.38 4.28 5.47v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
