import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Egg } from "lucide-react";

type Scene = "overload" | "route" | "clear";

const SCENE_MS: Record<Scene, number> = {
  overload: 4500,
  route: 5500,
  clear: 4500,
};

const HubHeroAnimation: React.FC = () => {
  const [scene, setScene] = useState<Scene>("overload");

  useEffect(() => {
    const next: Record<Scene, Scene> = {
      overload: "route",
      route: "clear",
      clear: "overload",
    };
    const t = setTimeout(() => setScene((s) => next[s]), SCENE_MS[scene]);
    return () => clearTimeout(t);
  }, [scene]);

  return (
    <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A574]/20 via-transparent to-[#D4A574]/10 rounded-full blur-3xl scale-125" />
      <div className="w-full h-full relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-2xl z-20 min-h-[380px]">
        <AnimatePresence mode="wait">
          {scene === "overload" && <OverloadScene key="overload" />}
          {scene === "route" && <RouteScene key="route" />}
          {scene === "clear" && <ClearScene key="clear" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

const OverloadScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex flex-col bg-[#F0F2F5] p-5"
  >
    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-4">
      Incoming work
    </p>
    <div className="flex-1 space-y-2 overflow-hidden">
      {[
        "NDA — needs review",
        "CRM update — candidate notes",
        "Contract renewal — 9 days",
        "Market intel — exec move",
        "Vendor MSA — liability clause",
      ].map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.35 }}
          className="bg-white rounded-lg px-3 py-2.5 border border-slate-200 shadow-sm text-xs text-[#1A1A1A]/80"
        >
          {item}
        </motion.div>
      ))}
    </div>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="text-[10px] text-slate-400 mt-3 text-center"
    >
      Everything lands on the same desk
    </motion.p>
  </motion.div>
);

const lanes = [
  { label: "Executive search", tag: "Intelligence" },
  { label: "Hong Kong legal", tag: "Legal" },
  { label: "Your workflow", tag: "Custom" },
];

const RouteScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-14 h-14 rounded-2xl bg-[#1A1A1A] flex items-center justify-center mb-8 shadow-lg"
    >
      <Egg className="h-7 w-7 text-[#D4A574]" strokeWidth={1.75} />
    </motion.div>
    <div className="w-full space-y-3">
      {lanes.map((lane, i) => (
        <motion.div
          key={lane.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.2 }}
          className="flex items-center gap-3"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
            className="h-px bg-[#D4A574]/50 shrink-0"
          />
          <div className="flex-1 rounded-lg border border-[#D4A574]/25 bg-[#D4A574]/5 px-3 py-2.5">
            <p className="text-[10px] font-mono text-[#D4A574] uppercase tracking-wide">{lane.tag}</p>
            <p className="text-xs font-medium text-[#1A1A1A] mt-0.5">{lane.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="text-[10px] text-slate-400 mt-6 text-center"
    >
      Vertical agents — not one generic chatbot
    </motion.p>
  </motion.div>
);

const ClearScene = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex flex-col justify-center bg-[#F8F7F5] p-6"
  >
    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-5">
      After routing
    </p>
    <div className="space-y-3">
      {[
        { status: "Routed", detail: "Standard NDA → business team", done: true },
        { status: "In review", detail: "MSA clause → lawyer queue", done: false },
        { status: "Alert sent", detail: "Renewal deadline → legal inbox", done: true },
      ].map((row, i) => (
        <motion.div
          key={row.detail}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.25 }}
          className="bg-white rounded-lg px-3 py-2.5 border border-slate-100 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-1">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + i * 0.25 }}
              className={`w-1.5 h-1.5 rounded-full ${row.done ? "bg-[#25D366]" : "bg-[#D4A574]"}`}
            />
            <span className="text-[10px] font-mono font-medium text-[#1A1A1A]/60 uppercase">
              {row.status}
            </span>
          </div>
          <p className="text-xs text-subtle">{row.detail}</p>
        </motion.div>
      ))}
    </div>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="text-xs font-medium text-[#1A1A1A] mt-6 text-center"
    >
      Your people focus on judgment — not inbox triage
    </motion.p>
  </motion.div>
);

export default HubHeroAnimation;
