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
      return data;
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
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.error = null;

      const countriesList = [];
      console.log(payload);
      payload.map((country) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        countriesList.push({
          name: country.name.common,
          capital: country.capital,
          flag: country.flag,
          emblem: country.coatOfArms.png,
          population: country.population,
          currency: country.currencies,
          gini: country.gini,
          timezone: country.timezones,
          continent: country.continents,
        }));

      state.countries = countriesList;
      console.log(state.countries);
    });
    builder.addCase(fetchCountries.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export const { actions } = countriesSlice;
export const showCountries = (state) => state.countries.countries;
export default countriesSlice.reducer;
