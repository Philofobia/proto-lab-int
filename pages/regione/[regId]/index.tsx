import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { provInt, RegioneInt } from "../../../types/types";

export default function Region({ regione }: { regione: RegioneInt }) {
  return (
    <>
      <h1 className="text-center my-5">{regione.nome}</h1>
      {regione.provincie.map((prov) => (
        <Link href={`${regione.id}/prov/${prov.id}`} className="btn mx-2">
          {prov.nome}
        </Link>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:3000/api/regione/${params!.regId}`
  );
  const data: RegioneInt = await response.json();

  return {
    props: {
      regione: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/regione");
  const data: RegioneInt[] = await response.json();
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