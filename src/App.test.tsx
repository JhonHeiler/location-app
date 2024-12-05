import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { fetchLocations } from './services/locationService';

jest.mock('./services/locationService', () => ({
  fetchLocations: jest.fn(),
}));

describe('App Component', () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    jest.resetAllMocks();
  });

  it('renders the AppBar and a list of LocationCards', async () => {
    const mockLocations = [
      {
        id: 1,
        name: 'Location One',
        image: 'https://example.com/image1.jpg',
        creationDate: '2023-01-01T00:00:00Z',
      },
      {
        id: 2,
        name: 'Location Two',
        image: 'https://example.com/image2.jpg',
        creationDate: '2023-02-01T00:00:00Z',
      },
    ];

    (fetchLocations as jest.Mock).mockResolvedValue(mockLocations);

    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();

    await waitFor(() => {
      mockLocations.forEach((location) => {
        expect(screen.getByText(location.name)).toBeInTheDocument();
      });
    });

    const cards = screen.getAllByRole('img');
    expect(cards).toHaveLength(mockLocations.length);
  });

  it('logs an error if fetchLocations fails', async () => {
    (fetchLocations as jest.Mock).mockRejectedValue(new Error('Failed to fetch locations'));

    render(<App />);

    await waitFor(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith(new Error('Failed to fetch locations'));
    });
  });
});
