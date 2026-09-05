import Icon from './Icon'

const promises = ['Fixed price, agreed up front', 'No jargon', 'You own everything I build']

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-32 md:pb-24 md:pt-44">
      <div className="container-x">
        <p className="eyebrow mb-5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
          AI consulting and engineering · London
        </p>
        <h1
          className="mb-6 font-serif text-[3rem] font-normal leading-[1.02] tracking-[-0.02em] animate-fade-up sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: '0.15s' }}
        >
          <span className="text-accent">AI</span> made ea<span className="text-accent">SY</span>.
        </h1>
        <p
          className="mb-8 max-w-2xl text-[1.1rem] leading-relaxed text-muted animate-fade-up md:text-xl"
          style={{ animationDelay: '0.25s' }}
        >
          I help companies use AI where it pays off: answering questions from your own documents, finding what
          drives your results, and automating repetitive work. Fixed price, plain language, and a straight answer
          if AI is not the right tool for you.
        </p>
        <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.35s' }}>
          <a href="#contact" className="btn-primary">
            Book a free 10-minute call
          </a>
          <a href="#services" className="btn-secondary">
            What I do
          </a>
        </div>
        <ul
          className="mt-10 flex flex-col gap-2.5 text-sm text-muted animate-fade-up sm:flex-row sm:flex-wrap sm:gap-x-7"
          style={{ animationDelay: '0.45s' }}
        >
          {promises.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
