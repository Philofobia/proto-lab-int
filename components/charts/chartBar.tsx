import { DataInt } from "../../types/types";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ChartBar = ({
  data,
  provenienza,
}: {
  data: DataInt[];
  provenienza: string;
}) => {
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
        .filter((value, index, self) => self.indexOf(value) === index),
    },
    yaxis: {
      title: {
        text: "Presenze",
      },
    },
    series: [
      {
        name: "Alberghi",
        type: "column",
        data: data.reduce((acc: number[], obj) => {
          if (
            obj.tipologiaAlloggio === "HOTELLIKE" &&
            obj.provenienza === provenienza
          ) {
            acc.push(obj.valore);
          }
          return acc;
        }, []),
      },
      {
        name: "Altro",
        type: "column",
        data: data.reduce((acc: number[], obj) => {
          if (
            obj.tipologiaAlloggio === "OTHER" &&
            obj.provenienza === provenienza
          ) {
            acc.push(obj.valore);
          }
          return acc;
        }, []),
      },
    ],
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

export default ChartBar;
