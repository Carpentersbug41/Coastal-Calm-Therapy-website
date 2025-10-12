'use client';

import { useState, FormEvent } from 'react';
import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      // Option A: Formspree endpoint (default)
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      
      if (!formspreeEndpoint) {
        throw new Error('Formspree endpoint not configured. Please set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your .env file.');
      }

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Page header */}
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-200 mb-6">
                <span className="text-2xl">✉️</span>
                <span className="text-sm font-medium text-sage-700">Get in Touch</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-900 to-sage-700 bg-clip-text text-transparent">
                  Contact
                </span>
              </h1>
              
              <p className="text-lg text-ink/70 leading-8 max-w-xl mx-auto">
                Have a question, feedback, or collaboration inquiry? I'd love to hear from you.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-3xl shadow-soft-lg ring-1 ring-black/5 p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-8">
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
                <h2 className="text-2xl font-bold text-brand-900 mb-2">
                  Message Sent!
                </h2>
                <p className="text-ink/80 mb-6">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl2 bg-brand-500 text-white font-medium hover:bg-brand-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-brand-900 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-sand-100 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand-500"
                    disabled={status === 'submitting'}
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-brand-900 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-sand-100 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand-500"
                    disabled={status === 'submitting'}
                  />
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-brand-900 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-sand-100 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand-500"
                    disabled={status === 'submitting'}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-900 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-sand-100 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
                    disabled={status === 'submitting'}
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-800">{errorMessage}</p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-700 text-white font-medium hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
            </div>
          </ScrollReveal>

          {/* Additional info */}
          <ScrollReveal delay={400}>
            <div className="mt-8 text-center text-sm text-ink/70 glass-effect rounded-2xl p-4">
            <p>
              I typically respond within 1-2 business days. Your privacy is important—
              I'll never share your information with third parties.
            </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
}

