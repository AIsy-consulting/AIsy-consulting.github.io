import { ImageResponse } from 'next/og'

export const alt = 'AIsy · Practical AI for your business, by Gidon Peeper'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Fetch Fraunces as TTF at build time so the preview matches the site. Falls back to the
// default font if the network is unavailable.
async function loadFonts() {
  try {
    const ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1'
    const css = await (
      await fetch('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;1,400&display=swap', {
        headers: { 'User-Agent': ua },
      })
    ).text()
    const blocks = css.split('@font-face').slice(1)
    const fonts = []
    for (const block of blocks) {
      const url = block.match(/src:\s*url\(([^)]+)\)/)?.[1]
      const italic = /font-style:\s*italic/.test(block)
      if (!url) continue
      const data = await (await fetch(url)).arrayBuffer()
      fonts.push({ name: 'Fraunces', data, weight: 400, style: italic ? 'italic' : 'normal' })
    }
    return fonts.length ? fonts : undefined
  } catch {
    return undefined
  }
}

export default async function Image() {
  const fonts = await loadFonts()
  const serif = fonts ? 'Fraunces' : 'serif'
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#f8f7f3',
          color: '#1b1b19',
          fontFamily: serif,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 38 }}>AIsy</div>
          <div style={{ fontSize: 20, color: '#1f5f47', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'sans-serif', fontWeight: 600 }}>
            AI consulting and engineering
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, lineHeight: 1.05, letterSpacing: '-0.02em', display: 'flex', flexWrap: 'wrap' }}>
            <span style={{ marginRight: 22 }}>AI where it</span>
            <span style={{ color: '#1f5f47', fontStyle: 'italic' }}>earns its place.</span>
          </div>
          <div style={{ marginTop: 30, fontSize: 28, color: '#5e5c55', lineHeight: 1.4, maxWidth: 940, fontFamily: 'sans-serif' }}>
            Practical AI for your business, explained in plain language. Built by Gidon Peeper, London.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, color: '#5e5c55', fontFamily: 'sans-serif' }}>
          <span>aisy-consulting.github.io</span>
          <span>gidon.aisy@gmail.com</span>
        </div>
      </div>
    ),
    { ...size, fonts }
  )
}
