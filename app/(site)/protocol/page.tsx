import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 30-Day Blueprint for a New Toolkit | The Anxiety Protocol',
  description: 'This is not a vague therapeutic journey. It is a structured, 30-day intensive designed to install a complete, new toolkit for your nervous system. Our single, defined outcome is to equip you with the skills for lifelong autonomy.',
  openGraph: {
    title: 'The 30-Day Blueprint for a New Toolkit | The Anxiety Protocol',
    description: 'A structured, 30-day intensive to install a complete, new toolkit for your nervous system. Our single outcome: to equip you with the skills for lifelong autonomy.',
    url: '/protocol',
    type: 'website',
  },
  alternates: {
    canonical: '/protocol',
  },
}

export default function ProtocolPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* SECTION 1: HEADLINE & SUMMARY */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              The 30-Day Blueprint for a New Toolkit
            </h1>
            
            <p className="text-xl md:text-2xl leading-8 text-body font-medium">
              This is not a vague therapeutic 'journey.' It is a structured, 30-day intensive designed to install a complete, new toolkit for your nervous system. Our single, defined outcome is to equip you with the skills for lifelong autonomy. Below is the exact, phased blueprint of how we install and hand over that toolkit.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-dune-shadow" />
        </div>

        {/* SECTION 2: THE THREE CORE TOOLS */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                Your Three Core Tools
              </h2>
              <p className="text-lg leading-8 text-body max-w-3xl mx-auto">
                To install your new toolkit, you will work with three distinct but integrated tools, each with a specific and powerful function.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tool 1: The Human Strategist */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-6 h-6 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    1. The Human Architect
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  <strong>Function:</strong> Your trusted expert and guide. A senior clinician personally designs your protocol, analyzes your data, and provides weekly strategic oversight to ensure you are always on the most effective path.
                </p>
              </div>
            </ScrollReveal>

            {/* Tool 2: The Clinical Check-in */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-6 h-6 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    2. The Therapeutic Engine
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  <strong>Function:</strong> A safe and consistent space for deep work. This AI-led session executes your Architect's plan with perfect fidelity, allowing you to focus entirely on your practice without the variables of human judgment.
                </p>
              </div>
            </ScrollReveal>

            {/* Tool 3: The Somatic Drill */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-6 h-6 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    3. The Somatic Gym
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  <strong>Function:</strong> Your high-repetition practice environment. Daily, targeted drills that build and automate new neural pathways, giving you the thousands of 'reps' required for lasting change.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-dune-shadow" />
        </div>

        {/* SECTION 3: THE FOUR-PHASE PROTOCOL */}
        <div className="max-w-7xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                A Phased Approach to Installation & Autonomy
              </h2>
            </div>
          </ScrollReveal>

          {/* Horizontal Timeline - Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline connecting line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-seafoam via-seafoam to-sea-sage"></div>
              
              {/* Timeline phases */}
              <div className="grid grid-cols-4 gap-6 relative">
                {/* Phase 1 */}
                <ScrollReveal delay={100}>
                  <div className="flex flex-col items-center">
                    {/* Timeline node */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-seafoam to-sea-sage flex items-center justify-center text-2xl font-bold text-white shadow-soft-lg mb-6 relative z-10">
                      1
                    </div>
                    
                    {/* Phase card */}
                    <div className="glass-effect rounded-2xl p-6 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent h-full">
                      <h3 className="text-xl font-bold text-sea-sage mb-2">
                        Diagnostic & Calibration
                      </h3>
                      <p className="text-sm text-seafoam font-semibold mb-3">
                        Days 1-3
                      </p>
                      <p className="text-sm leading-6 text-body">
                        The intensive begins with a human-led deep-diagnostic to build your personal "Anxiety Blueprint." Following your first AI-led session, we hold a human feedback session to ensure perfect system calibration before the core work begins.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Phase 2 */}
                <ScrollReveal delay={200}>
                  <div className="flex flex-col items-center">
                    {/* Timeline node */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-seafoam to-sea-sage flex items-center justify-center text-2xl font-bold text-white shadow-soft-lg mb-6 relative z-10">
                      2
                    </div>
                    
                    {/* Phase card */}
                    <div className="glass-effect rounded-2xl p-6 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent h-full">
                      <h3 className="text-xl font-bold text-sea-sage mb-2">
                        Core Skill Acquisition & Data Analysis
                      </h3>
                      <p className="text-sm text-seafoam font-semibold mb-3">
                        Days 4-14
                      </p>
                      <p className="text-sm leading-6 text-body">
                        You will engage in a series of AI-led sessions via the Therapeutic Engine, each assigning specific, targeted homework. After every 2-3 sessions, your Human Architect will review your transcripts and data, providing feedback and making precise adjustments to the system prompts for your next block of sessions.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Phase 3 */}
                <ScrollReveal delay={300}>
                  <div className="flex flex-col items-center">
                    {/* Timeline node */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-seafoam to-sea-sage flex items-center justify-center text-2xl font-bold text-white shadow-soft-lg mb-6 relative z-10">
                      3
                    </div>
                    
                    {/* Phase card */}
                    <div className="glass-effect rounded-2xl p-6 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent h-full">
                      <h3 className="text-xl font-bold text-sea-sage mb-2">
                        High-Repetition Practice & Integration
                      </h3>
                      <p className="text-sm text-seafoam font-semibold mb-3">
                        Days 15-25
                      </p>
                      <p className="text-sm leading-6 text-body">
                        Once the foundational skills are in place, your Architect will prescribe and introduce the first sessions in the Somatic Gym. You will now run these daily in parallel with your Therapeutic Engine sessions. The Gym automates the skills, while the Engine helps you integrate them. Your Architect monitors the data from both tools to optimize your training in the weekly human check-in.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Phase 4 */}
                <ScrollReveal delay={400}>
                  <div className="flex flex-col items-center">
                    {/* Timeline node */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-seafoam to-sea-sage flex items-center justify-center text-2xl font-bold text-white shadow-soft-lg mb-6 relative z-10">
                      4
                    </div>
                    
                    {/* Phase card */}
                    <div className="glass-effect rounded-2xl p-6 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent h-full">
                      <h3 className="text-xl font-bold text-sea-sage mb-2">
                        The Handover Protocol & Graduation
                      </h3>
                      <p className="text-sm text-seafoam font-semibold mb-3">
                        Days 26-30
                      </p>
                      <p className="text-sm leading-6 text-body">
                        The final week is focused on the handover. We analyze your 30 days of performance data and co-create your 'Go-Forward Plan'—the user's manual for your own mind. This marks your graduation from the intensive, equipped for autonomy. Ongoing, less-frequent strategic consultation is available to support your long-term success.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Vertical Timeline - Mobile & Tablet */}
          <div className="lg:hidden space-y-8">
            {/* Phase 1 */}
            <ScrollReveal delay={100}>
              <div className="relative pl-12">
                {/* Timeline vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-seafoam to-transparent"></div>
                
                {/* Timeline node */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-seafoam to-sea-sage flex items-center justify-center text-xl font-bold text-white shadow-soft">
                  1
                </div>
                
                {/* Phase card */}
                <div className="glass-effect rounded-2xl p-6 shadow-soft border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                  <h3 className="text-xl font-bold text-sea-sage mb-2">
                    Diagnostic & Calibration
                  </h3>
                  <p className="text-sm text-seafoam font-semibold mb-3">
                    Days 1-3
                  </p>
                  <p className="text-base leading-7 text-body">
                    The intensive begins with a human-led deep-diagnostic to build your personal "Anxiety Blueprint." Following your first AI-led session, we hold a human feedback session to ensure perfect system calibration before the core work begins.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Phase 2 */}
            <ScrollReveal delay={200}>
              <div className="relative pl-12">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-seafoam to-transparent"></div>
                
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-seafoam to-sea-sage flex items-center justify-center text-xl font-bold text-white shadow-soft">
                  2
                </div>
                
                <div className="glass-effect rounded-2xl p-6 shadow-soft border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                  <h3 className="text-xl font-bold text-sea-sage mb-2">
                    Core Skill Acquisition & Data Analysis
                  </h3>
                  <p className="text-sm text-seafoam font-semibold mb-3">
                    Days 4-14
                  </p>
                  <p className="text-base leading-7 text-body">
                    You will engage in a series of AI-led sessions via the Therapeutic Engine, each assigning specific, targeted homework. After every 2-3 sessions, your Human Architect will review your transcripts and data, providing feedback and making precise adjustments to the system prompts for your next block of sessions.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Phase 3 */}
            <ScrollReveal delay={300}>
              <div className="relative pl-12">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-seafoam to-transparent"></div>
                
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-seafoam to-sea-sage flex items-center justify-center text-xl font-bold text-white shadow-soft">
                  3
                </div>
                
                <div className="glass-effect rounded-2xl p-6 shadow-soft border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                  <h3 className="text-xl font-bold text-sea-sage mb-2">
                    High-Repetition Practice & Integration
                  </h3>
                  <p className="text-sm text-seafoam font-semibold mb-3">
                    Days 15-25
                  </p>
                  <p className="text-base leading-7 text-body">
                    Once the foundational skills are in place, your Architect will prescribe and introduce the first sessions in the Somatic Gym. You will now run these daily in parallel with your Therapeutic Engine sessions. The Gym automates the skills, while the Engine helps you integrate them. Your Architect monitors the data from both tools to optimize your training in the weekly human check-in.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Phase 4 */}
            <ScrollReveal delay={400}>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-seafoam to-sea-sage flex items-center justify-center text-xl font-bold text-white shadow-soft">
                  4
                </div>
                
                <div className="glass-effect rounded-2xl p-6 shadow-soft border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                  <h3 className="text-xl font-bold text-sea-sage mb-2">
                    The Handover Protocol & Graduation
                  </h3>
                  <p className="text-sm text-seafoam font-semibold mb-3">
                    Days 26-30
                  </p>
                  <p className="text-base leading-7 text-body">
                    The final week is focused on the handover. We analyze your 30 days of performance data and co-create your 'Go-Forward Plan'—the user's manual for your own mind. This marks your graduation from the intensive, equipped for autonomy. Ongoing, less-frequent strategic consultation is available to support your long-term success.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-dune-shadow" />
        </div>

        {/* SECTION 4: THE DATA LOOP */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                A Fully Transparent, Data-Driven Process
              </h2>
              <p className="text-lg leading-8 text-body max-w-3xl mx-auto">
                This is a data-driven protocol. After every Clinical Check-in, you receive a complete toolkit to ensure total transparency and accountability.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Deliverable 1: Session Report */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft border border-dune-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-5 h-5 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-sea-sage">
                    The Session Report
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  A concise summary of the session's key moments, insights, and objectives.
                </p>
              </div>
            </ScrollReveal>

            {/* Deliverable 2: Homework Protocol */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft border border-dune-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-5 h-5 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-sea-sage">
                    The Homework Protocol
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  A clear, actionable list of your assigned tasks before the next Check-in.
                </p>
              </div>
            </ScrollReveal>

            {/* Deliverable 3: Full Transcript */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft border border-dune-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-5 h-5 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-sea-sage">
                    The Full Transcript
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  A complete, word-for-word transcript of your session for your own reference and analysis.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-8 text-center">
              <p className="text-base leading-7 text-body max-w-2xl mx-auto">
                This feedback loop ensures you are a fully informed and capable partner in your own progress.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-dune-shadow" />
        </div>

        {/* SECTION 5: THE CALL TO ACTION */}
        <ScrollReveal delay={450}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
              This Blueprint is Designed for a Verifiable Result.
            </h2>
            <Link
              href="/results"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-sea-sage to-seafoam rounded-2xl hover:shadow-soft-lg hover:scale-105 transition-all duration-300 shadow-soft"
            >
              <span>See the Verifiable Results</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  )
}
