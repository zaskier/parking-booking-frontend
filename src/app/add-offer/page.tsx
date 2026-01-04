'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddOfferPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!title || !content || !price || !city) {
      setError('All fields are required.');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/offers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          price: `$${price}`, // Assuming price is entered as a number
          city,
          // As requested, use a default image path
          image: '/homepage/mock-images/f31a645d83e778028ccb518d3a744a80.png',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit offer.');
      }

      // Redirect to homepage or a confirmation page on success
      router.push('/');

    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-6 text-2xl font-bold text-deep-dusk">Add a New Parking Offer</h1>
      <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow-md">
        <div>
          <label htmlFor="title" className="mb-1 block font-medium text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border p-2 focus:outline-none focus:ring-1 focus:ring-main-blue"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="mb-1 block font-medium text-gray-700">Content / Description</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-md border p-2 focus:outline-none focus:ring-1 focus:ring-main-blue"
            rows={4}
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="mb-1 block font-medium text-gray-700">Price (USD)</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-md border p-2 focus:outline-none focus:ring-1 focus:ring-main-blue"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="mb-1 block font-medium text-gray-700">City</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-md border p-2 focus:outline-none focus:ring-1 focus:ring-main-blue"
            required
          />
        </div>
        
        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-main-blue px-5 py-3 text-white hover:bg-deep-dusk focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50"
        >
          {submitting ? 'Submitting...' : 'Add Offer'}
        </button>
      </form>
    </div>
  );
}
