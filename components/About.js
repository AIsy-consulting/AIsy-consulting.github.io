import SectionHeading from './SectionHeading'

const credentials = [
  { org: 'Ayrshare', role: 'External AI consultant and engineer', period: '2026 to present' },
  { org: 'Princeton University, Hasson Lab', role: 'Research intern and assistant', period: '2025 to 2026' },
  { org: 'University of Amsterdam', role: 'MSc Artificial Intelligence', period: '2023 to 2026' },
  { org: 'Cognitive AI Lab, University of Amsterdam', role: 'Summer research intern', period: '2025' },
  { org: 'VU University Amsterdam', role: 'BSc Artificial Intelligence, with honours', period: '2020 to 2023' },
  { org: 'University of Amsterdam', role: 'BSc Psychobiology', period: '2019 to 2023' },
]

const publications = [
  {
    title: 'Distributed Sensitivity to Semantics and Structure Across the Brain During Naturalistic Conversations',
    venue: 'CCN 2026 · first author',
    href: 'https://gidonpeeper.github.io/distributed-sensitivity.pdf',
  },
  {
    title: 'Prospective Planning and Retrospective Integration: Distinct Neural Signatures of Future and Past in Naturalistic Conversations',
    venue: 'CCN 2026',
    href: 'https://openreview.net/forum?id=kFoXJzTPOI',
  },
  {
    title: 'Examining the Potential of Social Robots to Increase Adherence in Internet-based CBT',
    venue: 'International Journal of Social Robotics, 2026',
    href: 'https://doi.org/10.1007/s12369-026-01417-8',
  },
]

export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="container-x py-20 md:py-28">
        <SectionHeading label="About" title="Who you would be" accent="working with." />

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <div className="text-[1.02rem]">
            <p className="mb-5 leading-relaxed text-muted">
              AIsy is <strong className="font-medium text-ink">Gidon Peeper</strong>. I am an AI engineer based in
              London. I studied Artificial Intelligence and Psychobiology in Amsterdam, and spent a year at
              Princeton University using language models to study how the brain processes conversation.
            </p>
            <p className="mb-5 leading-relaxed text-muted">
              Since 2026 I have been the external AI consultant and engineer for Ayrshare, a social media software
              company, where I built and run their data and AI recommendation system. Alongside that I take on a
              small number of AIsy projects at a time, so each one gets proper attention.
            </p>
            <p className="mb-5 leading-relaxed text-muted">
              What I took from research is the habit of checking a claim before making it. What I took from teaching
              and from leading a national student council is that most problems are explained badly rather than
              being genuinely hard. I try to do both well: build things that work, and explain them so that you can
              make good decisions about them.
            </p>
            <p className="mb-8 leading-relaxed text-muted">I work in English and Dutch, from London and remotely.</p>
            <a href="https://gidonpeeper.github.io" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Full CV and personal site
            </a>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Experience and education</h3>
              <ul className="card divide-y divide-border">
                {credentials.map((c) => (
                  <li key={`${c.org}-${c.role}`} className="flex items-start justify-between gap-4 px-5 py-4">
                    <div>
                      <div className="font-medium text-ink">{c.org}</div>
                      <div className="mt-0.5 text-sm text-muted">{c.role}</div>
                    </div>
                    <div className="shrink-0 pt-0.5 text-sm text-muted">{c.period}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Research publications</h3>
              <ul className="space-y-4">
                {publications.map((p) => (
                  <li key={p.href} className="border-l-2 border-accent/60 pl-4">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.95rem] leading-snug text-ink transition-colors hover:text-accent"
                    >
                      {p.title}
                    </a>
                    <div className="mt-1 text-sm text-muted">{p.venue}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
