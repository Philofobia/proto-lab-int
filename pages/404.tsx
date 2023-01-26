import { ReactElement } from "react";
import Head from "next/head";

const PageNotFound = () => {
  return (
    <main className="min-h-screen">
      <figure>
        <img src="/images/complex/Page_not_found.svg" alt="page not found" className="w-[70em] mx-auto mt-[10em] md:mt-0"/>
      </figure>
      <h1 className="text-center text-title text-4xl mb-5">
        <strong>Page not found</strong>
      </h1>
    </main>
  );
};

export default PageNotFound;

PageNotFound.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
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
