'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Enums must match backend for type safety
enum OfferType {
  Guarded = 'Guarded',
  Monitored = 'Monitored',
  Any = 'Any',
}

// Define types for form data and errors
interface FormData {
  title: string;
  content: string;
  price: string;
  city: string;
  type: OfferType;
}

interface FormErrors {
  title?: string;
  content?: string;
  price?: string;
  city?: string;
  photo?: string;
  form?: string;
}

export default function AddOfferPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    price: '',
    city: '',
    type: OfferType.Guarded, // Default value
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Validate the form whenever formData, photo, or errors change
  useEffect(() => {
    const validateForm = () => {
      const hasErrors = Object.values(errors).some((error) => !!error);
      const allFieldsFilled = Object.values(formData).every((field) => field);
      setIsFormValid(!hasErrors && allFieldsFilled && !!photo);
    };
    validateForm();
  }, [formData, photo, errors]);

  // Update image preview when photo changes
  useEffect(() => {
    if (photo) {
      const url = URL.createObjectURL(photo);
      setPreviewUrl(url);

      // Cleanup URL on unmount
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPreviewUrl(null);
    }
  }, [photo]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (name !== 'type') {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setPhoto(file);
      setErrors((prev) => ({ ...prev, photo: undefined })); // Clear photo error
    } else {
      setPhoto(null);
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
      if (error) {
        newErrors[fieldKey] = error;
        isValid = false;
      }
    }
  
    if (!photo) {
      newErrors.photo = 'A photo is required.';
      isValid = false;
    }
  
    setErrors(newErrors);
  
    if (!isValid) {
      return;
    }
  
    setSubmitting(true);
  
    try {
      // Step 1: Upload the photo
      const photoFormData = new FormData();
      photoFormData.append('file', photo as Blob);
  
      const uploadResponse = await fetch(`http://localhost:8080/offers/upload`, {
        method: 'POST',
        body: photoFormData,
      });
  
      if (!uploadResponse.ok) {
        throw new Error('Failed to upload photo.');
      }
  
      const uploadResult = await uploadResponse.json();
      const imageUrl = uploadResult.url;
  
      // Step 2: Submit the offer with the photo URL
      const offerData = {
        ...formData,
        price: parseFloat(formData.price), // Ensure price is a number
        image: imageUrl,
      };
  
      const offerResponse = await fetch(`http://localhost:8080/offers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offerData),
      });
  
      if (!offerResponse.ok) {
        const errorData = await offerResponse.json();
        throw new Error(errorData.message || 'Failed to submit offer.');
      }
  
      const newOffer = await offerResponse.json();
      router.push(`/offer/${newOffer.id}`);
  
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
        {/* Form fields */}
        <div>
          <label htmlFor="title" className="mb-1 block font-medium text-gray-700">Title</label>
          <input id="title" name="title" type="text" value={formData.title} onChange={handleChange} placeholder="e.g., Secure Underground Parking" className={`w-full rounded-md border p-2 focus:outline-none focus:ring-1 ${errors.title ? 'border-red-500 ring-red-500' : 'focus:ring-main-blue'}`} required />
          {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="content" className="mb-1 block font-medium text-gray-700">Description</label>
          <textarea id="content" name="content" value={formData.content} onChange={handleChange} placeholder="Details about the parking spot" className={`w-full rounded-md border p-2 focus:outline-none focus:ring-1 ${errors.content ? 'border-red-500 ring-red-500' : 'focus:ring-main-blue'}`} rows={4} required />
          {errors.content && <p className="mt-1 text-xs text-red-500">{errors.content}</p>}
        </div>
        <div>
          <label htmlFor="price" className="mb-1 block font-medium text-gray-700">Price per day (USD)</label>
          <input id="price" name="price" type="text" value={formData.price} onChange={handleChange} placeholder="e.g., 25.50" className={`w-full rounded-md border p-2 focus:outline-none focus:ring-1 ${errors.price ? 'border-red-500 ring-red-500' : 'focus:ring-main-blue'}`} required />
          {errors.price && <p className="mt-1 text-xs text-red-500">{errors.price}</p>}
        </div>
        <div>
          <label htmlFor="city" className="mb-1 block font-medium text-gray-700">City</label>
          <input id="city" name="city" type="text" value={formData.city} onChange={handleChange} placeholder="e.g., New York" className={`w-full rounded-md border p-2 focus:outline-none focus:ring-1 ${errors.city ? 'border-red-500 ring-red-500' : 'focus:ring-main-blue'}`} required />
          {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
        </div>
        <div>
          <label htmlFor="type" className="mb-1 block font-medium text-gray-700">Offer Type</label>
          <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full rounded-md border p-2 focus:outline-none focus:ring-1 focus:ring-main-blue">
            {Object.values(OfferType).map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>

        {/* Photo upload section */}
        <div>
          <label className="mb-1 block font-medium text-gray-700">Photo</label>
          <div className="flex h-48 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-2 transition-colors hover:border-main-blue">
            {previewUrl ? (
              <div className="group relative">
                <img src={previewUrl} alt="Preview" className="h-full max-h-44 w-auto object-cover" />
                <button type="button" onClick={() => setPhoto(null)} className="absolute right-1 top-1 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <label htmlFor="photo" className="flex h-full w-full cursor-pointer flex-col items-center justify-center text-gray-500">
                <span>Click to Upload</span>
                <span className="text-xs">(1 photo required)</span>
              </label>
            )}
          </div>
          <div className="mt-2">
            <input id="photo" name="photo" type="file" onChange={handlePhotoChange} className="w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-main-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-deep-dusk" accept="image/*" />
            {errors.photo && <p className="mt-1 text-xs text-red-500">{errors.photo}</p>}
          </div>
        </div>
        
        {errors.form && <p className="text-sm text-red-500">{errors.form}</p>}

        <button type="submit" disabled={!isFormValid || submitting} className="w-full rounded-md bg-main-blue px-5 py-3 text-white hover:bg-deep-dusk focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          {submitting ? 'Submitting...' : 'Add Offer'}
        </button>
      </form>
    </div>
  );
}
