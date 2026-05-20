'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 4rem',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        background: scrolled ? 'rgba(11,11,10,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <span
        style={{
          fontFamily: 'Fraunces, serif',
          fontWeight: 400,
          fontSize: '1.1rem',
          letterSpacing: '0.02em',
          color: '#f0ede6',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        AIsy
      </span>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {['services', 'about', 'process', 'contact'].map((id) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#7a7870',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#f0ede6'}
              onMouseLeave={e => e.target.style.color = '#7a7870'}
            >
              {id}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo('contact')}
        style={{
          background: '#cdf53c',
          color: '#0b0b0a',
          padding: '0.55rem 1.4rem',
          borderRadius: '2px',
          fontSize: '0.85rem',
          fontWeight: 500,
          fontFamily: 'DM Sans, sans-serif',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s',
          letterSpacing: '0.02em',
        }}
        onMouseEnter={e => e.target.style.background = '#a8c930'}
        onMouseLeave={e => e.target.style.background = '#cdf53c'}
      >
        Get in touch
      </button>
    </nav>
  )
}
