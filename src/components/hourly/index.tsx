import { FC } from "react";
import { TDay } from "../../core/models/day.model";
import { LineChart } from "./chart";

interface IHourlyProp {
  day: TDay | undefined;
}

const Hourly: FC<IHourlyProp> = ({ day }): JSX.Element => {
  //************* Chart Data  *********************//
  const hourlyTemp = day?.hour?.map((item: any) => item.temp_c.toFixed(0));
  const labels = ["12 am", "4am", "8am", "12pm", "16pm", "20pm"];
  const data = {
    labels,
    datasets: [
      {
        data: [
          hourlyTemp[0],
          hourlyTemp[4],
          hourlyTemp[8],
          hourlyTemp[12],
          hourlyTemp[16],
          hourlyTemp[20],
        ],

        borderColor: "rgb(255, 255, 255)",

        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className=" text-white mt-[1rem]">
      <div className="font-bold" >Hourly</div>
      <div className="w-full max-h-[300px] py-[2rem] mt-[1rem] bg-opacity-10 bg-zinc-300">
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default Hourly;
