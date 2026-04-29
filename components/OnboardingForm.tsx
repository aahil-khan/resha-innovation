'use client';

import { useState } from 'react';
import { INDIAN_STATES } from '@/lib/constants';

interface OnboardingFormProps {
  onSuccess: () => void;
}

export function OnboardingForm({ onSuccess }: OnboardingFormProps) {
  const [formData, setFormData] = useState<Record<string, string | boolean>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    onSuccess();
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border border-light-gray bg-white text-forest text-sm
    focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all duration-200
    placeholder:text-dark-gray/40`;
  const labelClass = 'block text-forest text-sm font-semibold mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Institution info */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="institution_name" className={labelClass}>Institution Name *</label>
          <input
            id="institution_name"
            name="institution_name"
            type="text"
            required
            placeholder="e.g. Shirdi Sai Baba Temple Trust"
            className={inputClass}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="institution_type" className={labelClass}>Institution Type *</label>
          <select id="institution_type" name="institution_type" required className={inputClass} onChange={handleChange}>
            <option value="">Select type...</option>
            <option value="Hindu Temple">Hindu Temple</option>
            <option value="Gurudwara">Gurudwara</option>
            <option value="Mosque">Mosque</option>
            <option value="Church">Church</option>
            <option value="Jain Temple">Jain Temple</option>
            <option value="Buddhist Monastery">Buddhist Monastery</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="city" className={labelClass}>City *</label>
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="City"
            className={inputClass}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state" className={labelClass}>State *</label>
          <select id="state" name="state" required className={inputClass} onChange={handleChange}>
            <option value="">Select state...</option>
            {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Contact info */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact_name" className={labelClass}>Contact Person Name *</label>
          <input
            id="contact_name"
            name="contact_name"
            type="text"
            required
            placeholder="Full name"
            className={inputClass}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="contact@temple.org"
            className={inputClass}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 XXXXX XXXXX"
          className={inputClass}
          onChange={handleChange}
        />
      </div>

      {/* Volume & disposal */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="monthly_volume" className={labelClass}>Monthly Ritual Textile Volume (approx.)</label>
          <select id="monthly_volume" name="monthly_volume" className={inputClass} onChange={handleChange}>
            <option value="">Estimate...</option>
            <option value="<50kg">&lt;50 kg</option>
            <option value="50–200kg">50–200 kg</option>
            <option value="200–500kg">200–500 kg</option>
            <option value="500kg+">500 kg+</option>
          </select>
        </div>
        <div>
          <label htmlFor="disposal_method" className={labelClass}>Current Disposal Method</label>
          <select id="disposal_method" name="disposal_method" className={inputClass} onChange={handleChange}>
            <option value="">Select method...</option>
            <option value="River immersion">River immersion</option>
            <option value="Open burning">Open burning</option>
            <option value="Municipal bin">Municipal bin</option>
            <option value="No system">No system</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="consultation_date" className={labelClass}>Preferred Consultation Date</label>
        <input
          id="consultation_date"
          name="consultation_date"
          type="date"
          className={inputClass}
          onChange={handleChange}
        />
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        {[
          { name: 'esg_interest', label: 'I am interested in ESG reporting and certification' },
          { name: 'pilot_interest', label: 'I am interested in joining as a pilot partner' },
        ].map((checkbox) => (
          <label key={checkbox.name} className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name={checkbox.name}
              className="mt-1 w-4 h-4 rounded border-light-gray accent-forest"
              onChange={handleChange}
            />
            <span className="text-dark-gray text-sm group-hover:text-forest transition-colors">
              {checkbox.label}
            </span>
          </label>
        ))}
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>Additional Notes</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Tell us about your institution, the types of textiles (silk, cotton, flowers), any specific concerns, or questions..."
          className={`${inputClass} resize-none`}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 disabled:opacity-60"
        style={{
          background: loading ? '#E87722' : 'linear-gradient(135deg, #E87722, #f0944a)',
          boxShadow: '0 4px 20px rgba(232,119,34,0.4)',
        }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/>
              <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
            </svg>
            Submitting...
          </span>
        ) : 'Submit Onboarding Request'}
      </button>
    </form>
  );
}
