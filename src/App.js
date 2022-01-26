import React, { useState, useEffect } from "react";
import "./App.css";
import useTime from "./useTime";
import Header from "./components/header";
import Search from "./components/search";
import Footer from "./components/footer";
import axios from "axios";

const weatherKey = "b0957f753632c84cec6b2935deb19595";
//  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`

const App = () => {
  const [hour, minute, meridian, day, month, date, year] = useTime();
  const [city, setCity] = useState("Lagos");
  const [searchedCity, setSearchedCity] = useState("");
  const [weather, setWeather] = useState();

  axios
    .get(
      `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${city}`
    )
    .then((response) => {
      console.log("weather", response.data);
      setWeather(response.data);
    });

  return (
    <div className="app">
      <Header
        hour={hour}
        minute={minute}
        meridian={meridian}
        day={day}
        month={month}
        date={date}
        year={year}
        weather={weather}
      />
      <Search
        searchedCity={searchedCity}
        setCity={setCity}
        setSearchCity={setSearchedCity}
      />
      <Footer weather={weather} />
    </div>
  );
};

export default App;
