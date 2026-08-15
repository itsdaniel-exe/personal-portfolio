import Grain from './components/Grain'
import RulerBar from './components/RulerBar'
import CursorTag from './components/CursorTag'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ground">
      {/* Grain sits above the ground fill but below every bit of content. */}
      <Grain />
      <RulerBar />
      <CursorTag />

      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-12 focus:z-[80] focus:rounded-full focus:bg-card focus:px-4 focus:py-2 focus:font-display focus:text-sm"
      >
        Skip to work
      </a>

      <div className="relative z-10 pt-8">
        <Nav />
        <main>
          <Hero />
          <Work />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
