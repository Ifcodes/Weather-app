const Header = ({
  hour,
  minute,
  meridian,
  day,
  month,
  date,
  year,
  weather,
}) => {
  return (
    <>
      <header>
        <div className="time">
          <h1>
            {hour}:{minute}
            <span>{meridian}</span>
          </h1>
          <span>
            {day}, {month} {date}, {year}
          </span>
        </div>
        <div className="location">
          <h3>{weather ? weather.location.country : "Select a Location"}</h3>
          <span>{weather && weather.location.name}</span>
        </div>
      </header>
    </>
  );
};
export default Header;
