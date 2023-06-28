/* eslint-disable react/jsx-one-expression-per-line */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { fetchCountries } from '../redux/countriesSlice';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();
  const { stats } = useParams();
  useEffect(() => {
    dispatch(fetchCountries(stats));
  }, [dispatch]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'rgb(236, 76, 138)' }}>
                <TableCell sx={{ color: 'white' }}>Name</TableCell>
                <TableCell sx={{ color: 'white' }}>Emblem</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map((country, index) => (
                <TableRow
                  key={country.id}
                  sx={{
                    bgcolor:
                      index % 2 === 0
                        ? 'rgb(236, 76, 138)'
                        : 'rgb(236, 95, 158)',
                  }}
                >
                  <TableCell sx={{ color: 'white' }}>{country.name}</TableCell>
                  <TableCell>
                    <Accordion>
                      <AccordionSummary sx={{ bgcolor: 'rgb(236, 76, 138)' }}>
                        <img
                          height={60}
                          width={40}
                          src={country.emblem}
                          alt="N / A"
                        />
                      </AccordionSummary>
                      <AccordionDetails sx={{ bgcolor: 'rgb(236, 76, 138)' }}>
                        <Typography sx={{ color: 'white' }}>
                          Flag: {country.flag}
                        </Typography>
                        <Typography sx={{ color: 'white' }}>
                          Capital: {country.capital}
                        </Typography>
                        <Typography>
                          Timezone: {String(country.timezone).slice(0, 9)}
                        </Typography>
                        <Typography>
                          Population:{' '}
                          {Number(country.population).toLocaleString()}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Countries;
