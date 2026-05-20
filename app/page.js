import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Process from '../components/Process'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <footer style={{
        borderTop: '1px solid #2a2a27',
        padding: '2.5rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: '0.95rem' }}>
          AIsy
        </span>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#7a7870', letterSpacing: '0.06em' }}>
          © 2025 · Gidon Peeper · Princeton, NJ & Amsterdam
        </span>
      </footer>
    </>
  )
}
