import SectionHeading from './SectionHeading'
import Icon from './Icon'

const services = [
  {
    icon: 'document',
    title: 'Answers from your own documents',
    desc: 'An assistant that answers questions from your manuals, policies, contracts and past projects, and shows where each answer came from. Your team stops searching through folders.',
    example: 'Support asks “what is our returns policy for business customers?” and gets the answer, with a link to the source.',
    tech: 'Retrieval-augmented generation over your documents, with citations, access controls and an evaluation set so you know how often it is right.',
  },
  {
    icon: 'chart',
    title: 'Find out what drives your results',
    desc: 'You have data on sales, customers or engagement. I analyse it and tell you which factors move the numbers, which only look like they do, and how sure you can be. AI is also good at spotting patterns nobody was looking for: a recurring theme in thousands of customer emails, a group of customers behaving differently, a factor nobody was tracking. I check whether those hold up before you act on them.',
    example: 'A marketing team learns which qualities of a post lead to more reach, and which popular tips make no difference.',
    tech: 'Statistical modelling with controls, interpretable machine learning (gradient boosting, SHAP), clustering and topic modelling for pattern discovery. Findings come with effect sizes and uncertainty.',
  },
  {
    icon: 'repeat',
    title: 'Take repetitive work off your team',
    desc: 'Reading invoices, sorting emails, tagging photos, copying details from PDFs into a spreadsheet. AI does this reliably when it is set up and checked properly. I build the automation and the checks.',
    example: 'Hundreds of supplier PDFs a month are read automatically. Anything uncertain is flagged for a person.',
    tech: 'LLM classification and extraction over text and images, measured accuracy, a human review queue, scheduled cloud jobs.',
  },
  {
    icon: 'puzzle',
    title: 'AI features in your product',
    desc: 'Recommendations, an assistant, or a way for your customers’ AI tools to use your service. Built on your data and tested before customers see it.',
    example: 'A software company gives customers advice based on their own data, inside the product.',
    tech: 'Recommendation systems, MCP servers and agent tooling, evaluation suites. Python and Node.js on Google Cloud, or your stack.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface">
      <div className="container-x py-20 md:py-28">
        <SectionHeading
          label="What I do"
          title="Four common"
          accent="starting points."
          intro="Most projects start with one of these. If yours does not fit, bring it to the call."
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
                <span className="font-semibold text-accent">Example: </span>
                {s.example}
              </p>
              <p className="tech-note mt-auto border-t border-border pt-4">
                <strong>In technical terms: </strong>
                {s.tech}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
