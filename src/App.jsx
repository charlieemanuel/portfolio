import About from './assets/components/About'
import Hero from './assets/components/Hero'
import Navbar from './assets/components/Navbar'
import Skills from './assets/components/Skills'
import Projects from "./assets/components/Projects.jsx";
import Contact from "./assets/components/Contact.jsx";
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App