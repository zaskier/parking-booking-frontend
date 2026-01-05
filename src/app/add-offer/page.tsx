'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Define types for form data and errors
interface FormData {
  title: string;
  content: string;
  price: string;
  city: string;
}

interface FormErrors {
  title?: string;
  content?: string;
  price?: string;
  city?: string;
}

export default function AddOfferPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    price: '',
    city: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Validate the form whenever formData or errors change
  useEffect(() => {
    const validateForm = () => {
      const hasErrors = Object.values(errors).some((error) => error);
      const allFieldsFilled = Object.values(formData).every((field) => field);
      setIsFormValid(!hasErrors && allFieldsFilled);
    };
    validateForm();
  }, [formData, errors]);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'title':
        return value.length < 3 ? 'Title must be at least 3 characters long.' : undefined;
      case 'content':
        return value.length < 15 ? 'Description is too short. Please provide more details.' : undefined;
      case 'price':
        const priceRegex = /^\d+(\.\d{1,2})?$/;
        return !priceRegex.test(value) ? 'Please enter a valid number with up to 2 decimal places.' : undefined;
      case 'city':
        return value.length > 100 ? 'City name cannot exceed 100 characters.' : undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation check
    const newErrors: FormErrors = {};
    let isValid = true;
    for (const key in formData) {
        const fieldKey = key as keyof FormData;
        const error = validateField(fieldKey, formData[fieldKey]);
        if(error) {
            newErrors[fieldKey] = error;
            isValid = false;
        }
    }

    setErrors(newErrors);

    if (!isValid || !isFormValid) {
        return;
    }
    
    setSubmitting(true);

    try {
      const response = await fetch('/api/offers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: `$${formData.price}`,
          image: '/homepage/mock-images/f31a645d83e778028ccb518d3a744a80.png',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit offer.');
      }

      router.push('/');

    } catch (err: any) {
      setErrors((prev) => ({ ...prev, form: err.message }));
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
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className={`w-full rounded-md border p-2 focus:outline-none focus:ring-1 ${errors.title ? 'border-red-500 ring-red-500' : 'focus:ring-main-blue'}`}
            required
          />
          {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="content" className="mb-1 block font-medium text-gray-700">Description</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Describe the parking offer, and add details rgarding accessing parking if needed"
            className={`w-full rounded-md border p-2 focus:outline-none focus:ring-1 ${errors.content ? 'border-red-500 ring-red-500' : 'focus:ring-main-blue'}`}
            rows={4}
            required
          />
          {errors.content && <p className="mt-1 text-xs text-red-500">{errors.content}</p>}
        </div>
        <div>
          <label htmlFor="price" className="mb-1 block font-medium text-gray-700">Price per day (USD)</label>
          <input
            id="price"
            name="price"
            type="text" // Use text to manage decimal validation manually
            value={formData.price}
            onChange={handleChange}
            placeholder="enter amount per day"
            className={`w-full rounded-md border p-2 focus:outline-none focus:ring-1 ${errors.price ? 'border-red-500 ring-red-500' : 'focus:ring-main-blue'}`}
            required
          />
          {errors.price && <p className="mt-1 text-xs text-red-500">{errors.price}</p>}
        </div>
        <div>
          <label htmlFor="city" className="mb-1 block font-medium text-gray-700">City</label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="Type city name"
            className={`w-full rounded-md border p-2 focus:outline-none focus:ring-1 ${errors.city ? 'border-red-500 ring-red-500' : 'focus:ring-main-blue'}`}
            required
          />
          {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
        </div>
        
        {errors.form && <p className="text-sm text-red-500">{errors.form}</p>}

        <button
          type="submit"
          disabled={!isFormValid || submitting}
          className="w-full rounded-md bg-main-blue px-5 py-3 text-white hover:bg-deep-dusk focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? 'Submitting...' : 'Add Offer'}
        </button>
      </form>
    </div>
  );
}
