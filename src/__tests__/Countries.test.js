import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import store from '../redux/store';
import Countries from '../components/Countries';

describe('Countries component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/stats/population']}>
          {/* <ReactFragment> */}
          <Routes>
            <Route path="/stats/:stats">
              <Countries />
            </Route>
          </Routes>
          {/* </ReactFragment> */}
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders table with country data', () => {
    // Assert that the table is rendered
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    // Assert that the country names are rendered
    const countryNames = screen.getAllByRole('cell', { name: /name/i });
    expect(countryNames).toHaveLength(2); // Assuming there are two countries

    // Assert that the country emblems are rendered
    const emblems = screen.getAllByRole('img', { name: /emblem/i });
    expect(emblems).toHaveLength(2); // Assuming there are two emblems
  });

  // Add more tests to cover other functionality and edge cases
});
