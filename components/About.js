'use client'

const credentials = [
  { org: 'Princeton University', role: 'Research Intern — Hasson Lab, Neuroscience · 2025–present' },
  { org: 'University of Amsterdam', role: 'MSc Artificial Intelligence · 2023–present' },
  { org: 'Cognitive AI Lab Amsterdam', role: 'Summer Research Intern — Causal LLM Probing · 2025' },
  { org: 'VU University Amsterdam', role: 'BSc Artificial Intelligence, With Honors · 2020–2023' },
  { org: 'University of Amsterdam', role: 'BSc Psychobiology · 2019–2023' },
]

export default function About() {
  return (
    <section
      id="about"
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
        02 — About
      </p>
      <h2 style={{
        fontFamily: 'Fraunces, serif',
        fontWeight: 300,
        fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        marginBottom: '4rem',
      }}>
        Research-grade AI.{' '}
        <em style={{ fontStyle: 'italic', color: '#cdf53c' }}>Practical delivery.</em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'start',
      }}>
        <div>
          <p style={{ color: '#7a7870', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            AIsy is run by <strong style={{ color: '#f0ede6', fontWeight: 400 }}>Gidon Peeper</strong> — an MSc Artificial Intelligence
            candidate at the University of Amsterdam, with active research experience at the{' '}
            <strong style={{ color: '#f0ede6', fontWeight: 400 }}>Princeton Neuroscience Institute</strong> (Hasson Lab)
            and the <strong style={{ color: '#f0ede6', fontWeight: 400 }}>Cognitive AI Lab in Amsterdam</strong>.
          </p>
          <p style={{ color: '#7a7870', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            My research focuses on how we can use large language models to understand how the human brain represents and processes naturalistic language —
            which means I understand these systems at a level most integrators don't. I'm not reselling
            an off-the-shelf chatbot. I build things that actually work for your specific use case.
          </p>
          <p style={{ color: '#7a7870', lineHeight: 1.8, marginBottom: '2rem' }}>
            Beyond the technical side: I've taught high school students, led national student councils,
            and communicated AI research to stakeholders from various industries. I can explain what I built to anyone in your organisation.
          </p>
          <a
            href="https://gidonpeeper.github.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#cdf53c',
              color: '#0b0b0a',
              padding: '0.75rem 1.75rem',
              borderRadius: '2px',
              fontSize: '0.85rem',
              fontWeight: 500,
              fontFamily: 'DM Sans, sans-serif',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = '#a8c930'}
            onMouseLeave={e => e.target.style.background = '#cdf53c'}
          >
            Personal portfolio →
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#2a2a27', border: '1px solid #2a2a27' }}>
          {credentials.map((c, i) => (
            <CredentialItem key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CredentialItem({ org, role }) {
  return (
    <div style={{
      background: '#0b0b0a',
      padding: '1.4rem 1.8rem',
      display: 'flex',
      gap: '1.2rem',
      alignItems: 'flex-start',
    }}>
      <div style={{
        width: 6, height: 6,
        borderRadius: '50%',
        background: '#cdf53c',
        flexShrink: 0,
        marginTop: '0.55rem',
      }} />
      <div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.15rem' }}>
          {org}
        </div>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#7a7870', letterSpacing: '0.04em' }}>
          {role}
        </div>
      </div>
    </div>
  )
}
