import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import SeoManager from './SeoManager.jsx'

const Main_IceStoneService_Split = lazy(() => import('./Main_IceStoneService_Split.jsx'))
const Main_IceStoneService_Italia = lazy(() => import('./Main_IceStoneService_Italia.jsx'))
const Main_IceStoneService_Sardegna = lazy(() => import('./Main_IceStoneService_Sardegna.jsx'))
const Contatti_IceStoneService_Italia = lazy(() => import('./Contatti_IceStoneService_Italia.jsx'))
const Contatti_IceStoneService_Sardegna = lazy(() => import('./Contatti_IceStoneService_Sardegna.jsx'))
const ChiSiamo_IceStoneService_Italia = lazy(() => import('./ChiSiamo_IceStoneService_Italia.jsx'))
const ChiSiamo_IceStoneService_Sardegna = lazy(() => import('./ChiSiamo_IceStoneService_Sardegna.jsx'))
const Servizi_IceStoneService_Italia = lazy(() => import('./Servizi_IceStoneService_Italia.jsx'))
const Servizi_IceStoneService_Sardegna = lazy(() => import('./Servizi_IceStoneService_Sardegna.jsx'))
const Prodotti_IceStoneService_Italia = lazy(() => import('./Prodotti_IceStoneService_Italia.jsx'))
const Prodotti_IceStoneService_Sardegna = lazy(() => import('./Prodotti_IceStoneService_Sardegna.jsx'))
const Eventi_IceStoneService_Italia = lazy(() => import('./Eventi_IceStoneService_Italia.jsx'))
const Eventi_IceStoneService_Sardegna = lazy(() => import('./Eventi_IceStoneService_Sardegna.jsx'))
const Privacy_IceStoneService = lazy(() => import('./Privacy_IceStoneService.jsx'))

function RouteLoader() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-12 w-12 rounded-full border-4 border-cyan-400/30 border-t-cyan-400 animate-spin" />
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Caricamento
        </p>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')

if (rootElement?.dataset.prerendered) {
  rootElement.innerHTML = ''
}

createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <SeoManager />
      <Suspense fallback={<RouteLoader />}>
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
          <Route path="/privacy" element={<Privacy_IceStoneService />} />
        </Routes>
      </Suspense>
    </Router>
  </StrictMode>,
)
