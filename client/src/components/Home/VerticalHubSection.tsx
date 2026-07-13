import React from "react";
import { Link } from "wouter";
import { VERTICAL_ROUTES } from "@/lib/site";

const verticals = [
  {
    id: "headhunting",
    name: "Executive Search",
    status: "Live",
    hook: "Intelligence agents for headhunting firms — market moves, CRM, and admin off the partner's plate.",
    href: VERTICAL_ROUTES.headhunting,
    cta: "Explore executive search",
  },
  {
    id: "legal",
    name: "Hong Kong Legal",
    status: "Live",
    hook: "Workflow agents placed into firms, in-house teams, and businesses — contract triage, review, and deadlines.",
    href: VERTICAL_ROUTES.legal,
    cta: "Explore legal workflows",
  },
  {
    id: "custom",
    name: "Your Industry",
    status: "Scoping",
    hook: "Not on the list yet? Ten minutes with our scoping agent to map workflows and see if we can staff agents for you.",
    href: VERTICAL_ROUTES.scoping,
    cta: "Scope your workflows",
  },
];

const VerticalHubSection: React.FC = () => (
  <section id="verticals" className="relative z-30 py-24 md:py-32 bg-[#F8F7F5] border-t border-border/40">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      <div className="text-center mb-14 md:mb-16">
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-tight uppercase mb-4">
          Pick Your Vertical
        </h2>
        <p className="font-sans text-lg text-subtle font-light max-w-2xl mx-auto leading-relaxed">
          Each industry gets purpose-built agents with defined roles. Choose yours below — agent
          roles, examples, and next steps live on that page.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {verticals.map((v) => (
          <Link key={v.id} href={v.href}>
            <article className="group h-full bg-white rounded-3xl border border-border/40 shadow-xl shadow-[#D4A574]/5 p-6 md:p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#D4A574]/30 cursor-pointer">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="font-sans text-lg font-bold text-[#1A1A1A] uppercase tracking-tight">
                  {v.name}
                </h3>
                <span
                  className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${
                    v.status === "Live"
                      ? "text-[#25D366] border-[#25D366]/25 bg-[#25D366]/5"
                      : "text-[#D4A574] border-[#D4A574]/25 bg-[#D4A574]/5"
                  }`}
                >
                  {v.status}
                </span>
              </div>
              <p className="text-sm text-subtle font-light leading-relaxed flex-1 mb-8">{v.hook}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#D4A574] group-hover:gap-3 transition-all">
                {v.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default VerticalHubSection;
