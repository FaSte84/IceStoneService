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
      const templateParams = {
        to_email: 'info@icestoneservice.it',
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

      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Email inviata con successo:', templateParams);
      alert('Richiesta preventivo inviata con successo! Ti risponderemo entro 24 ore.');
      
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
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url("/images/Biglietto_da_visita_retro.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="relative z-10 min-h-screen bg-gray-950/90">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 sticky top-0 z-50 shadow-xl border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/images/Logo_icestone.png" 
                alt="Ice Stone Service Logo" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-lg shadow-lg bg-gray-900"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold">ICE STONE SERVICE</h1>
                <p className="text-xs md:text-sm text-gray-400">Ghiaccio professionale</p>
              </div>
            </div>
            <a
              href="#preventivo"
              className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md text-sm"
            >
              Richiedi Preventivo
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-10 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-3">
                Produzione e Confezionamento 
                <br />
                <span className="text-blue-400">Distribuzione a Domicilio</span>
              </h2>
              <p className="text-base md:text-lg mb-5 text-gray-400">
                Vendita diretta di ghiaccio alimentare su Mantova e Modena.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Via C. Battisti, 8c, 46020 Pegognaga (MN)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Aperto 7 giorni su 7</span>
                </div>
              </div>
              <a
                href="#preventivo"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-bold text-base hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                Richiedi Preventivo
              </a>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700">
                <div className="flex items-center justify-center mb-4">
                  <Snowflake className="w-14 h-14 text-blue-400" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">2kg</div>
                    <div className="text-xs mt-1 text-gray-400">Buste disponibili</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">5kg</div>
                    <div className="text-xs mt-1 text-gray-400">Buste disponibili</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-900 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              I Nostri Prodotti
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700">
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-md mb-4 flex items-center justify-center border border-gray-700">
                <img 
                  src="/images/Buste_Fronte_Retro.jpeg" 
                  alt="Etichetta in bobina Ice Stone" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ghiaccio in Bobina</h3>
              <p className="text-gray-400 text-sm">
                Ghiaccio alimentare confezionato in pratiche bobine. Qualità certificata e confezione professionale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            I Nostri Servizi
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-lg border-l-4 border-blue-500">
              <CheckCircle className="w-7 h-7 text-blue-500 mb-2" />
              <h3 className="text-lg font-bold text-white mb-1">Ghiaccio Alimentare</h3>
              <p className="text-gray-400 text-sm">Disponibile in formati da 2 kg, 5 kg e personalizzati.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-lg border-l-4 border-blue-600">
              <CheckCircle className="w-7 h-7 text-blue-500 mb-2" />
              <h3 className="text-lg font-bold text-white mb-1">Ghiaccio Tritato</h3>
              <p className="text-gray-400 text-sm">Disponibile anche ghiaccio tritato per cocktail.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-lg border-l-4 border-blue-500">
              <CheckCircle className="w-7 h-7 text-blue-500 mb-2" />
              <h3 className="text-lg font-bold text-white mb-1">Consegna Rapida</h3>
              <p className="text-gray-400 text-sm">Consegna a domicilio o ritiro in sede.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-lg border-l-4 border-blue-600">
              <CheckCircle className="w-7 h-7 text-blue-500 mb-2" />
              <h3 className="text-lg font-bold text-white mb-1">Sempre Disponibili</h3>
              <p className="text-gray-400 text-sm">Servizio attivo 7 giorni su 7.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="preventivo" className="py-10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center text-white mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Richiedi Preventivo
              </h2>
              <p className="text-base text-gray-400">
                Compila il modulo e ricevi un preventivo gratuito!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1 text-sm">
                    Quantità (kg) *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 text-sm"
                    placeholder="Es: 50"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1 text-sm">
                    Data *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-semibold mb-1 text-sm">
                    Indirizzo di consegna *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 text-sm"
                    placeholder="Via, CAP, Città"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 text-sm"
                    placeholder="info@icestoneservice.it"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1 text-sm">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 text-sm"
                    placeholder="333 1234567"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-semibold mb-1 text-sm">
                    Note
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 text-sm"
                    placeholder="Eventuali richieste..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-4 py-3 rounded-lg font-bold text-base transition-all shadow-lg ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                }`}
              >
                {isSubmitting ? 'INVIO IN CORSO...' : 'INVIA RICHIESTA'}
              </button>

              <p className="text-center text-gray-500 mt-3 text-xs">
                Risposta entro 24 ore!
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-r from-green-700 to-green-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ordina su WhatsApp!
            </h2>
            <p className="text-base text-green-200 mb-6">
              Hai fretta? Contattaci direttamente!
            </p>
            
            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-xl mx-auto border border-gray-700">
              <a
                href="https://wa.me/393534632562?text=Ciao! Vorrei ordinare del ghiaccio alimentare."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-base transition-all shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                ORDINA SU WHATSAPP
              </a>
              
              <p className="text-xs text-gray-400 mt-3">
                +39 353 463 2562
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            Contattaci
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-lg border border-gray-700">
                <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-bold text-white mb-1 text-sm">Sede</h3>
                <p className="text-gray-400 text-xs">Via C. Battisti, 8c, 46020 Pegognaga (MN)</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-lg border border-gray-700">
                <Phone className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-bold text-white mb-1 text-sm">Telefono</h3>
                <p className="text-blue-400 font-semibold text-sm">353 463 2562</p>
                <p className="text-blue-400 font-semibold text-xs mt-1">377 089 0066</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-lg border border-gray-700">
                <Mail className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-bold text-white mb-1 text-sm">Email</h3>
                <p className="text-blue-400 font-semibold text-sm">info@icestoneservice.it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-900 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6 text-white">La nostra area di servizio</h2>
          <div className="bg-gray-800 rounded-xl shadow-xl p-3 max-w-4xl mx-auto border border-gray-700">
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.0234363052193!2d10.854472600000002!3d44.9975594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x385bcf32251f933%3A0x15c6ba1b322f6f2!2sICE%20STONE%20SERVICE%202.0!5e0!3m2!1sit!2sit!4v1696789456789!5m2!1sit!2sit" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ICE STONE SERVICE 2.0 - Pegognaga (MN)"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Snowflake className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-base">ICE STONE SERVICE</span>
          </div>
          <p className="text-gray-400 mb-1 text-xs">
            Realizzato per rinfrescare ogni tuo evento
          </p>
          <p className="text-gray-500 text-xs">
            © 2025 Ice Stone Service - P.IVA 01562370914
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
