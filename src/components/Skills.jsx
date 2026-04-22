import Section from './Section.jsx'

const GROUPS = [
  {
    label: 'Languages',
    items: ['Java', 'C', 'Python', 'VHDL', 'MATLAB', 'R', 'JavaScript'],
  },
  {
    label: 'Embedded & Hardware',
    items: ['ATmega', 'Arduino', 'Altium', 'LTspice', 'Proteus', 'Intel Quartus II', 'Microchip Studio', 'QuestaSim'],
  },
  {
    label: 'Web & Software',
    items: ['React', 'HTML/CSS', 'Maven', 'JUnit', 'PyQt6', 'Figma'],
  },
  {
    label: 'Tooling & Cloud',
    items: ['Git & GitHub', 'VS Code', 'AWS', 'MATLAB', 'R Studio', 'Microsoft Office', 'Google Workspace', 'AutoCAD'],
  },
]

export default function Skills() {
  return (
    <Section id="skills" kicker="Skills" title="What I work with">
      <div className="grid gap-6 sm:grid-cols-2">
        {GROUPS.map((g) => (
          <div key={g.label} className="card">
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
          </div>
        ))}
      </div>
    </Section>
  )
}
