import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main" className="container-x flex min-h-[70vh] flex-col justify-center py-24">
      <p className="eyebrow mb-4">Page not found</p>
      <h1 className="font-serif text-4xl leading-tight md:text-5xl">
        That page does not <em className="italic text-accent">exist.</em>
      </h1>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
        The address may have been typed wrongly, or the page has moved. Everything on this site is on one page.
      </p>
      <div className="mt-8">
        <Link href="/" className="btn-primary">
          Back to the start
        </Link>
      </div>
    </main>
  )
}
