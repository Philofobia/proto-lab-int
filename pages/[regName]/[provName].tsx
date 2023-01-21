import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { DataInt, provInt, RegioneInt } from "../../types/types";
import ChartBar from "../../components/charts/chartBar";
import Link from "next/link";

export default function Prov({
  prov,
  datiGrafico,
}: {
  prov: provInt;
  datiGrafico: DataInt[];
}) {
  return (
    <main className="mt-[80px]">
      <h1 className="text-center text-title text-4xl">
        <strong>{prov.provincia.nomeProvincia}</strong>
      </h1>
      <div className="text-sm breadcrumbs mt-1 ml-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={`/${prov.regione}`}>{prov.regione}</Link>
          </li>
          <li>{prov.provincia.nomeProvincia}</li>
        </ul>
      </div>
      <hr className="my-5" />
      <section className="mx-2 text-justify">
        <figure>
          <img src="da inserire" alt={`foto ${prov.provincia.nomeProvincia}`} />
        </figure>
        {prov.provincia.descrizioneProvincia}
      </section>
      <section className="mx-2 my-5">
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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const [response, responseGraph] = await Promise.all([
    fetch(
      `http://localhost:9999/regioni/${params!.regName}/${params!.provName}`
    ),
    fetch(
      `http://localhost:9999/${params!.regName}/${
        params!.provName
      }`.toLowerCase()
    ),
  ]);

  const [data, dataGraphUnclean]: [provInt, DataInt[]] = await Promise.all([
    response.json(),
    responseGraph.json(),
  ]);

  const dataGraph: DataInt[] = dataGraphUnclean.filter(
    (el) => el.annoMese.length === 4 && el.tipologiaDato === "NI"
  );
  return {
    props: {
      prov: data,
      datiGrafico: dataGraph,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:9999/regioni/");
  const data: RegioneInt[] = await response.json();
  const paths: { params: { regName: string; provName: string } }[] = [];
  data.forEach((regione) =>
    regione.province.map((prov) => {
      const param = {
        params: {
          regName: `${regione.regione.nomeRegione}`,
          provName: `${prov}`,
        },
      };
      paths.push(param);
    })
  );
  return { paths, fallback: false };
};

const addProductJsonLd = () => {
  return {
    __html: ``,
  };
};
Prov.getLayout = function PageLayout(page: ReactElement) {
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