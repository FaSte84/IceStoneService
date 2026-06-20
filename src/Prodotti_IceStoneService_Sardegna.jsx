import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Prodotti_IceStoneService_Sardegna() {
  const [menuOpen, setMenuOpen] = useState(false)
  const cubettiSlides = [
    '/images/Prodotti_Italia/Cocktail_Icestone.jpeg',
    '/images/Prodotti_Italia/GhiaccioCubettiSoli.jpeg',
  ]
  const [cubettiSlideIndex, setCubettiSlideIndex] = useState(0)
  const lastraSlides = [
    '/images/Prodotti_Italia/LastraCampari.jpeg',
    '/images/Prodotti_Italia/LastraCampariAlto.jpeg',
    '/images/Prodotti_Italia/LastraCampariLato.jpeg',
  ]
  const [lastraSlideIndex, setLastraSlideIndex] = useState(0)

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setCubettiSlideIndex((currentIndex) => (currentIndex + 1) % cubettiSlides.length)
    }, 2500)

    return () => window.clearInterval(slideTimer)
  }, [cubettiSlides.length])

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setLastraSlideIndex((currentIndex) => (currentIndex + 1) % lastraSlides.length)
    }, 2500)

    return () => window.clearInterval(slideTimer)
  }, [lastraSlides.length])

  const products = [
    {
      title: 'Ice Cubes Premium',
      size: '2 KG',
      image: '/images/Prodotti_Italia/Ghiaccio quadrato.jpg',
    },
    {
      title: 'Ghiaccio Cubetti',
      size: 'Buste da 2,5 kg',
      images: cubettiSlides,
      slideIndex: cubettiSlideIndex,
      setSlideIndex: setCubettiSlideIndex,
    },
    {
      title: 'Creazione di Lastre di Ghiaccio Personalizzate',
      size: 'Su misura',
      images: lastraSlides,
      slideIndex: lastraSlideIndex,
      setSlideIndex: setLastraSlideIndex,
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
                  to="/chi-siamo-sardegna"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  Chi siamo
                </Link>
                <Link
                  to="/prodotti-sardegna"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-white bg-white/10 transition"
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
            <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm mb-4">Prodotti</p>
            <h2 className="text-4xl md:text-5xl font-bold">Ghiaccio per ogni esigenza in Sardegna</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-black">
                  {item.images ? (
                    item.images.map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${item.title} ${index + 1}`}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                          index === item.slideIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {item.images ? (
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/40 px-3 py-2 backdrop-blur-sm">
                      {item.images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => item.setSlideIndex(index)}
                          aria-label={`Mostra slide ${index + 1}`}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            index === item.slideIndex ? 'scale-125 bg-cyan-300' : 'bg-white/40 hover:bg-white/70'
                          }`}
                        ></button>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 mb-6">Formato {item.size}</p>

                  <Link
                    to="/contatti-sardegna"
                    className="inline-block bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
                  >
                    Ordina
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-black border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Vuoi un preventivo o una consegna su misura?</h3>
            <p className="text-zinc-300 mb-8">
              Scrivici e ti rispondiamo con disponibilità, prezzi e tempistiche per tutta la Sardegna.
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
