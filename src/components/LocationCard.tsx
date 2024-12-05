import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Location } from '../types/Location';

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => (
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
);

export default LocationCard;
