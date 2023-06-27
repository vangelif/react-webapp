import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

const BASE_API = 'https://restcountries.com/v3.1/region/';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (region) => {
    try {
      const response = await fetch(`${BASE_API}${region}`);
      if (!response.ok) {
        throw new Error('cannot fetch data');
      }
      const data = await response.json();
      console.log(data);

      // const countriesData = data.map((countries) => ({
      //   id: uuidv4(),
      //   name: countries.name.common,
      //   capital: countries.capital,
      //   flag: countries.flag,
      //   emblem: countries.coatOfArms.png,
      //   population: countries.population,
      //   currency: countries.currencies,
      //   gini: countries.gini,
      //   timezone: countries.timezones,
      //   continent: countries.continents,
      // }));

      // return countriesData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCountries.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(fetchCountries.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      countries: action.payload,
    }));
    builder.addCase(fetchCountries.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export const { actions } = countriesSlice;

export default countriesSlice.reducer;
