import React from 'react';
import { render, screen } from '@testing-library/react';
import LocationCard from './LocationCard';
import { Location } from '../types/Location';

describe('LocationCard Component', () => {
  const location: Location = {
    id: 1,
    name: 'Test Location',
    image: 'https://example.com/image.jpg',
    creationDate: '2023-01-01T00:00:00Z',
  };

  test('renders location data correctly', () => {
    render(<LocationCard location={location} />);

    expect(screen.getByAltText(/Test Location/i)).toHaveAttribute('src', location.image);
    expect(screen.getByText(/Test Location/i)).toBeInTheDocument();
    expect(screen.getByText(/Código: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Fecha de Creación:/i)).toBeInTheDocument();
  });
});