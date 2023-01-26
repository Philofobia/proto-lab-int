import { DataPrevInt } from "../../types/types";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ChartLine = ({ data }: { data: DataPrevInt[] }) => {
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const options: ApexOptions = {
    colors:['#86A0E7', '#86D0E7'],
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Previsioni Presenze turistiche",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: data.map((el) => el.anno),
    },
    yaxis: {
      title: {
        text: "Presenze",
      },
    },
    series: [
        {
          name: "Presenze",
          data: data.map((el) => +(el.valore).toFixed(0)),
        },
    ]
  };

  return (
    <section className="h-52 w-[98%] mx-auto bg-slate-300 border-1 border-solid p-1 mb-5 rounded-xl lg:w-[60rem] lg:h-[32rem] xl:w-[90rem] xl:h-[40rem]">
      <ReactApexChart
        options={options}
        series={options.series}
        width={"100%"}
        height={"100%"}
        type="line"
      />
    </section>
  );
};

export default ChartLine;
