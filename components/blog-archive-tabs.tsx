'use client';

import Link from 'next/link';
import { useState } from 'react';

// Article data with summaries
const articlesData = {
  system: [
    {
      slug: 'pain-compass',
      title: "Pain as a Compass: How Your Anxiety Can Point the Way to a More Meaningful Life",
      summary: "A deconstruction of how to use the data from emotional pain as a compass to guide you toward your deepest values, moving beyond avoidance to purposeful action."
    },
    {
      slug: 'passenger',
      title: "That's Just a Passenger: A Simple Guide to 'Unhooking' From the Bully in Your Brain",
      summary: "The technical blueprint for using cognitive defusion techniques to 'unhook' from self-critical thoughts and regain control of your own mind."
    },
    {
      slug: 'second-dart',
      title: "The 'Second Dart': How Your Reaction to Anxiety Is Worse Than the Anxiety Itself",
      summary: "An analysis of the 'Second Dart' phenomenon, explaining how self-critical reactions cause more damage than the initial event and how to stop the cycle."
    }
  ],
  skills: [
    {
      slug: 'Dive-reflex',
      title: "The Dive Reflex: A 30-Second 'Emergency Brake' for a Full-Blown Meltdown",
      summary: "A physiological hack using the mammalian dive reflex and TIPP skills to bypass logic and rapidly deactivate panic attacks by triggering your body's natural braking system."
    },
    {
      slug: 'Find-Solid-Ground',
      title: "Find Solid Ground: A 30-Second Exercise to Stop a Panic Attack",
      summary: "The foundational blueprint for the 'Somatic Anchor' technique, teaching you to shift attention from catastrophic thoughts to physical sensations and halt anxiety spirals."
    },
    {
      slug: 'Pendulum',
      title: "The 'Pendulum': How to Build Your Tolerance to Difficult Feelings, One Rep at a Time",
      summary: "A structured training protocol using titration and pendulation to gradually recalibrate your nervous system's sensitivity, building emotional resilience like a targeted workout."
    }
  ],
  cases: [
    {
      slug: 'meltdown-to-mastery',
      title: "From Meltdown to Mastery: How One Client Recalibrated Her Nervous System",
      summary: "A detailed case study documenting Sarah's 30-day transformation from a highly sensitised 'Faulty Smoke Alarm' to mastery, demonstrating the efficacy of intensive skill-building."
    }
  ]
};

export function BlogArchiveTabs() {
  const [activeTab, setActiveTab] = useState<'system' | 'skills' | 'cases'>('system');

  return (
    <div className="bg-white rounded-2xl shadow-soft ring-1 ring-black/5 overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-sage-200 bg-sage-50/50">
        <button
          onClick={() => setActiveTab('system')}
          className={`flex-1 px-6 py-4 text-center font-medium transition-all duration-200 ${
            activeTab === 'system'
              ? 'bg-white text-brand-900 border-b-2 border-brand-500'
              : 'text-ink/60 hover:text-brand-900 hover:bg-white/50'
          }`}
        >
          System Deconstructions
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex-1 px-6 py-4 text-center font-medium transition-all duration-200 ${
            activeTab === 'skills'
              ? 'bg-white text-brand-900 border-b-2 border-brand-500'
              : 'text-ink/60 hover:text-brand-900 hover:bg-white/50'
          }`}
        >
          Skill Blueprints
        </button>
        <button
          onClick={() => setActiveTab('cases')}
          className={`flex-1 px-6 py-4 text-center font-medium transition-all duration-200 ${
            activeTab === 'cases'
              ? 'bg-white text-brand-900 border-b-2 border-brand-500'
              : 'text-ink/60 hover:text-brand-900 hover:bg-white/50'
          }`}
        >
          Clinical Debriefs
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {/* System Deconstructions */}
        {activeTab === 'system' && (
          <div className="space-y-6">
            {articlesData.system.map((article) => (
              <div key={article.slug} className="border-b border-sage-100 pb-6 last:border-0 last:pb-0">
                <h4 className="text-xl font-bold text-brand-900 mb-3 hover:text-brand-700 transition-colors">
                  <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                </h4>
                <p className="text-ink/70 leading-relaxed mb-4">{article.summary}</p>
                <Link 
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center text-brand-700 font-medium hover:text-brand-900 transition-colors group text-sm"
                >
                  Read the Briefing
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Skill Blueprints */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            {articlesData.skills.map((article) => (
              <div key={article.slug} className="border-b border-sage-100 pb-6 last:border-0 last:pb-0">
                <h4 className="text-xl font-bold text-brand-900 mb-3 hover:text-brand-700 transition-colors">
                  <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                </h4>
                <p className="text-ink/70 leading-relaxed mb-4">{article.summary}</p>
                <Link 
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center text-brand-700 font-medium hover:text-brand-900 transition-colors group text-sm"
                >
                  Read the Briefing
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Clinical Debriefs */}
        {activeTab === 'cases' && (
          <div className="space-y-6">
            {articlesData.cases.map((article) => (
              <div key={article.slug} className="border-b border-sage-100 pb-6 last:border-0 last:pb-0">
                <h4 className="text-xl font-bold text-brand-900 mb-3 hover:text-brand-700 transition-colors">
                  <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                </h4>
                <p className="text-ink/70 leading-relaxed mb-4">{article.summary}</p>
                <Link 
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center text-brand-700 font-medium hover:text-brand-900 transition-colors group text-sm"
                >
                  Read the Briefing
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
