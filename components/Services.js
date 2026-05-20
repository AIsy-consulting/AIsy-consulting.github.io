'use client'
import { useState } from 'react'

const services = [
  {
    num: '01',
    name: 'DraftAssist',
    tag: '~1.5 weeks',
    desc: 'Client emails, meeting summaries, and proposals drafted in your voice — not a generic AI voice. Trained on your actual writing and calibrated to your tone.',
    detail: 'Email & report drafting · Tone-matched · LLM-powered',
  },
  {
    num: '02',
    name: 'KnowledgeBot',
    tag: '~2 weeks',
    desc: 'Your documents, manuals, and SOPs become a conversational assistant your team can query in plain English. Stop losing time searching through PDFs nobody reads.',
    detail: 'RAG pipeline · Internal doc chatbot · Custom UI',
  },
  {
    num: '03',
    name: 'ResearchPilot',
    tag: '~3 weeks',
    desc: 'Structured literature reviews, competitive analyses, and research summaries. Work that takes your team days, delivered in hours with verifiable sources.',
    detail: 'Research assistant · Structured output · Citation-linked',
  },
]

export default function Services() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="services"
      style={{
        padding: '7rem 4rem',
        borderTop: '1px solid #2a2a27',
      }}
    >
      <p style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '0.7rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#cdf53c',
        marginBottom: '1rem',
      }}>
        01 — Services
      </p>
      <h2 style={{
        fontFamily: 'Fraunces, serif',
        fontWeight: 300,
        fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        marginBottom: '0.5rem',
      }}>
        Three products.{' '}
        <em style={{ fontStyle: 'italic', color: '#cdf53c' }}>Immediate value.</em>
      </h2>
      <p style={{ color: '#7a7870', maxWidth: '500px', marginBottom: '4rem', lineHeight: 1.7 }}>
        Every engagement is fixed-scope with a clear deliverable.
        Pricing is tailored to your setup — get in touch for a quote.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: '#2a2a27',
        border: '1px solid #2a2a27',
      }}>
        {services.map((s) => (
          <ServiceCard key={s.num} {...s} onInquire={() => scrollTo('contact')} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ num, name, tag, desc, detail, onInquire }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#141412' : '#0b0b0a',
        padding: '2.5rem',
        position: 'relative',
        transition: 'background 0.25s',
        cursor: 'default',
      }}
    >
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#7a7870', marginBottom: '1.5rem' }}>
        {num}
      </div>
      <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.4rem' }}>
        {name}
      </h3>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#cdf53c', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
        {tag}
      </div>
      <p style={{ color: '#7a7870', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
        {desc}
      </p>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#5a5a58', letterSpacing: '0.06em', marginBottom: '2rem' }}>
        {detail}
      </div>
      <button
        onClick={onInquire}
        style={{
          background: 'none',
          border: '1px solid #2a2a27',
          color: '#7a7870',
          padding: '0.55rem 1.2rem',
          borderRadius: '2px',
          fontSize: '0.8rem',
          fontFamily: 'DM Sans, sans-serif',
          cursor: 'pointer',
          transition: 'all 0.2s',
          letterSpacing: '0.04em',
        }}
        onMouseEnter={e => { e.target.style.borderColor = '#cdf53c'; e.target.style.color = '#cdf53c' }}
        onMouseLeave={e => { e.target.style.borderColor = '#2a2a27'; e.target.style.color = '#7a7870' }}
      >
        Inquire →
      </button>
    </div>
  )
}
