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


const glossary = [
  {
    term: 'Artificial intelligence (AI)',
    plain: 'Software that can handle tasks which used to need a person\u2019s judgement: reading, writing, sorting, spotting patterns. It is a tool, not a colleague. It is very good at some things and unreliable at others, and knowing which is which is most of the job.',
  },
  {
    term: 'Large language model',
    plain: 'The kind of AI behind ChatGPT and similar tools. It has read an enormous amount of text and can write, summarise, translate and answer questions. It knows nothing about your business until it is connected to your information.',
  },
  {
    term: 'Assistant, or chatbot',
    plain: 'A program you talk to in plain language. A good one for your business answers from your own documents, says where each answer came from, and admits when it does not know.',
  },
  {
    term: 'Hallucination',
    plain: 'When an AI states something confidently that is simply made up. It happens with every model. Good design reduces it, with answers tied to sources, checks, and a person in the loop, and honest measurement tells you how often it still occurs.',
  },
  {
    term: 'Automation',
    plain: 'Letting software do a repetitive task on its own: reading an invoice and filling in the fields, sorting incoming emails, tagging photos. AI makes this possible for messy, human-made material, not just neat rows of data.',
  },
  {
    term: 'Training',
    plain: 'Teaching a model by showing it examples. For most business projects you do not train a model at all. You connect an existing one to your data and set clear rules for how it behaves, which is faster and far cheaper.',
  },
  {
    term: 'Agent',
    plain: 'An AI that can take actions, not just answer: look something up, fill in a form, call another system. Useful, and it needs guardrails. You may also see the term MCP, which is simply a standard way of connecting AI tools to your systems safely.',
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

        <div className="mt-20 grid gap-10 border-t border-border pt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">A few words, explained</p>
            <h2 className="font-serif text-[2rem] font-normal leading-[1.12] tracking-[-0.015em] text-ink md:text-[2.5rem]">
              The terms you will hear, <em className="italic text-accent">in plain English.</em>
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
              You do not need any of this to work with me. It is here so that the next time someone uses these words
              in a meeting, you know exactly what they mean.
            </p>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {glossary.map((g) => (
              <details key={g.term} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium text-ink [&::-webkit-details-marker]:hidden">
                  <dt className="text-[1.05rem]">{g.term}</dt>
                  <Icon name="chevron" className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <dd className="pb-6 pr-8 leading-relaxed text-muted">{g.plain}</dd>
              </details>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
