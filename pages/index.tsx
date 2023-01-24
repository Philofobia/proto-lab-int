import { ReactElement } from "react";
import Head from "next/head";

const Home = () => {
  return (
    <main className="mt-[80px] mb-[50px]" id="blob-two">
      <h2 className="text-center text-title text-5xl">
        <strong>TRAVEL TREND</strong>
      </h2>
      <h1 className="text-center text-title text-2xl">
        <em>statistiche e analisi viaggi</em>
      </h1>
      <div className="divider my-5 mx-2"></div>
      <section className="text-justify text-body" id="blob-one">
        <p className="mx-5">
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
      {/* TRIAL AND ERROR */}
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                STATISTICHE
              </span>
              <h4 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Roof party normcore before they sold out, cornhole vape
              </h4>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric. Cray pug you
                probably haven't heard of them hexagon kickstarter craft beer
                pork chic.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
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
                </a>
              </div>
            </div>

            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                PREVISIONI
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Pinterest DIY dreamcatcher gentrify single-origin coffee
              </h2>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
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
                </a>
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

        <link rel="canonical" href="index.html" />
        <link rel="alternate" hrefLang="it" href="index.html" />
        <link rel="alternate" href="index.html" hrefLang="x-default" />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:site_name"
          content="Travel Trend: statistiche e analisi viaggi"
        />
        <meta property="og:url" content="index.html" />
        <meta property="og:image" content="DA AGGIORNARE" />
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

        <link rel="apple-touch-icon" sizes="57x57" href="Da aggiornare" />
        <link rel="apple-touch-icon" sizes="60x60" href="Da aggiornare" />
        <link rel="apple-touch-icon" sizes="72x72" href="Da aggiornare" />
        <link rel="apple-touch-icon" sizes="76x76" href="Da aggiornare" />
        <link rel="apple-touch-icon" sizes="114x114" href="Da aggiornare" />
        <link rel="apple-touch-icon" sizes="120x120" href="Da aggiornare" />
        <link rel="apple-touch-icon" sizes="144x144" href="Da aggiornare" />
        <link rel="apple-touch-icon" sizes="152x152" href="Da aggiornare" />
        <link rel="apple-touch-icon" sizes="180x180" href="Da aggiornare" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="Da aggiornare"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="Da aggiornare"
        />
        <link rel="icon" type="image/png" sizes="96x96" href="Da aggiornare" />
        <link rel="icon" type="image/png" sizes="72x72" href="Da aggiornare" />
        <link rel="icon" type="image/png" sizes="48x48" href="Da aggiornare" />
        <link rel="icon" type="image/png" sizes="36x36" href="Da aggiornare" />
        <link rel="icon" type="image/png" sizes="32x32" href="Da aggiornare" />
        <link rel="icon" type="image/png" sizes="96x96" href="Da aggiornare" />
        <link rel="icon" type="image/png" sizes="16x16" href="Da aggiornare" />
      </Head>
      {page}
    </>
  );
};
