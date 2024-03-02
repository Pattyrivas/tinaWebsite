import './App.css'
import { Nav } from '../Navbar'
import { Introduction } from '../Introduction'
import { Nosotros } from '../Nosotros'
import { Contactame } from '../Contactame'
import { Footer } from '../Footer'
import { NotFound } from '../NotFound'
import { PortafolioDetailsContainer} from '../Portafolio/PortafolioDetailsContainer'
import { PortafolioListContainer} from '../Portafolio/PortafolioListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<PortafolioListContainer />} />
        <Route path='/category/:cid' element={<PortafolioListContainer />} />
        <Route path='/product/:pid' element={<PortafolioDetailsContainer />} />
        <Route path='/Introduction' element={<Introduction />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Contactame' element={<Contactame />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  )
}

export default App
