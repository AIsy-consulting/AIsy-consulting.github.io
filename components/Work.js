import SectionHeading from './SectionHeading'

const projects = [
  {
    period: '2026 to present',
    kind: 'Client engagement',
    org: 'Social media software company',
    title: 'Telling businesses what kind of social media post will perform',
    body: 'A software company wanted to give its customers advice on what kind of post works, based on real results rather than opinion. I built the system end to end: collecting the data safely, using AI to describe each post, and analysing which qualities lead to more reach and engagement. The results are delivered so that customers’ own AI assistants can use them.',
    tech: 'Pseudonymised daily sync from production into a BigQuery warehouse, multimodal LLM labelling against a fixed taxonomy, statistical modelling that separates real effects from coincidence, results served through MCP tools. Python, Node.js, Google Cloud.',
    link: null,
  },
  {
    period: '2025 to 2026',
    kind: 'Research',
    org: 'Princeton University',
    title: 'Using language models to study how the brain handles conversation',
    body: 'A year at the Princeton Neuroscience Institute using language models to study how the brain processes everyday conversation. Careful work on messy data, in a codebase shared by a team of researchers. Two papers at CCN 2026, one as first author.',
    tech: 'Linguistic feature representations from LLM embeddings, neural signal processing, statistical modelling with multiple-comparison control. Python.',
    link: { href: 'https://openreview.net/forum?id=kFoXJzTPOI', label: 'Read the paper' },
  },
]

export default function Work() {
  return (
    <section id="work" className="border-t border-border bg-surface">
      <div className="container-x py-20 md:py-28">
        <SectionHeading label="Work" title="Two things I can" accent="point to." />

        <div className="divide-y divide-border border-t border-border">
          {projects.map((p) => (
            <article key={p.title} className="grid gap-5 py-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-12">
              <div className="text-sm leading-relaxed">
                <div className="font-medium text-accent">{p.period}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{p.kind}</div>
                <div className="mt-3 text-muted">{p.org}</div>
              </div>
              <div>
                <h3 className="mb-4 max-w-2xl font-serif text-2xl font-normal leading-snug md:text-[1.75rem]">{p.title}</h3>
                <p className="mb-4 max-w-3xl leading-relaxed text-muted">{p.body}</p>
                <p className="tech-note mt-5 max-w-3xl rounded-xl bg-paper px-4 py-3">
                  <strong>In technical terms: </strong>
                  {p.tech}
                </p>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                  >
                    {p.link.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
