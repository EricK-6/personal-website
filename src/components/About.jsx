import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <Section id="about" kicker="About" title="About me">
      <div className="grid gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            Kia ora! I'm a penultimate-year Computer Systems Engineering (Hons) student
            at the University of Auckland, drawn to the boundary between hardware and
            software — firmware, PCBs, and the interfaces that tie them together.
            Comfortable across C, Java, Python, and React, with an AWS Cloud
            Practitioner cert backing the cloud side.
          </p>
          <p>
            Outside of coursework I teach robotics at ciLab to students aged 8–16, and
            I'm looking for a summer 2026/27 internship where I can contribute to real
            systems — embedded, full-stack, or anywhere the two meet.
          </p>
        </Reveal>

        <Reveal as="aside" delay={120} className="space-y-4 block">
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
        </Reveal>
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
