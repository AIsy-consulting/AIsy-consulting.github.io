import SectionHeading from './SectionHeading'

const projects = [
  {
    period: '2026 to present',
    kind: 'Client engagement',
    org: 'Social media software company',
    title: 'Telling businesses what kind of social media post will perform',
    body: [
      'A software company whose customers publish to social media wanted to give them advice on what kind of post works, based on real results rather than opinion. I built the whole system: collecting the data safely, using AI to describe what is in each post, and analysing which qualities genuinely lead to more reach and engagement. The findings are delivered so that customers’ own AI assistants can use them.',
      'I work directly with the CEO on product direction, with the engineering team on how the system connects to their product, and with early customers on the questions they actually want answered.',
    ],
    tech: 'Pseudonymised daily sync from production into a BigQuery warehouse; multimodal LLM labelling of posts against a fixed feature taxonomy; statistical modelling that separates real effects from coincidence; results served through MCP tools. Python, Node.js, Google Cloud.',
    link: null,
  },
  {
    period: '2025 to 2026',
    kind: 'Research',
    org: 'Princeton University',
    title: 'Using language models to understand how the brain handles conversation',
    body: [
      'A year at the Princeton Neuroscience Institute, in the Hasson Lab, using AI language models to study how the brain processes everyday conversation. Careful work on messy data, built into a large codebase shared by a team of researchers. Two papers were presented at an international conference in 2026, one with me as first author.',
    ],
    tech: 'Designing and evaluating representations of linguistic features from LLM embeddings; neural signal processing; statistical modelling with multiple-comparison control. Python.',
    link: { href: 'https://openreview.net/forum?id=kFoXJzTPOI', label: 'Read the paper' },
  },
  {
    period: '2023',
    kind: 'Research and delivery',
    org: 'VU Amsterdam, Leiden University, University of Amsterdam',
    title: 'Robots as mental health coaches',
    body: [
      'Programmed humanoid robots to guide people through a therapy programme and, together with clinical therapists, designed a study comparing them with a screen-based version. Published in the International Journal of Social Robotics in 2026.',
    ],
    tech: 'Dialogue and behaviour programming for humanoid robots; study design with clinicians; efficacy, alliance and adherence measures.',
    link: { href: 'https://doi.org/10.1007/s12369-026-01417-8', label: 'Read the paper' },
  },
]

export default function Work() {
  return (
    <section id="work" className="border-t border-border bg-surface">
      <div className="container-x py-20 md:py-28">
        <SectionHeading
          label="Selected work"
          title="Work I can"
          accent="point to."
          intro="A current engagement and the research it grew out of."
        />

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
                {p.body.map((para, i) => (
                  <p key={i} className="mb-4 max-w-3xl leading-relaxed text-muted">
                    {para}
                  </p>
                ))}
                <p className="tech-note mt-5 max-w-3xl rounded-xl bg-paper px-4 py-3">
                  <strong>For your technical team: </strong>
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
