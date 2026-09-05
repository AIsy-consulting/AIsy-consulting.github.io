'use client'
import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'

const FORM_ENDPOINT = 'https://formspree.io/f/meedevoq'
const EMAIL = 'gidon.aisy@gmail.com'

const links = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/gidonpeeper', href: 'https://www.linkedin.com/in/gidonpeeper' },
  { label: 'Phone', value: '+31 6 209 82 768', href: 'tel:+31620982768' },
]

const interests = [
  'Answers from our documents',
  'Understanding our data',
  'Automating repetitive work',
  'An AI feature in our product',
  'Not sure yet, I would like to talk it through',
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [interest, setInterest] = useState('')

  useEffect(() => {
    const onInterest = (e) => {
      if (interests.includes(e.detail)) setInterest(e.detail)
    }
    window.addEventListener('aisy:interest', onInterest)
    return () => window.removeEventListener('aisy:interest', onInterest)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              label="Contact"
              title="Let’s"
              accent="talk."
              intro="Tell me a little about your business and what you would like to improve. No technical knowledge needed. I reply within one working day. The first call is free."
            />

            <ul className="card divide-y divide-border">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 px-5 py-4 text-[0.95rem] text-ink transition-colors hover:text-accent"
                  >
                    <span className="min-w-[72px] text-xs font-semibold uppercase tracking-[0.12em] text-muted">{l.label}</span>
                    {l.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">Based in London · Works remotely · English and Dutch</p>
          </div>

          <div className="card p-7 md:p-9">
            {status === 'sent' ? (
              <div className="flex flex-col gap-3">
                <div className="font-serif text-2xl">Thank you, message received.</div>
                <p className="leading-relaxed text-muted">
                  I will reply within one working day. If it is urgent, email me directly at{' '}
                  <a href={`mailto:${EMAIL}`} className="font-medium text-accent underline underline-offset-4">
                    {EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" type="text" placeholder="Jane Smith" required autoComplete="name" />
                  <Field label="Email" name="email" type="email" placeholder="jane@company.com" required autoComplete="email" />
                </div>
                <Field label="Company (optional)" name="company" type="text" placeholder="Where you work" autoComplete="organization" />
                <div className="flex flex-col gap-2">
                  <label htmlFor="interest" className="field-label">
                    What would you like help with?
                  </label>
                  <select id="interest" name="interest" className="field" value={interest} onChange={(e) => setInterest(e.target.value)}>
                    <option value="" disabled>
                      Choose one
                    </option>
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="field-label">
                    Tell me about your business and what you would like to improve
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="A few lines is plenty. What takes too much time?"
                    className="field min-h-[140px] resize-y"
                  />
                </div>
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <input type="hidden" name="_subject" value="New enquiry via aisy-consulting.github.io" />

                <div className="flex flex-wrap items-center gap-4">
                  <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:cursor-wait disabled:opacity-70">
                    {status === 'sending' ? 'Sending' : 'Send message'}
                  </button>
                  {status === 'error' && (
                    <p role="alert" className="text-sm text-muted">
                      Something went wrong. Please email me directly at{' '}
                      <a href={`mailto:${EMAIL}`} className="font-medium text-accent underline underline-offset-4">
                        {EMAIL}
                      </a>
                      .
                    </p>
                  )}
                </div>
                <p className="text-xs leading-relaxed text-muted">
                  Your details are only used to reply to you. No newsletters, no sharing.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, placeholder, required, autoComplete }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} className="field" />
    </div>
  )
}
