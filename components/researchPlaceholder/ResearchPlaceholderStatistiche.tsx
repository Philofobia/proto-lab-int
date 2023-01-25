const ResearchPlaceholderStatistiche = () => {
  return (
    <section className="text-gray-600 body-font" id="research-statistiche">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 text-justify">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#86a0e7] inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <p className="leading-relaxed">
                  Selezionare la provincia desiderata.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#86a0e7] inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <p className="leading-relaxed">
                  Selezionare il tipo di alloggio desiderato.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#86a0e7] inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <p className="leading-relaxed">
                  Selezionare se si desidera visualizzare i dati relativi
                  all'arrivo o alla presenza di turisti italiani o stranieri (
                  passo successivo ).
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#86a0e7] inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <p className="leading-relaxed">
                  Selezionare se si desidera visualizzare un solo grafico
                  annuale o diversi grafici annuali con mesi inclusi.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#86a0e7] inline-flex items-center justify-center text-white relative z-10"></div>
              <div className="flex-grow pl-4">
                <p className="leading-relaxed">
                  Fare clic sul pulsante "Visualizza grafico" per generare e
                  visualizzare il grafico con i filtri selezionati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPlaceholderStatistiche;
