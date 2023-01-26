import Head from "next/head";
import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { DataInt, formParamsInt, RegioneInt } from "../../types/types";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import ChartBarStatistiche from "../../components/charts/chartBarStatistiche";
import { splitArrayOfObjects } from "../../logicFunctions/logicFunctions";
import ResearchPlaceholderStatistiche from "../../components/researchPlaceholder/ResearchPlaceholderStatistiche";

const ChartStatistiche = ({
  regioni,
  resData,
}: {
  regioni: RegioneInt[];
  resData: DataInt[] | undefined;
}) => {
  const router = useRouter();
  const [resDataMonYear, setResDataMonYear] = useState<DataInt[][]>();

  useEffect(() => {
    if (resData?.length !== 0 && resData![0].annoMese.length > 4) {
      setResDataMonYear(splitArrayOfObjects(resData!, 12));
    }
  }, [resData]);

  const handleQueryParams = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const regione = e.target[0].value;
    const provincia = e.target[1].value;
    const tipoAlloggio = e.target[2].value;
    const provenienza = e.target[3].value;
    const tipologiaDato = e.target[4].value;
    const filtroTempo =
      e.target[5].checked === true ? e.target[5].value : e.target[6].value;

    router.push({
      query: {
        regione,
        provincia,
        tipoAlloggio,
        provenienza,
        tipologiaDato,
        filtroTempo,
      },
    });
  };
  return (
    <main className="mt-[80px]" id="blob-statistiche">
      <h1 className="text-center text-title text-4xl">
        <strong>Statistiche</strong>
      </h1>
      <section className="text-sm breadcrumbs mt-1 ml-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Statistiche</li>
        </ul>
      </section>
      <div className="divider my-5 px-2"></div>
      <section className="text-justify text-body mx-5 my-8 blob-one md:w-[80%] md:mx-auto lg:w-[30em] lg:relative lg:left-[20%] 2xl:left-0">
        <p>
          Il form per visualizzare i grafici dell'afflusso turistico o delle
          presenze turistiche in Sardegna è uno strumento che consente di
          analizzare i flussi turistici sull'isola in modo dettagliato. Il form
          presenta diversi filtri per personalizzare la visualizzazione dei
          dati.
        </p>
        <p className="my-3">
          In primo luogo, è possibile selezionare le province di interesse per
          visualizzare i dati solo per quelle specifiche aree. Inoltre, è
          possibile filtrare i dati per tipo di alloggio turistico scelto, come
          ad esempio hotel. Inoltre, è possibile filtrare i dati per
          provenienza, per esempio per visualizzare solo i turisti stranieri o
          italiani.
        </p>
        <p>
          Infine, è possibile scegliere se visualizzare i dati al dettaglio solo
          per anni o mesi. Grazie a questi filtri, è possibile analizzare i dati
          in modo dettagliato e comprendere meglio i flussi turistici in
          Sardegna.
        </p>
      </section>
      <section className="mx-5 text-justify">
        <form onSubmit={handleQueryParams} className="w-full h-full">
          <div className="card shadow-xl h-[450px] bg-[#86a0e7]" id="cardBox-statistiche">
            <select className="select w-[90%] mt-4 mx-auto mt-2">
              <option disabled>Regione</option>
              {regioni &&
                regioni.map((regione, index) => (
                  <option value={regione.regione.nomeRegione} key={index}>
                    {regione.regione.nomeRegione}
                  </option>
                ))}
            </select>
            <select className="select w-[90%] mt-2 mx-auto">
              <option disabled>Provincia</option>
              {regioni &&
                regioni.map((regione) =>
                  regione.province.map((prov, index) => (
                    <option value={prov} key={index}>
                      {prov}
                    </option>
                  ))
                )}
              <option value="NONE">Nessuna provincia</option>
            </select>
            <select className="select w-[90%] mt-2 mx-auto">
              <option disabled>Tipo di struttura</option>
              <option value="HOTELLIKE">Hotel</option>
              <option value="OTHER">Altro</option>
              <option value="ALL">Tutti i tipi</option>
            </select>
            <select className="select w-[90%] mt-2 mx-auto">
              <option disabled>Paese di Provenienza</option>
              <option value="IT">Italia</option>
              <option value="WORLD">Estero</option>
              <option value="WRL_X_ITA">Tutti</option>
            </select>
            <select className="select w-[90%] mt-2 mx-auto">
              <option disabled>Tipo di dato</option>
              <option value="AR">Arrivi</option>
              <option value="NI">Presenze</option>
            </select>
            <div className="mx-auto my-5">
              <input
                type="radio"
                id="annoMese"
                name="grafici"
                value="annoMese"
                className="radio radio-slate-900 mr-2 align-middle"
                defaultChecked
              />
              <label htmlFor="annoMese" className="cursor-pointer text-base-100">
                Grafici anno & mese
              </label>
              <input
                type="radio"
                id="anno"
                name="grafici"
                value="anno"
                className="radio radio-slate-900 mr-2 ml-5 align-middle"
              />
              <label htmlFor="anno" className="cursor-pointer text-base-100">
                Grafici annuali
              </label>
            </div>
            <button className="btn w-[45%] mx-auto btn-primary bg-accent hover:bg-primary border-0" type="submit">
              Visualizza grafico
            </button>
          </div>
        </form>
      </section>
      <div className="divider mt-5 px-2"></div>
      {resData?.length !== 0 ? (
        resData![0].annoMese.length === 4 ? (
          <ChartBarStatistiche data={resData!} />
        ) : (
          resDataMonYear !== undefined &&
          resDataMonYear!.map((dataYear, index) => (
            <ChartBarStatistiche data={dataYear} key={index} />
          ))
        )
      ) : (
        <ResearchPlaceholderStatistiche />
      )}
    </main>
  );
};

