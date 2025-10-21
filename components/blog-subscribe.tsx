'use client';

import { useState, FormEvent } from 'react';

export function BlogSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Validate
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe. Please try again.');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="mt-12 pt-10 border-t border-sage-100">
      <div className="bg-gradient-to-br from-sage-50 to-sand-50 rounded-3xl shadow-soft ring-1 ring-black/5 p-8 md:p-10">
        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-900 mb-2">
              Welcome Aboard!
            </h3>
            <p className="text-ink/80">
              Check your inbox for the first three chapters of <em>The Faulty Smoke Alarm</em>.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sage-200 mb-4">
                <span className="text-xl">📖</span>
                <span className="text-sm font-medium text-sage-700">Free Book Chapters</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-900 mb-3">
                Get the First Three Chapters Free
              </h3>
              <p className="text-ink/70 leading-7 max-w-2xl mx-auto">
                Learn the first foundational skill: how to find your 'somatic anchor' and speak the language of your own body.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3 rounded-xl border border-sage-200 bg-white text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  disabled={status === 'submitting'}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white font-medium hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Get Free Chapters'
                  )}
                </button>
              </div>

              {/* Error message */}
              {status === 'error' && (
                <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-sm text-red-800 text-center">{errorMessage}</p>
                </div>
              )}
            </form>

            <p className="text-center text-sm text-ink/60 mt-4">
              No spam. Unsubscribe anytime. Your privacy matters.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

