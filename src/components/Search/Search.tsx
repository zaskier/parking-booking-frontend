'use client';
import { useState } from 'react';
import Image from 'next/image';
import Datetime from 'react-datetime';
import findAddOffer from '../../../public/homepage/find-add-offer.svg';

import Dropdown from '@/components/Homepage/Dropdown';

const cities = require('./cities.json');

export default function Search({}) {
  enum ParkingType {
    Guarded = 'Guarded',
    Monitored = 'Monitored',
    Any = 'Any'
  }

  const parkingType = Object.values(ParkingType);
  const handleSelect = (option: string) => {
    console.log('Parking type:', option);
  };

  const [value, setCity] = useState('');
  const onChange = (event: any) => {
    setCity(event.target.value);
  };

  interface SearchInput {
    city: string;
    from: Date;
    until: Date;
    type: ParkingType;
  }
  const onSearch = (searchTerm: SearchInput) => {
    setCity(searchTerm.city);
    console.log({ SearchTerm: searchTerm });
    // to do add api to fetch search Result
  };

  return (
    <div className="Parent content-background flex w-full flex-row rounded-lg bg-main-gray bg-cover bg-center bg-no-repeat p-4 text-xs md:text-base">
      <section className="section-1 w-full min-w-64 rounded-lg bg-white md:max-2xl:w-1/2">
        <ul className="m-3 mt-auto flex w-full flex-row whitespace-nowrap pr-1 text-center dark:border-gray-700 dark:text-gray-400">
          <li className="me-2 w-full">
            <a className="inline-block rounded-t-lg p-4">Find Parking</a>
          </li>
          <li className="me-2 w-full">
            <a
              href="#"
              aria-current="page"
              className="active inline-block w-full rounded-t-lg bg-gray-100 p-4 text-blue-100 dark:bg-main-blue dark:text-white">
              Add Parking Offer
            </a>
          </li>
        </ul>

        <div className="relative pr-6">
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="mx-3 mb-3 w-full rounded-md bg-main-gray p-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Where"
          />
          <div className="center absolute z-10 z-50 w-full rounded-md bg-white shadow-md">
            {cities
              .filter((item: any) => {
                const searchTerm = value.toLowerCase();
                const CityName = item.city.toLowerCase();

                return searchTerm && CityName.startsWith(searchTerm) && CityName !== searchTerm;
              })
              .map((item: any) => (
                <div
                  onClick={() => onSearch(item)}
                  className="w m-3 my-0.5 cursor-pointer p-2 text-left hover:bg-gray-100"
                  key={item.city}>
                  {item.city}
                </div>
              ))}
          </div>

          <div className="mx-3 flex w-full flex-row rounded-md bg-main-gray">
            <Datetime
              inputProps={{
                className: ' bg-main-gray w-full focus:outline-none'
              }}
              className="w-full p-4 focus:ring-1 focus:ring-blue-500"
              value={
                'From : ' +
                new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })
              }
              input={true}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="relative z-10 h-12 w-12 p-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </div>

          <div className="mx-3 mt-3 flex w-full flex-row rounded-md bg-main-gray">
            <Datetime
              inputProps={{
                className: ' bg-main-gray w-full focus:outline-none'
              }}
              className="w-full p-4 focus:ring-1 focus:ring-blue-500"
              value={
                'To     : ' +
                new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })
              }
              input={true}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="relative z-10 h-12 w-12 p-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </div>

          <div className="m-3 flex w-full flex-row">
            <div className="mr-3 w-full rounded-md bg-main-gray px-4 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <Dropdown label="Parking Type" options={parkingType} onSelect={handleSelect} />
            </div>
            <button
              onClick={
                () =>
                  onSearch({
                    city: value,
                    from: new Date(), //todo add dates and type from picker
                    until: new Date(),
                    type: ParkingType.Any
                  }) //todo add validation for subminitng button regadig empty fields
              }
              className="whitespace-nowrap rounded-md bg-deep-dusk px-5 py-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Show offers
            </button>
          </div>
        </div>
      </section>
      <Image
        className="section-2 md:max-xl:z-1 inset-0 w-0 object-cover md:w-1/2"
        src={findAddOffer}
        alt="checkbox"
      />
    </div>
  );
}
