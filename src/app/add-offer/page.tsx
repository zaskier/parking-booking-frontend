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
  form?: string;
}

export default function AddOfferPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    price: '',
    city: '',
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Validate the form whenever formData or errors change
  useEffect(() => {
    const validateForm = () => {
      const hasErrors = Object.values(errors).some((error) => error);
      const allFieldsFilled = Object.values(formData).every((field) => field);
      setIsFormValid(!hasErrors && allFieldsFilled);
    };
    validateForm();
  }, [formData, errors]);

  // Update image previews when photos change
  useEffect(() => {
    const newPreviewUrls = photos.map(file => URL.createObjectURL(file));
    setPreviewUrls(newPreviewUrls);

    // Cleanup URLs on unmount
    return () => {
      newPreviewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [photos]);

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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (photos.length + files.length > 4) {
        alert("You can only upload a maximum of 4 photos.");
        return;
      }
      setPhotos(prevPhotos => [...prevPhotos, ...files]);
    }
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

    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('price', formData.price);
    data.append('city', formData.city);
    photos.forEach(photo => {
      data.append('photos', photo);
    });

    try {
      const response = await fetch('/api/offers', {
        method: 'POST',
        body: data,
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
            placeholder="Add here details like you can receive pass to underground garage after the pay, or any other important info"
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
        <div>
          <label className="mb-1 block font-medium text-gray-700">Photos</label>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="group relative flex h-32 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 transition-colors hover:border-main-blue">
                {previewUrls[index] ? (
                  <>
                    <img src={previewUrls[index]} alt={`Preview ${index + 1}`} className="h-full w-full object-cover transition-opacity group-hover:opacity-75" />
                    <button
                      type="button"
                      onClick={() => {
                        const newPhotos = [...photos];
                        newPhotos.splice(index, 1);
                        setPhotos(newPhotos);
                      }}
                      className="absolute right-1 top-1 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <label htmlFor="photos" className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                    <span className="text-gray-500">Photo {index + 1}</span>
                  </label>
                )}
              </div>
            ))}
          </div>
          <div className="mt-2">
            <input
                id="photos"
                name="photos"
                type="file"
                multiple
                onChange={handlePhotoChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-main-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-deep-dusk"
                accept="image/*"
                disabled={photos.length >= 4}
            />
          </div>
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
