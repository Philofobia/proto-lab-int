import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { RegioneInt } from "../../types/types";
import ChartBar from "../../components/charts/chartBar";

export default function Region({ regione }: { regione: RegioneInt }) {
  return (
    <main className="mt-[80px] mb-[50px]">
      <h1 className="text-center text-title text-4xl">
        <strong>{regione.nome}</strong>
      </h1>
      <div className="text-sm breadcrumbs mt-1 ml-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>{regione.nome}</li>
        </ul>
      </div>
      <hr className="my-5" />
      <section className="mx-2 text-justify">
        {regione.descrizione.map((descr, index) => (
          <div className="my-5">
            <figure>
              <img src={regione.immagini[index]} alt={`foto ${regione.nome}`} />
            </figure>
            <p className="my-4">{descr}</p>
          </div>
        ))}
      </section>
      <section className="mx-2 my-5">
        <h4 className="text-center text-title text-2xl">Italiani</h4>
        <ChartBar data={regione.dataPres} provenienza="ITA" />
        <h4 className="text-center text-title text-2xl">Stranieri</h4>
        <ChartBar data={regione.dataPres} provenienza="OUT" />
      </section>
      <section className="mx-2 flex flex-wrap gap-5">
        {regione.provincie.map((prov) => (
          <div className="card w-96 bg-base-100 shadow-xl border">
            <div className="card-body text-justify">
              <Link href={`${regione.id}/prov/${prov.id}`} className="btn mx-2">
                {prov.nome}
              </Link>
            </div>
            <figure>
              <img src={`${prov.img}`} alt={`foto ${prov.nome}`} />
            </figure>
          </div>
        ))}
      </section>
    </main>
  );
}

/**

    @function
    @async
    @param {GetStaticPropsContext} context - The context of the Next.js app, including the params object.
    @returns {Promise<{props: {regione: RegioneInt[]}}>} - An object containing the data for the regione prop.
    */
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const response = await fetch(
    `https://express-api-labint.onrender.com/api/v1/regions/${params!.regId}`
  );
  const unclearedData = await response.json();
  const data: RegioneInt[] = unclearedData.data.region;

  return {
    props: {
      regione: data,
    },
  };
};

/**

    @function
    @async
    @returns {Promise<{paths: {params: {regId: string}}[], fallback: boolean}>} - An object containing the paths and fallback status for the static pages.
    */
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://express-api-labint.onrender.com/api/v1/regions/"
  );
  const unclearedData = await response.json();
  const data: RegioneInt[] = unclearedData.data.regions;
  const paths = data.map((regione) => ({
    params: { regId: `${regione.id}` },
  }));

  return { paths, fallback: false };
};

const addProductJsonLd = () => {
  return {
    __html: ``,
  };
};
Region.getLayout = function PageLayout(page: ReactElement) {
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
