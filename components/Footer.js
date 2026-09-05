const sections = [
  { href: '#services', label: 'How I can help' },
  { href: '#check', label: 'Two-minute check' },
  { href: '#process', label: 'How it works' },
  { href: '#principles', label: 'How I work' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'Questions' },
  { href: '#made-with-ai', label: 'Made with AI' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="font-serif text-xl">AIsy</div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Practical AI for your business, explained in plain language. Run by Gidon Peeper, an AI engineer
              in London, working with companies in the UK, the Netherlands and the US.
            </p>
          </div>
          <nav aria-label="Sections">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">On this page</div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-muted transition-colors hover:text-ink">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:gidon.aisy@gmail.com" className="text-muted transition-colors hover:text-ink">
                  gidon.aisy@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gidonpeeper" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-ink">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://gidonpeeper.github.io" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-ink">
                  Personal site and CV
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs leading-relaxed text-muted md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl">
            Privacy: this site sets no cookies and runs no analytics or tracking. Messages sent through the contact form are
            delivered by Formspree to my inbox and used only to reply to you.
          </p>
          <p className="shrink-0">© {new Date().getFullYear()} Gidon Peeper · London</p>
        </div>
      </div>
    </footer>
  )
}