export default ChartStatistiche;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const objData: formParamsInt = {
    regione: query["regione"]?.toString().toLowerCase(),
    provincia: query["provincia"]?.toString().toLowerCase().replace(" ", "_"),
    tipoAlloggio: query["tipoAlloggio"],
    provenienza: query["provenienza"],
    tipologiaDato: query["tipologiaDato"],
    filtroTempo: query["filtroTempo"],
  };

  let response, researchResponse;
  if (Object.values(objData).every((val) => val === undefined)) {
    response = await fetch(`http://localhost:9999/regioni`);
  } else if (objData.provincia === "none") {
    [response, researchResponse] = await Promise.all([
      fetch(`http://localhost:9999/regioni`),
      fetch(
        `http://localhost:9999/${objData.regione}?TipologiaAlloggio=${objData.tipoAlloggio}&Provenienza=${objData.provenienza}&TipologiaDato=${objData.tipologiaDato}`
      ),
    ]);
  } else {
    [response, researchResponse] = await Promise.all([
      fetch(`http://localhost:9999/regioni`),
      fetch(
        `http://localhost:9999/${objData.regione}/${objData.provincia}?TipologiaAlloggio=${objData.tipoAlloggio}&Provenienza=${objData.provenienza}&TipologiaDato=${objData.tipologiaDato}`
      ),
    ]);
  }

  let [data, researchDataUnclean]: [RegioneInt[], DataInt[] | undefined] = [
    [],
    [],
  ];
  if (researchResponse === undefined) {
    data = await response.json();
  } else {
    [data, researchDataUnclean] = await Promise.all([
      response.json(),
      researchResponse.json(),
    ]);
  }

  let researchData: DataInt[] = [];
  if (objData.filtroTempo === "anno" && researchDataUnclean !== undefined) {
    researchData = researchDataUnclean.filter((el) => el.annoMese.length === 4);
  } else if (
    objData.filtroTempo === "annoMese" &&
    researchDataUnclean !== undefined
  ) {
    researchData = researchDataUnclean.filter((el) => el.annoMese.length !== 4);
  }

  return {
    props: {
      regioni: data,
      resData: researchData,
    },
  };
};

ChartStatistiche.getLayout = function PageLayout(page: ReactElement) {
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
