import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-[80px] mb-[50px]">
      <h1 className="text-center text-title text-4xl">
        <strong>TRAVEL TREND</strong>
      </h1>
      <h2 className="text-center text-title text-2xl">
        <em>Search where everyone is going</em>
      </h2>
      <hr className="my-5" />
      <p className="text-justify text-body mx-3 my-5">
        Il settore dei viaggi e delle prenotazioni in Italia è in continua
        evoluzione, con nuovi trend che emergono continuamente. Un sito di
        analisi e previsioni dati per questo settore può offrire una vasta gamma
        di informazioni utili per comprendere meglio come si sta evolvendo il
        mercato e come prevedere gli sviluppi futuri.
      </p>
      <p className="text-justify text-body mx-3 my-5">
        Un sito di questo tipo potrebbe raccogliere dati da diverse fonti, tra
        cui i principali siti di prenotazione alberghiera, i siti di viaggio, i
        dati demografici e le statistiche di mercato. Utilizzando questi dati,
        il sito potrebbe generare analisi dettagliate sulle tendenze del
        mercato, come ad esempio i periodi dell'anno in cui le prenotazioni sono
        più alte, le destinazioni più popolari e i prezzi più competitivi.
      </p>
      <p className="text-justify text-body mx-3 my-5">
        Inoltre, un sito di analisi e previsioni dati per il settore viaggi e
        prenotazioni in Italia potrebbe fornire anche previsioni sugli sviluppi
        futuri del mercato, come ad esempio l'effetto delle restrizioni sui
        viaggi a causa della pandemia sulla domanda futura. Queste previsioni
        possono essere utilizzate dalle aziende del settore per prendere
        decisioni informate su come posizionarsi sul mercato e come adattarsi
        alle tendenze in evoluzione.
      </p>
    </main>
  );
}

const addProductJsonLd = () => {
  return {
    __html: `{
    "@context": "https://nomesito.html/",
    "@type": "Product",
    "name": "Travel Trends",
    "image": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
     ],
    "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
    "sku": "0446310786",
    "mpn": "925872",
    "brand": {
      "@type": "Brand",
      "name": "ACME"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Fred Benson"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "89"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://example.com/anvil",
      "priceCurrency": "USD",
      "price": "119.99",
      "priceValidUntil": "2020-11-20",
      "itemCondition": "https://schema.org/UsedCondition",
      "availability": "https://schema.org/InStock"
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
        <link
          rel="alternate"
          hrefLang="it"
          href="index.html"
        />
        <link
          rel="alternate"
          href="index.html"
          hrefLang="x-default"
        />

        <meta property="og:type" content="business.business" />
        <meta
          property="og:site_name"
          content="Travel Trend: statistiche e analisi viaggi"
        />
        <meta property="og:url" content="index.html" />
        <meta
          property="og:image"
          content="DA AGGIORNARE"
        />
        <meta
          property="og:title"
          content="Travel Trend: statistiche e analisi viaggi."
        />
        <meta property="og:description" content="DA AGGIORNARE" />

        <meta property="business:contact_data:locality" content="Torino" />
        <meta property="business:contact_data:region" content="Torino" />
        <meta property="business:contact_data:postal_code" content="10143" />
        <meta property="business:contact_data:country_name" content="Italy" />

        <title>Travel Trend - Statistiche e analisi viaggi.</title>
        <meta name="description" content="" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Parisi Marco" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="Da aggiornare"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="Da aggiornare"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="Da aggiornare"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="Da aggiornare"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="Da aggiornare"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="Da aggiornare"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="Da aggiornare"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="Da aggiornare"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="Da aggiornare"
        />
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
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="Da aggiornare"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="Da aggiornare"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="Da aggiornare"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href="Da aggiornare"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="Da aggiornare"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="Da aggiornare"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="Da aggiornare"
        />
      </Head>
      {page}
    </>
  );
};
