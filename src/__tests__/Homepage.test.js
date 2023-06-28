import React from 'react';
// eslint-disable-next-line object-curly-newline
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Homepage from '../components/Homepage';
import { fetchCountries } from '../redux/countriesSlice';
// import { useDispatch } from 'react-redux';

// Mock Redux store
const mockStore = configureStore([]);
const store = mockStore({});

// Mock useDispatch and useNavigate
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Homepage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch fetchCountries action when a region is clicked', async () => {
    const dispatch = jest.fn();
    dispatch.mockReturnValue(dispatch);
    // eslint-disable-next-line no-undef
    useNavigate.mockReturnValue(jest.fn());

    render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByAltText('Oceania'));

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      // One for initial fetchCountries and one for the clicked region
      expect(dispatch).toHaveBeenCalledWith(fetchCountries());
      expect(dispatch).toHaveBeenCalledWith(fetchCountries('oceania'));
    });
  });

  it('should navigate to the selected region when a region is clicked', async () => {
    const navigate = jest.fn();
    // eslint-disable-next-line no-undef
    useDispatch.mockReturnValue(jest.fn());
    navigate.mockReturnValue(navigate);

    render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByAltText('SouthAmerica'));

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledTimes(1);
      expect(navigate).toHaveBeenCalledWith('/countries/south america');
    });
  });
});
