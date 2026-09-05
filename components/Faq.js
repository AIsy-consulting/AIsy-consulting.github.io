import SectionHeading from './SectionHeading'
import Icon from './Icon'

const faqs = [
  { q: 'We are not a tech company. Is this for us?', a: 'Yes. Most of my work is for teams without in-house AI expertise. I handle the technical side and explain it in terms that make sense for your business.' },
  { q: 'Do we need a lot of data?', a: 'Less than most people think. Answering questions from documents needs only the documents. Analysing what drives results needs at least a few hundred records. On the call I will tell you what is realistic with what you have.' },
  { q: 'Is our data safe?', a: 'Your data stays yours. Where possible I work inside your own accounts, use pseudonymised data for analysis, and put in writing what is stored where and who can see it. I use AI providers under business terms, so your data is not used to train their models.' },
  { q: 'Will this replace our team?', a: 'In my experience it removes the tedious parts of jobs, not the jobs. The best projects give people time back for work that needs judgement, and keep a person in the loop where a mistake would matter.' },
  { q: 'What does it cost?', a: 'Every project has a fixed price, agreed in the proposal before work starts. The first call is free, and I give you a rough range early so you can decide whether to continue.' },
  { q: 'What if it does not work?', a: 'Some ideas do not survive contact with real data. Better to find out in week one than month three. I start with a working prototype and honest measurement, and the proposal has a checkpoint where we decide together whether to continue.' },
]

const glossary = [
  { term: 'Artificial intelligence (AI)', plain: 'Software that handles tasks which used to need a person’s judgement: reading, writing, sorting, spotting patterns. Very good at some things, unreliable at others. Knowing which is which is most of the job.' },
  { term: 'Large language model', plain: 'The kind of AI behind ChatGPT. It has read an enormous amount of text and can write, summarise, translate and answer questions. It knows nothing about your business until it is connected to your information.' },
  { term: 'Assistant, or chatbot', plain: 'A program you talk to in plain language. A good one for your business answers from your own documents, says where each answer came from, and admits when it does not know.' },
  { term: 'Hallucination', plain: 'When an AI states something confidently that is made up. It happens with every model. Answers tied to sources, checks and a person in the loop reduce it, and measurement tells you how often it still happens.' },
  { term: 'Automation', plain: 'Letting software do a repetitive task on its own: reading an invoice and filling in the fields, sorting incoming emails, tagging photos. AI makes this possible for messy, human-made material.' },
  { term: 'Training', plain: 'Teaching a model by showing it examples. For most business projects you do not train a model at all. You connect an existing one to your data and set rules for how it behaves.' },
  { term: 'Agent', plain: 'An AI that can take actions, not just answer: look something up, fill in a form, call another system. Useful, and it needs guardrails. MCP, a term you may see, is a standard way of connecting AI tools to your systems safely.' },
]

function Item({ title, text, dl }) {
  const Title = dl ? 'dt' : 'span'
  const Body = dl ? 'dd' : 'p'
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium text-ink [&::-webkit-details-marker]:hidden">
        <Title className="text-[1.05rem]">{title}</Title>
        <Icon name="chevron" className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <Body className="pb-6 pr-8 leading-relaxed text-muted">{text}</Body>
    </details>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-surface">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
          <SectionHeading label="Questions" title="Straight answers," accent="no jargon." intro="If your question is not here, ask it on the call." />
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => <Item key={f.q} title={f.q} text={f.a} />)}
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-border pt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">A few words, explained</p>
            <h2 className="font-serif text-[2rem] font-normal leading-[1.12] tracking-[-0.015em] text-ink md:text-[2.5rem]">
              The terms you will hear, <em className="italic text-accent">in plain English.</em>
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
              You do not need any of this to work with me. It is here for the next time someone uses these words in a meeting.
            </p>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {glossary.map((g) => <Item key={g.term} title={g.term} text={g.plain} dl />)}
          </dl>
        </div>
      </div>
    </section>
  )
}
