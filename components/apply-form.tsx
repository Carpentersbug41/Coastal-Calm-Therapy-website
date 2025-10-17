'use client';

import { useState, FormEvent } from 'react';

interface ApplyFormProps {
  variant?: 'default' | 'compact';
}

export function ApplyForm({ variant = 'default' }: ApplyFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/apply', {
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
      setFormData({ name: '', email: '', message: '', phone: '' });
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
          Thank you for your interest in The Anxiety Protocol. I'll review your application and get back to you within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-sea-sage mb-2">
          Name <span className="text-red-500">*</span>
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
          Email <span className="text-red-500">*</span>
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
        <label htmlFor="phone" className="block text-sm font-medium text-sea-sage mb-2">
          Phone <span className="text-soft-clay text-xs">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dune-shadow bg-white text-olive-grey focus:outline-none focus:ring-2 focus:ring-sea-sage focus:border-transparent transition-all"
          placeholder="+44 7XXX XXXXXX"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-sea-sage mb-2">
          What would you like help with? <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-soft-clay mb-2">1–3 sentences is perfect</p>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dune-shadow bg-white text-olive-grey focus:outline-none focus:ring-2 focus:ring-sea-sage focus:border-transparent transition-all resize-none"
          placeholder="Tell me briefly about what you're experiencing and what you hope to achieve..."
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
              <span>Submit Application</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
        
        <p className="mt-4 text-center text-sm text-soft-clay">
          <svg className="inline w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Confidential • Encrypted • Reviewed within 24–48h
        </p>
      </div>
    </form>
  );
}

