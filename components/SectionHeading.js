export default function SectionHeading({ label, title, accent, intro, center = false }) {
  return (
    <div className={`mb-12 md:mb-14 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      <p className="eyebrow mb-4">{label}</p>
      <h2 className="font-serif text-[2rem] font-normal leading-[1.12] tracking-[-0.015em] text-ink md:text-[2.75rem]">
        {title} {accent && <em className="italic text-accent">{accent}</em>}
      </h2>
      {intro && <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{intro}</p>}
    </div>
  )
}
