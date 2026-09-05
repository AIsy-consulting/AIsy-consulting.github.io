export default function MadeWithAi() {
  return (
    <section id="made-with-ai" className="border-t border-border bg-accent-soft/60">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16">
          <div>
            <p className="eyebrow mb-4">Full disclosure</p>
            <h2 className="font-serif text-[2rem] font-normal leading-[1.12] tracking-[-0.015em] text-ink md:text-[2.75rem]">
              This site was <em className="italic text-accent">made with AI.</em>
            </h2>
          </div>
          <div className="text-[1.05rem] leading-relaxed text-muted">
            <p className="mb-5">
              The design, the code, the words you are reading, the two-minute check above, the list of companies
              I wrote to, and the email that may have brought you here were all produced with AI (Claude), with me
              directing, checking and deciding what was good enough. It took a day rather than weeks.
            </p>
            <p className="mb-5">
              That is exactly what I mean by AI where it earns its place. The machine does the volume; a person
              keeps the judgement. Every project I do for a client works the same way, and I am happy to show you
              how this one was made.
            </p>
            <a href="#contact" className="btn-secondary">
              Ask me how
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
