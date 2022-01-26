import { useState, useEffect } from "react";

const theDay = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(
  ","
);

const theMonth = "January,February,March,April,May,June,July,August,September,October,November,December".split(
  ","
);

const useTime = () => {
  const [hour, setHour] = useState(7);
  const [minute, setMinute] = useState(10);
  const [meridian, setMeridian] = useState("Am");
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [date, setDate] = useState(7);
  const [year, setYear] = useState(7);

  useEffect(() => {
    const gettingDate = new Date();

    const timer = setInterval(() => {
      const twelveHoursFormat = gettingDate.getHours() % 12;

      setHour(
        gettingDate.getHours() >= 12
          ? twelveHoursFormat
          : gettingDate.getHours()
      );

      setMinute(
        gettingDate.getMinutes() < 10
          ? `0${gettingDate.getMinutes()}`
          : gettingDate.getMinutes()
      );

      setMeridian(gettingDate.getHours() >= 12 ? "Pm" : "Am");

      setDay(theDay[gettingDate.getDay()]);

      setMonth(theMonth[gettingDate.getMonth()]);

      setDate(gettingDate.getDate());

      setYear(gettingDate.getFullYear());
    }, 1000);
    return () => clearInterval(timer);
  });
  return [hour, minute, meridian, day, month, date, year];
};
export default useTime;
