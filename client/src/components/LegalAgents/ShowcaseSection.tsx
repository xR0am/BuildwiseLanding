import React from "react";
import { LEGAL_CAL_URL, LEGAL_SCOPING_CTA } from "@/lib/legal-toolkit";

const demos = [
  {
    id: "triage",
    name: "Contract Triage",
    hook: "Inbound NDAs, vendor terms, and sales contracts — sorted before they reach a fee-earner.",
    preview: (
      <ul className="space-y-2.5 text-xs text-subtle">
        <li className="flex gap-2.5 items-start">
          <span className="shrink-0 legal-mono text-[10px] font-medium text-[#1A1A1A]/70 w-14 pt-px">Sign</span>
          <span>Within playbook — route to business with standard positions</span>
        </li>
        <li className="flex gap-2.5 items-start">
          <span className="shrink-0 legal-mono text-[10px] font-medium text-[#D4A574] w-14 pt-px">Review</span>
          <span>Clause deviation — partner queue with flagged lines</span>
        </li>
        <li className="flex gap-2.5 items-start">
          <span className="shrink-0 legal-mono text-[10px] font-medium text-[#1A1A1A]/70 w-14 pt-px">Push back</span>
          <span>Off-playbook risk — hold signature, suggested response</span>
        </li>
      </ul>
    ),
    problem:
      "Lawyers and in-house teams spend hours each week on agreements that should never have reached a fee-earner.",
    value:
      "Only the hard ones hit a lawyer's desk. Business teams get a clear answer — every line flagged for review.",
  },
  {
    id: "review",
    name: "Contract Review",
    hook: "First-pass review against your playbook — memos and redline notes in house format.",
    preview: (
      <div className="text-xs space-y-2 leading-relaxed text-subtle">
        <p className="text-[10px] font-mono text-[#1A1A1A]/50 uppercase tracking-wide">Vendor MSA · 14:20</p>
        <p>
          <span className="text-[#1A1A1A] font-medium">Issue —</span> Liability cap missing vs playbook §4.2
        </p>
        <p>
          <span className="text-[#1A1A1A] font-medium">Suggested —</span> Cap at 12 months fees
        </p>
        <p className="text-[10px] text-[#1A1A1A]/45 pt-1 border-t border-[#1A1A1A]/08">
          Draft memo · solicitor verifies before send
        </p>
      </div>
    ),
    problem:
      "The same contract review memo gets rebuilt from scratch for every matter — even when the playbook hasn't changed.",
    value:
      "Structured first-pass in minutes. Your lawyers spend time on judgment calls, not reformatting analysis.",
  },
  {
    id: "deadlines",
    name: "Deadline Watcher",
    hook: "Renewals, filing dates, and consultation deadlines — flagged before anyone misses a window.",
    preview: (
      <ul className="space-y-2 text-xs">
        <li className="flex justify-between gap-3 py-1.5 border-b border-[#1A1A1A]/06">
          <span className="font-mono text-[10px] font-medium text-[#D4A574]">9d</span>
          <span className="text-subtle flex-1">Cancel-by · Acme SaaS MSA</span>
        </li>
        <li className="flex justify-between gap-3 py-1.5 border-b border-[#1A1A1A]/06">
          <span className="font-mono text-[10px] text-[#1A1A1A]/45">21d</span>
          <span className="text-subtle flex-1">Annual return · Co. reg.</span>
        </li>
        <li className="flex justify-between gap-3 py-1.5">
          <span className="font-mono text-[10px] text-[#1A1A1A]/45">14d</span>
          <span className="text-subtle flex-1">Consultation · LegCo paper</span>
        </li>
        <p className="text-[10px] text-[#1A1A1A]/40 pt-1">Weekly scan → legal inbox or Slack</p>
      </ul>
    ),
    problem:
      "Critical dates live in spreadsheets, inboxes, and someone's memory — until a deadline is missed.",
    value:
      "One register, automatic alerts, escalation drafts ready when a decision is needed — not after the window closes.",
  },
];

const DemoStep = ({
  label,
  content,
  success = false,
}: {
  label: string;
  content: string;
  success?: boolean;
}) => (
  <div
    className={`border-l-2 pl-4 text-left ${
      success ? "border-[#D4A574]" : "border-[#1A1A1A]/15"
    }`}
  >
    <span
      className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
        success ? "text-[#D4A574]" : "text-slate-400"
      }`}
    >
      {label}
    </span>
    <p
      className={`text-sm leading-relaxed ${
        success ? "font-semibold text-[#1A1A1A]" : "text-subtle font-light italic"
      }`}
    >
      {content}
    </p>
  </div>
);

const ShowcaseSection: React.FC = () => (
  <section id="showcase" className="relative z-30 py-24 md:py-32 bg-[#F8F7F5] overflow-hidden border-t border-border/40">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="font-sans text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4 uppercase">
          See Your Pain Points Disappear
        </h2>
        <p className="font-sans text-xl text-subtle font-light max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re a firm, an in-house team, or a business with growing legal workload —
          these are the workflows that steal time from work that actually needs a lawyer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {demos.map((demo) => (
            <div
              key={demo.id}
              className="bg-white rounded-3xl shadow-xl shadow-[#D4A574]/5 border border-border/40 overflow-hidden flex flex-col"
            >
              <div className="p-6 md:p-8">
                <h3 className="font-sans text-xl font-bold text-[#1A1A1A] uppercase tracking-tight mb-4">
                  {demo.name}
                </h3>
                <p className="font-sans text-sm text-subtle min-h-[3rem] mb-6">{demo.hook}</p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-8 aspect-[4/3] flex flex-col justify-center relative">
                  {demo.preview}
                  <span className="absolute bottom-3 left-3 text-[9px] uppercase font-bold tracking-widest text-subtle">
                    Example workflow
                  </span>
                </div>
                <div className="space-y-8">
                  <DemoStep label="Current Problem" content={demo.problem} />
                  <DemoStep label="Value Liberated" content={demo.value} success />
                </div>
              </div>
            </div>
        ))}
      </div>

      <div className="text-center pt-16">
        <p className="font-sans text-lg text-subtle mb-10 max-w-2xl mx-auto">
          Every result proves the efficiency we discover together on a scoping call.
        </p>
        <a
          href={LEGAL_CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#D4A574] text-[#2D1B10] px-10 py-4 rounded-xl text-sm font-bold transition shadow-lg shadow-[#D4A574]/20 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <div className="absolute inset-0 transform -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
          <span className="relative z-20">{LEGAL_SCOPING_CTA}</span>
        </a>
        <p className="text-[10px] text-subtle font-mono uppercase tracking-widest mt-6 opacity-60">
          Hong Kong Legal Practice · Value Discovery Framework
        </p>
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
