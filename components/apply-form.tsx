'use client';

import { useState, FormEvent } from 'react';

interface ApplyFormProps {
  variant?: 'default' | 'compact';
}

export function ApplyForm({ variant = 'default' }: ApplyFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    challenge: '',
    therapy_experience: '',
    commitment: '',
    outcome: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Use Formspree endpoint from environment variable
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_APPLY_ENDPOINT;
      
      if (!formspreeEndpoint || formspreeEndpoint.includes('REPLACE_ME')) {
        throw new Error('Apply form not configured yet. Please contact us directly.');
      }

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setStatus('success');
      
      // Track GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'Apply Form Submission',
        });
      }

      // Reset form
      setFormData({ name: '', email: '', challenge: '', therapy_experience: '', commitment: '', outcome: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-seafoam/10 border border-seafoam p-8 md:p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seafoam/20 mb-6">
          <svg className="w-8 h-8 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-sea-sage mb-4">Application Received!</h3>
        <p className="text-lg text-body leading-7">
          Your application is under review. Our Clinical Strategist will personally evaluate your submission and respond within 24–48 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-sea-sage mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dune-shadow bg-white text-olive-grey focus:outline-none focus:ring-2 focus:ring-sea-sage focus:border-transparent transition-all"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-sea-sage mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dune-shadow bg-white text-olive-grey focus:outline-none focus:ring-2 focus:ring-sea-sage focus:border-transparent transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-sea-sage mb-2">
          In 2-5 sentences, what is the primary challenge related to anxiety you are trying to solve? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="challenge"
          name="challenge"
          required
          rows={4}
          value={formData.challenge}
          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dune-shadow bg-white text-olive-grey focus:outline-none focus:ring-2 focus:ring-sea-sage focus:border-transparent transition-all resize-none"
          placeholder="Describe your primary anxiety-related challenge..."
        />
      </div>

      <div>
        <label htmlFor="therapy_experience" className="block text-sm font-medium text-sea-sage mb-2">
          What has been your experience with traditional therapy, and what were its specific limitations for you? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="therapy_experience"
          name="therapy_experience"
          required
          rows={4}
          value={formData.therapy_experience}
          onChange={(e) => setFormData({ ...formData, therapy_experience: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dune-shadow bg-white text-olive-grey focus:outline-none focus:ring-2 focus:ring-sea-sage focus:border-transparent transition-all resize-none"
          placeholder="Share your therapy experience and what didn't work..."
        />
      </div>

      <div>
        <label htmlFor="commitment" className="block text-sm font-medium text-sea-sage mb-2">
          On a scale of 1-10, how ready are you to fully commit to a structured, 30-day intensive that requires daily practice? <span className="text-red-500">*</span>
        </label>
        <select
          id="commitment"
          name="commitment"
          required
          value={formData.commitment}
          onChange={(e) => setFormData({ ...formData, commitment: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dune-shadow bg-white text-olive-grey focus:outline-none focus:ring-2 focus:ring-sea-sage focus:border-transparent transition-all"
        >
          <option value="">Please select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div>
        <label htmlFor="outcome" className="block text-sm font-medium text-sea-sage mb-2">
          If this protocol is 100% successful, what is the single most important measurable outcome you will have achieved in 30 days? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="outcome"
          name="outcome"
          required
          rows={4}
          value={formData.outcome}
          onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dune-shadow bg-white text-olive-grey focus:outline-none focus:ring-2 focus:ring-sea-sage focus:border-transparent transition-all resize-none"
          placeholder="What specific outcome would success look like for you..."
        />
      </div>

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
          {errorMessage}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-gradient-to-r from-sea-sage to-seafoam text-white font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            <>
              <span>Submit Diagnostic</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
        
        <p className="mt-4 text-center text-sm text-soft-clay">
          Your submission is confidential, encrypted, and will be reviewed by our Clinical Strategist within 24-48 hours.
        </p>
      </div>
    </form>
  );
}

