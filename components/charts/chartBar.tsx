import { DataInt } from "../../types/types";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

export const ChartBar = ({
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
      height: 400,
      width: "100%",
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
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      categories: data
        .map((el) => el.anno)
        .filter((value, index, self) => self.indexOf(value) === index),
    },
    yaxis: {
      title: {
        text: "Attendance",
      },
    },
    series: [
      {
        name: "Alberghi",
        type: "column",
        data:data.reduce((acc: number[], obj) => {
          if (obj.alloggio === "HOT" && obj.paeseRes === provenienza) {
            acc.push(obj.value);
          }
          return acc;
        }, []),
      },
      {
        name: "Campeggio",
        type: "column",
        data:data.reduce((acc: number[], obj) => {
          if (obj.alloggio === "CMP" && obj.paeseRes === provenienza) {
            acc.push(obj.value);
          }
          return acc;
        }, []),
      },
      {
        name: "B&B",
        type: "column",
        data: data.reduce((acc: number[], obj) => {
          if (obj.alloggio === "BNB" && obj.paeseRes === provenienza) {
            acc.push(obj.value);
          }
          return acc;
        }, []),
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      width={"100%"}
      height={400}
      type="line"
    />
  );
};

export default ChartBar;
