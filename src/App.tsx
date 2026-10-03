import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Journey } from './sections/Journey'
import { Education } from './sections/Education'
import { Highlights } from './sections/Highlights'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-bg">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><About /><Projects /><Skills /><Journey /><Education /><Highlights /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
