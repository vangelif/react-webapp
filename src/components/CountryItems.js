import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countriesSlice';

const CountryItems = () => {
  const { countries } = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  const [countryItem, setCountryItem] = useState([]);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  useEffect(() => {
    setCountryItem(countries);
  }, [countries]);

  return (
    <>
      <section>
        {countryItem.map((country) => (
          <table key={country.id}>
            <tbody>
              <tr>
                <td key="123">
                  {country.flag}
                  {country.name}
                </td>
                <td>
                  {/* <a href={country.emblem} alt={country.name}>
                    Flag
                  </a> */}
                  <img
                    height={80}
                    width={80}
                    src={country.emblem}
                    alt={country.name}
                  />
                </td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
                {/* <tr>{country.currency}</tr> */}
                {/* <tr>{country.gini}</tr> */}
                <td>{country.timezone}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </section>
    </>
  );
};
export default CountryItems;
