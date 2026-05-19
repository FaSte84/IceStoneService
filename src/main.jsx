import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IceDeliveryHomepage from './modern_ice_delivery_homepage_ui.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IceDeliveryHomepage />
  </StrictMode>,
)
