import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment - The Anxiety Protocol',
  description: 'A fixed price of £2,500 for a defined outcome. Calculate the cost of inaction before considering our fee. An investment in radical autonomy.',
  openGraph: {
    title: 'Investment',
    description: 'A fixed price for a defined outcome. Calculate the cost of inaction. An investment in radical autonomy.',
  },
}

export default function InvestmentPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* SECTION 1: THE ANCHOR (THE MOST IMPORTANT SECTION) */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pebble border border-dune-shadow mb-6">
              <span className="w-2 h-2 bg-seafoam rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-sea-sage">Investment</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-8">
              First, Calculate the Cost of Inaction.
            </h1>
            
            <div className="space-y-6 text-lg leading-8 text-body">
              <p>
                Before you consider our fee, calculate the price you are already paying. The primary cost of anxiety is not the feeling itself; it is the <strong className="text-sea-sage">opportunity cost</strong>. The promotion you didn't apply for. The business you haven't started. The relationships you're holding back in. The life you could be living.
              </p>
              
              <p>
                The old model asks for a small payment every week, indefinitely, ensuring that cost continues to accumulate. We are asking for a one-time investment to eliminate it.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Horizontal Rule for Section Break */}
        <div className="max-w-4xl mx-auto mb-16">
          <hr className="border-t border-dune-shadow" />
        </div>

        {/* SECTION 2: THE PRICE & THE COMPARISON */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
              A Fixed Price for a Defined Outcome.
            </h2>
            
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mb-2">
                The 30-Day Intensive: £2,500
              </h3>
              <p className="text-lg text-body">(A single, one-time investment.)</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h3 className="text-2xl font-bold text-sea-sage mb-8">
              An Engineered Solution vs. The Inefficient Alternative
            </h3>
            
            <div className="glass-effect rounded-3xl p-6 md:p-10 shadow-soft-lg border border-dune-shadow overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-sea-sage/10 to-seafoam/10">
                    <th className="py-5 px-5 md:px-6 text-sea-sage font-bold text-base md:text-lg rounded-tl-2xl">Feature</th>
                    <th className="py-5 px-5 md:px-6 text-sea-sage font-bold text-base md:text-lg border-l-2 border-r-2 border-seafoam/30 bg-seafoam/5">The Anxiety Protocol</th>
                    <th className="py-5 px-5 md:px-6 text-sea-sage font-bold text-base md:text-lg rounded-tr-2xl">Traditional Therapy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-2 border-dune-shadow/30 hover:bg-warm-linen/20 transition-colors">
                    <td className="py-5 px-5 md:px-6 font-semibold text-sea-sage">Total Investment</td>
                    <td className="py-5 px-5 md:px-6 text-body border-l-2 border-r-2 border-seafoam/30 bg-seafoam/5">
                      <strong className="text-sea-sage text-base">£2,500 (Fixed)</strong>
                    </td>
                    <td className="py-5 px-5 md:px-6 text-body">
                      <strong className="text-sea-sage text-base">£4,000 - £15,000+ (Variable)</strong>
                    </td>
                  </tr>
                  <tr className="border-t border-dune-shadow/30 hover:bg-warm-linen/20 transition-colors">
                    <td className="py-5 px-5 md:px-6 font-semibold text-sea-sage">Timeline</td>
                    <td className="py-5 px-5 md:px-6 text-body border-l-2 border-r-2 border-seafoam/30 bg-seafoam/5">
                      <strong className="text-sea-sage text-base">30-Day Intensive (Defined)</strong>
                    </td>
                    <td className="py-5 px-5 md:px-6 text-body">
                      <strong className="text-sea-sage text-base">12-24+ Months (Indefinite)</strong>
                    </td>
                  </tr>
                  <tr className="border-t border-dune-shadow/30 hover:bg-warm-linen/20 transition-colors">
                    <td className="py-5 px-5 md:px-6 font-semibold text-sea-sage">Outcome</td>
                    <td className="py-5 px-5 md:px-6 text-body border-l-2 border-r-2 border-seafoam/30 bg-seafoam/5">
                      <strong className="text-sea-sage text-base">A Measurable Result & the Tools for Autonomy</strong>
                    </td>
                    <td className="py-5 px-5 md:px-6 text-body">
                      <strong className="text-sea-sage text-base">Uncertain, Vague Exploration, Potential Dependency</strong>
                    </td>
                  </tr>
                  <tr className="border-t border-dune-shadow/30 hover:bg-warm-linen/20 transition-colors">
                    <td className="py-5 px-5 md:px-6 font-semibold text-sea-sage rounded-bl-2xl">Dosage</td>
                    <td className="py-5 px-5 md:px-6 text-body border-l-2 border-r-2 border-seafoam/30 bg-seafoam/5">
                      <strong className="text-sea-sage text-base">The Equivalent of 15+ Sessions/Week</strong>
                    </td>
                    <td className="py-5 px-5 md:px-6 text-body rounded-br-2xl">
                      <strong className="text-sea-sage text-base">1 Session/Week (Neurologically Insignificant)</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>

        {/* Horizontal Rule for Section Break */}
        <div className="max-w-4xl mx-auto mb-16">
          <hr className="border-t border-dune-shadow" />
        </div>

        {/* SECTION 3: THE VALUE (WHAT THE INVESTMENT DELIVERS) */}
        <section className="mb-16 max-w-6xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6">
                An Investment in Radical Autonomy
              </h2>
              
              <p className="text-lg leading-8 text-body">
                You are not buying 'sessions.' You are investing in a permanent system upgrade. The return on this investment is delivered as a verifiable set of assets:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1: System Upgrade */}
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam hover:shadow-soft-xl transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-sea-sage/20 to-seafoam/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  A System Upgrade
                </h3>
                <p className="text-base leading-7 text-body">
                  A re-engineered nervous system that responds to stress with calibrated control, not a chaotic hijack.
                </p>
              </div>

              {/* Card 2: Permanent Toolkit */}
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam hover:shadow-soft-xl transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-sea-sage/20 to-seafoam/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  A Permanent Toolkit
                </h3>
                <p className="text-base leading-7 text-body">
                  The complete set of Somatic Drills and cognitive tools to handle future challenges independently.
                </p>
              </div>

              {/* Card 3: User's Manual */}
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam hover:shadow-soft-xl transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-sea-sage/20 to-seafoam/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  A User's Manual for Your Mind
                </h3>
                <p className="text-base leading-7 text-body">
                  Your personal "Anxiety Blueprint" and "Go-Forward Plan," giving you the data to be your own expert.
                </p>
              </div>

              {/* Card 4: Reclaimed Future */}
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam hover:shadow-soft-xl transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-sea-sage/20 to-seafoam/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  A Reclaimed Future
                </h3>
                <p className="text-base leading-7 text-body">
                  The elimination of the opportunity cost and the freedom to pursue the life your anxiety was preventing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Horizontal Rule for Section Break */}
        <div className="max-w-4xl mx-auto mb-16">
          <hr className="border-t border-dune-shadow" />
        </div>

        {/* SECTION 4: THE PROCESS (THE FILTER) */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={250}>
            <div className="bg-warm-linen/50 rounded-3xl p-8 md:p-12 border border-dune-shadow">
              <h2 className="text-3xl font-bold text-sea-sage mb-6">
                Our Process: We Select for Fit
              </h2>
              
              <p className="text-lg leading-8 text-body mb-6">
                To ensure the highest level of strategic oversight and the integrity of our results, we accept a maximum of four new individuals per month. This is not first-come, first-served. We select individuals based on a precise fit between your goal and our methodology.
              </p>

              <p className="text-lg leading-8 text-body">
                The first step is to submit an application. If your profile aligns with our protocol, you will be invited to a no-obligation strategic consultation to make a final determination.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* SECTION 5: THE CALL TO ACTION */}
        <ScrollReveal delay={300}>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stop Paying for an Endless Process. Invest in an Outcome.
                </h2>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  If you are ready to make a deliberate investment in your autonomy, the next step is to begin the diagnostic process.
                </p>
                
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Begin the Diagnostic</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  )
}

