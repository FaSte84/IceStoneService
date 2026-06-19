import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Main_IceStoneService_Split from './Main_IceStoneService_Split.jsx'
import Main_IceStoneService_Italia from './Main_IceStoneService_Italia.jsx'
import Main_IceStoneService_Sardegna from './Main_IceStoneService_Sardegna.jsx'
import Contatti_IceStoneService_Italia from './Contatti_IceStoneService_Italia.jsx'
import Contatti_IceStoneService_Sardegna from './Contatti_IceStoneService_Sardegna.jsx'
import ChiSiamo_IceStoneService_Italia from './ChiSiamo_IceStoneService_Italia.jsx'
import ChiSiamo_IceStoneService_Sardegna from './ChiSiamo_IceStoneService_Sardegna.jsx'
import Servizi_IceStoneService_Italia from './Servizi_IceStoneService_Italia.jsx'
import Servizi_IceStoneService_Sardegna from './Servizi_IceStoneService_Sardegna.jsx'
import Prodotti_IceStoneService_Italia from './Prodotti_IceStoneService_Italia.jsx'
import Prodotti_IceStoneService_Sardegna from './Prodotti_IceStoneService_Sardegna.jsx'
import Eventi_IceStoneService_Italia from './Eventi_IceStoneService_Italia.jsx'
import Eventi_IceStoneService_Sardegna from './Eventi_IceStoneService_Sardegna.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main_IceStoneService_Split />} />
        <Route path="/home-italia" element={<Main_IceStoneService_Italia />} />
        <Route path="/home-sardegna" element={<Main_IceStoneService_Sardegna />} />
        <Route path="/contatti" element={<Contatti_IceStoneService_Italia />} />
        <Route path="/contatti-sardegna" element={<Contatti_IceStoneService_Sardegna />} />
        <Route path="/chi-siamo" element={<ChiSiamo_IceStoneService_Italia />} />
        <Route path="/chi-siamo-sardegna" element={<ChiSiamo_IceStoneService_Sardegna />} />
        <Route path="/prodotti" element={<Prodotti_IceStoneService_Italia />} />
        <Route path="/prodotti-sardegna" element={<Prodotti_IceStoneService_Sardegna />} />
        <Route path="/eventi" element={<Eventi_IceStoneService_Italia />} />
        <Route path="/eventi-sardegna" element={<Eventi_IceStoneService_Sardegna />} />
        <Route path="/servizi" element={<Servizi_IceStoneService_Italia />} />
        <Route path="/servizi-sardegna" element={<Servizi_IceStoneService_Sardegna />} />
      </Routes>
    </Router>
  </StrictMode>,
)
