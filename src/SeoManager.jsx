import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function setMetaTagByName(name, content) {
  if (!content) return
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setMetaTagByProperty(property, content) {
  if (!content) return
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setLinkRel(rel, href) {
  if (!href) return
  let link = document.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

const SITE_URL = 'https://icestoneservice.it'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/Logo_icestone.png`
const DEFAULT_TITLE = 'Ice Stone Service - Ghiaccio Professionale'
const DEFAULT_DESCRIPTION =
  'Produzione e consegna di ghiaccio professionale per bar, eventi e privati. Servizi in Sardegna e in Emilia (Mantova, Modena e Reggio Emilia).'

const ROUTE_META = {
  '/': {
    title: 'Ice Stone Service - Sardegna o Mantova, Modena e Reggio Emilia',
    description:
      'Scegli la tua area: Sardegna oppure Mantova, Modena e Reggio Emilia. Ghiaccio professionale per bar, eventi e privati.',
  },
  '/home-italia': {
    title: 'Ice Stone Service - Mantova, Modena e Reggio Emilia',
    description:
      'Produzione, confezionamento e trasporto di ghiaccio professionale su Mantova, Modena e Reggio Emilia. Forniture per bar, eventi e privati.',
  },
  '/home-sardegna': {
    title: 'Ice Stone Service Sardegna - Ghiaccio Professionale',
    description:
      'Produzione e consegna di ghiaccio professionale per bar, eventi e privati in tutta la Sardegna.',
  },
  '/prodotti': {
    title: 'Prodotti - Ice Stone Service',
    description:
      'Scopri i prodotti Ice Stone Service: ghiaccio per ogni esigenza e lastre di ghiaccio personalizzate.',
  },
  '/prodotti-sardegna': {
    title: 'Prodotti Sardegna - Ice Stone Service',
    description:
      'Prodotti Ice Stone Service in Sardegna: ghiaccio per ogni esigenza e lastre di ghiaccio personalizzate.',
  },
  '/servizi': {
    title: 'Servizi - Ice Stone Service',
    description:
      "Servizi Ice Stone Service: comodato d'uso contenitori isotermici, noleggio furgoni frigoriferi, noleggio congelatori a pozzetto, assistenza e consulenza.",
  },
  '/servizi-sardegna': {
    title: 'Servizi Sardegna - Ice Stone Service',
    description:
      "Servizi Ice Stone Service in Sardegna: comodato d'uso contenitori isotermici, noleggio furgoni frigoriferi, noleggio congelatori a pozzetto, assistenza e consulenza.",
  },
  '/eventi': {
    title: 'Eventi - Ice Stone Service',
    description: 'Servizi e forniture ghiaccio per eventi, locali e privati.',
  },
  '/eventi-sardegna': {
    title: 'Eventi Sardegna - Ice Stone Service',
    description: 'Servizi e forniture ghiaccio per eventi in Sardegna.',
  },
  '/chi-siamo': {
    title: 'Chi Siamo - Ice Stone Service',
    description:
      'Conosci il team Ice Stone Service: consegne rapide, attenzione al servizio e supporto diretto tra Mantova, Modena e Reggio Emilia.',
  },
  '/chi-siamo-sardegna': {
    title: 'Chi Siamo Sardegna - Ice Stone Service',
    description: 'Conosci il team Ice Stone Service Sardegna e i nostri servizi sul territorio.',
  },
  '/contatti': {
    title: 'Contatti - Ice Stone Service',
    description: 'Contatta Ice Stone Service per preventivi, disponibilita e consegne.',
  },
  '/contatti-sardegna': {
    title: 'Contatti Sardegna - Ice Stone Service',
    description: 'Contatta Ice Stone Service Sardegna per preventivi, disponibilita e consegne.',
  },
  '/privacy': {
    title: 'Privacy Policy - Ice Stone Service',
    description:
      'Informativa privacy di Ice Stone Service: trattamento dei dati personali, contatti, diritti degli interessati e informazioni sui cookie.',
  },
}

export default function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const meta = ROUTE_META[location.pathname] || {}
    const title = meta.title || DEFAULT_TITLE
    const description = meta.description || DEFAULT_DESCRIPTION
    const canonical = `${SITE_URL}${location.pathname}`

    document.title = title
    setMetaTagByName('description', description)
    setMetaTagByName('robots', 'index,follow')
    setLinkRel('canonical', canonical)

    setMetaTagByProperty('og:site_name', 'Ice Stone Service')
    setMetaTagByProperty('og:type', 'website')
    setMetaTagByProperty('og:title', title)
    setMetaTagByProperty('og:description', description)
    setMetaTagByProperty('og:url', canonical)
    setMetaTagByProperty('og:image', DEFAULT_OG_IMAGE)

    setMetaTagByName('twitter:card', 'summary_large_image')
    setMetaTagByName('twitter:title', title)
    setMetaTagByName('twitter:description', description)
    setMetaTagByName('twitter:image', DEFAULT_OG_IMAGE)
  }, [location.pathname])

  return null
}
