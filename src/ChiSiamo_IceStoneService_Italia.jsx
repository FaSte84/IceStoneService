import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ChiSiamo_IceStoneService_Italia() {
  const [menuOpen, setMenuOpen] = useState(false)

  const team = [
    {
      role: 'Coordinamento',
      title: 'Organizzazione e qualità',
      text: 'Seguiamo ordini, disponibilità e qualità del ghiaccio per garantire un servizio puntuale e costante.',
    },
    {
      role: 'Consegne',
      title: 'Rapidità sul territorio',
      text: 'Chi lavora nelle consegne organizza i giri e porta il prodotto dove serve, per locali, eventi e privati.',
    },
    {
      role: 'Assistenza',
      title: 'Contatto diretto con il cliente',
      text: 'Restiamo disponibili per informazioni, richieste speciali e preventivi personalizzati per ogni esigenza.',
    },
  ]

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
                  to="/chi-siamo"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-white bg-white/10 transition"
                >
                  Chi siamo
                </Link>
                <Link
                  to="/prodotti"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Prodotti
                </Link>
                <Link
                  to="/eventi"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Eventi
                </Link>
                <Link
                  to="/servizi"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Servizi
                </Link>
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

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm mb-4">Chi siamo</p>
            <h2 className="text-4xl md:text-5xl font-bold">Le persone dietro Ice Stone Service</h2>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 mb-14">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
              alt="Team Ice Stone Service"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div className="relative px-8 py-16 md:px-14 md:py-20 text-center">
              <p className="uppercase text-cyan-300 tracking-[0.2em] text-sm mb-4">Ice Stone Service Italia</p>

              <h3 className="text-4xl md:text-5xl font-black mb-6">
                Un team operativo
                <br />
                vicino ai clienti
              </h3>

              <p className="text-zinc-300 text-lg mb-10 max-w-3xl mx-auto">
                Lavoriamo ogni giorno per offrire ghiaccio professionale con consegne rapide, attenzione al servizio
                e supporto diretto a bar, eventi e privati tra Mantova, Modena e Reggio Emilia.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.title} className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
                <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs mb-3">{member.role}</p>
                <h3 className="text-2xl font-bold mb-4">{member.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{member.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-black border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Vuoi conoscere meglio il nostro servizio?</h3>
            <p className="text-zinc-300 mb-8">
              Scrivici per ricevere informazioni, disponibilità e un preventivo su misura.
            </p>
            <Link
              to="/contatti"
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
              src="/images/Logo_IceStoneService_Rettangolare.jpg"
              alt="IceStone Service Logo"
              className="h-10 md:h-12 object-contain"
            />
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="https://www.instagram.com/icestone2.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E1306C] hover:opacity-90 transition"
            >
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
