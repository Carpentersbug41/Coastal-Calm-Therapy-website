'use client';

import { useState } from 'react'
import { ScrollReveal } from './scroll-reveal'

interface QAAccordionProps {
  question: string
  answer: string
  index: number
}

export function QAAccordion({ question, answer, index }: QAAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 50}>
      <div className="glass-effect rounded-2xl border border-dune-shadow overflow-hidden shadow-soft">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-6 md:p-8 flex justify-between items-start gap-4 hover:bg-pebble/30 transition-colors"
          aria-expanded={isOpen}
        >
          <h3 className="text-lg md:text-xl font-bold text-sea-sage pr-4">
            {question}
          </h3>
          <div className="flex-shrink-0 mt-1">
            <svg
              className={`w-6 h-6 text-seafoam transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
            <p className="text-base md:text-lg leading-8 text-body whitespace-pre-line">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

