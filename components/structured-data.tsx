/**
 * Structured Data (JSON-LD) Components for SEO
 * These help Google understand your content better and can enable rich snippets
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Anxiety Protocol',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://coastalcalm.vercel.app',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://coastalcalm.vercel.app'}/images/logo_ap1.png`,
    description: 'A rigorous, evidence-based 30-day program for high-functioning professionals. Master anxiety 10x faster than traditional therapy.',
    founder: {
      '@type': 'Person',
      name: 'Robert Carpenter',
      jobTitle: 'Psychotherapist and Anxiety Specialist',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    sameAs: [
      // Add your social media URLs here when available
      // 'https://twitter.com/anxietyprotocol',
      // 'https://linkedin.com/company/anxiety-protocol',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'The Anxiety Protocol - 30-Day Resilience Bootcamp',
    description: 'A structured, evidence-based 30-day intensive program combining human expertise with precision training drills to master anxiety rapidly.',
    provider: {
      '@type': 'Organization',
      name: 'The Anxiety Protocol',
    },
    serviceType: 'Mental Health Service',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    offers: {
      '@type': 'Offer',
      price: '2500',
      priceCurrency: 'GBP',
      description: 'Complete 30-day Resilience Bootcamp including 2 strategy sessions, 3 check-ins, 8-12 drills, and analytics',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://coastalcalm.vercel.app'}/apply`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  authorName: string;
  imageUrl?: string;
  url: string;
}

export function ArticleSchema({
  title,
  description,
  publishDate,
  modifiedDate,
  authorName,
  imageUrl,
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: 'Psychotherapist and Anxiety Specialist',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Anxiety Protocol',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://coastalcalm.vercel.app'}/images/logo_ap1.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ReviewSchemaProps {
  reviews: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished?: string;
  }>;
}

export function AggregateRatingSchema({ reviews }: ReviewSchemaProps) {
  if (reviews.length === 0) return null;

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'The Anxiety Protocol - 30-Day Resilience Bootcamp',
    description: 'A structured 30-day program to master anxiety for high-performing professionals',
    offers: {
      '@type': 'Offer',
      price: '2500',
      priceCurrency: 'GBP',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished || new Date().toISOString(),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

