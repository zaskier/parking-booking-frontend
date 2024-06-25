'use client';
import Image from 'next/image';
import findAddOffer from '../../public/homepage/find-add-offer.svg';
import Dropdown from '@/components/Homepage/Dropdown';
import ContentImageComponent from '@/components/About/ContentImage';
import HighLitedOffers from '@/components/About/HighlitedOffers';
import mockImg1 from '../../public/homepage/mock-images/8d5f462def892dbc73b6119501a3fa17.png';
import mockImg2 from '../../public/homepage/mock-images/e90c7e7d5b086c34d1e0236cfd110df7.png';
import mockImg3 from '../../public/homepage/mock-images/f31a645d83e778028ccb518d3a744a80.png';
import ContentBenefits from '@/components/About/ContentBenefits';

export default function Home() {
  const options = ['Guarded', 'Monitored', 'Any'];
  const handleSelect = (option: string) => {
    console.log('Parking type:', option);
  };

  const items = [
    {
      title: 'Arlington Street Car Park',
      content:
        'Fantastic secure parking spaces available at Q-Park Leicester Square, London for a long terms rent.',
      image: mockImg1
    },
    {
      title: 'Tenterden Street Car Park',
      content:
        'Great parking area in the city center with multiple places for big vehicles and 3 electric charger stations.',
      image: mockImg2
    },
    {
      title: 'Arlington Street Car Park',
      content:
        'Economy parking near the local factory. Available 24/7 in a very attractive prices for everyday use.',
      image: mockImg3
    }
  ];

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
      <HighLitedOffers items={items} />
      <ContentImageComponent />
      <ContentBenefits />
    </div>
  );
}
