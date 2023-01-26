import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { DataInt, RegioneInt } from "../../types/types";
import ChartBar from "../../components/charts/chartBar";
import "../../styles/regName.module.css"

export default function Region({
  regione,
  datiGrafico,
}: {
  regione: RegioneInt;
  datiGrafico: DataInt[];
}) {
  return (
    <main className="mt-[80px]" id="blob-regName">
      <h1 className="text-center text-title text-4xl">
        <strong>{regione.regione.nomeRegione}</strong>
      </h1>
      <section className="text-sm breadcrumbs mt-1 ml-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>{regione.regione.nomeRegione}</li>
        </ul>
      </section>
      <div className="divider my-5 px-2"></div>
      <section className="text-justify text-body mx-5 my-5 lg:w-[30em] lg:relative lg:left-[50%]">
        {regione.regione.descrizioneRegione}
      </section>
      <div className="divider my-5 px-2"></div>
      <section className="mx-2 my-5">
        <p className="text-justify text-body mx-3 my-5 lg:w-[40em] lg:mx-auto lg:my-8">
          I grafici che mostrano l'andamento del numero di persone che viaggiano
          o sono presenti in {regione.regione.nomeRegione} sono divisi in tre categorie: popolazione
          estera, popolazione italiana e totale. La linea orizzontale
          rappresenta il tempo, mentre la linea verticale rappresenta il numero
          di persone. Il grafico della popolazione estera mostra il numero di
          turisti stranieri che visitano l'isola, il grafico della popolazione
          italiana mostra il numero di italiani che viaggiano o sono attualmente
          in una infrastruttura turistica in {regione.regione.nomeRegione}, mentre il grafico totale
          mostra il numero totale di persone presenti sull'isola, sia italiane
          che straniere. Grazie a questi grafici è possibile analizzare
          l'andamento dei flussi turistici e delle presenze in {regione.regione.nomeRegione} nel
          corso del tempo e - nella sezione previsioni - fare predizioni sul
          futuro.
        </p>
        <h3 className="text-center text-title text-2xl">
          Statistiche delle presenze totali
        </h3>
        <ChartBar data={datiGrafico} provenienza="WRL_X_ITA" />
        <h3 className="text-center text-title text-2xl">
          Statistiche delle presenze italiane
        </h3>
        <ChartBar data={datiGrafico} provenienza="IT" />
        <h3 className="text-center text-title text-2xl">
          Statistiche delle presenze estere
        </h3>
        <ChartBar data={datiGrafico} provenienza="WORLD" />
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
  const [response, responseGraph] = await Promise.all([
    fetch(`http://localhost:9999/regioni/${params!.regName}`),
    fetch(`http://localhost:9999/${params!.regName}`.toLowerCase()),
  ]);
  const [data, dataGraphUnclean]: [RegioneInt, DataInt[]] = await Promise.all([
    response.json(),
    responseGraph.json(),
  ]);

  const dataGraph: DataInt[] = dataGraphUnclean.filter(
    (el) => el.annoMese.length === 4 && el.tipologiaDato === "NI"
  );

  return {
    props: {
      regione: data,
      datiGrafico: dataGraph,
    },
  };
};

/**

    @function
    @async
    @returns {Promise<{paths: {params: {regId: string}}[], fallback: boolean}>} - An object containing the paths and fallback status for the static pages.
    */
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:9999/regioni");
  const data: RegioneInt[] = await response.json();
  const paths = data.map((regione) => ({
    params: { regName: `${regione.regione.nomeRegione}` },
  }));
  return { paths, fallback: false };
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
