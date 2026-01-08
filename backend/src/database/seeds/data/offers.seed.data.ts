import { TypeEnum } from '../../../offers/enums/type.enum'

export const OFFERS_SEED_DATA = [
  {
    title: 'Arlington Street Car Park',
    content:
      'Fantastic secure parking spaces available at Q-Park Leicester Square, London for a long terms rent.',
    image: 'https://example.com/parking1.jpg',
    price: 5.0,
    city: 'Metropolis',
    type: TypeEnum.Guarded,
  },
  {
    title: 'Tenterden Street Car Park',
    content:
      'Great parking area in the city center with multiple places for big vehicles and 3 electric charger stations.',
    image: 'https://example.com/parking2.jpg',
    price: 35.0,
    city: 'Gotham',
    type: TypeEnum.Monitored,
  },
  {
    title: 'Arlington Street Car Park',
    content:
      'Economy parking near the local factory. Available 24/7 in a very attractive prices for everyday use.',
    image: 'https://example.com/parking3.jpg',
    price: 20.0,
    city: 'Star City',
    type: TypeEnum.Any,
  },
]
