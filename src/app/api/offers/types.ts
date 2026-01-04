export interface Offer {
  id: number;
  title: string;
  content: string;
  image: string;
  price: string;
  city: string;
  type?: 'Guarded' | 'Monitored';
}
