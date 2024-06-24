'use client';
import Image from 'next/image';
import findAddOffer from './find-add-offer.svg';
import Dropdown from '@/components/Homepage/Dropdown';
import ContentImageComponent from '@/components/About/ContentImage';

export default function Home() {
  const options = ['Guarded', 'Monitored', 'Any'];
  const handleSelect = (option: string) => {
    console.log('Parking type:', option);
  };

  return (
    <div>
      <div
        className="Parent content-background flex w-full flex-row rounded-lg bg-main-gray bg-center bg-no-repeat p-4 text-xs md:text-base"
        style={{ backgroundImage: `url("/path/to/your/image.jpg")` }}>
        <section className="section-1 lm:w-full w-1/2 rounded-lg bg-white">
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

          <div className="pr-8">
            <input
              type="text"
              className="m-3 w-full rounded-md bg-main-gray px-4 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Where"
            />
            <Dropdown label="Parking Type" options={options} onSelect={handleSelect} />
            <div className="m-3 m-4 flex w-full flex-row">
              <input
                type="text"
                className="mr-3 w-full rounded-md bg-main-gray px-4 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Select dates"
                readOnly
              />
              <button className="whitespace-nowrap rounded-md bg-deep-dusk px-5 py-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                Show offers
              </button>
            </div>
          </div>
        </section>
        <Image
          className="section-2 sm:w-1/16 inset-0 z-10 w-1/2 p-10 opacity-100 sm:invisible md:visible"
          src={findAddOffer}
          alt="checkbox"
        />
      </div>
      <ContentImageComponent />
    </div>
  );
}
