import React from "react";
import { Github } from "lucide-react";
import { LEGAL_CAL_URL, LEGAL_SCOPING_CTA, LEGAL_TOOLKIT_GITHUB_URL } from "@/lib/legal-toolkit";

const BuiltInPublicSection: React.FC = () => (
  <section id="toolkit" className="relative py-16 md:py-20 bg-white border-y border-border/60 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#D4A57408_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-left">
          <p className="text-[10px] font-bold text-[#D4A574] uppercase tracking-[0.3em] mb-4">
            Built in public
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-4">
            We maintain the reference toolkit for Hong Kong legal workflows
          </h2>
          <p className="text-subtle text-base leading-relaxed max-w-lg">
            Contracts, corporate work, privacy, employment, regulatory monitoring — practice-area
            agents your team can explore. Most organisations hire us to wire it to their playbooks,
            document systems, and escalation rules.
          </p>
          <p className="text-sm text-subtle mt-4 font-medium">
            Free to explore.{" "}
            <span className="text-[#1A1A1A]">Most firms prefer we implement it for them.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          <a
            href={LEGAL_TOOLKIT_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-[#F8F7F5] hover:border-[#D4A574]/40 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
              <Github className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1A1A1A] text-sm">View on GitHub</div>
              <div className="text-xs text-subtle mt-0.5">
                claude-for-hk-law · for IT &amp; innovation teams
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-auto text-subtle group-hover:translate-x-0.5 transition-transform shrink-0"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <a
            href={LEGAL_CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-[#D4A574] bg-[#D4A574]/5 hover:bg-[#D4A574]/10 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D4A574] text-[#2D1B10] flex items-center justify-center shrink-0 font-bold text-lg">
              BW
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1A1A1A] text-sm">{LEGAL_SCOPING_CTA}</div>
              <div className="text-xs text-subtle mt-0.5">
                We implement for firms, in-house teams, and businesses
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-auto text-[#D4A574] group-hover:translate-x-0.5 transition-transform shrink-0"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default BuiltInPublicSection;
