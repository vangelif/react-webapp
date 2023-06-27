import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import { fetchCountries } from './redux/countriesSlice';
import CountryItems from './components/CountryItems';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="countries">
          <Route path=":countryName" element={<CountryItems />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
