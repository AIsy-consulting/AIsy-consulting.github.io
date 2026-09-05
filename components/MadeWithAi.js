export default function MadeWithAi() {
  return (
    <section id="made-with-ai" className="border-t border-border bg-accent-soft/60">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16">
          <div>
            <p className="eyebrow mb-4">Full disclosure</p>
            <h2 className="font-serif text-[2rem] font-normal leading-[1.12] tracking-[-0.015em] text-ink md:text-[2.5rem]">
              This site was <em className="italic text-accent whitespace-nowrap">made with AI.</em>
            </h2>
          </div>
          <div className="text-[1.05rem] leading-relaxed text-muted">
            <p className="mb-5">
              The design, the code and the text of this site, the two-minute check, the list of companies I contacted
              and the email that may have brought you here were all produced with AI (Claude), with me directing and
              checking. It took two hours. Client work runs the same way: AI does the volume, I keep the judgement.
            </p>
            <a href="#contact" className="btn-secondary">Ask me how</a>
          </div>
        </div>
      </div>
    </section>
  )
}
