import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-[80px]">
      <h1 className="text-center text-title">TRAVEL TREND</h1>
      <h2 className="text-center text-title">Search where everyone is going</h2>
      <hr />
      <p></p>
      <Link className="btn btn-blue" href="/1">
        Sardegna
      </Link>
      <Link className="btn btn-blue" href="/2">
        Sicilia
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
