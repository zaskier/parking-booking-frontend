import { NextResponse } from 'next/server';
import offers from './__mocks__/offers.json';

// Define the type for a single offer, matching the structure in offers.json
export interface Offer {
  id: number;
  title: string;
  content: string;
  image: string;
  price: string;
  city: string;
  type?: 'Guarded' | 'Monitored' | 'Any' | string;
}

/**
 * API handler for fetching parking offers.
 * Supports filtering by city via a query parameter.
 * @param request The incoming Next.js API request object.
 * @returns A JSON response with the filtered or full list of offers.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  let filteredOffers: Offer[] = offers;

  if (city) {
    // Filter offers by the provided city, case-insensitively.
    filteredOffers = offers.filter(
      (offer) => offer.city.toLowerCase() === city.toLowerCase()
    );
  }

  return NextResponse.json(filteredOffers);
}
