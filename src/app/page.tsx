'use client';
import Image from 'next/image';
import findAddOffer from './find-add-offer.svg';
import Dropdown from '@/components/Homepage/Dropdown';

export default function Home() {
  const options = ['Guarded', 'Monitored', 'Any'];
  const handleSelect = (option: string) => {
    console.log('Parking type:', option);
  };

  return (
    <div
      className="  flex flex-row Parent bg-main-gray bg-center bg-no-repeat rounded-lg w-full content-background p-4 "
      style={{ backgroundImage: `url("/path/to/your/image.jpg")` }}>
      <section className="section-1 lm:w-full w-1/2 rounded-lg bg-white  ">
        {/* <div className="flex flex-row m-4 w-full"  >     */}
        <ul className="mt-auto flex flex-row text-center dark:border-gray-700 dark:text-gray-400 m-3 w-full whitespace-nowrap pr-1">
          <li className="me-2 w-full">
            <a className="inline-block p-4 rounded-t-lg ">Find Parking</a>
          </li>
          <li className="me-2 w-full">
            <a
              href="#"
              aria-current="page"
              className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-main-blue dark:text-white w-full">
              Add Parking Offer
            </a>
          </li>
        </ul>
        {/* </div> */}

        <div className="pr-8">
          <input
            type="text"
            className="w-full px-4 py-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 m-3 bg-main-gray "
            placeholder="Where"
          />
          <Dropdown label="Parking Type" options={options} onSelect={handleSelect} />
          <div className="flex flex-row m-4 w-full m-3 ">
            <input
              type="text"
              className="w-full px-4 py-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 mr-3 bg-main-gray "
              placeholder="Select dates"
              readOnly // This prevents users from typing in the field
            />
            <button
              className="bg-deep-dusk whitespace-nowrap text-white py-4 
          px-5 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
              Show offers
            </button>
          </div>
        </div>
      </section>
      <Image
        className="section-2  inset-0 w-1/2  sm:w-1/16 z-10 p-10 opacity-100 md:visible sm:invisible"
        src={findAddOffer}
        alt="checkbox"
      />
    </div>
  );
}
