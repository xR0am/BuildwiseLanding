import React from "react";
import { Egg } from "lucide-react";
import { Link } from "wouter";
import KnowledgeGraph3D from "@/components/IntelligenceAgents/KnowledgeGraph3D";
import HubHeroAnimation from "@/components/Home/HubHeroAnimation";
import VerticalHubSection from "@/components/Home/VerticalHubSection";
import HowItWorksBrief from "@/components/Home/HowItWorksBrief";
import HubFAQSection from "@/components/Home/HubFAQSection";
import { BUILDWISE_CAL_URL, VERTICAL_ROUTES } from "@/lib/site";

export default function Home() {
  return (
    <div className="w-full relative bg-[#F8F7F5] font-sans selection:bg-[#D4A574]/20 selection:text-[#2D1B10] overflow-x-hidden min-h-screen">
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

      <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="text-[#D4A574] flex items-center justify-center">
            <Egg className="h-6 w-6" />
          </div>
          <span className="font-sans text-sm font-bold tracking-tight text-[#1A1A1A] uppercase">
            Buildwise Studios
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#verticals"
            className="text-[14px] font-medium text-subtle hover:text-[#1A1A1A] transition-colors"
          >
            Verticals
          </a>
          <a
            href="#process"
            className="text-[14px] font-medium text-subtle hover:text-[#1A1A1A] transition-colors"
          >
            How It Works
          </a>
        </nav>

        <a
          href={BUILDWISE_CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden bg-[#D4A574] text-[#2D1B10] text-xs font-bold px-5 py-2 rounded shadow-sm ring-1 ring-white/10 transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
        >
          <div className="absolute inset-0 transform -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
          <span className="relative z-20">Book a scoping call</span>
        </a>
      </header>

      <div className="relative z-10 flex flex-col w-full">
        <section className="relative min-h-[88vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-16 gap-12 lg:gap-16">
          <div className="max-w-xl space-y-7 relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] animate-pulse" />
              <span className="font-sans text-[10px] font-medium text-slate-500 tracking-tight uppercase">
                Vertical AI Agents
              </span>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-[#1A1A1A] leading-[1.08]">
              AI agents built for{" "}
              <span className="text-[#D4A574]">your industry</span> — not everyone&apos;s inbox
            </h1>

            <p className="font-sans text-lg text-slate-600 font-light leading-relaxed max-w-lg">
              Buildwise builds workflow agents for professional services. Pick your vertical for the
              full story — or scope a custom build if you&apos;re not on the list yet.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#verticals"
                className="group relative overflow-hidden bg-[#D4A574] text-[#2D1B10] text-sm font-bold px-8 py-3.5 rounded shadow-lg shadow-[#D4A574]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center gap-2"
              >
                <div className="absolute inset-0 transform -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                <span className="relative z-20">See our verticals</span>
              </a>
              <Link
                href="/ai-product-manager"
                className="text-sm font-semibold text-[#1A1A1A] hover:text-[#D4A574] transition-colors"
              >
                Scope with Jason →
              </Link>
            </div>
          </div>

          <HubHeroAnimation />
        </section>

        <VerticalHubSection />
        <HowItWorksBrief />

        <section className="relative py-20 md:py-24 bg-[#1A1A1A] text-white border-t border-white/10">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Not sure where to start?
            </h2>
            <p className="text-subtle font-light leading-relaxed mb-8">
              Jason scopes your workflows in about ten minutes — routes you to a live vertical or
              sends a custom proposal within 24 hours.
            </p>
            <Link
              href="/ai-product-manager"
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#D4A574] text-[#2D1B10] px-8 py-3.5 rounded-lg text-sm font-bold transition shadow-lg shadow-[#D4A574]/20 hover:-translate-y-0.5"
            >
              <span className="relative z-20">Talk to Jason</span>
            </Link>
          </div>
        </section>

        <HubFAQSection />

        <footer className="bg-white py-16 px-6 md:px-12 lg:px-20 border-t border-border text-left">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-sm space-y-3">
              <div className="flex items-center gap-2">
                <Egg className="h-5 w-5 text-[#D4A574]" />
                <span className="font-bold text-sm tracking-tight text-[#1A1A1A] uppercase">
                  Buildwise Studios
                </span>
              </div>
              <p className="text-xs text-subtle leading-relaxed">
                Vertical AI agents for professional services. Built in Hong Kong.
              </p>
              <p className="text-[10px] text-border">© 2025 Buildwise Studios. All rights reserved.</p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href={VERTICAL_ROUTES.headhunting} className="text-subtle hover:text-[#D4A574] transition-colors">
                Executive search agents →
              </Link>
              <Link href={VERTICAL_ROUTES.legal} className="text-subtle hover:text-[#D4A574] transition-colors">
                Hong Kong legal agents →
              </Link>
              <a
                href="mailto:contact@buildwise-studios.com"
                className="text-subtle hover:text-[#D4A574] transition-colors mt-2"
              >
                contact@buildwise-studios.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
