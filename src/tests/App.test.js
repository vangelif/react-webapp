import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import myCountries from './Countries';
import App from '../App';

const reducer = (
  state = {
    countries: { countries: myCountries },
  }
) => state;

const store = configureStore({ reducer });
describe('App test', () => {
  it('will test App rendering', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
  });
});
