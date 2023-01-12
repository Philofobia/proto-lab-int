import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-[80px] mb-[50px]">
      <h1 className="text-center text-title text-4xl">
        <strong>TRAVEL TREND</strong>
      </h1>
      <h2 className="text-center text-title text-2xl">
        <em>Search where everyone is going</em>
      </h2>
      <hr className="my-5" />
      <p className="text-justify text-body mx-3 my-5">
        Il settore dei viaggi e delle prenotazioni in Italia è in continua
        evoluzione, con nuovi trend che emergono continuamente. Un sito di
        analisi e previsioni dati per questo settore può offrire una vasta gamma
        di informazioni utili per comprendere meglio come si sta evolvendo il
        mercato e come prevedere gli sviluppi futuri.
      </p>
      <p className="text-justify text-body mx-3 my-5">
        Un sito di questo tipo potrebbe raccogliere dati da diverse fonti, tra
        cui i principali siti di prenotazione alberghiera, i siti di viaggio, i
        dati demografici e le statistiche di mercato. Utilizzando questi dati,
        il sito potrebbe generare analisi dettagliate sulle tendenze del
        mercato, come ad esempio i periodi dell'anno in cui le prenotazioni sono
        più alte, le destinazioni più popolari e i prezzi più competitivi.
      </p>
      <p className="text-justify text-body mx-3 my-5">
        Inoltre, un sito di analisi e previsioni dati per il settore viaggi e
        prenotazioni in Italia potrebbe fornire anche previsioni sugli sviluppi
        futuri del mercato, come ad esempio l'effetto delle restrizioni sui
        viaggi a causa della pandemia sulla domanda futura. Queste previsioni
        possono essere utilizzate dalle aziende del settore per prendere
        decisioni informate su come posizionarsi sul mercato e come adattarsi
        alle tendenze in evoluzione.
      </p>
      <section className="mx-2 flex flex-wrap gap-5">
        <div className="card w-96 bg-base-100 shadow-xl border">
          <div className="card-body text-justify">
            <Link className="btn btn-blue card-title" href="/1">
              Sardegna
            </Link>
            <p>
              La Sardegna è una grande isola italiana situata nel Mar
              Mediterraneo e caratterizzata da circa 2000 km di costa, spiagge
              sabbiose e da un entroterra montuoso attraversato da sentieri
              escursionistici.
            </p>
          </div>
          <figure>
            <img
              src="https://www.agriturismo.it/imgs/extra_content/sardegna-portotorres.jpg"
              alt="foto Sardegna"
            />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl border">
          <div className="card-body text-justify">
            <Link className="btn btn-blue card-title" href="/2">
              Sicilia
            </Link>
            <p>
              La Sicilia, ufficialmente denominata Regione siciliana, è una
              regione italiana autonoma a statuto speciale di 4 780 210
              abitanti, con capoluogo Palermo.
            </p>
          </div>
          <figure>
            <img
              src="https://www.dltviaggi.it/immagine/47481/sicilia%20e%20isole%20egadi%2008.jpg"
              alt="foto Sicilia"
            />
          </figure>
        </div>
      </section>
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
