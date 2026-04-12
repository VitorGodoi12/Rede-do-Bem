import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage }      from './pages/HomePage'
import { QuemSomosPage } from './pages/QuemSomosPage'
import { SobrePage }     from './pages/SobrePage'
import { ProgramasPage } from './pages/ProgramasPage'
import { SolucaoPage }   from './pages/SolucaoPage'
import { FAQPageRoute }  from './pages/FAQPageRoute'
import { ContatoPage }   from './pages/ContatoPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/sobre"      element={<SobrePage />} />
        <Route path="/programas"  element={<ProgramasPage />} />
        <Route path="/solucao"    element={<SolucaoPage />} />
        <Route path="/faq"        element={<FAQPageRoute />} />
        <Route path="/contato"    element={<ContatoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App