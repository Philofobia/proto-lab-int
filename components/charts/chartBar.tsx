import { RegioneInt } from "../../types/types";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { access } from "fs";

export const ChartBar = ({
  regione,
  provenienza,
}: {
  regione: RegioneInt;
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
      categories: regione.dataPres
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
        data: regione.dataPres.reduce((acc: number[], obj) => {
          if (obj.alloggio === "HOT" && obj.paeseRes === provenienza) {
            acc.push(obj.value);
          } else if (obj.alloggio === "HOT" && provenienza === "ALL") {

          }
          return acc;
        }, []),
      },
      {
        name: "Campeggio",
        type: "column",
        data: regione.dataPres.reduce((acc: number[], obj) => {
          if (obj.alloggio === "CMP" && obj.paeseRes === provenienza) {
            acc.push(obj.value);
          } else if (obj.alloggio === "CMP" && provenienza === "ALL") {
            
          }
          return acc;
        }, []),
      },
      {
        name: "B&B",
        type: "column",
        data: regione.dataPres.reduce((acc: number[], obj) => {
          if (obj.alloggio === "BNB" && obj.paeseRes === provenienza) {
            acc.push(obj.value);
          } else if (obj.alloggio === "BNB" && provenienza === "ALL") {
            
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
