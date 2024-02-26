import './App.css'
import { Nav } from '../Navbar'
import { Intrudiction } from '../Introduction'
import { Nosotros } from '../Nosotros'
import { Portafolio } from '../Portafolio'
import { Contactame } from '../Contactame'
import { Footer } from '../Footer'

function App() {

  return (
    <>
      <Nav />
      <Portafolio />
      <Intrudiction />
      <Nosotros />
      <Contactame />
      <Footer />
    </>
  )
}

export default App
