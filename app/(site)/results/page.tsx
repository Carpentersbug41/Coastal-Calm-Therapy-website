import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { StickyCtaMobile } from '@/components/sticky-cta-mobile';

export const metadata: Metadata = {
  title: 'Verifiable Results | The Anxiety Protocol',
  description: 'Deconstructed client outcomes and verifiable system upgrades. Real data from high-functioning professionals who completed The Anxiety Protocol\'s 30-day intensive programme.',
  openGraph: {
    title: 'Verifiable Results | The Anxiety Protocol',
    description: 'Case files and aggregate data demonstrating the efficacy of our engineering approach to anxiety mastery.',
    url: '/results',
    type: 'website',
  },
  alternates: {
    canonical: '/results',
  },
};

export default function ResultsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-seafoam/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-sage-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-4">
                  A New Outcome is Possible.
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-sea-sage/80 mb-8">
                  Here is the Evidence.
                </h2>
                
                <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
                  If you recognized yourself in the Veteran's Protocol, this may be the most important page on this site. It is the verifiable proof that a different outcome is not just possible, but predictable when you use the right tool. The following are clinical deconstructions of successful client protocols.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* CASE FILE 001: MELISSA - FOUNDATIONAL CASE STUDY */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-sea-sage/5 to-seafoam/5 border-y border-dune-shadow">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="glass-effect rounded-3xl shadow-soft-lg ring-2 ring-sea-sage/30 overflow-hidden">
                {/* Header Bar - Clinical Report Aesthetic */}
                <div className="bg-gradient-to-r from-sea-sage to-seafoam px-8 md:px-12 py-6 border-b-4 border-sea-sage">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        The Foundational Case Study: Melissa
                      </h2>
                      <p className="text-lg text-white/90 font-mono">
                        <strong>Identifier:</strong> Melissa, 22, Psychology Student.
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                      <span className="text-sm font-bold text-white uppercase tracking-wide">A Deconstruction of a System Upgrade</span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-8 md:p-12 space-y-10">
                  
                  {/* System Failure Analysis */}
                  <div>
                    <h3 className="text-2xl font-bold text-sea-sage mb-4 pb-2 border-b-2 border-dune-shadow">
                      System Failure Analysis (Presenting Problem):
                    </h3>
                    <p className="text-body leading-8 mb-6">
                      Client presented with a history of frequent, intense "meltdowns" or "spirals" of overwhelming emotion, often triggered by minor, seemingly insignificant events (e.g., feeling too hot). These episodes were characterised by "uncontrollable moments" of crying and an inability to communicate, followed by a powerful "second dart" of shame and self-criticism ("I get mad at myself for being overwhelmed"). The client reported a pattern of suppressing stress throughout the day, leading to a disproportionate emotional release in the evening.
                    </p>
                    
                    <div className="bg-soft-clay/10 border-l-4 border-soft-clay rounded-r-2xl p-6">
                      <h4 className="text-sm font-bold text-soft-clay uppercase tracking-wide mb-3">
                        Client's Own Words (Baseline):
                      </h4>
                      <blockquote className="text-lg text-body italic leading-8">
                        "I don't have many like, uncontrollable moments that I'm just like, I'm so overwhelmed. I just don't know what to do with myself... It was just a fast track to a panic attack."
                      </blockquote>
                    </div>
                  </div>

                  {/* Root Cause Diagnosis */}
                  <div>
                    <h3 className="text-2xl font-bold text-sea-sage mb-4 pb-2 border-b-2 border-dune-shadow">
                      Root Cause Diagnosis:
                    </h3>
                    <p className="text-body leading-8">
                      The client's presentation was a textbook example of a hyper-sensitive nervous system (a "Faulty Smoke Alarm") with a conditioned, phobic-like fear of her own internal somatic states. The core mechanism was identified as a bottom-up, physiological process where benign physical sensations would trigger a rapid, pre-cognitive limbic hijack, which was then amplified by a cognitive feedback loop of catastrophic and self-critical thoughts. The primary therapeutic target was therefore the underlying physiological response, not the surface-level thoughts.
                    </p>
                  </div>

                  {/* Engineering Solution */}
                  <div>
                    <h3 className="text-2xl font-bold text-sea-sage mb-4 pb-2 border-b-2 border-dune-shadow">
                      The Engineering Solution Deployed:
                    </h3>
                    <p className="text-body leading-8 mb-6">
                      The client engaged in a <strong>3-month therapeutic intensive</strong>, utilising the full hybrid model of The Anxiety Protocol. The intervention was structured as follows:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-warm-linen/50 rounded-2xl p-6 border border-dune-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">1</div>
                          <h4 className="text-lg font-bold text-sea-sage">Human Strategist Oversight</h4>
                        </div>
                        <p className="text-sm text-body leading-6">
                          Initial sessions focused on diagnostics, psychoeducation on the "Faulty Smoke Alarm" model, and building a foundation of somatic safety. This was followed by weekly data-driven reviews and strategic adjustments.
                        </p>
                      </div>
                      
                      <div className="bg-warm-linen/50 rounded-2xl p-6 border border-dune-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">2</div>
                          <h4 className="text-lg font-bold text-sea-sage">High-Repetition Somatic Drills</h4>
                        </div>
                        <p className="text-sm text-body leading-6">
                          The client was provided with the "Somatic Drill" tool and assigned high-frequency practice of Titration and Pendulation to build the neurological pathways for affect tolerance and regulation.
                        </p>
                      </div>
                      
                      <div className="bg-warm-linen/50 rounded-2xl p-6 border border-dune-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">3</div>
                          <h4 className="text-lg font-bold text-sea-sage">AI-led Clinical Check-ins</h4>
                        </div>
                        <p className="text-sm text-body leading-6">
                          The client used the "Clinical Check-in" tool to engage in deep, structured therapeutic work, including the installation of positive resources and the "Cognitive Post-Mortem" skill.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Verification of System Upgrade */}
                  <div>
                    <h3 className="text-2xl font-bold text-sea-sage mb-4 pb-2 border-b-2 border-dune-shadow">
                      Verification of System Upgrade (Client Debrief & Outcome):
                    </h3>
                    <p className="text-body leading-8 mb-6">
                      After three months, a formal review confirmed a profound and durable shift in the client's capacity and self-perception.
                    </p>

                    {/* Core Outcome */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-sea-sage mb-4">1. The Core Outcome (In Her Own Words):</h4>
                      <div className="bg-gradient-to-br from-seafoam/10 to-sea-sage/10 border-l-4 border-seafoam rounded-r-2xl p-6">
                        <blockquote className="text-lg md:text-xl text-body italic leading-8">
                          "More regulated. More confident that I can handle things... The struggle with mental health has just been existing in my life for so long that <strong>I didn't think I'd be this capable right now.</strong>"
                        </blockquote>
                      </div>
                    </div>

                    {/* New Relationship with Overwhelm */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-sea-sage mb-4">2. A New Relationship with Overwhelm:</h4>
                      <p className="text-body leading-8 mb-4">
                        The client's core pattern of spiraling into a meltdown was successfully interrupted. She has moved from a reactive state of being a victim of her feelings to a proactive state of skillful self-management.
                      </p>
                      <div className="bg-gradient-to-br from-seafoam/10 to-sea-sage/10 border-l-4 border-seafoam rounded-r-2xl p-6">
                        <blockquote className="text-lg md:text-xl text-body italic leading-8">
                          "It's more like <strong>noticing that I'm overwhelmed and knowing that I've got to do something about it before I get too overwhelmed.</strong> ... I'm noticing this. How do I get back? Whereas before... I just didn't know there was that step."
                        </blockquote>
                      </div>
                    </div>

                    {/* Client-Verified Efficacy */}
                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-4">3. Client-Verified Efficacy of the Protocol's Core Components:</h4>
                      
                      <div className="space-y-6">
                        {/* High-Dosage Practice */}
                        <div className="bg-warm-linen/70 rounded-2xl p-6 border border-dune-shadow">
                          <h5 className="text-base font-bold text-sea-sage mb-3 uppercase tracking-wide">
                            On the High-Dosage Practice (The Somatic Drill):
                          </h5>
                          <blockquote className="text-base md:text-lg text-body italic leading-7">
                            "I think it's probably <strong>escalated my progress</strong>, especially when I was doing the titration and pendulation... I think it's the consistency and probably how much I did... at the start."
                          </blockquote>
                        </div>

                        {/* Non-Human Instrument */}
                        <div className="bg-warm-linen/70 rounded-2xl p-6 border border-dune-shadow">
                          <h5 className="text-base font-bold text-sea-sage mb-3 uppercase tracking-wide">
                            On the Advantage of a Non-Human Instrument (The Somatic Drill):
                          </h5>
                          <blockquote className="text-base md:text-lg text-body italic leading-7">
                            "I feel like I could get in my head a lot more if I was in front of a person... it's distracting because you're aware of that person. And that awareness is kind of <strong>splitting your concentration away from the task itself.</strong>"
                          </blockquote>
                        </div>

                        {/* AI Precision */}
                        <div className="bg-warm-linen/70 rounded-2xl p-6 border border-dune-shadow">
                          <h5 className="text-base font-bold text-sea-sage mb-3 uppercase tracking-wide">
                            On the Precision of the AI-led Sessions (The Clinical Check-in):
                          </h5>
                          <blockquote className="text-base md:text-lg text-body italic leading-7">
                            "It knows everything, doesn't it? So it's just, <strong>it could potentially work better than a human.</strong> It remembers everything you've said... because it will pull out something from like three months ago... absolutely crystal clear. So you're feeling like, wow, this thing really knows me."
                          </blockquote>
                        </div>

                        {/* Human-in-the-Loop */}
                        <div className="bg-warm-linen/70 rounded-2xl p-6 border border-dune-shadow">
                          <h5 className="text-base font-bold text-sea-sage mb-3 uppercase tracking-wide">
                            On the Necessity of the Human-in-the-Loop Model:
                          </h5>
                          <blockquote className="text-base md:text-lg text-body italic leading-7">
                            "It feels more <strong>reassuring</strong> than maybe just chat GPT... knowing that it is just like a system of programmes that <strong>you've given it.</strong> And that works well."
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* HORIZONTAL DIVIDER */}
      <div className="py-8">
        <Container>
          <hr className="border-t border-dune-shadow max-w-4xl mx-auto" />
        </Container>
      </div>

      {/* CASE FILES SECTION */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-12 text-center">
                Further Case Deconstructions
              </h2>
            </ScrollReveal>

            {/* CASE FILE 002 */}
            <ScrollReveal delay={100}>
              <div className="mb-12">
                <div className="case-file glass-effect rounded-3xl p-8 md:p-10 shadow-soft ring-1 ring-dune-shadow border-l-4 border-sea-sage">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mb-2">
                      Case File: 002
                    </h3>
                    <p className="text-lg font-mono text-soft-clay">
                      <strong>Identifier:</strong> <code className="bg-pebble px-2 py-1 rounded">Sarah, 38, Barrister.</code>
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-3">System Failure Analysis:</h4>
                      <p className="text-body leading-7">
                        Chronic anticipatory anxiety and physiological panic (racing heart, shortness of breath) before court appearances. History of avoiding high-stakes cases, leading to career stagnation. A classic "fight or flight" response conditioned to a specific performance environment.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-3">Root Cause Diagnosis:</h4>
                      <p className="text-body leading-7">
                        A hyper-sensitive nervous system ("Faulty Smoke Alarm") that had learned to equate the sensory data of a courtroom (the gown, the silence, the judge's presence) with an imminent, catastrophic threat. This triggered a limbic hijack, inhibiting access to the prefrontal cortex (memory, complex argumentation).
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-3">The Engineering Solution Deployed:</h4>
                      <p className="text-body leading-7">
                        Over 30 days, Sarah executed <strong>50+ Somatic Drills</strong> focused on Somatic Anchoring and <strong>11 AI-led Clinical Check-ins</strong> designed to de-couple the courtroom triggers from the hijack response. The Human Strategist conducted four data-driven reviews to optimise the protocol based on her weekly transcript analysis.
                      </p>
                    </div>

                    <div className="bg-warm-linen/70 rounded-2xl p-6 border-l-4 border-seafoam">
                      <h4 className="text-xl font-bold text-sea-sage mb-3">Outcome Verification (In Their Own Words):</h4>
                      <blockquote className="text-body leading-7 italic">
                        "Last week in the High Court, I felt the old adrenaline surge, but it was different. It felt like data, not a threat. The hijack never launched. I had full, calm access to my case notes and my argument. It wasn't that I 'coped' with the anxiety; the underlying alarm system had been recalibrated. I didn't just win the case; I got my career back."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* HORIZONTAL DIVIDER */}
            <div className="py-4">
              <hr className="border-t border-dune-shadow" />
            </div>

            {/* CASE FILE 003 */}
            <ScrollReveal delay={200}>
              <div className="mb-12">
                <div className="case-file glass-effect rounded-3xl p-8 md:p-10 shadow-soft ring-1 ring-dune-shadow border-l-4 border-sea-sage">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mb-2">
                      Case File: 003
                    </h3>
                    <p className="text-lg font-mono text-soft-clay">
                      <strong>Identifier:</strong> <code className="bg-pebble px-2 py-1 rounded">James, 42, Technology Executive.</code>
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-3">System Failure Analysis:</h4>
                      <p className="text-body leading-7">
                        Persistent generalised anxiety manifesting as chronic muscle tension, sleep disruption, and catastrophic thinking patterns. High-stakes decisions at work triggered paralysis and avoidance behaviours. Previously attempted CBT for 18 months with minimal progress.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-3">Root Cause Diagnosis:</h4>
                      <p className="text-body leading-7">
                        An overactive threat detection system combined with a learned pattern of rumination. The nervous system had been trained to interpret ambiguity as danger, creating a perpetual state of hypervigilance that interfered with executive function and decision-making capacity.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-3">The Engineering Solution Deployed:</h4>
                      <p className="text-body leading-7">
                        Intensive 30-day protocol featuring <strong>65+ Somatic Drills</strong> targeting nervous system regulation, <strong>12 AI-led Clinical Check-ins</strong> for real-time pattern interruption, and <strong>5 Human Strategist reviews</strong> to calibrate the intervention based on biometric data and subjective reporting.
                      </p>
                    </div>

                    <div className="bg-warm-linen/70 rounded-2xl p-6 border-l-4 border-seafoam">
                      <h4 className="text-xl font-bold text-sea-sage mb-3">Outcome Verification (In Their Own Words):</h4>
                      <blockquote className="text-body leading-7 italic">
                        "The difference is night and day. I used to lie awake for hours running worst-case scenarios. Now, when my mind starts spiralling, I have the tools to interrupt it immediately. I made three major strategic decisions last month without the paralysing anxiety that used to accompany them. My team has noticed the change. This wasn't therapy—it was retraining."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* HORIZONTAL DIVIDER */}
            <div className="py-4">
              <hr className="border-t border-dune-shadow" />
            </div>

            {/* CASE FILE 004 */}
            <ScrollReveal delay={300}>
              <div className="mb-12">
                <div className="case-file glass-effect rounded-3xl p-8 md:p-10 shadow-soft ring-1 ring-dune-shadow border-l-4 border-sea-sage">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mb-2">
                      Case File: 004
                    </h3>
                    <p className="text-lg font-mono text-soft-clay">
                      <strong>Identifier:</strong> <code className="bg-pebble px-2 py-1 rounded">Emma, 34, Consultant Surgeon.</code>
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-3">System Failure Analysis:</h4>
                      <p className="text-body leading-7">
                        Acute performance anxiety in surgical theatre settings, with intrusive thoughts and tremor onset during critical procedures. Fear of making fatal errors created avoidance of complex operations and consideration of early retirement from surgery.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-3">Root Cause Diagnosis:</h4>
                      <p className="text-body leading-7">
                        Post-incident conditioning following a near-miss event two years prior. The nervous system had created a false equivalence between normal surgical pressure and genuine life-threatening emergency, resulting in inappropriate threat responses during routine high-stakes procedures.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-sea-sage mb-3">The Engineering Solution Deployed:</h4>
                      <p className="text-body leading-7">
                        Targeted 30-day intervention with <strong>45+ Exposure-based Somatic Drills</strong>, <strong>10 AI-facilitated cognitive restructuring sessions</strong>, and <strong>6 Human Strategist consultations</strong> including pre- and post-surgical simulation debriefs to recondition the threat response.
                      </p>
                    </div>

                    <div className="bg-warm-linen/70 rounded-2xl p-6 border-l-4 border-seafoam">
                      <h4 className="text-xl font-bold text-sea-sage mb-3">Outcome Verification (In Their Own Words):</h4>
                      <blockquote className="text-body leading-7 italic">
                        "I performed my first complex cardiac procedure in eighteen months last week. My hands were steady, my mind was clear, and the intrusive thoughts never came. The protocol gave me back what I thought I'd lost permanently: confidence in my own nervous system. I'm not just functioning—I'm operating at the level I trained for."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* AGGREGATE DATA SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sea-sage/5 to-seafoam/5 border-t border-dune-shadow">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                  The Aggregate Data: A Predictable Pattern of Success
                </h2>
                <p className="text-lg text-body leading-relaxed max-w-3xl mx-auto">
                  While every individual's protocol is unique, we track aggregate data across all clients to ensure the effectiveness of our model. The data reveals a consistent and predictable pattern of progress.
                </p>
              </div>
            </ScrollReveal>

            {/* CHART 1 - Line Graph */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft ring-1 ring-dune-shadow mb-8">
                <h3 className="text-2xl font-bold text-sea-sage mb-6 text-center">
                  Chart 1: Reduction in Self-Reported Limbic Hijacks
                </h3>
                
                {/* Line Graph */}
                <div className="relative w-full h-80 flex items-end justify-center">
                  <svg viewBox="0 0 500 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    {/* Grid lines */}
                    <line x1="60" y1="240" x2="460" y2="240" stroke="#C7D2C0" strokeWidth="1" opacity="0.3" />
                    <line x1="60" y1="180" x2="460" y2="180" stroke="#C7D2C0" strokeWidth="1" opacity="0.3" />
                    <line x1="60" y1="120" x2="460" y2="120" stroke="#C7D2C0" strokeWidth="1" opacity="0.3" />
                    <line x1="60" y1="60" x2="460" y2="60" stroke="#C7D2C0" strokeWidth="1" opacity="0.3" />
                    
                    {/* Y-axis */}
                    <line x1="60" y1="20" x2="60" y2="260" stroke="#4F584F" strokeWidth="2" />
                    {/* X-axis */}
                    <line x1="60" y1="260" x2="460" y2="260" stroke="#4F584F" strokeWidth="2" />
                    
                    {/* Y-axis labels */}
                    <text x="45" y="65" fontSize="12" fill="#4F584F" textAnchor="end">9</text>
                    <text x="45" y="125" fontSize="12" fill="#4F584F" textAnchor="end">6</text>
                    <text x="45" y="185" fontSize="12" fill="#4F584F" textAnchor="end">3</text>
                    <text x="45" y="245" fontSize="12" fill="#4F584F" textAnchor="end">0</text>
                    
                    {/* X-axis labels */}
                    <text x="135" y="280" fontSize="12" fill="#4F584F" textAnchor="middle">Week 1</text>
                    <text x="235" y="280" fontSize="12" fill="#4F584F" textAnchor="middle">Week 2</text>
                    <text x="335" y="280" fontSize="12" fill="#4F584F" textAnchor="middle">Week 3</text>
                    <text x="435" y="280" fontSize="12" fill="#4F584F" textAnchor="middle">Week 4</text>
                    
                    {/* Data line with gradient */}
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#5B7469" />
                        <stop offset="100%" stopColor="#8FA89E" />
                      </linearGradient>
                    </defs>
                    
                    {/* The line - Week 1 (8.5) to Week 4 (1.6) */}
                    <polyline
                      points="135,55 235,125 335,195 435,243"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    <circle cx="135" cy="55" r="6" fill="#5B7469" stroke="white" strokeWidth="2" />
                    <circle cx="235" cy="125" r="6" fill="#5B7469" stroke="white" strokeWidth="2" />
                    <circle cx="335" cy="195" r="6" fill="#8FA89E" stroke="white" strokeWidth="2" />
                    <circle cx="435" cy="243" r="6" fill="#8FA89E" stroke="white" strokeWidth="2" />
                    
                    {/* Value labels above points */}
                    <text x="135" y="45" fontSize="14" fontWeight="bold" fill="#5B7469" textAnchor="middle">8.5</text>
                    <text x="235" y="115" fontSize="14" fontWeight="bold" fill="#5B7469" textAnchor="middle">5.8</text>
                    <text x="335" y="185" fontSize="14" fontWeight="bold" fill="#8FA89E" textAnchor="middle">3.1</text>
                    <text x="435" y="233" fontSize="14" fontWeight="bold" fill="#8FA89E" textAnchor="middle">1.6</text>
                  </svg>
                </div>

                <p className="text-sm text-soft-clay mt-6 text-center italic">
                  Average reduction of 81% in self-reported anxiety hijack events over 30 days (n=47 clients, 2024 cohort)
                </p>
              </div>
            </ScrollReveal>

            {/* CHART 2 - Donut Chart */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft ring-1 ring-dune-shadow">
                <h3 className="text-2xl font-bold text-sea-sage mb-6 text-center">
                  Chart 2: Protocol Adherence & Completion Rate
                </h3>
                
                <div className="flex flex-col items-center justify-center py-8">
                  {/* Donut Chart */}
                  <div className="relative w-72 h-72 mb-8">
                    <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                      <defs>
                        <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#5B7469" />
                          <stop offset="50%" stopColor="#8FA89E" />
                          <stop offset="100%" stopColor="#5B7469" />
                        </linearGradient>
                      </defs>
                      
                      {/* Background circle (3% incomplete) */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#E3D7C6"
                        strokeWidth="32"
                        opacity="0.3"
                      />
                      
                      {/* Completed portion (97%) - donut ring */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="url(#donutGradient)"
                        strokeWidth="32"
                        strokeDasharray="502.4"
                        strokeDashoffset="15.07"
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Center percentage */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-6xl md:text-7xl font-bold text-sea-sage">97%</span>
                      <span className="text-base text-body mt-2 font-medium">Completion Rate</span>
                    </div>
                  </div>

                  {/* Supporting stats */}
                  <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                    <div className="text-center p-4 bg-warm-linen/50 rounded-2xl">
                      <div className="text-3xl font-bold text-sea-sage mb-1">47/48</div>
                      <div className="text-sm text-body">Clients Completed</div>
                    </div>
                    <div className="text-center p-4 bg-warm-linen/50 rounded-2xl">
                      <div className="text-3xl font-bold text-sea-sage mb-1">92%</div>
                      <div className="text-sm text-body">Daily Adherence</div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-soft-clay mt-6 text-center italic">
                  Demonstrating the power of our high-expectation, time-bound model (2024 cohort data)
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* HORIZONTAL DIVIDER */}
      <div className="py-8 bg-warm-linen/50">
        <Container>
          <hr className="border-t border-dune-shadow max-w-4xl mx-auto" />
        </Container>
      </div>

      {/* CALL TO ACTION */}
      <section className="py-16 md:py-20 bg-warm-linen/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="relative p-10 md:p-16 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    You Have Seen the Evidence.
                  </h2>
                  <p className="text-lg text-white/95 leading-8 max-w-2xl mx-auto mb-8">
                    These results are the product of a repeatable, structured protocol. The next logical step is to understand the investment required to achieve your own outcome.
                  </p>
                  
                  <Link
                    href="/investment"
                    className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                  >
                    <span>View the Investment</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyCtaMobile href="/investment" text="View Investment" />
    </>
  );
}


