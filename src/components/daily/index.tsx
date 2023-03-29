import { FC, useState } from "react";
import { TDay } from "../../core/models/day.model";
import Day from "./day";

interface IDailyProp {
  days: TDay[];
  selected: number;
  handleSelect: (ind: number) => void;
}

const Daily: FC<IDailyProp> = ({
  days,
  selected,
  handleSelect,
}): JSX.Element => {
  //************* Hooks *********************//
  return (
    <div className=" h-2/5">
      <div className=" text-white my-[1.5rem]">Daily</div>
      <div className="border flex gap-x-3">
        {days?.map((item: TDay, index: number) => (
          <Day
            key={index}
            itemIndex={index}
            item={item}
            isSelected={index === selected}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Daily;
