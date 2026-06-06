import React from "react";

const integrations = [
  { name: "SharePoint", icon: "simple-icons:microsoftsharepoint", color: "#0364B8" },
  { name: "Slack", icon: "fa6-brands:slack", color: "#4A154B" },
  { name: "Outlook", icon: "fa6-brands:microsoft", color: "#0078D4" },
  { name: "Google Drive", icon: "fa6-brands:googledrive", color: "#34A853" },
  { name: "HKLII", icon: null, color: "#1A1A1A", mono: true },
  { name: "e-Legislation", icon: null, color: "#1A1A1A", mono: true },
];

const IntegrationsLogos: React.FC = () => (
  <section className="relative py-12 md:py-16 bg-transparent overflow-hidden">
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F5]/0 via-[#F8F7F5]/60 to-[#F8F7F5]/0" />
      <div className="absolute inset-0 backdrop-blur-[4px]" />
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col items-center gap-8 md:gap-10">
        <p className="text-[10px] font-bold text-[#1A1A1A]/40 tracking-[0.4em] uppercase text-center">
          Works where your matters already live
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/70 border border-white/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:bg-white hover:scale-105 hover:shadow-2xl hover:border-[#D4A574]/40"
            >
              <div
                className="text-2xl md:text-3xl text-slate-400 transition-all duration-300 group-hover:text-[var(--hover-color)] flex items-center justify-center"
                style={{ "--hover-color": item.color } as React.CSSProperties}
              >
                {item.mono ? (
                  <span className="text-sm font-bold font-mono text-[#1A1A1A]">{item.name}</span>
                ) : (
                  <iconify-icon icon={item.icon!} />
                )}
              </div>
              {!item.mono && (
                <span className="text-sm md:text-base font-semibold text-slate-600 transition-colors duration-300 group-hover:text-[#1A1A1A]">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default IntegrationsLogos;
