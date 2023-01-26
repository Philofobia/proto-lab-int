import { DataInt } from "../../types/types";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ChartBarStatistiche = ({ data }: { data: DataInt[] }) => {
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const options: ApexOptions = {
    colors:['#86A0E7', '#86D0E7'],
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
    <section className="h-52 w-[98%] mx-auto lg:w-[60rem] lg:h-[32rem] xl:w-[90rem] xl:h-[40rem] bg-slate-300 border-1 border-solid p-1 mb-5 rounded-xl">
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

export default ChartBarStatistiche;
