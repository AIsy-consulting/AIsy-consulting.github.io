import SectionHeading from './SectionHeading'
import Icon from './Icon'

const services = [
  {
    icon: 'document',
    title: 'Answers from your own documents',
    desc: 'An assistant that answers questions using your manuals, policies, contracts or past projects, rather than the whole internet. Your team stops digging through folders, and new colleagues get up to speed faster.',
    example: 'A customer support team asks “what is our returns policy for business customers?” and gets the answer, with a link to the page it came from.',
    tech: 'Retrieval-augmented generation over your document store, with source citations, access controls and an evaluation set so you know how often it is right.',
  },
  {
    icon: 'chart',
    title: 'Find out what actually drives your results',
    desc: 'You have data on sales, customers or engagement, and some gut feelings about what matters. I analyse it properly and tell you which factors really move the numbers, which only look like they do, and how sure you can be of each answer.',
    example: 'A marketing team learns which qualities of a post genuinely lead to more reach, and which popular tips make no measurable difference.',
    tech: 'Statistical modelling with proper controls and interpretable machine learning (gradient boosting, SHAP). Written findings with effect sizes and uncertainty, not just charts.',
  },
  {
    icon: 'repeat',
    title: 'Take the repetitive work off your team',
    desc: 'Reading invoices, sorting emails, tagging photos, copying details from PDFs into a spreadsheet. AI can do a lot of this reliably now, if it is set up and checked carefully. I build the automation and the checks that go with it.',
    example: 'Hundreds of supplier PDFs a month are read automatically, the key fields land in your system, and anything the model is unsure about is flagged for a person.',
    tech: 'LLM classification and extraction pipelines over text and images, with measured accuracy, human review queues and scheduled cloud jobs.',
  },
  {
    icon: 'puzzle',
    title: 'AI features in your own product',
    desc: 'You want to offer your customers something smarter: recommendations, a helpful assistant, or a way for their AI tools to use your service. I design and build it on your data, with the testing to make sure it behaves.',
    example: 'A software company gives its customers data-backed advice inside the product, and lets their AI assistants pull that advice directly.',
    tech: 'Recommendation systems, MCP servers and agent tooling, evaluation suites. Python and Node.js on Google Cloud, or your stack.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface">
      <div className="container-x py-20 md:py-28">
        <SectionHeading
          label="How I can help"
          title="Four common"
          accent="starting points."
          intro="Most projects begin with one of these. If yours does not fit neatly, that is normal. The first call is for working out what would actually help."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card flex flex-col p-7 transition-colors hover:border-ink/30 md:p-9">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-normal leading-snug">{s.title}</h3>
              <p className="mb-5 leading-relaxed text-muted">{s.desc}</p>
              <p className="mb-6 rounded-xl bg-paper px-4 py-3 text-[0.92rem] leading-relaxed text-ink/85">
                <span className="font-semibold text-accent">For example: </span>
                {s.example}
              </p>
              <p className="tech-note mt-auto border-t border-border pt-4">
                <strong>For your technical team: </strong>
                {s.tech}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-accent-soft p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Not sure where to start?</p>
            <h3 className="mb-3 font-serif text-2xl font-normal">Start with a conversation</h3>
            <p className="leading-relaxed text-muted">
              In a free 10-minute call we look at where your team’s time goes and whether AI can help. If it makes
              sense, I follow up with a short written assessment: what is feasible, roughly what it would cost,
              and where the risks are. If the honest answer is “not yet”, you get that in writing too.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0 self-start md:self-center">
            Book a free call
          </a>
        </div>
      </div>
    </section>
  )
}
