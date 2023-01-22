import { DataInt } from "../../types/types";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

export const ChartBarStatistiche = ({ data }: { data: DataInt[] }) => {
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const options: ApexOptions = {
    chart: {
      type: "line",
      stacked: false,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      position: "bottom",
      offsetX: -10,
      offsetY: 0,
    },
    xaxis: {
      categories: data
        .map((el) => el.annoMese)
    },
    yaxis: {
      title: {
        text: "Presenze",
      },
    },
    series: [
      {
        name: "Numero di Persone",
        type: "column",
        data: data.reduce((acc: number[], obj) => {
          {
            acc.push(obj.valore);
          }
          return acc;
        }, []),
      },
    ],
  };

  return (
    <div className="h-52 w-full mx-auto lg:w-[60rem] lg:h-[32rem] xl:w-[90rem] xl:h.[40rem]">
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

export default ChartBarStatistiche;
