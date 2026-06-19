import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Servizi_IceStoneService_Sardegna() {
  const [menuOpen, setMenuOpen] = useState(false)
  const services = [
    {
      title: "Comodato d'Uso di Contenitori Isotermici",
      image: '/images/Prodotti_Italia/Contenitore_isotermico.png',
      text:
        "Per garantire la corretta conservazione del ghiaccio durante l'utilizzo e la distribuzione, mettiamo a disposizione contenitori isotermici in comodato d'uso. Soluzioni pratiche e affidabili per mantenere il prodotto nelle migliori condizioni fino al momento dell'impiego.",
    },
    {
      title: 'Noleggio di Furgoni Frigoriferi',
      text:
        'Offriamo il noleggio di furgoni frigoriferi per esigenze di trasporto e stoccaggio temporaneo. Un servizio pensato per aziende, eventi e attivita commerciali che necessitano di mantenere la catena del freddo senza interruzioni.',
    },
    {
      title: 'Noleggio Congelatori a Pozzetto',
      text:
        'Disponiamo di congelatori a pozzetto a noleggio per eventi, manifestazioni, attivita stagionali e esigenze temporanee. I nostri congelatori assicurano elevate prestazioni di conservazione e rappresentano una soluzione pratica e conveniente per lo stoccaggio del ghiaccio.',
    },
    {
      title: 'Assistenza e Consulenza',
      text:
        'Il nostro team e a disposizione per individuare la soluzione piu adatta alle vostre necessita, offrendo supporto nella scelta delle attrezzature e dei servizi piu idonei per la gestione e la conservazione del ghiaccio.',
    },
  ]
  const advantages = [
    'Conservazione ottimale del ghiaccio.',
    'Soluzioni flessibili per ogni esigenza.',
    'Attrezzature affidabili e professionali.',
    'Supporto tecnico dedicato.',
    'Servizio rapido ed efficiente.',
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
                  className="block px-6 py-3 text-white bg-white/10 transition"
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm mb-4">
              Servizi
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              I Nostri Servizi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {services.map((item) => (
                <div key={item.title} className="bg-black border border-white/10 rounded-3xl p-8">
                  <div className="text-4xl mb-4">🧊</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.text}</p>
                  {item.image ? (
                    <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-950/80 p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mx-auto h-40 w-auto max-w-full object-contain md:h-48"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Perche scegliere i nostri servizi?</h3>
              <div className="space-y-3 mb-8">
                {advantages.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-zinc-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-zinc-300 mb-8">
                Per maggiori informazioni sui servizi disponibili o per richiedere un preventivo personalizzato, contattate il nostro staff.
              </p>
              <Link
                to="/contatti-sardegna"
                className="inline-block bg-cyan-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
              >
                Richiedi un preventivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <img
              src="/images/Logo_IceStoneService_Rettangolare.jpg"
              alt="IceStone Service Logo"
              className="h-10 md:h-12 object-contain scale-125 md:scale-150 origin-left"
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
