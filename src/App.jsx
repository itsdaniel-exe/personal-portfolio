import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-4 focus:z-[60] focus:bg-raised focus:px-3 focus:py-2 focus:font-display focus:text-sm"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
