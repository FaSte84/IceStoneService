import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contatti_IceStoneService_Italia() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    setMessageType('')

    fetch('/htdocs/contatti.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setMessage('Messaggio inviato con successo! Ti contatteremo a breve.')
        setMessageType('success')
        setFormData({ nome: '', email: '', telefono: '', messaggio: '' })
      } else {
        setMessage(data.error || 'Si è verificato un errore. Riprova più tardi.')
        setMessageType('error')
      }
    })
    .catch(() => {
      setMessage('Si è verificato un errore di rete. Riprova più tardi.')
      setMessageType('error')
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
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
                  to="/chi-siamo"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition"
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm mb-4">
              Contattaci
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Siamo sempre disponibili
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Invia un messaggio</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {message && (
                  <div className={`p-4 rounded-xl ${messageType === 'success' ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'}`}>
                    <p className={messageType === 'success' ? 'text-green-300' : 'text-red-300'}>{message}</p>
                  </div>
                )}
                <div>
                  <label className="block text-zinc-400 mb-2">Nome e Cognome *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-2">Telefono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-2">Messaggio *</label>
                  <textarea
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-cyan-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? 'Invio in corso...' : 'Invia Messaggio'}
                </button>
              </form>
            </div>

            <div className="space-y-8 md:order-1">
              <div className="bg-black border border-white/10 rounded-3xl p-8">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">Sede</h3>
                <p className="text-zinc-400">
                  Via C. Battisti, 8c
                  <br />
                  46020 Pegognaga (MN)
                </p>
              </div>

              <div className="bg-black border border-white/10 rounded-3xl p-8">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">Telefono</h3>
                <p className="text-cyan-400 font-bold text-lg">353 463 2562</p>
              </div>

              <div className="bg-black border border-white/10 rounded-3xl p-8">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-cyan-400 font-bold text-lg">info@icestoneservice.it</p>
              </div>

              <div className="bg-black border border-white/10 rounded-3xl p-8">
                <div className="text-4xl mb-4">🕒</div>
                <h3 className="text-xl font-semibold mb-2">Orari</h3>
                <p className="text-zinc-400">Operativi ogni giorno per garantire un servizio continuo e puntuale anche nei giorni festivi</p>
              </div>
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
              href="https://wa.me/393534632562?text=Ciao! Vorrei ordinare del ghiaccio alimentare."
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
