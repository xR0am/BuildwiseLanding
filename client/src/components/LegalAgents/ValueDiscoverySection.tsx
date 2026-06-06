import React from "react";
import { LEGAL_CAL_URL, LEGAL_SCOPING_CTA } from "@/lib/legal-toolkit";

const ValueDiscoverySection: React.FC = () => (
  <section
    id="value-discovery"
    className="sm:px-6 lg:px-8 animate-fadeSlideIn z-10 max-w-7xl mx-auto pt-20 pr-4 pb-16 pl-4 relative"
  >
    <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-[#1A1A1A] backdrop-blur">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4A574]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#D4A574]/5 blur-3xl" />

      <div className="text-center py-16 px-6">
        <p className="text-lg font-medium text-[#D4A574] mt-4 mb-4 max-w-3xl mx-auto">
          We built legal workflow agents that take over repeatable work — so lawyers can focus on
          judgment, clients, and matters that justify their time.
        </p>
        <h2 className="sm:text-5xl text-4xl font-semibold text-white tracking-tight">
          Discover What Time Liberation Is Worth to You
        </h2>
        <p className="mt-4 text-base md:text-lg text-zinc-300/90 max-w-2xl mx-auto">
          Every organisation is different — firm, in-house team, or business building out legal
          capability. Let&apos;s map your workflows and see which agents return the most capacity
          first.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href={LEGAL_CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#D4A574] text-[#2D1B10] text-sm font-bold px-8 py-3.5 rounded shadow-lg shadow-[#D4A574]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <span>{LEGAL_SCOPING_CTA}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <p className="mt-8 text-xs text-zinc-400 font-medium">
          No pricing discussion — pure value discovery
        </p>
      </div>
    </div>
  </section>
);

export default ValueDiscoverySection;
