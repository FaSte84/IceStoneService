function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img 
              src="/images/Logo_icestone.png" 
              alt="Ice Stone Service Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-bold tracking-wider">ICE STONE SERVICE</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#prodotti" className="hover:text-white transition">Prodotti</a>
            <a href="#servizi" className="hover:text-white transition">Servizi</a>
            <a href="#contatti" className="hover:text-white transition">Contatti</a>
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

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/Sfondo_nido_ape.jpg"
          alt="Ice"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-6">
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
            <a 
              href="https://wa.me/393534632562?text=Ciao! Vorrei ordinare del ghiaccio alimentare."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
            >
              Ordina Ora
            </a>

            <a 
              href="#contatti"
              className="border border-white/30 px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition"
            >
              Contattaci
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

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300">
            <div className="h-72 overflow-hidden flex items-center justify-center bg-zinc-800">
              <img
                src="/images/Buste_Fronte_Retro.jpeg"
                alt="Ghiaccio in bobina"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Ghiaccio in Bobina</h3>
              <p className="text-zinc-400 mb-6">Formati 2 KG e 5 KG disponibili</p>

              <div className="flex items-center justify-between">
                <div className="text-3xl font-black">2 KG / 5 KG</div>

                <a 
                  href="https://wa.me/393534632562?text=Ciao! Vorrei ordinare del ghiaccio alimentare."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
                >
                  Ordina
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="servizi" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🚚", title: "Consegna rapida", desc: "A domicilio o ritiro in sede" },
            { icon: "🧊", title: "Ghiaccio premium", desc: "Qualità certificata" },
            { icon: "📅", title: "Disponibile 7/7", desc: "Sempre pronti per te" },
            { icon: "🎉", title: "Per bar ed eventi", desc: "Forniture professionali" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-black border border-white/10 rounded-3xl p-10"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-[40px] text-black text-center p-16">
          <p className="uppercase tracking-[0.2em] text-sm mb-4 font-semibold">
            Consegna immediata
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            MAI PIÙ
            <br />
            SENZA GHIACCIO
          </h2>

          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Ordina online il tuo ghiaccio professionale e ricevilo rapidamente
            direttamente dove ti serve.
          </p>

          <a 
            href="https://wa.me/393534632562?text=Ciao! Vorrei ordinare del ghiaccio alimentare."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition inline-block"
          >
            Ordina Adesso
          </a>
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

      {/* Map */}
      <section className="py-8 bg-black border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.0234363052193!2d10.854472600000002!3d44.9975594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x385bcf32251f933%3A0x15c6ba1b322f6f2!2sICE%20STONE%20SERVICE%202.0!5e0!3m2!1sit!2sit!4v1696789456789!5m2!1sit!2sit" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ICE STONE SERVICE 2.0 - Pegognaga (MN)"
              ></iframe>
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
          <div className="flex items-center gap-2">
            <img 
              src="/images/Logo_icestone.png" 
              alt="Ice Stone Service Logo" 
              className="w-8 h-8 object-contain"
            />
            <h3 className="text-white text-xl font-bold tracking-wider">
              ICE STONE SERVICE
            </h3>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="https://wa.me/393534632562" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <p className="text-zinc-500">© 2025 Ice Stone Service</p>
            <p className="text-zinc-500">P.IVA 01562370914</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
