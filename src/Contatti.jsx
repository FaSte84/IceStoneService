import { Link } from 'react-router-dom'

export default function Contatti() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img 
                src="/images/Logo_icestone.png" 
                alt="IceStone Service Logo" 
                className="h-16 md:h-20 object-contain"
              />
            </Link>
            <h1 className="text-xl font-bold tracking-wider">ICE STONE SERVICE</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <a href="#prodotti" className="hover:text-white transition">Prodotti</a>
            <a href="#eventi" className="hover:text-white transition">Eventi</a>
            <a href="#servizi" className="hover:text-white transition">Servizi</a>
            <Link to="/contatti" className="text-cyan-400 hover:text-cyan-300 transition">Contatti</Link>
          </nav>

          <a 
            href="https://wa.me/393534632562?text=Ciao! Vorrei ordinare del ghiaccio alimentare."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Ordina Ora
          </a>
        </div>
      </header>

      {/* Contatti Section */}
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
            {/* Form Contatti */}
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Invia un messaggio</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-zinc-400 mb-2">Nome e Cognome *</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-2">Telefono</label>
                  <input 
                    type="tel" 
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-2">Messaggio *</label>
                  <textarea 
                    rows="5"
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition resize-none"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-cyan-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
                >
                  Invia Messaggio
                </button>
              </form>
            </div>

            {/* Info Contatti */}
            <div className="space-y-8">
              <div className="bg-black border border-white/10 rounded-3xl p-8">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">Sede</h3>
                <p className="text-zinc-400">Via C. Battisti, 8c<br />46020 Pegognaga (MN)</p>
              </div>

              <div className="bg-black border border-white/10 rounded-3xl p-8">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">Telefono</h3>
                <p className="text-cyan-400 font-bold text-lg">353 463 2562</p>
                <p className="text-cyan-400 font-bold text-lg mt-2">377 089 0066</p>
              </div>

              <div className="bg-black border border-white/10 rounded-3xl p-8">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-cyan-400 font-bold text-lg">info@icestoneservice.it</p>
              </div>

              <div className="bg-black border border-white/10 rounded-3xl p-8">
                <div className="text-4xl mb-4">🕒</div>
                <h3 className="text-xl font-semibold mb-2">Orari</h3>
                <p className="text-zinc-400">Lunedì - Domenica: 24h su 24</p>
              </div>
            </div>
          </div>
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
              className="h-14 md:h-16 object-contain"
            />
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
