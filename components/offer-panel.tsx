import Link from 'next/link';

interface OfferPanelProps {
  variant?: 'default' | 'compact';
  showCta?: boolean;
}

export function OfferPanel({ variant = 'default', showCta = true }: OfferPanelProps) {
  const isCompact = variant === 'compact';

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-white shadow-soft-lg ring-1 ring-dune-shadow ${isCompact ? 'p-6 md:p-8' : 'p-8 md:p-10'}`}>
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-seafoam/20 to-golden-shell/20 blur-3xl"></div>
      
      <div className="relative">
        {/* Price */}
        <div className={`mb-6 ${isCompact ? 'text-left' : 'text-center'}`}>
          <div className="mb-2">
            <span className={`font-bold text-sea-sage ${isCompact ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl'}`}>£2,500</span>
          </div>
          <p className={`font-medium text-sea-sage ${isCompact ? 'text-base' : 'text-lg'}`}>
            Fixed price • Complete 30-day program
          </p>
          <p className="text-sm text-red-600 font-medium mt-2">
            Limited to 4 new clients/month
          </p>
        </div>

        {/* What's Included */}
        <div className={`space-y-3 ${isCompact ? 'mb-6' : 'mb-8'}`}>
          <h3 className={`font-bold text-sea-sage ${isCompact ? 'text-lg mb-3' : 'text-xl mb-4'}`}>
            What's Included:
          </h3>
          
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className={isCompact ? 'text-sm' : 'text-base'}>
              <p className="text-body"><strong className="font-bold text-sea-sage">The Blueprint:</strong> 2× 90-minute 1-on-1 strategy sessions</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className={isCompact ? 'text-sm' : 'text-base'}>
              <p className="text-body"><strong className="font-bold text-sea-sage">The Training:</strong> 8–12 high-intensity drills in the Cognitive Simulator</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className={isCompact ? 'text-sm' : 'text-base'}>
              <p className="text-body"><strong className="font-bold text-sea-sage">The Oversight:</strong> 3× 15-minute weekly performance reviews</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className={isCompact ? 'text-sm' : 'text-base'}>
              <p className="text-body"><strong className="font-bold text-sea-sage">The Data:</strong> Full session transcripts & analytics</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        {showCta && (
          <Link
            href="#apply-form"
            className="block w-full text-center px-6 py-3 rounded-2xl bg-gradient-to-r from-sea-sage to-seafoam text-white font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
          >
            Apply Now
          </Link>
        )}
      </div>
    </div>
  );
}

