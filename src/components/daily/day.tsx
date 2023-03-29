import { useState, FC } from "react";
import { TDay } from "../../core/models/day.model";
import { getDays } from "../../core/utils/weekDays";

interface IDayProp {
  item: TDay;
  itemIndex: number;
  isSelected: boolean;
  handleSelect: (ind: number) => void;
}

const Day: FC<IDayProp> = ({
  isSelected,
  item,
  handleSelect,
  itemIndex,
}): JSX.Element => {
  //************* Calculating Date Of Item  *********************//
  const date = getDays(item?.date || "");

  return (
    <div onClick={() => handleSelect(itemIndex)} className="cursor-pointer noselect" >
      <div
        className={` sm:w-[3rem] md:w-[4rem] lg:w-[6rem] xl:w-[8rem] 2xl:w-[11rem] py-[2rem] rounded-sm text-white flex flex-wrap flex-col items-center justify-center 
          ${isSelected ? "bg-opacity-30 bg-zinc-300" : ""} `}
        // style={{ width: "190px" }}
      >
        <div className=" w-9/12 flex flex-col gap-y-1">
          <div className="">
            {date.week} {date.day}
          </div>
          <img src={item?.day?.condition.icon} className="w-[30%] h-[30%] " />
          <div className=""> {item?.day?.maxtemp_c.toFixed(0)} ° </div>
          <div className=""> {item?.day?.condition.text} </div>
        </div>
      </div>
      <div className={`${isSelected ? "inverted-triangle mx-auto" : ""}`}></div>
    </div>
  );
};

export default Day;
