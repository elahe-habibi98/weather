import React from "react";
import { FC } from "react";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ScaleChartOptions,
  DatasetChartOptions,
  PluginChartOptions,
  ElementChartOptions,
  CoreChartOptions,
  LineControllerChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface ILineChartProp {
  data: any;
}

const LineChart: FC<ILineChartProp> = ({ data }): JSX.Element => {
  const options: _DeepPartialObject<
    CoreChartOptions<"line"> &
      ElementChartOptions<"line"> &
      PluginChartOptions<"line"> &
      DatasetChartOptions<"line"> &
      ScaleChartOptions<any> &
      LineControllerChartOptions
  > = {
    responsive: true,
    plugins: {
      legend: {
        //@ts-ignore
        position: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      datalabels: {
        padding: { top: 10 },
        align: "top",
        font: { size: 15 },
        color: "white",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
        border: {
          color: "white",
        },
      },

      y: {
        min: Math.min(...data.datasets[0].data) - 1,
        max: Math.max(...data.datasets[0].data) + 2,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return <Line options={options} data={data} />;
};

export { LineChart };
