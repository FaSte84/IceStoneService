import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Main_IceStoneService_Sardegna() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-white hover:text-cyan-400 transition"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="hidden md:inline font-semibold">Menu</span>
            </button>

            {/* Dropdown Content */}
            {menuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden">
                <Link 
                  to="/" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Selezione Area
                </Link>
                <Link
                  to="/chi-siamo-sardegna"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Chi siamo
                </Link>
                <Link
                  to="/prodotti-sardegna"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Prodotti
                </Link>
                <Link
                  to="/eventi-sardegna"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Eventi
                </Link>
                <Link 
                  to="/servizi-sardegna" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Servizi
                </Link>
                <Link 
                  to="/contatti-sardegna" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Contatti
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/home-sardegna">
              <img 
                src="/images/Logo_icestone.webp" 
                alt="IceStone Service Logo" 
                decoding="async"
                className="h-12 md:h-16 object-contain"
              />
            </Link>
            <h1 className="text-xl font-bold tracking-wider">ICE STONE SERVICE SARDEGNA</h1>
          </div>

          <div></div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <img
          src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1600&auto=format&fit=crop"
          alt="Ice"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black"></div>

        <div className="relative z-10 text-center max-w-4xl px-6 py-12">
          <p className="uppercase tracking-[0.4em] text-cyan-300 text-base md:text-lg mb-8 font-semibold">
            Produzione - Confezionamento - Consegna
          </p>

          
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="text-cyan-400">MAI PIÙ</span>
            <br />
            SENZA GHIACCIO IN SARDEGNA
          </h1>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="text-cyan-300 font-semibold text-sm md:text-base">
              Freddo garantito, 7 giorni su 7
            </p>
          </div>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Produzione, confezionamento e trasporto di ghiaccio professionale
            su tutto il territorio della Sardegna.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/393770890066?text=Ciao! Vorrei ordinare del ghiaccio alimentare per la Sardegna."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#128C7E] hover:scale-105 transition flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-[40px] text-black text-center p-16">
          <p className="uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Consegna immediata in Sardegna
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            IL FREDDO ARRIVA 
            <br />
            PRIMA DI TE IN SARDEGNA
          </h2>

          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Ordina online il tuo ghiaccio professionale e ricevilo rapidamente
            direttamente dove ti serve in Sardegna.
          </p>

          <Link
            to="/contatti-sardegna"
            className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
          >
            Ordina Adesso
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-white/10 py-10 px-6 text-zinc-400"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <img 
              src="/images/Logo_IceStoneService_Rettangolare.webp" 
              alt="IceStone Service Logo" 
              loading="lazy"
              decoding="async"
              className="h-10 md:h-12 object-contain scale-125 md:scale-150 origin-left"
            />
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="https://www.instagram.com/icestone_service?igsh=dDQycDBoZGw5dmU%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E1306C] hover:opacity-90 transition"
            >
              <img
                src="/images/Button-Instagram.webp"
                alt=""
                loading="lazy"
                decoding="async"
                className="h-5 w-5 object-contain"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
              Instagram
            </a>
            <a
              href="https://wa.me/393770890066?text=Ciao! Vorrei ordinare del ghiaccio alimentare per la Sardegna."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:opacity-90 transition"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.07 0C5.53 0 .2 5.31.2 11.84c0 2.09.55 4.14 1.59 5.95L0 24l6.38-1.67a11.83 11.83 0 0 0 5.69 1.45h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.4-8.46Zm-8.45 18.3h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79 1 1.01-3.7-.23-.38a9.8 9.8 0 0 1-1.51-5.28c0-5.42 4.41-9.84 9.84-9.84 2.63 0 5.1 1.02 6.96 2.88a9.79 9.79 0 0 1 2.88 6.96c0 5.42-4.42 9.84-9.79 9.84Zm5.4-7.37c-.29-.15-1.71-.84-1.97-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.15-1.2-.44-2.29-1.4-.85-.76-1.42-1.7-1.58-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.44-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.56-.88-2.14-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.98 2.43.02 1.43 1.03 2.82 1.18 3.01.14.19 2.02 3.08 4.89 4.32.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
              </svg>
              WhatsApp
            </a>
            <Link to="/privacy" className="inline-flex items-center gap-2 hover:text-white transition">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
