import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { provInt, RegioneInt } from "../../../types/types";

export default function Prov({ prov }: { prov: provInt }) {
  return (
    <main className="mt-[80px]">
    <h1 className="text-center text-title">{prov.nome}</h1>
      <div>{prov.descrizione.map(descr => 
        <p className="text-center">{descr}</p>
      )}</div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const response = await fetch(
    `https://express-api-labint.onrender.com/api/v1/regions/${params!.regId}/prov/${params!.provId}`
  );
  const unclearedData = await response.json();
  const data: RegioneInt[] = unclearedData.data.prov;
  return { props: { prov: data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://express-api-labint.onrender.com/api/v1/regions/");
  const unclearedData = await response.json();
  const data: RegioneInt[] = unclearedData.data.regions;
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