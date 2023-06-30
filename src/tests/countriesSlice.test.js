import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import store from '../redux/store';
import myCountries from './Countries';
import Countries from '../components/Countries';

describe('Countries Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch collections and render them', async () => {
    // Mock the API request
    fetchMock.mockResponseOnce(JSON.stringify(myCountries));

    render(
      <Provider store={store}>
        <Countries />
      </Provider>
    );

    await waitFor(() => screen.getByText('Emblem'));
  });
});
