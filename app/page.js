import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Work from '../components/Work'
import About from '../components/About'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <Work />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
