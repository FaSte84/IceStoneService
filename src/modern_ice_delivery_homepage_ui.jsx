export default function IceDeliveryHomepage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <img 
              src="/images/Logo_icestone.png" 
              alt="IceStone Service Logo" 
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <h1 className="text-xl font-bold tracking-wider">ICE STONE SERVICE</h1>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#prodotti" className="hover:text-white transition">Prodotti</a>
            <a href="#eventi" className="hover:text-white transition">Eventi</a>
            <a href="#servizi" className="hover:text-white transition">Servizi</a>
            <a href="#contatti" className="hover:text-white transition">Contatti</a>
          </nav>

          <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
            Ordina Ora
          </button>
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

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Produzione, confezionamento e trasporto di ghiaccio professionale
            su tutto il territorio di Mantova e Modena.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-cyan-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
              Ordina Ora
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition">
              WhatsApp
            </button>
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

          <button className="bg-cyan-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
            Richiedi Preventivo
          </button>
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

{/* Contacts */}
      <section id="contatti" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm mb-4">
              Contattaci
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Siamo sempre disponibili
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-white/10 rounded-3xl p-10 text-center">
              <div className="text-4xl mb-6">📍</div>
              <h3 className="text-xl font-semibold mb-2">Sede</h3>
              <p className="text-zinc-400">Via C. Battisti, 8c<br />46020 Pegognaga (MN)</p>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-10 text-center">
              <div className="text-4xl mb-6">📞</div>
              <h3 className="text-xl font-semibold mb-2">Telefono</h3>
              <p className="text-cyan-400 font-bold">353 463 2562</p>
              <p className="text-cyan-400 font-bold mt-1">377 089 0066</p>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-10 text-center">
              <div className="text-4xl mb-6">✉️</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-cyan-400 font-bold">info@icestoneservice.it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contatti"
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
