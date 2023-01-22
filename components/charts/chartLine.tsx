import { DataPrevInt } from "../../types/types";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ChartLine = ({ data }: { data: DataPrevInt[] }) => {
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const options: ApexOptions = {
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
      curve: "straight",
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
    <div className="h-52 w-full mx-auto md:w-[45rem] md:h-[24rem]">
      <ReactApexChart
        options={options}
        series={options.series}
        width={"100%"}
        height={"100%"}
        type="line"
      />
    </div>
  );
};

export default ChartLine;
