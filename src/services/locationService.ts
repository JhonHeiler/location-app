import { Location } from '../types/Location';

export const fetchLocations = async (): Promise<Location[]> => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL!, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY!,
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Location[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
};
