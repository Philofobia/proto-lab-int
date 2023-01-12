import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { RegioneInt } from "../../types/types";

const Chart = () => {
  const [regioni, setRegioni] = useState<RegioneInt[]>([]);
  useEffect(() => {
    fetch("https://express-api-labint.onrender.com/api/v1/regions/")
      .then((res) => res.json())
      .then((data) => setRegioni(data.data.regions));
  }, []);

  return (
    <main className="mt-[80px] mb-[50px]">
      <h1 className="text-center text-title text-4xl">
        <strong>Ricerca</strong>
      </h1>
      <div className="text-sm breadcrumbs mt-1 ml-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Grafici</li>
        </ul>
      </div>
      <hr className="my-5" />
      <section className="mx-2 text-justify">
        <div className="card shadow-xl bg-neutral-focus h-[450px]">
          <select className="select w-[90%] mt-4 mx-auto mt-2">
            <option disabled selected>
              Regione
            </option>
            {regioni.map((regione) => (
              <option value={regione.id}>{regione.nome}</option>
            ))}
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Provincia
            </option>
            {regioni.map((regione) =>
              regione.provincie.map((prov) => (
                <option value={prov.id}>{prov.nome}</option>
              ))
            )}
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Tipo di struttura
            </option>
            <option value="HOTEL">Hotel</option>
            <option value="CAMPING">Camping</option>
            <option value="RESIDENCE">Residence</option>
            <option value="B&B">Bed & Breakfast</option>
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Paese di Provenienza
            </option>
            <option value="ITA">Italia</option>
            <option value="OUT">Estero</option>
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Inizio periodo di ricerca
            </option>
            <option value="2021-01-01">Gennaio 2021</option>
            <option value="2021-02-01">Febbraio 2021</option>
            <option value="2021-03-01">Marzo 2021</option>
            <option value="2021-04-01">Aprile 2021</option>
            <option value="2021-05-01">Maggio 2021</option>
            <option value="2021-06-01">Giugno 2021</option>
            <option value="2021-07-01">Luglio 2021</option>
          </select>
          <select className="select w-[90%] mt-2 mx-auto">
            <option disabled selected>
              Fine periodo di ricerca
            </option>
            <option value="2021-01-01">Gennaio 2025</option>
            <option value="2021-02-01">Febbraio 2025</option>
            <option value="2021-03-01">Marzo 2025</option>
            <option value="2021-04-01">Aprile 2025</option>
            <option value="2021-05-01">Maggio 2025</option>
            <option value="2021-06-01">Giugno 2025</option>
            <option value="2021-07-01">Luglio 2025</option>
          </select>
          <button className="btn w-[45%] mt-9 mx-auto">Cerca</button>
        </div>
      </section>
    </main>
  );
};

export default Chart;

Chart.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Travel Trend - Search where everyone is going</title>
      </Head>
      {page}
    </>
  );
};
