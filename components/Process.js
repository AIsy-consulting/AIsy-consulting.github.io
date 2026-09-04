import SectionHeading from './SectionHeading'

const steps = [
  {
    title: 'A conversation',
    desc: 'Thirty minutes, free, no preparation needed. You describe how your business works and where things get slow or expensive. I ask questions and tell you honestly whether AI can help.',
  },
  {
    title: 'A clear proposal',
    desc: 'One page: what I will build, what you will be able to do with it, how long it takes and what it costs. A fixed price, agreed before any work starts.',
  },
  {
    title: 'Building, with you involved',
    desc: 'You see a working version early, usually within the first week, and we refine it together. No long silences and no surprises at the end.',
  },
  {
    title: 'Handover and support',
    desc: 'Everything is documented and explained to your team in plain language. You own it outright, and I stay available for 30 days after delivery.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-t border-border">
      <div className="container-x py-20 md:py-28">
        <SectionHeading
          label="How it works"
          title="Four steps,"
          accent="no surprises."
          intro="Most projects take between two and six weeks. The timeline and the price are fixed in the proposal, so you always know where you stand."
        />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card p-7 md:p-8">
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-ink font-serif text-base text-paper">
                {i + 1}
              </div>
              <h3 className="mb-3 font-serif text-xl font-normal leading-snug">{s.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
