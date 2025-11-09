'use client';

import { useState, FormEvent } from 'react';

export function BlogLeadMagnet() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

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
    <div className="bg-gradient-to-br from-pebble to-seafoam/20 rounded-3xl shadow-soft-lg ring-1 ring-dune-shadow p-8 md:p-12 border-2 border-seafoam/30">
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
          <h3 className="text-2xl font-bold text-sea-sage mb-2">
            Welcome Aboard!
          </h3>
          <p className="text-olive-grey/80">
            Check your inbox for the first three chapters of <em>The Faulty Smoke Alarm</em>.
          </p>
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-seafoam mb-4">
              <svg className="w-5 h-5 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-sea-sage">From The Archives</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
              A Foundational Skill Blueprint
            </h2>
            <p className="text-lg text-olive-grey/80 max-w-2xl mx-auto leading-7">
              Reading the theory is the first step. The next is to acquire the tools. Access the blueprint for the &apos;Somatic Anchor&apos;—the first skill in speaking the language of your own nervous system.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 rounded-xl border border-dune-shadow bg-white text-olive-grey placeholder:text-olive-grey/50 focus:outline-none focus:ring-2 focus:ring-sea-sage focus:border-transparent transition-all"
                disabled={status === 'submitting'}
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-sea-sage to-sea-sage-dark text-white font-medium hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sea-sage disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
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
                  'Access the Blueprint'
                )}
              </button>
            </div>

            {status === 'error' && (
              <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-800 text-center">{errorMessage}</p>
              </div>
            )}
          </form>

          <p className="text-center text-sm text-olive-grey/60 mt-4">
            No spam. Unsubscribe anytime. Your privacy is paramount.
          </p>
        </>
      )}
    </div>
  );
}





