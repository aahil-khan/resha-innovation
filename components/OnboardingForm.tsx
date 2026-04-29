'use client';

import { useState } from 'react';
import { ONBOARDING_FIELDS } from '@/lib/constants';

interface FormData {
  [key: string]: string | number;
}

interface OnboardingFormProps {
  onSuccess?: () => void;
}

export function OnboardingForm({ onSuccess }: OnboardingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    institution_name: '',
    contact_person: '',
    email: '',
    phone: '',
    organization_type: '',
    location: '',
    devices_annually: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    ONBOARDING_FIELDS.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }

      if (field.name === 'email' && formData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(String(formData.email))) {
          newErrors.email = 'Please enter a valid email address';
        }
      }

      if (field.name === 'phone' && formData.phone) {
        const phoneRegex = /^[\d\s+\-()]{10,}$/;
        if (!phoneRegex.test(String(formData.phone))) {
          newErrors.phone = 'Please enter a valid phone number';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    // Call success callback
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {ONBOARDING_FIELDS.map((field) => {
          const value = formData[field.name];
          const error = errors[field.name];
          const isRequired = field.required ? '*' : '';

          if (field.type === 'select') {
            return (
              <div key={field.name}>
                <label className="block text-sm font-sans font-semibold text-forest mb-2">
                  {field.label}
                  {isRequired && <span className="text-saffron ml-1">{isRequired}</span>}
                </label>
                <select
                  name={field.name}
                  value={value}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-sans transition-colors ${
                    error
                      ? 'border-red-500 bg-red-50 text-red-900'
                      : 'border-light-gray bg-white text-forest focus:border-saffron focus:outline-none'
                  }`}
                >
                  <option value="">Select {field.label.toLowerCase()}</option>
                  {(field.options || []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {error && <p className="text-red-600 text-xs font-sans mt-1">{error}</p>}
              </div>
            );
          }

          if (field.type === 'textarea') {
            return (
              <div key={field.name} className="md:col-span-2">
                <label className="block text-sm font-sans font-semibold text-forest mb-2">
                  {field.label}
                  {isRequired && <span className="text-saffron ml-1">{isRequired}</span>}
                </label>
                <textarea
                  name={field.name}
                  value={value}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-sans transition-colors resize-none ${
                    error
                      ? 'border-red-500 bg-red-50 text-red-900'
                      : 'border-light-gray bg-white text-forest focus:border-saffron focus:outline-none'
                  }`}
                />
                {error && <p className="text-red-600 text-xs font-sans mt-1">{error}</p>}
              </div>
            );
          }

          return (
            <div key={field.name}>
              <label className="block text-sm font-sans font-semibold text-forest mb-2">
                {field.label}
                {isRequired && <span className="text-saffron ml-1">{isRequired}</span>}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={value}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`w-full px-4 py-3 rounded-lg border-2 font-sans transition-colors ${
                  error
                    ? 'border-red-500 bg-red-50 text-red-900'
                    : 'border-light-gray bg-white text-forest focus:border-saffron focus:outline-none'
                }`}
              />
              {error && <p className="text-red-600 text-xs font-sans mt-1">{error}</p>}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full md:w-auto px-8 py-3 rounded-lg font-sans font-semibold transition-all text-lg ${
          isSubmitting
            ? 'bg-dark-gray text-parchment cursor-not-allowed opacity-70'
            : 'bg-forest text-parchment hover:bg-saffron'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Join RESHA Network'}
      </button>
    </form>
  );
}
