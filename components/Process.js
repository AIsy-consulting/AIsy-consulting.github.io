import SectionHeading from './SectionHeading'
import Icon from './Icon'

const steps = [
  { title: 'A call', desc: 'Ten minutes, free. You describe where things are slow or expensive. I tell you whether AI can help and what a first step would be.' },
  { title: 'A proposal', desc: 'One page: what I build, what you get, how long it takes, what it costs. Fixed price, agreed before work starts.' },
  { title: 'Build', desc: 'A working version within the first week, then refined with your feedback. You see real output, not slides.' },
  { title: 'Handover', desc: 'Documented and explained to your team. You own the code, data and accounts. 30 days of support included.' },
]

const promises = [
  'If AI is the wrong tool, I say so before you spend money.',
  'Every project is measured: how often it is right, how much time it saves.',
  'You get explanations you can repeat to your colleagues.',
  'No lock-in. Anyone can pick up where I left off.',
]

export default function Process() {
  return (
    <section id="process" className="border-t border-border">
      <div className="container-x py-20 md:py-28">
        <SectionHeading
          label="How it works"
          title="Four steps,"
          accent="no surprises."
          intro="Most projects take two to six weeks. Price and timeline are fixed in the proposal."
        />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card p-7 md:p-8">
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-ink font-serif text-base text-paper">{i + 1}</div>
              <h3 className="mb-3 font-serif text-xl font-normal leading-snug">{s.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl bg-accent-soft/60 p-7 md:p-8">
          <p className="eyebrow mb-4">What you can hold me to</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {promises.map((p) => (
              <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/85">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
