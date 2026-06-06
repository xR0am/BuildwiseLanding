import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Which industries do you cover today?",
    a: "Executive search and Hong Kong legal workflows are live. Other professional services go through scoping first — we only build where the ROI is clear.",
  },
  {
    q: "How is this different from ChatGPT or Copilot?",
    a: "Vertical agents connect to your stack, follow your playbooks, and run repeatable workflows end to end. They're built for one industry, not general Q&A.",
  },
  {
    q: "How long does setup take?",
    a: "About 30 days from kickoff to deployment — integration, customization, and team handoff included.",
  },
  {
    q: "Can we start with one workflow?",
    a: "Yes. Most clients start with the highest-ROI workflow, prove the value, then expand.",
  },
];

const HubFAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-24 bg-[#F8F7F5] border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="font-sans text-2xl md:text-3xl font-semibold text-[#1A1A1A] tracking-tight uppercase text-center mb-10">
          Common Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-border/60 bg-white shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-[#1A1A1A]">{faq.q}</span>
                <span className="text-[#D4A574] text-lg leading-none shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-5 pb-4 text-sm text-subtle font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubFAQSection;
