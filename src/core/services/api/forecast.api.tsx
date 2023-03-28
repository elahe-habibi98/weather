import axios from "axios";

const forecastAPI = async () => {
  try {
    const result = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: "fefc9fde920f4bc088280308232803",
          q: "tehran",
          days: 4,
          aqi: "no",
          alerts: "no",
        },
      }
    );
    // console.log("result-forecastAPI", result);
    return result?.data?.forecast?.forecastday;
  } catch (error) {
    return null;
  }
};

export { forecastAPI };
