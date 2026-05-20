const steps = [
  {
    num: '1',
    title: 'Discovery call',
    desc: '30 minutes. I listen to your workflow, identify where AI adds genuine value, and recommend the right product — or tell you honestly if it\'s not the right time.',
  },
  {
    num: '2',
    title: 'Scoped proposal',
    desc: 'A one-page document: what I build, what you get, and the timeline. No surprises. You sign off before a single line of code is written.',
  },
  {
    num: '3',
    title: 'Build & iterate',
    desc: 'A working prototype in the first few days, then refined with your feedback. You see something real early — not a slide deck.',
  },
  {
    num: '4',
    title: 'Handover',
    desc: 'Full documentation, a walkthrough for your team, and a 30-day support window. You own everything I build.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
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
        03 — Process
      </p>
      <h2 style={{
        fontFamily: 'Fraunces, serif',
        fontWeight: 300,
        fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        marginBottom: '4rem',
      }}>
        How it <em style={{ fontStyle: 'italic', color: '#cdf53c' }}>works.</em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: '#2a2a27',
        border: '1px solid #2a2a27',
      }}>
        {steps.map((s) => (
          <div key={s.num} style={{ background: '#0b0b0a', padding: '2.5rem 2rem' }}>
            <div style={{
              fontFamily: 'Fraunces, serif',
              fontSize: '3rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.07)',
              lineHeight: 1,
              marginBottom: '1rem',
            }}>
              {s.num}
            </div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.6rem' }}>
              {s.title}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#7a7870', lineHeight: 1.65 }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
