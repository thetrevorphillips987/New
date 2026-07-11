import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Is this course suitable for complete beginners with no financial background?",
      answer: "Absolutely. In fact, we prefer students with clean slates. We start with the elementary definition of a candlestick, trading terminology, and risk rules, and systematically build you up to advanced price action and order flow structures. Over 60% of our successful alumni started with zero background.",
    },
    {
      question: "What are the timings for the live trading and theory batches?",
      answer: "Theory lectures are conducted in the evenings (typically 7:30 PM to 9:30 PM IST) to accommodate college students and working professionals. Live trading rooms operate during active market hours (10:00 AM to 12:30 PM IST), allowing you to observe our coaches scaling, adjusting, and executing contracts in real time.",
    },
    {
      question: "Do you guarantee profits or offer investment advice?",
      answer: "No. We are strictly a professional trading educational institute and do NOT operate as a SEBI-registered advisory or portfolio management service. We do not promise overnight wealth. We teach you mathematical probabilities, risk-reward ratios, and execution science. Trading carries risk, and survival is a discipline.",
    },
    {
      question: "What does the 'Lifetime Mentorship Guidance' policy include?",
      answer: "Once you enroll in any of our core programs, you receive a lifetime pass to our active Telegram channels, community forums, and weekend market recap sessions. You also get unlimited, lifetime access to our online video directories containing recording archives of past sessions and newly updated strategies.",
    },
    {
      question: "Can I pay course fees in monthly installments (EMI)?",
      answer: "Yes, we support flexible No-Cost EMI configurations (3, 6, or 9 months) in partnership with India's top lending institutions. You can complete approvals online in less than 5 minutes during the admission process. Reach out to us via our inquiry triggers for exact details.",
    },
  ];

  return (
    <section 
      id="faq" 
      className="relative py-24 px-6 overflow-hidden bg-jet bg-premium-grid"
    >
      <div className="wood-overlay" />

      {/* Floating Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gold-light-radial animate-ambient-slow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 walnut-light-radial animate-ambient-slow-2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-500 font-bold uppercase">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Frequently Asked <span className="text-gold-gradient">Inquiries.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full mt-4" />
        </div>

        {/* Accordions List */}
        <div className="space-y-4" id="faq-accordions-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-gold-500/30 bg-walnut-950/40 shadow-[0_0_20px_rgba(212,175,55,0.05)]" 
                    : "border-gold-500/10 bg-walnut-950/10 hover:border-gold-500/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-gold-500" : "text-walnut-400"}`} />
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg border transition-all duration-300 shrink-0 ${
                    isOpen ? "border-gold-500/25 bg-gold-500/10 text-gold-500 rotate-180" : "border-white/5 bg-white/5 text-walnut-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 ml-8.5">
                        <div className="w-full h-[1px] bg-white/5 mb-4" />
                        <p className="text-xs sm:text-sm text-walnut-200 leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
