import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "Audit & baseline",
    body: "We map your org chart, measure the time sink, and define the agent's job description with hard KPIs — before a single agent goes live.",
    stat: "~1 week",
  },
  {
    phase: "Phase 2",
    title: "Place & prove",
    body: "30-day pilot with one agent in one narrow role. Same task, same operator — measured with and without the agent.",
    stat: "30 days",
  },
  {
    phase: "Phase 3",
    title: "Convert & expand",
    body: "KPI threshold hit? The agent stays on monthly retainer. Add the next hire — each new agent is a seat, not a new project.",
    stat: "Monthly",
  },
];

const Arrow = () => (
  <svg
    width="48"
    height="16"
    viewBox="0 0 48 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#D4A574]/40 shrink-0"
  >
    <path
      d="M0 8h38M31 1l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HowItWorksBrief: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="relative z-30 py-24 md:py-28 bg-white border-t border-border/40">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14">
          <h2 className="font-sans text-2xl md:text-3xl font-semibold text-[#1A1A1A] tracking-tight uppercase">
            How We Work
          </h2>
        </div>

        {/* Desktop: three equal cards in a row with arrows between */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-0">
          {phases.map((p, i) => (
            <React.Fragment key={p.phase}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="rounded-2xl border border-border/60 bg-white p-7 text-center shadow-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#D4A574]" />
                  <span className="text-[11px] font-bold text-[#D4A574] uppercase tracking-widest">
                    {p.phase}
                  </span>
                </div>
                <h3 className="font-sans text-lg font-bold text-[#1A1A1A] mb-2">{p.title}</h3>
                <p className="text-sm text-subtle font-light leading-relaxed mb-5">{p.body}</p>
                <span className="inline-block text-[11px] font-semibold text-[#D4A574] uppercase tracking-wider bg-[#D4A574]/8 rounded-full px-3 py-1.5">
                  {p.stat}
                </span>
              </motion.div>

              {i < phases.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.3, duration: 0.4 }}
                  className="flex items-center justify-center px-2 pt-6"
                >
                  <Arrow />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex md:hidden flex-col items-center gap-6">
          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="w-full max-w-[320px] rounded-2xl border border-border/60 bg-white p-6 text-center shadow-sm"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D4A574]" />
                <span className="text-[11px] font-bold text-[#D4A574] uppercase tracking-widest">
                  {p.phase}
                </span>
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1A1A1A] mb-2">{p.title}</h3>
              <p className="text-sm text-subtle font-light leading-relaxed mb-4">{p.body}</p>
              <span className="inline-block text-[11px] font-semibold text-[#D4A574] uppercase tracking-wider bg-[#D4A574]/8 rounded-full px-3 py-1.5">
                {p.stat}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBrief;
