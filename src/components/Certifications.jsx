import Section from './Section.jsx'

const CERTS = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Apr 2026',
    description:
      'Foundational cloud computing knowledge — AWS services, architecture, security, shared responsibility model, pricing, and cost optimization.',
  },
]

export default function Certifications() {
  return (
    <Section id="certifications" kicker="Certifications" title="Credentials">
      <div className="grid gap-4 sm:grid-cols-2">
        {CERTS.map((c) => (
          <div key={c.name} className="card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold">{c.name}</h3>
                <div className="text-sm text-zinc-500 dark:text-zinc-500">{c.issuer}</div>
              </div>
              <span className="shrink-0 rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                {c.date}
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
