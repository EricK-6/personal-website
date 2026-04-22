import Section from './Section.jsx'

const EXPERIENCE = [
  {
    role: 'Robotics Coach',
    org: 'Creative Imaginary Lab (ciLab)',
    period: 'Apr 2026 – Present',
    bullets: [
      'Deliver robotics programs covering hardware, software, and Arduino C.',
      'Teach students coding mechanisms and foundational embedded concepts in a structured, hands-on format.',
    ],
  },
  {
    role: 'Front of House',
    org: 'Twelve Restaurant',
    period: 'Jul 2024 – Jan 2025',
    bullets: [
      'Delivered high-quality service in a fast-paced environment.',
      'Assisted guests and maintained efficient table transitions during peak service.',
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience" kicker="Experience" title="Where I've worked">
      <ol className="relative border-l border-zinc-200 dark:border-zinc-800 pl-6 space-y-10">
        {EXPERIENCE.map((job) => (
          <li key={job.role + job.org} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-white dark:bg-accent-dark dark:ring-zinc-950" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {job.role} ·{' '}
                <span className="text-zinc-600 dark:text-zinc-400 font-medium">{job.org}</span>
              </h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-500">{job.period}</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
