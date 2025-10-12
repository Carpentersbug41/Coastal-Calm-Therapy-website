import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';

export const metadata = {
  title: 'Subscribe',
  description:
    'Subscribe to receive weekly insights, mindfulness tips, and updates from Coastal Calm Therapy. Join our community for calm living.',
};

export default function SubscribePage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Page header */}
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-200 mb-6">
                <span className="text-2xl">🔔</span>
                <span className="text-sm font-medium text-sage-700">Join Our Community</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-900 to-sage-700 bg-clip-text text-transparent">
                  Subscribe
                </span>
              </h1>
              
              <p className="text-lg text-ink/70 leading-8 max-w-xl mx-auto">
                Join the community and receive weekly insights, mindfulness tips, and updates
                delivered to your inbox.
              </p>
            </div>
          </ScrollReveal>

          {/* What subscribers receive */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-3xl shadow-soft-lg ring-1 ring-black/5 p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold text-brand-900 mb-8">
                What You'll Receive
              </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5"
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
                <div>
                  <strong className="text-brand-900">
                    Weekly Mindfulness Tips
                  </strong>
                  <p className="text-ink/80 text-sm leading-6">
                    Practical strategies for calm living and mental wellness
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5"
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
                <div>
                  <strong className="text-brand-900">
                    New Blog Posts
                  </strong>
                  <p className="text-ink/80 text-sm leading-6">
                    Be the first to read new articles on mental health and wellness
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5"
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
                <div>
                  <strong className="text-brand-900">
                    Exclusive Resources
                  </strong>
                  <p className="text-ink/80 text-sm leading-6">
                    Subscriber-only guides, worksheets, and exercises
                  </p>
                </div>
              </li>
            </ul>
            </div>
          </ScrollReveal>

          {/* MailerLite embed area */}
          <ScrollReveal delay={400}>
            <div className="bg-white rounded-3xl shadow-soft-lg ring-1 ring-black/5 p-8 md:p-10">
            {/* 
              PASTE YOUR MAILERLITE EMBED CODE HERE
              
              Example:
              <div class="ml-embedded" data-form="ABC123"></div>
              <script src="https://static.mailerlite.com/js/w/webforms.min.js?v123"></script>
              
              Instructions:
              1. Go to your MailerLite dashboard
              2. Create or edit a signup form
              3. Choose "Embedded form" and copy the code
              4. Paste it below, replacing this comment
            */}
            
            {/* PLACEHOLDER: Remove this once you paste your MailerLite embed */}
            <div className="text-center py-12 border-2 border-dashed border-sand-100 rounded-lg">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-ink/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="text-ink/80 mb-2">
                <strong>MailerLite form will appear here</strong>
              </p>
              <p className="text-sm text-ink/60">
                Paste your MailerLite embed code in{' '}
                <code className="px-2 py-1 bg-sand-50 rounded">
                  app/(site)/subscribe/page.tsx
                </code>
              </p>
            </div>

            {/* <!-- PASTE_MAILERLITE_EMBED_HERE --> */}
            </div>
          </ScrollReveal>

          {/* Privacy note */}
          <ScrollReveal delay={600}>
            <div className="mt-8 text-center text-sm text-ink/70 glass-effect rounded-2xl p-4">
            <p>
              Your privacy matters. I'll never share your email with third parties.
              Unsubscribe anytime with one click.
            </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
}

