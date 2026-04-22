import Section from './Section.jsx'

const ROLES = [
  {
    title: 'Academic Team Executive',
    org: 'Korean Engineering Body (KEB) · University of Auckland',
    period: '2024 – Present',
    description:
      'Organize and lead tutorials for first-year engineering students, strengthening KEB\'s academic support and campus visibility.',
  },
  {
    title: 'Mentor',
    org: 'Korean Engineering Body (KEB) · University of Auckland',
    period: '2024 – Present',
    description:
      'Support first-year students with academic guidance and social integration into university life.',
  },
]

export default function Leadership() {
  return (
    <Section id="leadership" kicker="Leadership" title="Activities & leadership">
      <div className="grid gap-4 sm:grid-cols-2">
        {ROLES.map((r) => (
          <div key={r.title} className="card">
            <h3 className="font-semibold">{r.title}</h3>
            <div className="text-sm text-zinc-500 dark:text-zinc-500">{r.org}</div>
            <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{r.period}</div>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {r.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
