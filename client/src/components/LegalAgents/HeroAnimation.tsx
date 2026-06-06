import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Scene = "friction" | "triage" | "ecosystem";

const HeroAnimation: React.FC = () => {
  const [scene, setScene] = useState<Scene>("friction");

  useEffect(() => {
    const durations: Record<Scene, number> = {
      friction: 5000,
      triage: 7000,
      ecosystem: 5000,
    };
    const t = setTimeout(() => {
      setScene((current) => {
        if (current === "friction") return "triage";
        if (current === "triage") return "ecosystem";
        return "friction";
      });
    }, durations[scene]);
    return () => clearTimeout(t);
  }, [scene]);

  return (
    <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A574]/20 via-transparent to-[#D4A574]/10 rounded-full blur-3xl scale-125" />
      <div className="w-full h-full relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-2xl z-20 min-h-[380px]">
        <AnimatePresence mode="wait">
          {scene === "friction" && <FrictionScene key="friction" />}
          {scene === "triage" && <TriageScene key="triage" />}
          {scene === "ecosystem" && <EcosystemScene key="ecosystem" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FrictionScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex flex-col bg-[#F0F2F5]"
  >
    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-medium bg-white/80 px-3 py-1 rounded-full border border-slate-200 z-20">
      Without Buildwise Agents
    </div>
    <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-border shadow-sm z-10 mt-10">
      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
        JL
      </div>
      <div className="text-left">
        <div className="text-sm font-semibold text-[#1A1A1A]">Jennifer (Legal)</div>
        <div className="text-[10px] text-subtle">In-house · Commercial</div>
      </div>
    </div>
    <div className="flex-1 p-4 flex flex-col justify-end gap-3 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="self-start max-w-[88%] bg-white border border-border rounded-xl rounded-tl-sm px-3 py-2.5 text-xs shadow-sm text-left"
      >
        <span className="text-[10px] text-subtle block mb-1">BD · 16:47</span>
        Can legal review this vendor contract before we sign tomorrow? They&apos;re pushing uncapped
        liability.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="self-end max-w-[85%] bg-[#E7FFDB] border border-[#dcf8c6] rounded-xl rounded-tr-sm px-3 py-2.5 text-xs shadow-sm text-left"
      >
        On it — but I&apos;m in a closing until 8. Might not get to it tonight.
        <span className="text-[9px] text-subtle block text-right mt-1">17:02 ✓✓</span>
      </motion.div>
    </div>
  </motion.div>
);

const TriageScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex flex-col bg-white"
  >
    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-[#D4A574] font-semibold bg-[#D4A574]/10 px-3 py-1 rounded-full border border-[#D4A574]/20 z-20">
      Agent draft · for solicitor review
    </div>
    <div className="p-5 pt-12 space-y-3 text-left overflow-y-auto">
      <div className="text-[10px] font-mono text-subtle uppercase tracking-wider">
        Contract Triage · 2 min later
      </div>
      <div className="rounded-lg border border-border bg-slate-50 p-3 text-xs leading-relaxed">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-800 border border-yellow-200">
            YELLOW
          </span>
          <span className="text-subtle">Escalate to partner</span>
        </div>
        <p className="font-semibold text-[#1A1A1A] mb-1">Issue</p>
        <p className="text-subtle mb-2">
          Clause 9 — uncapped indirect liability vs playbook cap at 12 months fees.
        </p>
        <p className="font-semibold text-[#1A1A1A] mb-1">Conclusion</p>
        <p className="text-subtle">Do not sign without redline. Suggested markup attached.</p>
      </div>
      <p className="text-[10px] text-subtle italic">
        Solicitor verifies all citations and takes professional responsibility.
      </p>
    </div>
  </motion.div>
);

const EcosystemScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6"
  >
    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-subtle font-medium bg-white px-3 py-1 rounded-full border z-20">
      Agents operating within your environment
    </div>
    <div className="relative w-full max-w-[280px] aspect-square mt-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="w-14 h-14 bg-[#1A1A1A] text-[#D4A574] rounded-2xl shadow-xl flex items-center justify-center ring-4 ring-white">
          <iconify-icon icon="solar:scale-linear" className="text-2xl" />
        </div>
        <span className="text-[10px] font-bold mt-2 text-[#1A1A1A]">Legal Agent</span>
      </div>
      <div className="absolute top-4 left-0 bg-white border border-border px-2.5 py-2 rounded-lg shadow-sm text-[10px] font-semibold">
        iManage
      </div>
      <div className="absolute top-4 right-0 bg-white border border-border px-2.5 py-2 rounded-lg shadow-sm text-[10px] font-semibold font-mono">
        HKLII
      </div>
      <div className="absolute bottom-4 left-2 bg-white border border-border px-2.5 py-2 rounded-lg shadow-sm text-[10px] font-semibold flex items-center gap-1">
        <iconify-icon icon="fa6-brands:slack" className="text-sm text-[#4A154B]" />
        Slack
      </div>
      <div className="absolute bottom-4 right-2 bg-[#D4A574]/10 border border-[#D4A574]/30 px-2.5 py-2 rounded-lg text-[10px] font-semibold text-[#5c4a32]">
        Your playbook
      </div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <line x1="50%" y1="50%" x2="15%" y2="12%" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
        <line x1="50%" y1="50%" x2="85%" y2="12%" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
        <line x1="50%" y1="50%" x2="20%" y2="88%" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
        <line x1="50%" y1="50%" x2="80%" y2="88%" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      </svg>
    </div>
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="absolute bottom-8 text-center text-[10px] text-[#D4A574] font-bold uppercase tracking-[0.25em]"
    >
      One Agent · Your Matter Stack
    </motion.p>
  </motion.div>
);

export default HeroAnimation;
