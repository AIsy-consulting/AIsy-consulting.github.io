import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="container-x py-16 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <Image
            src="/profile.jpg"
            alt="Gidon Peeper"
            width={680}
            height={720}
            priority
            className="h-36 w-36 shrink-0 rounded-2xl object-cover"
          />
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">About</p>
            <p className="mb-4 text-[1.05rem] leading-relaxed text-muted">
              AISY is <strong className="font-medium text-ink">Gidon Peeper</strong>, an AI engineer in London. I
              studied Artificial Intelligence and Psychobiology in Amsterdam, spent a year doing research at
              Princeton, and now work as an external AI engineer for a software company alongside AISY projects.
            </p>
            <p className="mb-6 text-[1.05rem] leading-relaxed text-muted">
              I have taught, led a national student council and presented research to clinicians and policymakers,
              so I am used to explaining technical work to people who do not do it for a living. I work in English
              and Dutch.
            </p>
            <a href="https://gidonpeeper.github.io" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              CV and personal site
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
