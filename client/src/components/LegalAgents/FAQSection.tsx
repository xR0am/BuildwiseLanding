import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { LEGAL_CAL_URL, LEGAL_SCOPING_CTA } from "@/lib/legal-toolkit";

const faqs = [
  {
    question: "Is this legal advice?",
    answer:
      "No. Every output is a draft for lawyer review — flagged, cited where possible, and marked for your judgment. Agents do the first pass; a qualified lawyer verifies, decides, and takes responsibility.",
  },
  {
    question: "We're not a law firm — is this for us?",
    answer:
      "Yes, if you have recurring legal work — vendor contracts, NDAs, compliance deadlines, board papers — and either a small in-house function or regular outside counsel. We wire agents to how your organisation actually works, so lawyers spend less time on admin and more on decisions.",
  },
  {
    question: "Where does our data go?",
    answer:
      "Agents run inside your organisation's environment. Documents stay in your folders and document systems. We do not train on your client or business data. During onboarding we agree exactly which systems agents can read and write.",
  },
  {
    question: "How is this different from hiring another paralegal or legal executive?",
    answer:
      "A person needs training, supervision, and business hours. Agents arrive with Hong Kong legal workflow patterns — contract triage, first-pass review, deadline tracking — and we onboard them to your specific playbooks. They run on schedule for work that does not need someone at 2 a.m.",
  },
  {
    question: "Do we have to change our document systems?",
    answer:
      "No. We connect to what you have — iManage, NetDocuments, Ironclad, SharePoint, Google Drive, and others. The goal is agents inside your existing matter structure, not another platform to manage.",
  },
  {
    question: "Can we start with one workflow?",
    answer:
      "Yes — and we recommend it. The scoping call identifies which workflow returns the most time first: contract triage, first-pass review, deadline monitoring, or something specific to your practice. Expand once the model is proven.",
  },
  {
    question: "Does this work for Hong Kong law specifically?",
    answer:
      "It is built for Hong Kong practice — common-law analysis, local ordinances, HKLII and e-Legislation research patterns, and professional conduct expectations. Privacy, corporate, employment, and regulatory workflows are all in the toolkit.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We start with value discovery — where legal time goes, what liberation is worth, and which agents fit first. Pricing follows once we agree scope and impact. No rate card on this page.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-[#F8F7F5] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#D4A57410_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-sans text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-subtle text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Straight answers for firms, in-house teams, and businesses. No jargon, no pressure.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/60 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                type="button"
              >
                <h3 className="text-lg font-medium text-[#1A1A1A] tracking-tight pr-8">
                  {faq.question}
                </h3>
                <div
                  className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-border/60 transition-colors duration-300 ${
                    openIndex === index
                      ? "bg-[#D4A574] border-[#D4A574] text-[#2D1B10]"
                      : "text-subtle group-hover:text-[#1A1A1A] group-hover:border-border"
                  }`}
                >
                  {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-subtle font-light leading-relaxed border-t border-border/40 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 rounded-3xl border border-[#D4A574]/20 bg-white p-8 md:p-12 text-center shadow-xl shadow-[#D4A574]/5">
          <h3 className="text-2xl font-semibold text-[#1A1A1A] tracking-tight">Still have questions?</h3>
          <p className="mt-4 text-subtle font-light leading-relaxed">
            Book a 30-minute scoping call or email us — we&apos;ll walk through your workflows in
            plain English.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={LEGAL_CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4A574] text-[#2D1B10] px-8 py-4 text-sm font-bold transition shadow-lg shadow-[#D4A574]/20"
            >
              <span className="font-bold">{LEGAL_SCOPING_CTA}</span>
            </a>
            <a
              href="mailto:contact@buildwise-studios.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white text-[#1A1A1A] px-8 py-4 text-sm font-semibold hover:bg-slate-50 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
