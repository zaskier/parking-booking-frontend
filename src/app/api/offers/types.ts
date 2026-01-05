export interface Offer {
  id: number;
  title: string;
  content: string;
  image: string;
  price: number;
  city: string;
  type?: 'Guarded' | 'Monitored';
}
