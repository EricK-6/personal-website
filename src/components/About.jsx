import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" kicker="About" title="About me">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            Kia ora! I'm a penultimate-year Computer Systems Engineering (Hons) student
            at the University of Auckland, passionate about software development and
            embedded systems. I enjoy work that lives at the boundary of hardware and
            software — firmware, PCBs, and the interfaces that tie them together.
          </p>
          <p>
            I've built hands-on experience across hardware–software integration and
            application development: an AI-powered robot that placed 3rd at the ECSE
            Design Competition, an ATmega-based smart energy monitor with a custom PCB,
            a Python desktop analytics app that collapsed a full-day reporting workflow
            into 30 seconds, and a React site now used by the Korean Engineering Body at
            UoA. I'm comfortable across the stack — C, Java, Python, React — and
            recently strengthened my cloud foundation with an AWS Cloud Practitioner
            certification.
          </p>
          <p>
            Outside of projects I teach robotics at ciLab, mentoring students aged 8–16
            through embedded programming and competition strategy. I'm looking for a
            summer 2026/27 internship where I can contribute to real systems and learn
            from strong engineers — embedded, full-stack, or anywhere the two meet.
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
