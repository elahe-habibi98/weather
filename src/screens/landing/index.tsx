import { useEffect, useMemo, useState, FC } from "react";
import img from "../../assets/img/background/sky.png";
import { TDay } from "../../core/models/day.model";
import { forecastAPI } from "../../core/services/api/forecast.api";
import Daily from "./../../components/daily/index";
import Hourly from "./../../components/hourly/index";

const LandingPage: FC = (): JSX.Element => {
  //************* Hooks *********************//
  const [selected, setSelected] = useState<number>(0);
  const [days, setDays] = useState<TDay[]>([]);
  const current = useMemo(
    () => days.find((row, ind) => ind === selected),
    [days]
  );

  //************* Load Data Of Forecast From API *********************//
  const loadData = async () => {
    const result = await forecastAPI();
    setDays(result);
  };

  //************* Getting Index Of Selected Item *********************//
  const handleSelect = (ind: number) => {
    setSelected(ind);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div
      className="container mx-auto border bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${img})`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="w-11/12 mx-auto " style={{ height: "700px" }}>
        <Daily days={days} selected={selected} handleSelect={handleSelect} />
        <Hourly />
      </div>
    </div>
  );
};

export default LandingPage;
