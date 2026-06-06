import React, { useEffect, useState } from "react";
import { Egg, Github } from "lucide-react";
import KnowledgeGraph3D from "@/components/IntelligenceAgents/KnowledgeGraph3D";
import HeroAnimation from "@/components/LegalAgents/HeroAnimation";
import IntegrationsLogos from "@/components/LegalAgents/IntegrationsLogos";
import ValueDiscoverySection from "@/components/LegalAgents/ValueDiscoverySection";
import ShowcaseSection from "@/components/LegalAgents/ShowcaseSection";
import HowItWorks from "@/components/LegalAgents/HowItWorks";
import BuiltInPublicSection from "@/components/LegalAgents/BuiltInPublicSection";
import FAQSection from "@/components/LegalAgents/FAQSection";
import { trackWTPDiscovery } from "@/lib/analytics";
import {
  isToolkitReferrer,
  LEGAL_CAL_URL,
  LEGAL_SCOPING_CTA,
  LEGAL_TOOLKIT_GITHUB_URL,
} from "@/lib/legal-toolkit";

const whoThisIsFor = [
  {
    title: "Hong Kong law firms",
    desc: "Commercial, corporate, disputes, regulatory — any practice area drowning in repeatable first-pass work.",
  },
  {
    title: "In-house legal teams",
    desc: "From two-person GC offices to listed-company departments handling contracts, compliance, and board work.",
  },
  {
    title: "Businesses with growing legal workload",
    desc: "Scale-ups and SMEs where legal demand outpaces headcount — or where outside counsel needs better inputs from you.",
  },
  {
    title: "Teams ready for professional-grade AI",
    desc: "Every output is a draft for lawyer review. Escalation rules, privilege discipline, and Hong Kong conduct expectations built in.",
  },
];

const painPoints = [
  {
    title: "Sorting inbound contracts and NDAs",
    desc: "that pile up faster than lawyers can review them — often with no clear playbook to apply.",
  },
  {
    title: "Chasing deadlines nobody owns end to end",
    desc: "renewals, filings, consultation responses, and matter dates spread across email, spreadsheets, and memory.",
  },
  {
    title: "Rebuilding the same memos and checklists",
    desc: "contract reviews, escalation notes, and issue lists — from scratch, for every matter.",
  },
];

