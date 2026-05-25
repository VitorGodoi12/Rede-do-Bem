import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop }     from './components/ScrollToTop'
import { HomePage }        from './pages/HomePage'
import { QuemSomosPage }   from './pages/QuemSomosPage'
import { SobrePage }       from './pages/SobrePage'
import { ProgramasPage }   from './pages/ProgramasPage'
import { ProgramaDetalhe } from './pages/ProgramaDetalhe'
import { SolucaoPage }     from './pages/SolucaoPage'
import { FAQPageRoute }    from './pages/FAQPageRoute'
import { ContatoPage }     from './pages/ContatoPage'
import { PacientesPage }   from './pages/PacientesPage'
import { DentistasPage }   from './pages/DentistasPage'
import { NotFoundPage }    from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"                      element={<HomePage />} />
        <Route path="/quem-somos"            element={<QuemSomosPage />} />
        <Route path="/sobre"                 element={<SobrePage />} />
        <Route path="/programas"             element={<ProgramasPage />} />
        <Route path="/programas/:slug"       element={<ProgramaDetalhe />} />
        <Route path="/solucao"               element={<SolucaoPage />} />
        <Route path="/faq"                   element={<FAQPageRoute />} />
        <Route path="/contato"               element={<ContatoPage />} />
        <Route path="/pacientes"             element={<PacientesPage />} />
        <Route path="/dentistas"             element={<DentistasPage />} />
        <Route path="*"                      element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App