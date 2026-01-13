import { OfferType } from '../../../offers/enums/type.enum'

export const OFFERS_SEED_DATA = [
  {
    title: 'Main Street Car Park - Kraków',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7a53857f-fd2d-4cf6-994b-7b0fe87025fd-e90c7e7d5b086c34d1e0236cfd110df7.png',
    price: 23,
    city: 'Kraków',
    type: OfferType.Guarded,
    email: 'user1@example.com',
  },
  {
    title: 'Central Station Parking - Kraków',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/c3c3f49f-42d4-4322-b9d8-b1460723ed2d-8d5f462def892dbc73b6119501a3fa17.png',
    price: 18,
    city: 'Kraków',
    type: OfferType.Monitored,
    email: 'user2@example.com',
  },
  {
    title: 'Old Town Secure Garage - Łódź',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7536b921-a51e-4734-95e6-a23c7566e3e6-Leonardo_Diffusion_XL_parking_stock_photo_2.jpg',
    price: 21,
    city: 'Łódź',
    type: OfferType.Any,
    email: 'user3@example.com',
  },
  {
    title: 'Market Square Lot - Wrocław',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/4d48aac5-b238-4777-954c-7fceb77b4af6-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 28,
    city: 'Wrocław',
    type: OfferType.Guarded,
    email: 'user4@example.com',
  },
  {
    title: 'Riverbank Parking - Poznań',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cb3d926a-01db-4937-9e1b-7a23ecca1d7c-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 12,
    city: 'Poznań',
    type: OfferType.Monitored,
    email: 'user5@example.com',
  },
  {
    title: 'Galleria Mall Parkade - Gdańsk',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cabef240-5da6-47d2-8407-240c87cbca88-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 15,
    city: 'Gdańsk',
    type: OfferType.Any,
    email: 'user6@example.com',
  },
  {
    title: 'Airport Economy Lot - Kraków',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/3acc0107-4f31-49f2-b26c-5c458c18036f-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 10,
    city: 'Kraków',
    type: OfferType.Guarded,
    email: 'user7@example.com',
  },
  {
    title: 'Uptown Parking Garage - Bydgoszcz',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7a53857f-fd2d-4cf6-994b-7b0fe87025fd-e90c7e7d5b086c34d1e0236cfd110df7.png',
    price: 14,
    city: 'Bydgoszcz',
    type: OfferType.Monitored,
    email: 'user8@example.com',
  },
  {
    title: 'West End Car Park - Lublin',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/c3c3f49f-42d4-4322-b9d8-b1460723ed2d-8d5f462def892dbc73b6119501a3fa17.png',
    price: 8,
    city: 'Lublin',
    type: OfferType.Any,
    email: 'user9@example.com',
  },
  {
    title: 'Civic Center Park - Białystok',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7536b921-a51e-4734-95e6-a23c7566e3e6-Leonardo_Diffusion_XL_parking_stock_photo_2.jpg',
    price: 25,
    city: 'Białystok',
    type: OfferType.Guarded,
    email: 'user10@example.com',
  },
  {
    title: 'Main Street Car Park - Katowice',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/4d48aac5-b238-4777-954c-7fceb77b4af6-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 13,
    city: 'Katowice',
    type: OfferType.Monitored,
    email: 'user11@example.com',
  },
  {
    title: 'Central Station Parking - Gdynia',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cb3d926a-01db-4937-9e1b-7a23ecca1d7c-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 19,
    city: 'Gdynia',
    type: OfferType.Any,
    email: 'user12@example.com',
  },
  {
    title: 'Old Town Secure Garage - Częstochowa',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cabef240-5da6-47d2-8407-240c87cbca88-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 22,
    city: 'Częstochowa',
    type: OfferType.Guarded,
    email: 'user13@example.com',
  },
  {
    title: 'Market Square Lot - Radom',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/3acc0107-4f31-49f2-b26c-5c458c18036f-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 6,
    city: 'Radom',
    type: OfferType.Monitored,
    email: 'user14@example.com',
  },
  {
    title: 'Riverbank Parking - Sosnowiec',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7a53857f-fd2d-4cf6-994b-7b0fe87025fd-e90c7e7d5b086c34d1e0236cfd110df7.png',
    price: 17,
    city: 'Sosnowiec',
    type: OfferType.Any,
    email: 'user15@example.com',
  },
  {
    title: 'Galleria Mall Parkade - Toruń',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/c3c3f49f-42d4-4322-b9d8-b1460723ed2d-8d5f462def892dbc73b6119501a3fa17.png',
    price: 29,
    city: 'Toruń',
    type: OfferType.Guarded,
    email: 'user16@example.com',
  },
  {
    title: 'Airport Economy Lot - Kielce',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7536b921-a51e-4734-95e6-a23c7566e3e6-Leonardo_Diffusion_XL_parking_stock_photo_2.jpg',
    price: 9,
    city: 'Kielce',
    type: OfferType.Monitored,
    email: 'user17@example.com',
  },
  {
    title: 'Uptown Parking Garage - Gliwice',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/4d48aac5-b238-4777-954c-7fceb77b4af6-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 24,
    city: 'Gliwice',
    type: OfferType.Any,
    email: 'user18@example.com',
  },
  {
    title: 'West End Car Park - Zabrze',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cb3d926a-01db-4937-9e1b-7a23ecca1d7c-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 11,
    city: 'Zabrze',
    type: OfferType.Guarded,
    email: 'user19@example.com',
  },
  {
    title: 'Civic Center Park - Olsztyn',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cabef240-5da6-47d2-8407-240c87cbca88-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 27,
    city: 'Olsztyn',
    type: OfferType.Monitored,
    email: 'user20@example.com',
  },
  {
    title: 'Main Street Car Park - Bielsko-Biała',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/3acc0107-4f31-49f2-b26c-5c458c18036f-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 7,
    city: 'Bielsko-Biała',
    type: OfferType.Any,
    email: 'user21@example.com',
  },
  {
    title: 'Central Station Parking - Rzeszów',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7a53857f-fd2d-4cf6-994b-7b0fe87025fd-e90c7e7d5b086c34d1e0236cfd110df7.png',
    price: 16,
    city: 'Rzeszów',
    type: OfferType.Guarded,
    email: 'user22@example.com',
  },
  {
    title: 'Old Town Secure Garage - Ruda Śląska',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/c3c3f49f-42d4-4322-b9d8-b1460723ed2d-8d5f462def892dbc73b6119501a3fa17.png',
    price: 20,
    city: 'Ruda Śląska',
    type: OfferType.Monitored,
    email: 'user23@example.com',
  },
  {
    title: 'Market Square Lot - Rybnik',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7536b921-a51e-4734-95e6-a23c7566e3e6-Leonardo_Diffusion_XL_parking_stock_photo_2.jpg',
    price: 26,
    city: 'Rybnik',
    type: OfferType.Any,
    email: 'user24@example.com',
  },
  {
    title: 'Riverbank Parking - Tychy',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/4d48aac5-b238-4777-954c-7fceb77b4af6-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 5,
    city: 'Tychy',
    type: OfferType.Guarded,
    email: 'user25@example.com',
  },
  {
    title: 'Galleria Mall Parkade - Dąbrowa Górnicza',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cb3d926a-01db-4937-9e1b-7a23ecca1d7c-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 19,
    city: 'Dąbrowa Górnicza',
    type: OfferType.Monitored,
    email: 'user26@example.com',
  },
  {
    title: 'Airport Economy Lot - Opole',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cabef240-5da6-47d2-8407-240c87cbca88-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 14,
    city: 'Opole',
    type: OfferType.Any,
    email: 'user27@example.com',
  },
  {
    title: 'Uptown Parking Garage - Elbląg',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/3acc0107-4f31-49f2-b26c-5c458c18036f-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 21,
    city: 'Elbląg',
    type: OfferType.Guarded,
    email: 'user28@example.com',
  },
  {
    title: 'West End Car Park - Płock',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7a53857f-fd2d-4cf6-994b-7b0fe87025fd-e90c7e7d5b086c34d1e0236cfd110df7.png',
    price: 8,
    city: 'Płock',
    type: OfferType.Monitored,
    email: 'user29@example.com',
  },
  {
    title: 'Civic Center Park - Wałbrzych',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/c3c3f49f-42d4-4322-b9d8-b1460723ed2d-8d5f462def892dbc73b6119501a3fa17.png',
    price: 12,
    city: 'Wałbrzych',
    type: OfferType.Any,
    email: 'user30@example.com',
  },
  {
    title: 'Main Street Car Park - Warsaw',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7536b921-a51e-4734-95e6-a23c7566e3e6-Leonardo_Diffusion_XL_parking_stock_photo_2.jpg',
    price: 22,
    city: 'Warsaw',
    type: OfferType.Guarded,
    email: 'user31@example.com',
  },
  {
    title: 'Central Station Parking - Kraków',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/4d48aac5-b238-4777-954c-7fceb77b4af6-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 17,
    city: 'Kraków',
    type: OfferType.Monitored,
    email: 'user32@example.com',
  },
  {
    title: 'Old Town Secure Garage - Łódź',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cb3d926a-01db-4937-9e1b-7a23ecca1d7c-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 20,
    city: 'Łódź',
    type: OfferType.Any,
    email: 'user33@example.com',
  },
  {
    title: 'Market Square Lot - Wrocław',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cabef240-5da6-47d2-8407-240c87cbca88-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 27,
    city: 'Wrocław',
    type: OfferType.Guarded,
    email: 'user34@example.com',
  },
  {
    title: 'Riverbank Parking - Poznań',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/3acc0107-4f31-49f2-b26c-5c458c18036f-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 11,
    city: 'Poznań',
    type: OfferType.Monitored,
    email: 'user35@example.com',
  },
  {
    title: 'Galleria Mall Parkade - Gdańsk',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7a53857f-fd2d-4cf6-994b-7b0fe87025fd-e90c7e7d5b086c34d1e0236cfd110df7.png',
    price: 14,
    city: 'Gdańsk',
    type: OfferType.Any,
    email: 'user36@example.com',
  },
  {
    title: 'Airport Economy Lot - Szczecin',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/c3c3f49f-42d4-4322-b9d8-b1460723ed2d-8d5f462def892dbc73b6119501a3fa17.png',
    price: 9,
    city: 'Szczecin',
    type: OfferType.Guarded,
    email: 'user37@example.com',
  },
  {
    title: 'Uptown Parking Garage - Bydgoszcz',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7536b921-a51e-4734-95e6-a23c7566e3e6-Leonardo_Diffusion_XL_parking_stock_photo_2.jpg',
    price: 13,
    city: 'Bydgoszcz',
    type: OfferType.Monitored,
    email: 'user38@example.com',
  },
  {
    title: 'West End Car Park - Lublin',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/4d48aac5-b238-4777-954c-7fceb77b4af6-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 7,
    city: 'Lublin',
    type: OfferType.Any,
    email: 'user39@example.com',
  },
  {
    title: 'Civic Center Park - Białystok',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cb3d926a-01db-4937-9e1b-7a23ecca1d7c-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 24,
    city: 'Białystok',
    type: OfferType.Guarded,
    email: 'user40@example.com',
  },
  {
    title: 'Main Street Car Park - Katowice',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cabef240-5da6-47d2-8407-240c87cbca88-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 12,
    city: 'Katowice',
    type: OfferType.Monitored,
    email: 'user41@example.com',
  },
  {
    title: 'Central Station Parking - Gdynia',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/3acc0107-4f31-49f2-b26c-5c458c18036f-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 18,
    city: 'Gdynia',
    type: OfferType.Any,
    email: 'user42@example.com',
  },
  {
    title: 'Old Town Secure Garage - Częstochowa',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7a53857f-fd2d-4cf6-994b-7b0fe87025fd-e90c7e7d5b086c34d1e0236cfd110df7.png',
    price: 21,
    city: 'Częstochowa',
    type: OfferType.Guarded,
    email: 'user43@example.com',
  },
  {
    title: 'Market Square Lot - Radom',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/c3c3f49f-42d4-4322-b9d8-b1460723ed2d-8d5f462def892dbc73b6119501a3fa17.png',
    price: 5,
    city: 'Radom',
    type: OfferType.Monitored,
    email: 'user44@example.com',
  },
  {
    title: 'Riverbank Parking - Sosnowiec',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7536b921-a51e-4734-95e6-a23c7566e3e6-Leonardo_Diffusion_XL_parking_stock_photo_2.jpg',
    price: 16,
    city: 'Sosnowiec',
    type: OfferType.Any,
    email: 'user45@example.com',
  },
  {
    title: 'Galleria Mall Parkade - Toruń',
    content:
      'Secure and affordable parking available 24/7. Close to public transport.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/4d48aac5-b238-4777-954c-7fceb77b4af6-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 28,
    city: 'Toruń',
    type: OfferType.Guarded,
    email: 'user46@example.com',
  },
  {
    title: 'Airport Economy Lot - Kielce',
    content:
      'Spacious multi-level parking garage in the heart of the city. Electric vehicle charging available.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cb3d926a-01db-4937-9e1b-7a23ecca1d7c-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 8,
    city: 'Kielce',
    type: OfferType.Monitored,
    email: 'user47@example.com',
  },
  {
    title: 'Uptown Parking Garage - Gliwice',
    content:
      'Long-term and short-term parking solutions. Guarded and monitored for your peace of mind.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/cabef240-5da6-47d2-8407-240c87cbca88-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 23,
    city: 'Gliwice',
    type: OfferType.Any,
    email: 'user48@example.com',
  },
  {
    title: 'West End Car Park - Zabrze',
    content:
      'An economy choice for daily commuters. Easy access and automated payment systems.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/3acc0107-4f31-49f2-b26c-5c458c18036f-403411754_1005494207417089_5248490091290869790_n.jpg',
    price: 10,
    city: 'Zabrze',
    type: OfferType.Guarded,
    email: 'user49@example.com',
  },
  {
    title: 'Civic Center Park - Olsztyn',
    content:
      'Perfect for tourists and shoppers. Located near major attractions and retail centers.',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/7a53857f-fd2d-4cf6-994b-7b0fe87025fd-e90c7e7d5b086c34d1e0236cfd110df7.png',
    price: 26,
    city: 'Olsztyn',
    type: OfferType.Monitored,
    email: 'user50@example.com',
  },
  {
    title: '123',
    content: '456',
    price: 7,
    city: 'Kraków',
    image:
      'https://parking-booking-offer-images.s3.eu-north-1.amazonaws.com/c3c3f49f-42d4-4322-b9d8-b1460723ed2d-8d5f462def892dbc73b6119501a3fa17.png',
    type: OfferType.Any,
    email: 'user51@example.com',
  },
]
