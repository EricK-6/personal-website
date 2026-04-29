import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

const GROUPS = [
  {
    label: 'Languages',
    items: ['Java', 'C', 'Python', 'JavaScript'],
  },
  {
    label: 'Frameworks & Tools',
    items: ['React.js', 'Git', 'Maven', 'JUnit', 'Figma', 'AWS'],
  },
  {
    label: 'Hardware & EDA',
    items: ['Atmel AVR', 'Altium Designer', 'LTspice', 'Arduino IDE', 'Quartus Prime'],
  },
  {
    label: 'Other',
    items: ['MATLAB', 'VHDL', 'PyQt'],
  },
]

export default function Skills() {
  return (
    <Section id="skills" kicker="Skills" title="What I work with">
      <div className="grid gap-6 sm:grid-cols-2">
        {GROUPS.map((g, i) => (
          <Reveal key={g.label} delay={i * 80} className="card">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
              {g.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
