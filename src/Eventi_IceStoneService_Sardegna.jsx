import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Eventi_IceStoneService_Sardegna() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-white hover:text-cyan-400 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="hidden md:inline font-semibold">Menu</span>
            </button>

            {menuOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Selezione Area
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
                  className="block px-6 py-3 text-white bg-white/10 transition"
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
                src="/images/Logo_icestone.png"
                alt="IceStone Service Logo"
                className="h-12 md:h-16 object-contain"
              />
            </Link>
            <h1 className="text-xl font-bold tracking-wider">ICE STONE SERVICE SARDEGNA</h1>
          </div>

          <div></div>
        </div>
      </header>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm mb-4">Eventi</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Fornitura professionale per eventi e attività in Sardegna
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop"
              alt="Event"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />

            <div className="relative px-8 py-16 md:px-14 md:py-20 text-center">
              <p className="uppercase text-cyan-300 tracking-[0.2em] text-sm mb-4">Eventi & locali in Sardegna</p>

              <h3 className="text-4xl md:text-5xl font-black mb-6">
                Ghiaccio sempre pronto
                <br />
                per grandi numeri
              </h3>

              <p className="text-zinc-300 text-lg mb-10 max-w-3xl mx-auto">
                Serviamo bar, discoteche, catering, matrimoni e feste private con consegne rapide e grandi
                quantità disponibili in tutta la Sardegna.
              </p>

              <Link
                to="/contatti-sardegna"
                className="bg-cyan-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition inline-block"
              >
                Richiedi Preventivo
              </Link>
            </div>
          </div>

          <div className="mt-14 bg-black border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Hai date e quantità?</h3>
            <p className="text-zinc-300 mb-8">
              Mandaci i dettagli dell’evento e ti prepariamo un’offerta su misura per la tua zona.
            </p>
            <Link
              to="/contatti-sardegna"
              className="inline-block bg-cyan-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
            >
              Vai ai Contatti
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 text-zinc-400">
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
  )
}
