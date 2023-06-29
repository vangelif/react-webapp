import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import Homepage from '../components/Homepage';
import myCountries from './Countries';

const reducer = (
  state = {
    countries: { countries: myCountries },
  }
) => state;

const store = configureStore({ reducer });

describe('Homepage test', () => {
  it('will test if Homepage is rendering correctly', () => {
    const tree = render(
      <MemoryRouter>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
