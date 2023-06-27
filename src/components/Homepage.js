import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countriesSlice';

const Homepage = () => {
  const { countries } = useSelector((state) => state.countries);
  console.log(countries);
  const dispatch = useDispatch();
  const [selectedRegion] = useState('');
  // const [abc] = useState([]);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  // const handleRegionChange = (e) => {
  //   e.preventDefault();
  //   const region = e.target.value;
  //   setSelectedRegion(region);
  //   dispatch(fetchCountries(region));
  //   dispatch(setCountries(countries));
  // };
  return (
    <>
      <div>
        <select
          value={selectedRegion}
          onChange={(e) => {
            const region = e.target.value;
            // setSelectedRegion(region);
            dispatch(fetchCountries(region));
            // dispatch(setAbc(countries));
          }}
        >
          <option value="">Select Region</option>
          <option value="europe">Europe</option>
          <option value="south%20america">South America</option>
          <option value="north%20america">North America</option>
          <option value="antarctic">Antarctic</option>
          <option value="oceania">Oceania</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
        </select>
      </div>
      {/* <div>
        {countries.map((country) => (
          <div key={country.id}>
            {country.name}
            {country.flag}
          </div>
        ))}
      </div> */}
    </>
  );
};
export default Homepage;
