import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import {
  Grid,
  Card,
  CardContent,
  Typography,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import WorldMap from '../assets/worldmap.jpeg';
import Europe from '../assets/europe.jpeg';
import SouthAmerica from '../assets/southamerica.jpeg';
import NorthAmerica from '../assets/northamerica.jpeg';
import Asia from '../assets/asia.jpeg';
import Africa from '../assets/africa.jpeg';
import Antarctic from '../assets/antarctic.jpeg';
import Oceania from '../assets/oceania.PNG';

// eslint-disable-next-line object-curly-newline
import { fetchCountries } from '../redux/countriesSlice';

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleRegion = (region) => {
    setSelectedRegion(region);
    dispatch(fetchCountries(region));
    navigate(`/countries/${region}`);
  };

  return (
    <>
      <ImageListItem>
        <img
          className="map-icon"
          src={WorldMap}
          alt="World Map"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <ImageListItemBar
          sx={{ borderRadius: '7%' }}
          title="World Map Statistics"
        />
      </ImageListItem>

      <Grid container>
        <Grid item xs={6}>
          <Card
            onClick={() => handleRegion('oceania')}
            sx={{
              cursor: 'pointer',
              bgcolor: 'rgb(236, 76, 138)',
              boxShadow: 12,
              borderRadius: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <CardContent>
              <img
                className="map-icon"
                src={Oceania}
                alt="Oceania"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Typography
                variant="h6"
                component="div"
                color="primaryText"
                sx={{ fontSize: '14px' }}
              >
                Oceania
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            onClick={() => handleRegion('south america')}
            sx={{
              cursor: 'pointer',
              bgcolor: 'rgb(236, 76, 138)',
              boxShadow: 12,
              borderRadius: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <CardContent>
              <img
                className="map-icon"
                src={SouthAmerica}
                alt="SouthAmerica"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Typography
                variant="h6"
                component="div"
                color="primaryText"
                sx={{ fontSize: '14px' }}
              >
                South America
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            onClick={() => handleRegion('north america')}
            sx={{
              cursor: 'pointer',
              bgcolor: 'rgb(236, 76, 138)',
              boxShadow: 12,
              borderRadius: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <CardContent>
              <img
                className="map-icon"
                src={NorthAmerica}
                alt="NorthAmerica"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Typography
                variant="h6"
                component="div"
                color="primaryText"
                sx={{ fontSize: '14px' }}
              >
                North America
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            onClick={() => handleRegion('africa')}
            sx={{
              cursor: 'pointer',
              bgcolor: 'rgb(236, 76, 138)',
              boxShadow: 12,
              borderRadius: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <CardContent>
              <img
                className="map-icon"
                src={Africa}
                alt="Africa"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Typography
                variant="h6"
                component="div"
                color="primaryText"
                sx={{ fontSize: '14px' }}
              >
                Africa
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            onClick={() => handleRegion('asia')}
            sx={{
              cursor: 'pointer',
              bgcolor: 'rgb(236, 76, 138)',
              boxShadow: 12,
              borderRadius: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <CardContent>
              <img
                className="map-icon"
                src={Asia}
                alt="Asia"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Typography
                variant="h6"
                component="div"
                color="primaryText"
                sx={{ fontSize: '14px' }}
              >
                Asia
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            onClick={() => handleRegion('antarctic')}
            sx={{
              cursor: 'pointer',
              bgcolor: 'rgb(236, 76, 138)',
              boxShadow: 12,
              borderRadius: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <CardContent>
              <img
                className="map-icon"
                src={Antarctic}
                alt="Antarctic"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Typography
                variant="h6"
                component="div"
                color="primaryText"
                sx={{ fontSize: '14px' }}
              >
                Antarctic
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            onClick={() => handleRegion('europe')}
            sx={{
              cursor: 'pointer',
              bgcolor: 'rgb(236, 76, 138)',
              boxShadow: 12,
              borderRadius: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <CardContent>
              <img
                className="map-icon"
                src={Europe}
                alt="Europe"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Typography
                variant="h6"
                component="div"
                color="primaryText"
                sx={{ fontSize: '14px' }}
              >
                Europe
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Homepage;
