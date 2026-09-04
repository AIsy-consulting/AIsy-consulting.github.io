import Image from 'next/image'
import Icon from './Icon'

const promises = ['Fixed price, agreed before work starts', 'Explained in plain language', 'You own everything I build']

const facts = [
  { label: 'Currently', value: 'External AI consultant and engineer at Ayrshare' },
  { label: 'Previously', value: 'Research at Princeton University' },
  { label: 'Education', value: 'MSc Artificial Intelligence, University of Amsterdam' },
]

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container-x grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <p className="eyebrow mb-5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
            AI consulting and engineering · London
          </p>
          <h1
            className="mb-6 max-w-[14ch] font-serif text-[2.7rem] font-normal leading-[1.05] tracking-[-0.02em] animate-fade-up sm:text-5xl md:text-6xl lg:text-[4.4rem]"
            style={{ animationDelay: '0.15s' }}
          >
            AI where it <em className="italic text-accent">earns its place.</em>
          </h1>
          <p
            className="mb-8 max-w-xl text-[1.1rem] leading-relaxed text-muted animate-fade-up md:text-lg"
            style={{ animationDelay: '0.25s' }}
          >
            I help companies put AI to work on the things it is genuinely good at: answering questions from
            your own documents, making sense of your data, and taking over repetitive work. You get working
            software, a clear explanation of how it works, and an honest answer when AI is not the right tool.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <a href="#contact" className="btn-primary">
              Book a free 30-minute call
            </a>
            <a href="#services" className="btn-secondary">
              See how I can help
            </a>
          </div>
          <ul className="mt-9 flex flex-col gap-2.5 text-sm text-muted animate-fade-up sm:flex-row sm:flex-wrap sm:gap-x-7" style={{ animationDelay: '0.45s' }}>
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <figure className="animate-fade-up md:justify-self-end" style={{ animationDelay: '0.2s' }}>
          <Image
            src="/profile.jpg"
            alt="Portrait of Gidon Peeper"
            width={680}
            height={720}
            priority
            className="aspect-[17/18] w-full max-w-[300px] rounded-3xl object-cover shadow-sm sm:max-w-[360px] md:max-w-[400px]"
          />
          <figcaption className="mt-4 max-w-[400px] text-sm leading-relaxed text-muted">
            <span className="font-medium text-ink">Gidon Peeper</span>, AI engineer and consultant. Formerly a
            researcher at Princeton University. Now also building AI products at Ayrshare.
          </figcaption>
        </figure>
      </div>

      <div className="container-x mt-16 md:mt-20">
        <dl className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{f.label}</dt>
              <dd className="text-[0.95rem] text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
