import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import IceDeliveryHomepage from './modern_ice_delivery_homepage_ui.jsx'
import Contatti from './Contatti.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<IceDeliveryHomepage />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </Router>
  </StrictMode>,
)
