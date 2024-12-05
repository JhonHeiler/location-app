import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';

interface Location {
  id: number;
  name: string;
  image: string;
  creationDate: string;
}

const App: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL!, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY!
      }
    })
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error('Error fetching locations:', error));
  }, []);

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#4285F4' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Locations app
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {locations.map(location => (
            <Grid item key={location.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={location.image}
                  alt={location.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {location.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Código: {location.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Fecha de Creación: {new Date(location.creationDate).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;
