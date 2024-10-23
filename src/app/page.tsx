'use client';

import ContentImageComponent from '@/components/About/ContentImage';
import HighLitedOffers from '@/components/About/HighlitedOffers';
import mockImg1 from '../../public/homepage/mock-images/8d5f462def892dbc73b6119501a3fa17.png';
import mockImg2 from '../../public/homepage/mock-images/e90c7e7d5b086c34d1e0236cfd110df7.png';
import mockImg3 from '../../public/homepage/mock-images/f31a645d83e778028ccb518d3a744a80.png';
import ContentBenefits from '@/components/About/ContentBenefits';
import React from 'react';
import 'react-datetime/css/react-datetime.css';
import Search from '@/components/Search/Search';

export default function Home() {
  const items = [
    {
      title: 'Arlington Street Car Park',
      content:
        'Fantastic secure parking spaces available at Q-Park Leicester Square, London for a long terms rent.',
      image: mockImg1,
      price: '$5'
    },
    {
      title: 'Tenterden Street Car Park',
      content:
        'Great parking area in the city center with multiple places for big vehicles and 3 electric charger stations.',
      image: mockImg2,
      price: '$10'
    },
    {
      title: 'Arlington Street Car Park',
      content:
        'Economy parking near the local factory. Available 24/7 in a very attractive prices for everyday use.',
      image: mockImg3,
      price: '$11'
    }
  ];

  return (
    <div>
      <Search />
      <HighLitedOffers items={items} />
      <ContentImageComponent />
      <ContentBenefits />
    </div>
  );
}
