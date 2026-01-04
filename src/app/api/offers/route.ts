import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import type { Offer } from './types'; // Assuming types are defined in a separate file

// Use a single source of truth for the data file path
const dataFilePath = path.join(process.cwd(), 'src/app/api/offers/__mocks__/offers.json');

async function readData(): Promise<Offer[]> {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    // If the file doesn't exist, return an empty array
    return [];
  }
}

async function writeData(data: Offer[]): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
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
  const offers = await readData();

  let filteredOffers: Offer[] = offers;

  if (city) {
    // Filter offers by the provided city, case-insensitively.
    filteredOffers = offers.filter(
      (offer) => offer.city.toLowerCase() === city.toLowerCase()
    );
  }

  return NextResponse.json(filteredOffers);
}

/**
 * API handler for adding a new parking offer.
 * @param request The incoming Next.js API request object.
 * @returns A JSON response with the newly created offer.
 */
export async function POST(request: Request) {
  try {
    const newOfferData = await request.json();
    const offers = await readData();

    const newOffer: Offer = {
      // Generate a unique ID
      id: offers.length > 0 ? Math.max(...offers.map(o => o.id)) + 1 : 1,
      ...newOfferData,
    };

    offers.push(newOffer);
    await writeData(offers);

    return NextResponse.json(newOffer, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error writing to file' }, { status: 500 });
  }
}
