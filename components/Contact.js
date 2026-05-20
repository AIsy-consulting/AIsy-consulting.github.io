'use client'
import { useState } from 'react'

const links = [
  { label: 'Email', value: 'gidonpeeper@gmail.com', href: 'mailto:gidonpeeper@gmail.com' },
  { label: 'LinkedIn', value: '/in/gidonpeeper', href: 'https://linkedin.com/in/gidonpeeper' },
  { label: 'Portfolio', value: 'gidonpeeper.github.io', href: 'https://gidonpeeper.github.io' },
  { label: 'Phone', value: '+31 6 209 82 768', href: 'tel:+31620982768' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <section
      id="contact"
      style={{ padding: '7rem 4rem', borderTop: '1px solid #2a2a27' }}
    >
      <p style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '0.7rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#cdf53c',
        marginBottom: '1rem',
      }}>
        04 — Contact
      </p>
      <h2 style={{
        fontFamily: 'Fraunces, serif',
        fontWeight: 300,
        fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        marginBottom: '4rem',
      }}>
        Let's build{' '}
        <em style={{ fontStyle: 'italic', color: '#cdf53c' }}>something.</em>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
        <div>
          <p style={{ color: '#7a7870', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1rem' }}>
            I take on a limited number of projects at a time so each client gets full attention.
            If you have a workflow bottleneck you think AI could fix, let's talk about whether it's the right fit.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: '#7a7870',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  padding: '0.8rem 0',
                  borderBottom: '1px solid #2a2a27',
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#cdf53c' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#7a7870' }}
              >
                <span style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#5a5a58',
                  minWidth: '68px',
                }}>
                  {l.label}
                </span>
                {l.value}
              </a>
            ))}
          </div>
        </div>

        {submitted ? (
          <div style={{
            border: '1px solid #2a2a27',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', fontWeight: 300 }}>
              Message received.
            </div>
            <p style={{ color: '#7a7870', fontSize: '0.9rem', lineHeight: 1.7 }}>
              I'll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <FormField label="Name" type="text" placeholder="Your name" required />
            <FormField label="Email" type="email" placeholder="your@company.com" required />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={labelStyle}>I'm interested in</label>
              <select style={inputStyle} defaultValue="">
                <option value="" disabled>Select a product…</option>
                <option value="knowledgebot">KnowledgeBot</option>
                <option value="draftassist">DraftAssist</option>
                <option value="researchpilot">ResearchPilot</option>
                <option value="other">Not sure yet</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={labelStyle}>Tell me about your workflow</label>
              <textarea
                placeholder="What are you trying to automate or improve?"
                style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? '#a8c930' : '#cdf53c',
                color: '#0b0b0a',
                border: 'none',
                padding: '0.9rem 2rem',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: loading ? 'not-allowed' : 'pointer',
                borderRadius: '2px',
                alignSelf: 'flex-start',
                letterSpacing: '0.02em',
                transition: 'background 0.2s',
              }}
            >
              {loading ? 'Sending…' : 'Send message →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function FormField({ label, type, placeholder, required }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label style={labelStyle}>{label}</label>
      <input type={type} placeholder={placeholder} required={required} style={inputStyle} />
    </div>
  )
}

const labelStyle = {
  fontFamily: 'DM Mono, monospace',
  fontSize: '0.7rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#7a7870',
}

const inputStyle = {
  background: '#141412',
  border: '1px solid #2a2a27',
  color: '#f0ede6',
  padding: '0.75rem 1rem',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.9rem',
  fontWeight: 300,
  borderRadius: '2px',
  outline: 'none',
  width: '100%',
}
