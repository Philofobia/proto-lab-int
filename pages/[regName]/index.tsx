import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { DataInt, RegioneInt } from "../../types/types";
import ChartBar from "../../components/charts/chartBar";

export default function Region({
  regione,
  datiGrafico,
}: {
  regione: RegioneInt;
  datiGrafico: DataInt[];
}) {
  return (
    <main className="mt-[80px] mb-[50px]">
      <h1 className="text-center text-title text-4xl">
        <strong>{regione.regione.nomeRegione}</strong>
      </h1>
      <div className="text-sm breadcrumbs mt-1 ml-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>{regione.regione.nomeRegione}</li>
        </ul>
      </div>
      <hr className="my-5" />
      <section className="mx-2 text-justify">
        {regione.regione.descrizioneRegione}
      </section>
      <section className="mx-2 my-5">
        <h3 className="text-center text-title text-2xl">Statistiche delle presenze totali</h3>
        <ChartBar data={datiGrafico} provenienza="WRL_X_ITA"/>
        <h3 className="text-center text-title text-2xl">Statistiche delle presenze italiane</h3>
        <ChartBar data={datiGrafico} provenienza="IT"/>
        <h3 className="text-center text-title text-2xl">Statistiche delle presenze estere</h3>
        <ChartBar data={datiGrafico} provenienza="WORLD"/>
      </section>
      <section className="mx-2 flex flex-wrap gap-5">
        {regione.province.map((prov) => (
          <div className="card w-96 bg-base-100 shadow-xl border">
            <div className="card-body text-justify">
              <Link
                href={`${regione.regione.nomeRegione}/prov/${prov}`}
                className="btn mx-2"
              >
                {prov}
              </Link>
            </div>
            <figure>
              <img src="perOraNulla" alt={`foto ${prov}`} />
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
        <meta property="og:description" content="DA AGGIORNARE" />

        <meta property="business:contact_data:locality" content="Torino" />
        <meta property="business:contact_data:region" content="Torino" />
        <meta property="business:contact_data:postal_code" content="10143" />
        <meta property="business:contact_data:country_name" content="Italy" />

        <title>Travel Trend - Statistiche e analisi viaggi.</title>
        <meta name="description" content="" />

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
