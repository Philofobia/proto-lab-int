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
        <ChartBar regione={regione} provenienza="ITA" />
        <h4 className="text-center text-title text-2xl">Stranieri</h4>
        <ChartBar regione={regione} provenienza="OUT" />
        <h4 className="text-center text-title text-2xl">Somma totale</h4>
        <ChartBar regione={regione} provenienza="ALL" />
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

Region.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Travel Trend - Search where everyone is going</title>
      </Head>
      {page}
    </>
  );
};
