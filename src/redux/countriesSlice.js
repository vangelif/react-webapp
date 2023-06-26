// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const api = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('cannot fetch');
      }
      const data = await response.json();
      console.log(data);
      const countriesData = data.map((countries) => ({
        id: uuidv4(),
        name: countries.name.common,
        capital: countries.capital,
        flag: countries.flag,
        emblem: countries.coatOfArms.png,
        population: countries.population,
        currency: countries.currencies,
        gini: countries.gini,
        timezone: countries.timezones,
      }));

      const slicedData = countriesData.slice(0, 50);

      console.log(slicedData);
      return slicedData;
      //   return countriesData;
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
