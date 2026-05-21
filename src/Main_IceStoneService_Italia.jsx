import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Main_IceStoneService_Italia() {
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
                <a 
                  href="#prodotti" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Prodotti
                </a>
                <a 
                  href="#eventi" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Eventi
                </a>
                <a 
                  href="#servizi" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Servizi
                </a>
                <Link 
                  to="/contatti" 
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Contatti
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/home-italia">
              <img 
                src="/images/Logo_icestone.png" 
                alt="IceStone Service Logo" 
                className="h-12 md:h-16 object-contain"
              />
            </Link>
            <h1 className="text-xl font-bold tracking-wider">ICE STONE SERVICE</h1>
          </div>

          <div></div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <img
          src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1600&auto=format&fit=crop"
          alt="Ice"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black"></div>

        <div className="relative z-10 text-center max-w-4xl px-6 py-12">
          <p className="uppercase tracking-[0.4em] text-cyan-300 text-base md:text-lg mb-8 font-semibold">
            Produzione • Confezionamento • Consegna
          </p>

          
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="text-cyan-400">MAI PIÙ</span> 
            <br />
            SENZA GHIACCIO
          </h1>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="text-cyan-300 font-semibold text-sm md:text-base">
              Freddo garantito, 7 giorni su 7
            </p>
          </div>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Produzione, confezionamento e trasporto di ghiaccio professionale
            su tutto il territorio di Mantova e Modena.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/393534632562?text=Ciao! Vorrei ordinare del ghiaccio alimentare."
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

      {/* Products */}
      <section id="prodotti" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm mb-4">
            I nostri prodotti
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Ghiaccio per ogni esigenza
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cubetti Classici",
              size: "2 KG",
              price: "€3",
            },
            {
              title: "Premium Cocktail",
              size: "5 KG",
              price: "€10",
            },
            {
              title: "Ghiaccio Tritato",
              size: "5 KG",
              price: "€8",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-400 mb-6">Formato {item.size}</p>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black">{item.price}</span>

                  <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold">
                    Ordina
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="servizi" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            "Consegna rapida",
            "Ghiaccio premium",
            "Disponibile 7/7",
            "Per bar ed eventi",
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-black border border-white/10 rounded-3xl p-10"
            >
              <div className="text-5xl mb-6">🧊</div>
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="eventi" className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop"
          alt="Event"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase text-cyan-300 tracking-[0.2em] text-sm mb-4">
            Eventi & locali
          </p>

          <h2 className="text-5xl font-black mb-6">
            Fornitura professionale
            <br />
            per eventi e attività
          </h2>

          <p className="text-zinc-300 text-lg mb-10 max-w-3xl mx-auto">
            Serviamo bar, discoteche, catering, matrimoni, feste private
            ed eventi con consegne rapide e grandi quantità disponibili.
          </p>

          <Link 
            to="/contatti"
            className="bg-cyan-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition inline-block"
          >
            Richiedi Preventivo
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-[40px] text-black text-center p-16">
          <p className="uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Consegna immediata
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            IL FREDDO ARRIVA 
            <br />
            PRIMA DI TE
          </h2>

          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Ordina online il tuo ghiaccio professionale e ricevilo rapidamente
            direttamente dove ti serve.
          </p>

          <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
            Ordina Adesso
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-white/10 py-10 px-6 text-zinc-400"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <img 
              src="/images/Logo_icestone.png" 
              alt="IceStone Service Logo" 
              className="h-10 md:h-12 object-contain"
            />
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="inline-flex items-center gap-2 hover:text-white transition">
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
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white transition">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white transition">
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
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
