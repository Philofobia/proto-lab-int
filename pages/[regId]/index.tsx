import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { provInt, RegioneInt } from "../../types/types";

export default function Region({ regione }: { regione: RegioneInt }) {
  return (
    <main className="mt-[80px]">
      <h1 className="text-center text-title">{regione.nome}</h1>
      {regione.provincie.map((prov) => (
        <Link href={`${regione.id}/prov/${prov.id}`} className="btn mx-2">
          {prov.nome}
        </Link>
      ))}
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
  const response = await fetch("https://express-api-labint.onrender.com/api/v1/regions/");
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