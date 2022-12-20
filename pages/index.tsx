import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-title">I AM HOME</h1>
      <hr />
      <Link className="btn btn-blue" href="/regione/1">
        Sardegna
      </Link>
    </main>
  );
}

Home.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Travel Trend - Search where everyone is going</title>
      </Head>
      {page}
    </>
  );
};
