import SectionHeading from './SectionHeading'

const principles = [
  {
    title: 'Honest about limits',
    desc: 'If AI is the wrong tool for your problem, I say so before you spend money, not after. Some of the most useful calls end with "not yet".',
  },
  {
    title: 'Measured, not promised',
    desc: 'Every project includes a check of how well it actually works, in numbers you can understand: how often it is right, how much time it saves, where it still needs a person.',
  },
  {
    title: 'Plain language',
    desc: 'You get explanations you can repeat to your colleagues and your board, not a slide deck of acronyms. Technical detail is available for whoever wants it.',
  },
  {
    title: 'You own everything',
    desc: 'Code, data, accounts and documentation are yours from day one. No lock-in to me: anyone else can pick it up and carry on.',
  },
]

export default function Principles() {
  return (
    <section id="principles" className="border-t border-border bg-surface">
      <div className="container-x py-20 md:py-28">
        <SectionHeading label="How I work" title="Four things you can" accent="hold me to." />
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.title} className="flex gap-5">
              <div className="font-serif text-3xl leading-none text-accent/70">0{i + 1}</div>
              <div>
                <h3 className="mb-2 font-serif text-xl leading-snug">{p.title}</h3>
                <p className="leading-relaxed text-muted">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
