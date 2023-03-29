import {
  CategoryScale,
  Chart as ChartJS,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  Legend,
  LinearScale,
  LineControllerChartOptions,
  LineElement,
  PluginChartOptions,
  PointElement,
  ScaleChartOptions,
  Title,
  Tooltip
} from "chart.js";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { FC } from "react";
import { Line } from "react-chartjs-2";

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

