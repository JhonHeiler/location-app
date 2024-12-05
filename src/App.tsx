import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Location } from './types/Location';
import { fetchLocations } from './services/locationService';
import LocationCard from './components/LocationCard';
import AppBar from './components/AppBar';

const App: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (error) {
        console.log(error);
        
      }
    };
    getLocations();
  }, []);

  return (
    <>
      <AppBar />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {locations.map((location) => (
            <Grid item key={location.id} xs={12} sm={6} md={4}>
              <LocationCard location={location} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;
