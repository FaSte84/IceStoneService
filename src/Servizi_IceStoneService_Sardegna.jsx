import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Servizi_IceStoneService_Sardegna() {
  const [menuOpen, setMenuOpen] = useState(false)
  const services = [
    {
      title: "Comodato d'Uso di Contenitori Isotermici",
      image: '/images/Servizi_Italia/Contenitore_isotermico-removebg.png',
      imageWrapperClassName: 'px-2 py-2',
      imageClassName: 'h-60 md:h-72',
      text:
        "Per garantire la corretta conservazione del ghiaccio durante l'utilizzo e la distribuzione, mettiamo a disposizione contenitori isotermici in comodato d'uso. Soluzioni pratiche e affidabili per mantenere il prodotto nelle migliori condizioni fino al momento dell'impiego.",
    },
    {
      title: 'Noleggio di Furgoni Frigoriferi',
      cardClassName: 'border-cyan-300/25 bg-cyan-400/[0.04]',
      iconClassName: 'text-cyan-300',
      text:
        'Offriamo il noleggio di furgoni frigoriferi per esigenze di trasporto e stoccaggio temporaneo. Un servizio pensato per aziende, eventi e attivita commerciali che necessitano di mantenere la catena del freddo senza interruzioni.',
    },
    {
      title: 'Noleggio Congelatori a Pozzetto',
      image: '/images/Servizi_Italia/Congelatore_Pozzetto-removebg.png',
      imageWrapperClassName: 'px-2 py-2',
      imageClassName: 'h-72 md:h-80',
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
                <div
                  key={item.title}
                  className={`rounded-3xl border p-8 ${item.cardClassName ?? 'bg-black border-white/10'}`}
                >
                  <div className={`text-4xl mb-4 ${item.iconClassName ?? ''}`}>🧊</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.text}</p>
                  {item.image ? (
                    <div
                      className={`mt-6 rounded-3xl border border-cyan-300/30 bg-transparent ${
                        item.imageWrapperClassName ?? 'px-3 py-4'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`mx-auto w-auto max-w-full object-contain ${
                          item.imageClassName ?? 'h-56 md:h-64'
                        }`}
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
              href="https://www.instagram.com/icestone_service?igsh=dDQycDBoZGw5dmU%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E1306C] hover:opacity-90 transition"
            >
              <img
                src="/images/Button-Instagram.png"
                alt=""
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
  )
}
