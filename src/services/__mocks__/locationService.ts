import { fetchLocations } from '../../services/locationService';
import { Location } from '../../types/Location';

describe('fetchLocations', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return a list of locations when the fetch is successful', async () => {
    // Mock the global fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
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
          ]),
      } as Response)
    );

    const locations: Location[] = await fetchLocations();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(locations).toEqual([
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
    ]);
  });

  it('should throw an error when the fetch response is not ok', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response)
    );

    await expect(fetchLocations()).rejects.toThrow('Network response was not ok');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should throw an error when fetch fails', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')));

    await expect(fetchLocations()).rejects.toThrow('Fetch failed');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
