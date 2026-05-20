import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Main_IceStoneService_Split from './Main_IceStoneService_Split.jsx'
import Main_IceStoneService_Italia from './Main_IceStoneService_Italia.jsx'
import Main_IceStoneService_Sardegna from './Main_IceStoneService_Sardegna.jsx'
import Contatti from './Contatti.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main_IceStoneService_Split />} />
        <Route path="/home-italia" element={<Main_IceStoneService_Italia />} />
        <Route path="/home-sardegna" element={<Main_IceStoneService_Sardegna />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </Router>
  </StrictMode>,
)
