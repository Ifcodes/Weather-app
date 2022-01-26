import partlycloudy from "../public/images/mostlysunny.gif";
import humidityImg from "../public/images/icons8-wet-48.png";
import windDir from "../public/images/icons8-wind.gif";
import windSpeed from "../public/images/icons8-wind-speed-98-102-48.png";
import visibility from "../public/images/icons8-weather-48.png";

const Footer = ({ weather }) => {
  return (
    <>
      <div className="footer">
        <div className="cloud-img">
          <img
            src={weather ? weather.current.weather_icons[0] : partlycloudy}
            alt="cloud"
          />
          <span>
            {weather ? weather.current.weather_descriptions[0] : "Selet city"}
          </span>
        </div>
        <div className="temperature">
          <span>
            {weather ? weather.current.temperature : "0"}&#176;
            <span>External</span>
          </span>
          <span>
            {weather ? Math.floor(weather.current.temperature / 2 + 1) : "0"}
            &#176;
            <span>Internal</span>
          </span>
        </div>
        <div className="weather-info-cont">
          <div className="weather-info">
            <div className="w-info-icon">
              <img src={humidityImg} alt="humidity" className="humidityImg" />
            </div>
            <h5>Humidity(%)</h5>
            <span className="line"></span>
            <span>{weather ? weather.current.humidity : "no data"}</span>
          </div>
          <div className="weather-info wind-dir">
            <div className="w-info-icon wind-dir-icon">
              <img src={windDir} alt="humidity" className="humidityImg" />
            </div>
            <h5>Wind Direction</h5>
            <span className="line"></span>
            <span>{weather ? weather.current.wind_dir : "no data"}</span>
          </div>
          <div className="weather-info wind-dir">
            <div className="w-info-icon">
              <img src={windSpeed} alt="humidity" className="humidityImg" />
            </div>
            <h5>Wind Speed</h5>
            <span className="line"></span>
            <span>{weather ? weather.current.wind_speed : "no data"}</span>
          </div>
          <div className="weather-info wind-dir">
            <div className="w-info-icon wind-dir-icon">
              <img src={visibility} alt="humidity" className="humidityImg" />
            </div>
            <h5>Visibility</h5>
            <span className="line"></span>
            <span>{weather ? weather.current.visibility : "no data"}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
