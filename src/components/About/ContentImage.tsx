import Image from 'next/image';
import React from 'react';
import savings from '../../../public/homepage/savings.svg';
import location from '../../../public/homepage/location.svg';

function ContentImageComponent() {
  return (
    <div>
      <div className="absolute left-0 right-0 bg-main-blue p-2 text-white">
        <div className="flex w-screen items-center justify-center">
          <p className="p-2">First time here? </p>
          <button className="bg-main blue whitespace-nowrap rounded-xl border-2 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Create free account
          </button>
          <p className="p-2"> Get 15% discount on you first booking</p>
        </div>
      </div>
      <section className="grid gap-8 pl-16 pr-16 pt-12 lg:grid-cols-2">
        <Image className="sm::max-w-48 w-full p-20 md:max-w-96" src={savings} alt="savings"></Image>
        <div className="w-1/2 sm:w-full">
          <h2 className="pb-8 pt-8 text-2xl font-bold">
            Unlock a new source of <span className="text-main-blue">passive income!</span>
          </h2>
          <p>
            If you're heading on vacation or simply have an unused parking spot, why not let it work
            for you? List your parking space on our app, and watch as other users conveniently rent
            it during your downtime. Join our community of savvy parkers and turn your unused space
            into extra cash – it's the easiest way to make your parking spot work for you!
          </p>
        </div>
      </section>

      <section className="grid gap-8 pl-16 pr-16 lg:grid-cols-2">
        <div className="w-1/2 sm:w-full">
          <h2 className="pb-8 pt-8 text-2xl font-bold">
            <span className="text-main-blue">Save money</span> with our mobile app!{' '}
          </h2>
          <p>
            We're on a mission to redefine both short-term and long-term parking by introducing
            easily bookable spaces in bustling city centres and near major airports. Whether you
            need a spot for a few hours or a permanent solution, we connect users seamlessly, making
            parking stress a thing of the past. Join us in transforming urban mobility – because
            finding the perfect parking space should be as easy as a tap away!
          </p>
        </div>
        <div className="sm::max-w-48 w-full p-20 sm:max-w-96">
          <Image src={location} alt="location"></Image>
        </div>
      </section>
    </div>
  );
}

export default ContentImageComponent;
