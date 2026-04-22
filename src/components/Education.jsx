import Section from './Section.jsx'

const COURSEWORK = [
  'Computer Systems Design',
  'Object Oriented Programming',
  'Electronics',
  'Electrical Systems',
  'Mathematical Modelling',
  'Software Quality Assurance',
]

export default function Education() {
  return (
    <Section id="education" kicker="Education" title="Academic background">
      <div className="card">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold">
            University of Auckland ·{' '}
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">Auckland, NZ</span>
          </h3>
          <span className="text-sm text-zinc-500 dark:text-zinc-500">Expected Nov 2027</span>
        </div>
        <div className="mt-1 text-zinc-700 dark:text-zinc-300">
          Bachelor of Engineering (Honours) · Computer Systems Engineering
        </div>
        <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
          Concentration: Embedded systems with strong software integration
        </div>

        <div className="mt-6">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-2">
            Relevant coursework
          </div>
          <div className="flex flex-wrap gap-2">
            {COURSEWORK.map((c) => (
              <span key={c} className="tag">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
