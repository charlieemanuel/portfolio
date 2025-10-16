import About from './assets/components/About'
import Hero from './assets/components/Hero'
import Navbar from './assets/components/Navbar'
import Skills from './assets/components/Skills'
import Portfolio from "./assets/components/Portfolio.jsx";
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
    </main>
  )
}

export default App