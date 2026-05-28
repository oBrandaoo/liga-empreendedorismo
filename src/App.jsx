import './index.css'
import { useReveal } from './hooks/useReveal'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Sobre    from './components/Sobre'
import Eventos  from './components/Eventos'
import Membros  from './components/Membros'
import Contato  from './components/Contato'
import Footer   from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Eventos />
      <Membros />
      <Contato />
      <Footer />
    </>
  )
}
