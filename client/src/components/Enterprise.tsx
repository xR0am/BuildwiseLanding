import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Enterprise() {
  const [, setLocation] = useLocation();

  return (
    <section id="enterprise" className="py-24 bg-warm-off-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-warm-charcoal mb-8 text-center leading-tight">
          Need Custom AI Agents?
        </h2>
        <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto text-lg font-light leading-relaxed">
          Buildwise Studios builds vertical-specific AI agents for professional services. Get custom solutions tailored to your industry's unique challenges and transform your business operations.
        </p>

        <button
          onClick={() => setLocation("/ai-product-manager")}
          className="group relative overflow-hidden bg-warm-amber text-warm-brown text-sm font-bold px-8 py-4 rounded-lg shadow-lg shadow-warm-amber/20 transition-all hover:-translate-y-0.5 hover:shadow-xl mx-auto block flex items-center gap-2"
        >
          <div className="shimmer-layer absolute inset-0 transform -translateX-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform"></div>
          <span className="relative z-20">Talk to Our AI Product Manager →</span>
        </button>
      </div>
    </section>
  );
}
