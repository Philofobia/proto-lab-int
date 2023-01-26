import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/home.module.css";

const Home = () => {
  return (
    <main className="mt-[80px]" id="blob-home">
      <h2 className="text-center text-title text-5xl">
        <strong>TRAVEL TREND</strong>
      </h2>
      <h1 className="text-center text-title text-2xl">
        <em>statistiche e analisi viaggi</em>
      </h1>
      <div className="divider my-5 mx-2"></div>
      <section className="text-justify text-body lg:h-[30em] lg:w-[60%]  lg:pt-[3em] xl:pt-[4em]">
        <p className="mx-5 xl:inline-block">
          Il settore dei viaggi e delle prenotazioni in Italia è in continua
          evoluzione, con nuovi trend che emergono continuamente. Un sito di
          analisi e previsioni dati per questo settore può offrire una vasta
          gamma di informazioni utili per comprendere meglio come si sta
          evolvendo il mercato e come prevedere gli sviluppi futuri.
        </p>
        <p className="my-3 mx-5">
          Un sito di questo tipo potrebbe raccogliere dati da diverse fonti, tra
          cui i principali siti di prenotazione alberghiera, i siti di viaggio,
          i dati demografici e le statistiche di mercato. Utilizzando questi
          dati, il sito potrebbe generare analisi dettagliate sulle tendenze del
          mercato, come ad esempio i periodi dell'anno in cui le prenotazioni
          sono più alte, le destinazioni più popolari e i prezzi più
          competitivi.
        </p>
        <p className="mx-5">
          Inoltre, un sito di analisi e previsioni dati per il settore viaggi e
          prenotazioni in Italia potrebbe fornire anche previsioni sugli
          sviluppi futuri del mercato, come ad esempio l'effetto delle
          restrizioni sui viaggi a causa della pandemia sulla domanda futura.
          Queste previsioni possono essere utilizzate dalle aziende del settore
          per prendere decisioni informate su come posizionarsi sul mercato e
          come adattarsi alle tendenze in evoluzione.
        </p>
      </section>
      <div className="divider my-5 mx-2"></div>
      <section className="body-font overflow-hidden mt-12 px-8 xl:w-[60%] xl:relative xl:right-[-30em]">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="px-5 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 rounded bg-[#86a0e7] text-xs font-medium tracking-widest px-2">
                STATISTICHE
              </span>
              <h4 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                L'utilizzo delle fonti ufficiali dell'ISTAT per analizzare
                l'impatto del turismo sull'isola
              </h4>
              <p className="leading-relaxed mb-4 text-justify">
                Le fonti ufficiali dell'ISTAT sono una valida fonte di
                informazioni per quanto riguarda le presenze e gli arrivi dei
                turisti sull'isola. L'ISTAT pubblica periodicamente statistiche
                sui flussi turistici, che includono dati sugli arrivi, le
                presenze e le provenienze dei turisti. Queste informazioni
                possono essere utilizzate per analizzare l'impatto del turismo
                sull'economia dell'isola e per pianificare le attività di
                promozione e sviluppo turistico. Inoltre, l'ISTAT fornisce anche
                informazioni dettagliate sull'utilizzo delle strutture
                ricettive, come alberghi, campeggi e case vacanza, che possono
                essere utilizzate per valutare la capacità ricettiva dell'isola.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                <Link
                  className="text-indigo-500 inline-flex items-center"
                  href="/statistiche"
                >
                  Guarda le statistiche
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="px-5 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 rounded bg-[#86a0e7] text-xs font-medium tracking-widest px-2">
                PREVISIONI
              </span>
              <h4 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Modelli predittivi avanzati per la pianificazione del turismo in
                Sardegna
              </h4>
              <p className="leading-relaxed mb-4 text-justify">
                Utilizziamo modelli predittivi avanzati basati sull'analisi dei
                dati storici e delle tendenze attuali per fornirti previsioni
                precise e affidabili sull'andamento futuro del turismo in
                Sardegna. Questo ci permette di avere una visione completa delle
                tendenze e di pianificare in anticipo le attività di promozione
                e sviluppo turistico per sfruttare al meglio le opportunità e
                affrontare eventuali sfide.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                <Link
                  className="text-indigo-500 inline-flex items-center"
                  href="/previsioni"
                >
                  Guarda le previsioni
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

const addProductJsonLd = () => {
  return {
    __html: `{
    "@context": "https://travelTrend.html/",
    "@type": "website",
    "name": "Travel Trends",
    "image": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
     ],
    "description": "Scopri tutte le statistiche e predizioni turistiche sulle presenze e arrivi in Sardegna",
    "brand": {
      "@type": "Web Agency",
      "name": "Travel Trend",
      "streetAddress": "Via Jacopo Durandi 10",
      "addressLocality": "Torino",
      "addressRegion": "Piemonte",
      "postalCode": "10123",
      "addressCountry": "Italy"
    },
      "author": {
        "@type": "Person",
        "name": "Marco Parisi"
      }
    }
  }
`,
  };
};

Home.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:site_name"
          content="Travel Trend: statistiche e analisi viaggi"
        />
        <meta property="og:url" content="index.html" />
        <meta property="og:image" content="/favicon/travel-trend-logo-96x96.png" />
        <meta
          property="og:title"
          content="Travel Trend: statistiche e analisi viaggi."
        />
        <meta
          property="og:description"
          content="Scopri tutte le statistiche e predizioni turistiche sulle presenze e arrivi in Sardegna"
        />

        <meta
          property="business:contact_data:street_address"
          content="Via Jacopo Durandi 10"
        />
        <meta property="business:contact_data:locality" content="Torino" />
        <meta property="business:contact_data:region" content="Piemonte" />
        <meta property="business:contact_data:postal_code" content="10143" />
        <meta property="business:contact_data:country_name" content="Italy" />

        <title>Travel Trend - Statistiche e analisi viaggi.</title>
        <meta
          name="description"
          content="Scopri tutte le statistiche e predizioni turistiche sulle presenze e arrivi in Sardegna"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Parisi Marco" />

        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/travel-trend-logo-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/travel-trend-logo-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/travel-trend-logo-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/travel-trend-logo-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/travel-trend-logo-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/travel-trend-logo-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/travel-trend-logo-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/travel-trend-logo-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/travel-trend-logo-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/travel-trend-logo-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/favicon/travel-trend-logo-144x144.png"
        />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/travel-trend-logo-96x96.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/favicon/travel-trend-logo-72x72.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/travel-trend-logo-48x48.png" />
        <link rel="icon" type="image/png" sizes="36x36" href="/favicon/travel-trend-logo-36x36.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/travel-trend-logo-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/travel-trend-logo-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/travel-trend-logo-16x16.png" />
      </Head>
      {page}
    </>
  );
};
