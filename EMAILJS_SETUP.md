# Configurazione EmailJS per ICE STONE SERVICE

## Istruzioni per configurare l'invio email reale

### 1. Crea un account EmailJS
1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/)
2. Registrati gratuitamente (il piano gratuito include 200 email/mese)

### 2. Configura un servizio email
1. Nel dashboard EmailJS, vai su "Email Services"
2. Clicca "Add New Service"
3. Scegli il tuo provider email (Gmail, Outlook, Yahoo, ecc.)
4. Segui le istruzioni per collegare il tuo account email
5. Annota il **Service ID** generato 

### 3. Crea un template email
1. Vai su "Email Templates"
2. Clicca "Create New Template"
3. Configura il template con questi parametri:

**Subject:** `Nuova richiesta preventivo - ICE STONE SERVICE`

**Content:**
```
Ciao Stefano,

Hai ricevuto una nuova richiesta di preventivo dal sito web ICE STONE SERVICE:

Dettagli ordine:
- Quantità: {{quantity}} kg
- Data consegna: {{date}}
- Indirizzo: {{address}}
- Distanza: {{distance}} km

Contatti cliente:
- Email: {{customer_email}}
- Telefono: {{customer_phone}}

Note aggiuntive:
{{notes}}

Messaggio completo:
{{message}}

---
Inviato automaticamente dal sito web ICE STONE SERVICE
```

4. Salva il template e annota il **Template ID**

### 4. Ottieni la chiave pubblica
1. Vai su "Account" > "General"
2. Copia la **Public Key**

### 5. Configura le credenziali nel progetto

**Opzione A: File di configurazione**
Modifica il file `src/emailConfig.ts` e sostituisci:
```typescript
export const emailConfig = {
  publicKey: "LA_TUA_PUBLIC_KEY",
  serviceId: "IL_TUO_SERVICE_ID", 
  templateId: "IL_TUO_TEMPLATE_ID"
};
```

**Opzione B: Variabili d'ambiente (consigliato)**
1. Copia `.env.example` in `.env`
2. Modifica `.env` con le tue credenziali:
```
VITE_EMAILJS_PUBLIC_KEY=la_tua_public_key
VITE_EMAILJS_SERVICE_ID=il_tuo_service_id
VITE_EMAILJS_TEMPLATE_ID=il_tuo_template_id
```

### 6. Testa l'invio
1. Avvia il server di sviluppo: `npm run dev`
2. Compila il form di preventivo
3. Clicca "Invia richiesta preventivo"
4. Controlla la tua email per verificare la ricezione

### Risoluzione problemi

**Errore "Invalid template ID":**
- Verifica che il Template ID sia corretto
- Assicurati che il template sia salvato e attivo

**Errore "Invalid service ID":**
- Verifica che il Service ID sia corretto
- Controlla che il servizio email sia configurato correttamente

**Email non ricevute:**
- Controlla la cartella spam
- Verifica che l'indirizzo email nel template sia corretto
- Controlla i log della console del browser per errori

**Limite email raggiunto:**
- Il piano gratuito ha un limite di 200 email/mese
- Considera l'upgrade a un piano a pagamento se necessario

### Sicurezza
- Non condividere mai le tue credenziali EmailJS
- Usa sempre variabili d'ambiente per le credenziali in produzione
- Il file `.env` è già incluso in `.gitignore` per sicurezza