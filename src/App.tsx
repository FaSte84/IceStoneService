import { useState } from 'react';
import { IceCream, Truck, Clock, Shield, Phone, Mail, MapPin, Calendar, Package, Snowflake, CheckCircle } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    quantity: '',
    date: '',
    address: '',
    distance: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Richiesta preventivo inviata! Ti risponderemo entro 24 ore.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/Log.png" alt="Ice Stone Service Logo" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">ICE STONE SERVICE</h1>
                <p className="text-sm md:text-base text-cyan-100">Ghiaccio professionale per ogni esigenza</p>
              </div>
            </div>
            <a
              href="#preventivo"
              className="hidden md:block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-md"
            >
              Richiedi Preventivo
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white py-16 md:py-24" style={{backgroundImage: 'url("/images/Sfondo.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', position: 'relative'}}>
        {/* Overlay scuro per migliorare la leggibilità */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                Ghiaccio in busta per feste, bar e ristoranti
              </h2>
              <p className="text-xl mb-6 text-white">
                Vendita diretta di ghiaccio alimentare a Modena, Mantova e provincia
              </p>
              <div className="space-y-3 mb-8 text-white">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span className="drop-shadow-md">Modena, Mantova e provincia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span className="drop-shadow-md">Aperto tutti i giorni, 7 giorni su 7</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="drop-shadow-md">Responsabile: Francesco Cabitza</span>
                </div>
              </div>
              <a
                href="#preventivo"
                className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Richiedi Preventivo Gratuito
              </a>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <Snowflake className="w-20 h-20 text-white" />
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/20 rounded-lg p-6 hover:bg-white/30 transition-all">
                    <div className="text-4xl font-bold">2kg</div>
                    <div className="text-sm mt-2">Buste disponibili</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6 hover:bg-white/30 transition-all">
                    <div className="text-4xl font-bold">5kg</div>
                    <div className="text-sm mt-2">Buste disponibili</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Chi Siamo
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ice Stone Service è il tuo partner di fiducia per la fornitura di ghiaccio alimentare in busta,
              ideale per feste ed eventi privati, bar e locali notturni, ristoranti e catering, sagre, fiere e manifestazioni.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Operiamo con vendita diretta a Modena, Mantova e in tutta la provincia,
              garantendo consegne rapide e puntuali per ogni esigenza.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Package className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Feste Private</h3>
              <p className="text-sm text-gray-600">Eventi e celebrazioni</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <IceCream className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Bar & Locali</h3>
              <p className="text-sm text-gray-600">Fornitura continua</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Truck className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Ristoranti</h3>
              <p className="text-sm text-gray-600">Catering e ristorazione</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Snowflake className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Eventi</h3>
              <p className="text-sm text-gray-600">Sagre e fiere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            I Nostri Servizi
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-cyan-500">
              <CheckCircle className="w-10 h-10 text-cyan-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ghiaccio Alimentare in Busta</h3>
              <p className="text-gray-600">Disponibile in formati da 2 kg, 5 kg e su richiesta per quantità personalizzate. Vendita diretta a Modena, Mantova e provincia.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <CheckCircle className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ghiaccio Tritato</h3>
              <p className="text-gray-600">Disponibile anche ghiaccio tritato per cocktail e bevande speciali</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-cyan-600">
              <CheckCircle className="w-10 h-10 text-cyan-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Consegna Rapida</h3>
              <p className="text-gray-600">Consegna a domicilio o ritiro in sede con massima flessibilità</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-600">
              <CheckCircle className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sempre Disponibili</h3>
              <p className="text-gray-600">Servizio attivo 7 giorni su 7 per ogni tua esigenza</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Preventivo */}
      <section id="preventivo" className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center text-white mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Richiedi il Tuo Preventivo Online
              </h2>
              <p className="text-xl text-cyan-100">
                Compila il modulo e ricevi un preventivo gratuito entro 24 ore!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Quantità di ghiaccio (kg) *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Es: 50"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Data evento / richiesta *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                <div>

                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Distanza da Pegognaga (km)
                  </label>
                  <input
                    type="number"
                    name="distance"
                    value={formData.distance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Es: 15"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Indirizzo di consegna *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Via, CAP, Città"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="tua@email.it"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="333 1234567"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Note aggiuntive
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Eventuali richieste particolari..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:from-cyan-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                INVIA RICHIESTA PREVENTIVO
              </button>

              <p className="text-center text-gray-600 mt-4 text-sm">
                Risposta garantita entro 24 ore!
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Perché Sceglierci */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Perché Scegliere Ice Stone Service?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Qualità Certificata</h3>
              <p className="text-gray-600">Ghiaccio purificato e confezionato secondo le normative alimentari</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Prezzi Competitivi</h3>
              <p className="text-gray-600">Tariffe convenienti anche per piccole quantità</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Consegna Veloce</h3>
              <p className="text-gray-600">Servizio rapido e puntuale su tutto il territorio</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <IceCream className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Qualità Garantita</h3>
              <p className="text-gray-600">Ghiaccio alimentare di alta qualità, prodotto secondo le normative vigenti</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Assistenza Diretta</h3>
              <p className="text-gray-600">Supporto personalizzato per ogni esigenza</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sempre Aperti</h3>
              <p className="text-gray-600">Servizio attivo 7 giorni su 7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Contattaci Ora
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Sede</h3>
                <p className="text-gray-600">Pegognaga (MN)</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <Phone className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Telefono</h3>
                <p className="text-gray-600">Francesco Cabitza</p>
                <p className="text-cyan-600 font-semibold">[Inserire numero]</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <Mail className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-cyan-600 font-semibold">[Inserire email]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Snowflake className="w-6 h-6" />
            <span className="font-bold text-lg">ICE STONE SERVICE</span>
          </div>
          <p className="text-gray-400 mb-2">
            Realizzato per rinfrescare ogni tuo evento
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Ice Stone Service - P.IVA [numero se disponibile]
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
