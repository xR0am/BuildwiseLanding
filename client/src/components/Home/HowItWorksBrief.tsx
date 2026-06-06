import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Find the workflow",
    body: "We identify repetitive, high-value work — the kind that steals 20+ hours a month per person.",
  },
  {
    num: "02",
    title: "Build for the vertical",
    body: "Agents trained on your industry's tools, playbooks, and judgment patterns — not a generic chatbot.",
  },
  {
    num: "03",
    title: "Deploy in 30 days",
    body: "Integration, training, and handoff. Your team delegates; agents handle the rest.",
  },
];

const HowItWorksBrief: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="relative z-30 py-24 md:py-28 bg-white border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14">
          <h2 className="font-sans text-2xl md:text-3xl font-semibold text-[#1A1A1A] tracking-tight uppercase">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="border-l-2 border-[#D4A574]/40 pl-5"
            >
              <span className="text-[10px] font-mono font-medium text-[#D4A574] uppercase tracking-widest">
                {step.num}
              </span>
              <h3 className="font-sans text-lg font-bold text-[#1A1A1A] mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-subtle font-light leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBrief;
