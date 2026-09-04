import SectionHeading from './SectionHeading'
import Icon from './Icon'

const faqs = [
  {
    q: 'We are not a tech company. Is this for us?',
    a: 'Yes. Most of the work I do is for teams without in-house AI expertise. My job is to handle the technical side and to explain it in terms that make sense for your business, so you can make decisions with confidence.',
  },
  {
    q: 'Do we need a lot of data?',
    a: 'Less than most people think. Answering questions from documents needs only the documents. Analysing what drives your results needs a history of at least a few hundred records. On the first call I will tell you what is realistic with what you already have.',
  },
  {
    q: 'Is our data safe?',
    a: 'Your data stays yours. Where possible I work inside your own accounts, I use pseudonymised data for analysis, and I put in writing what is stored where and who can see it. I use AI providers under their business terms, which means your data is not used to train their models.',
  },
  {
    q: 'Will this replace our team?',
    a: 'In my experience it removes the tedious parts of jobs rather than the jobs. The projects that work best give people time back for the work that needs their judgement, and keep a person in the loop wherever a mistake would matter.',
  },
  {
    q: 'What does it cost?',
    a: 'Every project has a fixed price, agreed in the proposal before work starts, so there are no surprises. The first call is free, and I will give you a rough range early on so you can decide whether it is worth continuing.',
  },
  {
    q: 'What if it does not work?',
    a: 'Some ideas do not survive contact with real data, and it is better to learn that in week one than in month three. That is why I start with a working prototype and honest measurement, and why the proposal includes a clear early checkpoint where we decide together whether to continue.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-surface">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
          <SectionHeading
            label="Questions people ask"
            title="Straight answers,"
            accent="no jargon."
            intro="If your question is not here, ask it on the call. There are no silly questions about a field that changes this fast."
          />

          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium text-ink [&::-webkit-details-marker]:hidden">
                  <span className="text-[1.05rem]">{f.q}</span>
                  <Icon name="chevron" className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="pb-6 pr-8 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
