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

const extras = [
  {
    icon: 'chat',
    title: 'A general AI consultation',
    desc: 'Not sure where AI fits in your business? Half a day or a full day together. We go through your workflows and data, and you get a short written assessment: what is feasible, roughly what it would cost, and what to do first. If the answer is “not yet”, you get that in writing too.',
  },
  {
    icon: 'sliders',
    title: 'Something tailored',
    desc: 'If your problem does not fit the boxes above, describe it. Most work starts as a specific problem that did not fit a box. If I am not the right person for it, I will say so and point you somewhere useful.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface">
      <div className="container-x py-20 md:py-28">
        <SectionHeading
          label="What I do"
          title="Where to"
          accent="start."
          intro="Most projects start with one of the first four. If yours does not fit, the last two are for you."
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
                {s.tech}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {extras.map((e) => (
            <article key={e.title} className="card flex gap-5 p-7 transition-colors hover:border-ink/30 md:p-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={e.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 font-serif text-xl font-normal leading-snug">{e.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
