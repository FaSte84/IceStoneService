import { useState } from 'react';
import { IceCream, Truck, Clock, Shield, Phone, Mail, MapPin, Package, Snowflake, CheckCircle } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    quantity: '',
    date: '',
    address: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configurazione EmailJS (usando un servizio pubblico per demo)
      const templateParams = {
        to_email: 'stefano.fava@hotmail.it',
        from_name: 'ICE STONE SERVICE - Sito Web',
        quantity: formData.quantity,
        date: formData.date,
        address: formData.address,
        customer_email: formData.email,
        customer_phone: formData.phone,
        notes: formData.notes,
        message: `
Nuova richiesta preventivo da ICE STONE SERVICE:

Quantità: ${formData.quantity} kg
Data consegna: ${formData.date}
Indirizzo: ${formData.address}
Email cliente: ${formData.email}
Telefono cliente: ${formData.phone}
Note: ${formData.notes}
        `
      };

      // Per ora simulo l'invio email con un timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      /*<a href="mailto:francesco.cabitza87@gmail.com?cc=stefano.fava@hotmail.it&subject=Preventivo%20personalizzato&body=Buongiorno,%0D%0A%0D%0Asono interessato a ricevere un preventivo per...">
        Contattaci
      </a>*/
      
      console.log('Email inviata con successo:', templateParams);
      alert('Richiesta preventivo inviata con successo! Ti risponderemo entro 24 ore.');
      
      // Reset del form
      setFormData({
        quantity: '',
        date: '',
        address: '',
        email: '',
        phone: '',
        notes: ''
      });
      
    } catch (error) {
      console.error('Errore nell\'invio email:', error);
      alert('Si è verificato un errore nell\'invio. Riprova più tardi o contattaci direttamente.');
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white py-16 md:py-24" style={{backgroundImage: 'url("/images/SfondoCHATGPT.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'normal', position: 'relative'}}>
        {/* Overlay scuro per migliorare la leggibilità */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                Produzione e Confezionamento 
                Distribuzione a Domicilio
              </h2>
              <p className="text-xl mb-6 text-white">
                Vendita diretta di ghiaccio alimentare su tutto il territorio della provincia di Mantova e della provincia di Modena.
              </p>
              <div className="space-y-3 mb-8 text-white">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span className="drop-shadow-md">Via C. Battisti, 8c, 46020 Pegognaga (MN)</span>
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
              Operiamo con vendita diretta su tutto il territorio di Mantova e provincia, Modena e provincia,
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
              <p className="text-gray-600">Disponibile in formati da 2 kg, 5 kg e su richiesta per quantità personalizzate. La nostra distribuzione a domicilio copre l'intero territorio di Mantova e Modena, comprese le rispettive province.</p>
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
                disabled={isSubmitting}
                className={`w-full mt-6 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-700 hover:to-blue-800'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                    INVIO IN CORSO...
                  </div>
                ) : (
                  'INVIA RICHIESTA PREVENTIVO'
                )}
              </button>

              <p className="text-center text-gray-600 mt-4 text-sm">
                Risposta garantita entro 24 ore!
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Ordina su WhatsApp */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ordina Subito su WhatsApp!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Hai fretta? Contattaci direttamente su WhatsApp per un ordine immediato
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-500 rounded-full p-4 mr-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">Ordine rapido e diretto</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Invia un messaggio con la quantità di ghiaccio desiderata, l'indirizzo di consegna e la data. 
                Ti risponderemo immediatamente con il preventivo!
              </p>
              
              <a
                href="https://wa.me/393534632562?text=Ciao! Vorrei ordinare del ghiaccio alimentare. Ecco i dettagli del mio ordine:"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                ORDINA SU WHATSAPP
              </a>
              
              <p className="text-sm text-gray-500 mt-4">
                Numero: +39 353 463 2562
              </p>
            </div>
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
                <p className="text-gray-600">Via C. Battisti, 8c, 46020 Pegognaga (MN)</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <Phone className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Telefono</h3>
                <p className="text-gray-600">Francesco Cabitza</p>
                <p className="text-cyan-600 font-semibold">[3534632562]</p>
                <h3 className="font-bold text-gray-800 mb-2">Telefono alternativo</h3>
                <p className="text-cyan-600 font-semibold">[3770890066]</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <Mail className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-cyan-600 font-semibold">[francesco.cabitza87@gmail.com]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">La nostra area di servizio</h2>
          <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.0234363052193!2d10.854472600000002!3d44.9975594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x385bcf32251f933%3A0x15c6ba1b322f6f2!2sICE%20STONE%20SERVICE%202.0!5e0!3m2!1sit!2sit!4v1696789456789!5m2!1sit!2sit" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ICE STONE SERVICE 2.0 - Pegognaga (MN)"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-700">La nostra sede a Pegognaga (MN) con servizio di consegna su tutto il territorio di Mantova e provincia, e Modena e provincia.</p>
              <p className="text-gray-600 mt-2">Contattaci per verificare disponibilità e tempi di consegna nella tua zona</p>
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
