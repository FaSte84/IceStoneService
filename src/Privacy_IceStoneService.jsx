import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Titolare del trattamento',
    content: [
      'Il presente sito e i servizi collegati sono gestiti da Ice Stone Service.',
      'Per informazioni relative al trattamento dei dati personali e possibile contattare il titolare scrivendo a info@icestoneservice.it oppure tramite i recapiti presenti nella pagina contatti.',
    ],
  },
  {
    title: 'Tipologie di dati raccolti',
    content: [
      'Dati di contatto forniti volontariamente dall utente tramite il form, come nome, email, numero di telefono e contenuto del messaggio.',
      'Dati tecnici di navigazione, come indirizzo IP, tipo di browser, dispositivo, pagine visitate, data e ora di accesso, raccolti per il corretto funzionamento del sito e per finalita statistiche o di sicurezza.',
    ],
  },
  {
    title: 'Finalita del trattamento',
    content: [
      'Rispondere a richieste di informazioni, preventivi o contatti commerciali.',
      'Gestire l erogazione dei servizi richiesti e mantenere i rapporti con clienti e potenziali clienti.',
      'Garantire la sicurezza del sito, prevenire accessi non autorizzati e migliorare l esperienza di navigazione.',
    ],
  },
  {
    title: 'Base giuridica',
    content: [
      'Il trattamento dei dati si basa sull esecuzione di misure precontrattuali richieste dall utente, sull esecuzione di obblighi contrattuali e, ove necessario, sul legittimo interesse del titolare a tutelare la sicurezza del sito e gestire le richieste ricevute.',
    ],
  },
  {
    title: 'Modalita di trattamento',
    content: [
      'I dati sono trattati con strumenti elettronici e organizzativi adeguati per garantirne sicurezza, riservatezza e integrita.',
      'L accesso ai dati e consentito solo a soggetti autorizzati o a fornitori tecnici strettamente necessari alla gestione del sito e dei servizi.',
    ],
  },
  {
    title: 'Conservazione dei dati',
    content: [
      'I dati personali vengono conservati per il tempo strettamente necessario a rispondere alle richieste ricevute, a gestire eventuali rapporti commerciali e ad adempiere agli obblighi di legge applicabili.',
    ],
  },
  {
    title: 'Comunicazione a terzi',
    content: [
      'I dati potranno essere comunicati a soggetti terzi solo quando necessario per finalita tecniche, amministrative, legali o operative collegate al funzionamento del sito e alla gestione dei servizi richiesti.',
      'I dati non vengono diffusi pubblicamente salvo obblighi di legge.',
    ],
  },
  {
    title: 'Diritti dell interessato',
    content: [
      'L utente puo richiedere in qualsiasi momento accesso, rettifica, cancellazione, limitazione del trattamento, opposizione o portabilita dei propri dati, nei limiti previsti dal Regolamento UE 2016/679.',
      'Per esercitare i propri diritti e sufficiente scrivere a info@icestoneservice.it.',
    ],
  },
  {
    title: 'Cookie e tecnologie simili',
    content: [
      'Il sito puo utilizzare cookie tecnici indispensabili al funzionamento delle pagine. Eventuali strumenti di terze parti o servizi esterni collegati possono applicare proprie policy privacy e cookie.',
    ],
  },
  {
    title: 'Aggiornamenti',
    content: [
      'La presente informativa puo essere aggiornata nel tempo. Le modifiche saranno pubblicate in questa pagina con effetto dalla data di pubblicazione.',
    ],
  },
]

export default function Privacy_IceStoneService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/Logo_icestone.png"
              alt="Ice Stone Service"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Ice Stone Service
              </p>
              <p className="text-xs text-white/60">Informativa privacy</p>
            </div>
          </Link>

          <div className="flex items-center gap-3 text-sm">
            <Link
              to="/home-italia"
              className="rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:border-cyan-400 hover:text-white"
            >
              Italia
            </Link>
            <Link
              to="/home-sardegna"
              className="rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:border-cyan-400 hover:text-white"
            >
              Sardegna
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-white/5 p-8 shadow-[0_0_80px_rgba(34,211,238,0.08)] md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Privacy</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Informativa sul trattamento dei dati personali
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Questa pagina descrive come Ice Stone Service tratta i dati personali raccolti
            attraverso il sito web, i moduli di contatto e le richieste di informazioni o
            preventivo inviate dagli utenti.
          </p>

          <div className="mt-10 space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8"
              >
                <h2 className="text-xl font-bold text-white md:text-2xl">{section.title}</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-white/75 md:text-base">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
            <h2 className="text-xl font-bold text-white md:text-2xl">Contatti privacy</h2>
            <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
              Per domande relative alla presente informativa o per esercitare i tuoi diritti,
              puoi scrivere a <span className="font-semibold text-cyan-300">info@icestoneservice.it</span>
              {' '}oppure utilizzare la pagina contatti del sito.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contatti"
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Contatti Italia
              </Link>
              <Link
                to="/contatti-sardegna"
                className="rounded-full border border-cyan-300 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-black"
              >
                Contatti Sardegna
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

