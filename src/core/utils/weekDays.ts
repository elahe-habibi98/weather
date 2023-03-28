const getDays = (day: string) => {
    
  const date = new Date(day);

  const weeks = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  return {
    week:weeks[date.getDay() + 1],
    day: date.getDate()
  };
};

export { getDays };
