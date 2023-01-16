import Head from "next/head";
import { ReactElement } from "react";

const AboutUs = () => {
  return (
    <main className="mt-[80px] mb-[50px]">
      <h1 className="text-center text-title text-4xl">
        <strong>Chi siamo</strong>
      </h1>
    </main>
  );
};

export default AboutUs;

AboutUs.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Travel Trend - Search where everyone is going</title>
      </Head>
      {page}
    </>
  );
};
