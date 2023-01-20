import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { RegioneInt } from "../../types/types";

const Chart = () => {
  const [regioni, setRegioni] = useState<RegioneInt[]>([]);
  useEffect(() => {
    fetch("https://express-api-labint.onrender.com/api/v1/regions/")
      .then((res) => res.json())
      .then((data) => setRegioni(data.data.regions));
  }, []);

  return (
    <main className="mt-[80px] mb-[50px]">
      <h1 className="text-center text-title text-4xl">
        <strong>Previsioni</strong>
      </h1>
      <div className="text-sm breadcrumbs mt-1 ml-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Grafici</li>
        </ul>
      </div>
      <hr className="my-5" />
      <section className="mx-2 text-justify">
        <div className="card shadow-xl bg-neutral-focus h-[450px]">
          <select className="select w-[90%] mt-4 mx-auto mt-2">
            <option disabled selected>
              Regione
            </option>
            {regioni.map((regione) => (
              <option value={regione.id}>{regione.nome_regione}</option>
            ))}
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Provincia
            </option>
            {regioni.map((regione) =>
              regione.province.map((prov) => (
                <option value={prov.id}>{prov.nome_provincia}</option>
              ))
            )}
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Tipo di struttura
            </option>
            <option value="HOTEL">Hotel</option>
            <option value="CAMPING">Camping</option>
            <option value="RESIDENCE">Residence</option>
            <option value="B&B">Bed & Breakfast</option>
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Paese di Provenienza
            </option>
            <option value="ITA">Italia</option>
            <option value="OUT">Estero</option>
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Inizio periodo di ricerca
            </option>
            <option value="2021-01-01">Gennaio 2021</option>
            <option value="2021-02-01">Febbraio 2021</option>
            <option value="2021-03-01">Marzo 2021</option>
            <option value="2021-04-01">Aprile 2021</option>
            <option value="2021-05-01">Maggio 2021</option>
            <option value="2021-06-01">Giugno 2021</option>
            <option value="2021-07-01">Luglio 2021</option>
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Fine periodo di ricerca
            </option>
            <option value="2021-01-01">Gennaio 2025</option>
            <option value="2021-02-01">Febbraio 2025</option>
            <option value="2021-03-01">Marzo 2025</option>
            <option value="2021-04-01">Aprile 2025</option>
            <option value="2021-05-01">Maggio 2025</option>
            <option value="2021-06-01">Giugno 2025</option>
            <option value="2021-07-01">Luglio 2025</option>
          </select>
          <button className="btn w-[45%] mt-9 mx-auto">Cerca</button>
        </div>
      </section>
    </main>
  );
};

export default Chart;

const addProductJsonLd = () => {
  return {
    __html: ``,
  };
};

Chart.getLayout = function PageLayout(page: ReactElement) {
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
