const Search = ({ setCity, searchedCity, setSearchCity }) => {
  const handleCitySearch = (e) => {
    console.log(e.target.value);
    setSearchCity(e.target.value);
  };
  const selectedCity = (e) => {
    e.preventDefault();
    setCity(searchedCity);
  };
  return (
    <>
      <form onSubmit={selectedCity} className="search">
        <input
          type="search"
          // name={city}
          value={searchedCity}
          placeholder="Search City"
          onChange={handleCitySearch}
        />
        <button type="submit"></button>
      </form>
    </>
  );
};
export default Search;
