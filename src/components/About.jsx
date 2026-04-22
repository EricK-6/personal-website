import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" kicker="About" title="About me">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            I'm a penultimate-year Computer Systems Engineering (Hons) student at the
            University of Auckland, focused on embedded systems with strong software
            integration. I enjoy work that sits between hardware and software — the
            firmware, the PCBs, and the interfaces that tie them together.
          </p>
          <p>
            Recent projects range from an interactive AI-powered robot (3rd place at
            the ECSE Design Competition) to an ATmega-based smart energy monitor and a
            React site for the Korean Engineering Body at UoA. I'm comfortable across
            the stack — C, Java, Python, React — and increasingly interested in cloud
            (AWS Cloud Practitioner certified).
          </p>
          <p>
            I'm looking for a summer 2026/27 internship where I can contribute to real
            systems, ship useful code, and learn from strong engineers — embedded,
            full-stack, or anywhere the two meet.
          </p>
        </div>

        <aside className="space-y-4">
          <div className="card">
            <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
              Quick facts
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              <Fact label="Location" value="Auckland, NZ" />
              <Fact label="Degree" value="BE(Hons) Computer Systems" />
              <Fact label="University" value="University of Auckland" />
              <Fact label="Graduation" value="November 2027" />
              <Fact label="Availability" value="Summer 2026/27" />
            </dl>
          </div>
        </aside>
      </div>
    </Section>
  )
}

function Fact({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-zinc-500 dark:text-zinc-500">{label}</dt>
      <dd className="text-right font-medium text-zinc-800 dark:text-zinc-200">{value}</dd>
    </div>
  )
}
