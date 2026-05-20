'use client'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 4rem 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-2rem',
          transform: 'translateY(-50%)',
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(200px, 35vw, 480px)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.025)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          fontStyle: 'italic',
        }}
      >
        AI
      </div>

      <p style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '0.75rem',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#cdf53c',
        marginBottom: '1.5rem',
        animation: 'fadeUp 0.6s ease both 0.1s',
      }}>
        AI Integration — Built for your team
      </p>

      <h1 style={{
        fontFamily: 'Fraunces, serif',
        fontWeight: 300,
        fontSize: 'clamp(3rem, 7vw, 6.5rem)',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        maxWidth: '14ch',
        marginBottom: '2rem',
        animation: 'fadeUp 0.7s ease both 0.25s',
      }}>
        Your AI layer,{' '}
        <em style={{ fontStyle: 'italic', color: '#cdf53c' }}>live in weeks.</em>
      </h1>

      <p style={{
        maxWidth: '520px',
        color: '#7a7870',
        fontSize: '1.05rem',
        lineHeight: 1.75,
        marginBottom: '3rem',
        animation: 'fadeUp 0.7s ease both 0.4s',
      }}>
        Fixed-scope AI projects that slot into your existing workflows.
        No six-month retainers. No vague roadmaps. A working product, handed over,
        ready to use — backed by research from Princeton and the University of Amsterdam.
      </p>

      <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        animation: 'fadeUp 0.7s ease both 0.55s',
      }}>
        <button
          onClick={() => scrollTo('services')}
          style={{
            background: '#cdf53c',
            color: '#0b0b0a',
            padding: '0.8rem 2rem',
            borderRadius: '2px',
            fontSize: '0.9rem',
            fontWeight: 500,
            fontFamily: 'DM Sans, sans-serif',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = '#a8c930'}
          onMouseLeave={e => e.target.style.background = '#cdf53c'}
        >
          See what I build
        </button>
        <button
          onClick={() => scrollTo('about')}
          style={{
            background: 'none',
            border: 'none',
            color: '#7a7870',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontFamily: 'DM Sans, sans-serif',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#f0ede6'}
          onMouseLeave={e => e.target.style.color = '#7a7870'}
        >
          About me →
        </button>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
