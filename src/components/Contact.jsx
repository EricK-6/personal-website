import Section from './Section.jsx'
import { useState } from 'react'

const EMAIL = 'dohyunkim290106@gmail.com'

export default function Contact() {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const mailto = () => {
    const params = new URLSearchParams()
    if (subject) params.set('subject', subject)
    const body = `${message}\n\n— ${name}`.trim()
    if (body) params.set('body', body)
    const qs = params.toString()
    return `mailto:${EMAIL}${qs ? `?${qs}` : ''}`
  }

  return (
    <Section
      id="contact"
      kicker="Contact"
      title="Let's talk"
      subtitle="The fastest way to reach me is email. If you'd like, write a quick note below and I'll open your email client prefilled."
    >
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          <ContactLink
            label="Email"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
          />
          <ContactLink
            label="LinkedIn"
            value="linkedin.com/in/erick06"
            href="https://www.linkedin.com/in/erick06/"
            external
          />
          <ContactLink
            label="GitHub"
            value="github.com/EricK-6"
            href="https://github.com/EricK-6"
            external
          />
        </div>

        <form
          className="md:col-span-3 card space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = mailto()
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={inputClass}
                placeholder="Jane Recruiter"
              />
            </Field>
            <Field label="Subject">
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={inputClass}
                placeholder="Internship opportunity"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              className={`${inputClass} resize-y min-h-[120px]`}
              placeholder="Hi Eric, …"
            />
          </Field>
          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" className="btn-primary">
              Open in email client
            </button>
            <a href={`mailto:${EMAIL}`} className="btn-secondary">
              Just email me directly
            </a>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            This form opens your default email app — no data is stored or sent through a server.
          </p>
        </form>
      </div>
    </Section>
  )
}

const inputClass =
  'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-accent-dark dark:focus:ring-accent-dark/20'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {label}
      </span>
      {children}
    </label>
  )
}

function ContactLink({ label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group block rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
    >
      <div className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
        {label}
      </div>
      <div className="mt-1 font-medium text-zinc-900 group-hover:text-accent dark:text-zinc-100 dark:group-hover:text-accent-dark break-all">
        {value}
      </div>
    </a>
  )
}
