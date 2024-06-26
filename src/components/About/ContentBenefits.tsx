import React from 'react';
import smileIcon from '../../../public/homepage/icons/charm_face-smile.svg';
import easyIcon from '../../../public/homepage/icons/easy_to_use.svg';
import reliableIcon from '../../../public/homepage/icons/reliable.svg';
import Image from 'next/image';

function ContentBenefits() {
  const items = [
    {
      title: 'Easy to use',
      content: `Navigate effortlessly through city streets with our interactive map feature, providing a comprehensive overview of all available parking locations. Easily plan your route and choose the most convenient spot, making urban parking stress a thing of the past. Embrace a smarter way to park with our app's intuitive map functionality.`,
      icon: easyIcon
    },
    {
      title: 'Comfortable',
      content:
        'Discover the ultimate convenience with our cutting-edge parking app, where finding and renting parking spaces from other users is a breeze.',
      icon: smileIcon
    },
    {
      title: 'Reliable',
      content:
        'Our user-friendly interface sets us apart from the competition, ensuring a seamless experience with just a few taps. Earn trust and exclusive rewards as you accumulate points for successful rentals, creating a community you can rely on for stress-free parking solutions.',
      icon: reliableIcon
    }
  ];

  return (
    <div className="container mx-auto items-center justify-center py-8">
      <h2 className="pb-8 pt-8 text-center text-2xl font-bold">
        Enjoy the <span className="text-main-blue">best service</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item: any, index: any) => (
          <div
            key={index}
            className="bg-light-gray overflow-hidden rounded-lg border border-gray-100">
            <div className="p-4">
              <Image className="mx-auto pb-3" src={item.icon} alt="menu"></Image>
              <h2 className="mb-2 text-center text-xl font-bold text-main-blue">{item.title}</h2>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentBenefits;
