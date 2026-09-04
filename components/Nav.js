'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#services', label: 'How I can help' },
  { href: '#process', label: 'How it works' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'Questions' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open
  const shell = solid ? 'border-border bg-paper/90 backdrop-blur-md' : 'border-transparent bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${shell}`}>
      <nav className="container-x flex items-center justify-between py-4 md:py-5" aria-label="Main">
        <a href="#top" className="font-serif text-[1.35rem] text-ink">
          AIsy
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden px-5 py-2.5 md:inline-flex">
          Book a free call
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 block h-[2px] w-6 rounded bg-current transition-all duration-300 ${open ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-2 block h-[2px] w-6 rounded bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 block h-[2px] w-6 rounded bg-current transition-all duration-300 ${open ? 'top-2 -rotate-45' : 'top-4'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-paper md:hidden">
          <ul className="container-x flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 text-lg text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-x py-6">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Book a free call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