const LegalAgentsLanding: React.FC = () => {
  const [fromToolkit, setFromToolkit] = useState(false);

  useEffect(() => {
    document.title = "Legal Workflow Agents for Hong Kong | Buildwise Studios";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "AI agents for Hong Kong legal work — contract triage, first-pass review, and deadline tracking. For law firms, in-house teams, and businesses. Wired to your playbooks and document systems."
      );
    }
    setFromToolkit(isToolkitReferrer());
  }, []);

  return (
    <div className="w-full relative bg-[#F8F7F5] font-sans selection:bg-[#D4A574]/20 selection:text-[#2D1B10] overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#D4A57410,transparent_70%)] opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <KnowledgeGraph3D />

      <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="text-[#D4A574] flex items-center justify-center">
            <Egg className="h-6 w-6" />
          </div>
          <span className="font-sans text-sm font-bold tracking-tight text-[#1A1A1A] uppercase">
            Legal Workflow Agents
            <span className="ml-2 text-[10px] text-subtle font-medium lowercase">
              by Buildwise Studios
            </span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#showcase" className="text-[14px] font-medium text-subtle hover:text-[#1A1A1A] transition-colors">
            Agents
          </a>
          <a href="#toolkit" className="text-[14px] font-medium text-subtle hover:text-[#1A1A1A] transition-colors">
            Toolkit
          </a>
          <a href="#process" className="text-[14px] font-medium text-subtle hover:text-[#1A1A1A] transition-colors">
            How It Works
          </a>
          <a href="#value-discovery" className="text-[14px] font-medium text-subtle hover:text-[#1A1A1A] transition-colors">
            Value Discovery
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              trackWTPDiscovery("navigation", "jason_wtp");
              window.open(LEGAL_CAL_URL, "_blank", "noopener,noreferrer");
            }}
            className="group relative overflow-hidden bg-[#D4A574] text-[#2D1B10] text-xs font-bold px-5 py-2 rounded shadow-sm ring-1 ring-white/10 transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
            type="button"
          >
            <div className="absolute inset-0 transform -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform" />
            <span className="relative z-20">{LEGAL_SCOPING_CTA}</span>
          </button>
        </div>
      </header>

      <div className="relative z-10 flex flex-col w-full">
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
          <div className="max-w-2xl space-y-8 relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] animate-pulse" />
              <span className="font-sans text-[10px] font-medium text-slate-500 tracking-tight uppercase">
                24/7 Legal Operations
              </span>
            </div>

            {fromToolkit && (
              <div className="rounded-xl border border-[#D4A574]/30 bg-white/90 px-4 py-3 text-sm text-subtle leading-relaxed shadow-sm">
                <span className="font-semibold text-[#1A1A1A]">
                  You found our Hong Kong legal workflow toolkit.
                </span>{" "}
                We also implement and wire it for firms — playbooks, DMS, escalation rules.{" "}
                <a href="#toolkit" className="text-[#D4A574] font-semibold hover:underline">
                  See both paths →
                </a>
              </div>
            )}

            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-[#1A1A1A] leading-[1.05]">
              Your Legal Team Is Spending 20+ Hours a Month on Work Agents Should Handle
            </h1>

            <p className="max-w-xl font-sans text-lg text-slate-600 font-light leading-relaxed">
              Legal work is judgment, client relationships, and professional responsibility — not
              sorting inbound contracts, chasing renewal dates, or rebuilding the same review memo
              from scratch.
              <br />
              <br />
              <span className="text-[#1A1A1A] font-medium">
                What if you could delegate the repeatable work to agents that run in your
                environment, follow your playbooks, and hand you drafts ready for lawyer review?
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  trackWTPDiscovery("hero", "assessment");
                  window.open(LEGAL_CAL_URL, "_blank", "noopener,noreferrer");
                }}
                className="group relative overflow-hidden bg-[#D4A574] text-[#2D1B10] text-sm font-bold px-8 py-3.5 rounded shadow-lg shadow-[#D4A574]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2"
                type="button"
              >
                <div className="absolute inset-0 transform -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform" />
                <span className="relative z-20">{LEGAL_SCOPING_CTA}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 relative z-20">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              <a
                href="#showcase"
                className="text-sm font-semibold text-subtle hover:text-[#1A1A1A] transition-colors px-2"
              >
                See how it works ↓
              </a>
            </div>
          </div>

          <HeroAnimation />
        </section>

        <IntegrationsLogos />

        <section id="problem" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#F8F7F5]">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20 md:mb-24">
              <h2 className="font-sans text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-tight">
                Your Team Is Drowning in Repeatable Work That{" "}
                <span className="text-danger relative inline-block">
                  Doesn&apos;t Need a Lawyer&apos;s Judgment
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-danger/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="text-left">
                <p className="text-base font-medium text-subtle mb-8 uppercase tracking-wide">The Daily Struggle</p>
                <p className="text-xl md:text-2xl font-medium text-[#1A1A1A] mb-10 leading-snug">
                  Legal teams lose{" "}
                  <span className="text-[#D4A574]">15–25 hours per month</span> on work that
                  follows a pattern but still lands on a lawyer&apos;s desk:
                </p>
                <ul className="space-y-8">
                  {painPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group text-left">
                      <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-danger/10 text-danger flex items-center justify-center group-hover:bg-danger group-hover:text-white transition-colors duration-300">
                        <iconify-icon icon="solar:close-circle-linear" className="text-lg" />
                      </div>
                      <span className="text-lg text-subtle font-light leading-relaxed group-hover:text-[#1A1A1A] transition-colors">
                        <strong className="font-semibold text-[#1A1A1A]">{item.title}</strong>{" "}
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-12 lg:pt-12 text-left">
                <div className="relative pl-8 border-l-2 border-danger/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-danger border-4 border-white" />
                  <h3 className="text-xs font-bold tracking-widest text-danger uppercase mb-6">The Real Cost</h3>
                  <div className="text-4xl md:text-5xl font-mono font-medium text-[#1A1A1A] tracking-tighter mb-2">
                    1–2 fee-earners
                  </div>
                  <p className="text-subtle font-medium">
                    <span className="font-semibold">Worth of capacity per year</span> when
                    repeatable work stays on lawyers&apos; plates — or recovered when it moves to
                    agents trained on your playbooks.
                  </p>
                  <p className="text-sm text-subtle pt-2">
                    Yes, you could hire another paralegal — but they need training, business hours,
                    and supervision.{" "}
                    <span className="font-semibold">
                      Agents arrive with Hong Kong workflow patterns built in.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ValueDiscoverySection />
        <ShowcaseSection />
        <BuiltInPublicSection />
        <HowItWorks />

        <section className="relative z-30 py-32 md:py-48 bg-[#1A1A1A] text-white overflow-hidden border-t border-white/10 text-left">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#D4A574 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                  Who This Is For
                </h2>
                <p className="text-subtle text-lg font-light leading-relaxed">
                  We don&apos;t work with everyone. Buildwise is for Hong Kong organisations ready
                  to automate the repeatable — firms, in-house teams, and businesses that need legal
                  work done properly, not just faster.
                </p>
                <a
                  href={LEGAL_CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWTPDiscovery("problem", "assessment")}
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A574] text-[#2D1B10] px-6 py-3 text-sm font-bold transition-all shadow-[0_0_20px_rgba(212,165,116,0.2)] mt-8"
                >
                  <div className="absolute inset-0 transform -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform" />
                  <span className="relative z-20 font-bold">{LEGAL_SCOPING_CTA}</span>
                </a>
              </div>

              <div className="lg:col-span-7 grid gap-6">
                {whoThisIsFor.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4A574]/30 transition-colors duration-300"
                  >
                    <iconify-icon icon="solar:check-circle-bold" className="text-xl text-[#D4A574] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white">{item.title}</h3>
                      <p className="text-sm text-subtle mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQSection />

        <footer className="bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-border text-left">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-sm space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-[#D4A574] flex items-center justify-center">
                  <Egg className="h-5 w-5" />
                </div>
                <span className="font-bold text-sm tracking-tight text-[#1A1A1A] uppercase">
                  Legal Workflow Agents
                  <span className="ml-2 text-[10px] text-subtle font-medium lowercase">
                    by Buildwise Studios
                  </span>
                </span>
              </div>
              <p className="text-xs text-subtle leading-relaxed">
                Legal workflow agents for Hong Kong — firms, in-house teams, and businesses that
                need repeatable legal work handled with professional discipline.
              </p>
              <p className="text-[10px] text-subtle italic">
                All outputs are drafts for qualified lawyer review. Not legal advice.
              </p>
              <p className="text-[10px] text-border">© 2025 Buildwise Studios. All rights reserved.</p>
            </div>

            <div className="md:text-right space-y-3">
              <p className="text-xs text-subtle">We built the Hong Kong legal workflow toolkit in public.</p>
              <a
                href={LEGAL_TOOLKIT_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4A574] hover:underline"
              >
                <Github className="h-4 w-4" />
                View on GitHub — claude-for-hk-law
              </a>
              <p className="text-[10px] text-subtle max-w-xs md:ml-auto">
                For IT and innovation teams. Most firms book us to implement it.
              </p>
              <a
                href={LEGAL_CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-[#1A1A1A] hover:text-[#D4A574] transition-colors mt-2"
              >
                {LEGAL_SCOPING_CTA} →
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LegalAgentsLanding;
