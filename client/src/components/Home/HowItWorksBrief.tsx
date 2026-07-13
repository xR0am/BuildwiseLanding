import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Audit & baseline",
    body: "We map your org chart, measure the time sink, and define the agent's job description with hard KPIs — before a single agent goes live.",
  },
  {
    num: "02",
    title: "Place & prove",
    body: "30-day pilot with one agent in one narrow role. Same task, same operator — measured with and without the agent.",
  },
  {
    num: "03",
    title: "Convert & expand",
    body: "KPI threshold hit? The agent stays on monthly retainer. Add the next hire — each new agent is a seat, not a new project.",
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
