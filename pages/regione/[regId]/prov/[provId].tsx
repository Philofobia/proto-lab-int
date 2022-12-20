import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";
import { ReactElement, useEffect } from "react";
import { provInt, RegioneInt } from "../../../../types/types";

export default function Prov({ prov }: { prov: provInt }) {
  return (
    <>
      <h1 className="text-center my-5">{prov.nome}</h1>
      <div>{prov.descrizione.map(descr => 
        <p className="text-center">{descr}</p>
      )}</div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:3000/api/regione/${params!.regId}/prov/${params!.provId}`
  );
  const data: provInt = await response.json();
  return { props: { prov: data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/regione");
  const data: RegioneInt[] = await response.json();
  const paths: { params: { regId: string; provId: string } }[] = [];
  data.forEach((regione) =>
    regione.provincie.map((prov) => {
      const param = {
        params: { regId: `${regione.id}`, provId: `${prov.id}` },
      };
      paths.push(param);
    })
  );
  return { paths, fallback: false };
};

Prov.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Travel Trend - Search where everyone is going</title>
      </Head>
      {page}
    </>
  );
};