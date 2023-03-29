const getDays = (day: string) => {
    
  const date = new Date(day);

  const weeks = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"];

  return {
    week:weeks[date.getDay() ],
    day: date.getDate()

  };
};

export { getDays };
