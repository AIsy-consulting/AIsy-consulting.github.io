export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-serif text-lg">AIsy</span>
          <span className="ml-3 text-sm text-muted">Practical AI for your business</span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm text-muted">
          <a href="https://www.linkedin.com/in/gidonpeeper" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            LinkedIn
          </a>
          <a href="https://gidonpeeper.github.io" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            Personal site
          </a>
          <a href="mailto:gidon.aisy@gmail.com" className="transition-colors hover:text-ink">
            Email
          </a>
        </nav>
        <span className="text-sm text-muted">© {new Date().getFullYear()} Gidon Peeper · London</span>
      </div>
    </footer>
  )
}
