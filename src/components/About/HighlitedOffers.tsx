import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function HighLitedOffers({ items }: { items: any }) {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-lg font-medium">{'Highlighted offers'}</h2>
        <a href={'/'} className="text-blue-500 underline hover:text-blue-700">
          See All
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item: any, index: any) => (
          <Link href={`/offer/${item.id}`} key={index}>
            <div className="bg-light-gray h-full overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
              <Image
                className="h-48 w-full object-cover"
                src={item.image}
                alt="menu"
                width={500}
                height={300}
              ></Image>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700">{item.content}</p>
                <h2 className="mb-2 text-xl text-gray-500">
                  {item.price}
                  <span className="text-sm">/day</span>
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HighLitedOffers;
