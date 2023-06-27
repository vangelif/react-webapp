// /* eslint-disable react/jsx-one-expression-per-line */
// /* eslint-disable react/jsx-key */
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchCountries } from '../redux/countriesSlice';

// const Stats = () => {
//   const countries = useSelector((state) => state.countries.countries);
//   const dispatch = useDispatch();
//   const { countryId } = useParams();
//   useEffect(() => {
//     dispatch(fetchCountries(countryId));
//   }, [dispatch]);
//   return (
//     <div>
//       {countries.map((country) => (
//         <div>
//           <span>{country.capital}</span>
//           <span>{country.emblem}</span>
//           <span> {country.population}</span>
//           <span> {country.timezone}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stats;
