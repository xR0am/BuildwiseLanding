import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useLocation } from "wouter";
import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <section className="pt-24 pb-16 bg-warm-off-white overflow-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle warm radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#D4A57410,transparent_70%)] opacity-50"></div>
        {/* Noise/Paper texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center w-full">
          <div className="flex flex-col gap-6 mb-8 lg:mb-0 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-warm-amber animate-pulse"></span>
              <span className="font-sans text-[10px] font-medium text-slate-500 tracking-tight uppercase">
                Enterprise AI Solutions
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-warm-charcoal leading-[1.05]">
              Enterprise AI Agents Built <span className="text-warm-amber">For Your Industry</span>
            </h1>

            <p className="max-w-xl font-sans text-lg text-slate-600 font-light leading-relaxed">
              Buildwise Studios creates vertical-specific AI agents that transform professional services. Get custom solutions tailored to your unique challenges and scale with confidence.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setLocation("/ai-product-manager")}
                className="group relative overflow-hidden bg-warm-amber text-warm-brown text-sm font-bold px-8 py-3.5 rounded shadow-lg shadow-warm-amber/20 transition-all hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2"
              >
                <div className="shimmer-layer absolute inset-0 transform -translateX-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform"></div>
                <span className="relative z-20">Talk to AI Product Manager →</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 relative z-20">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>

              <button
                onClick={() => scrollToSection("enterprise")}
                className="group relative overflow-hidden bg-white text-warm-charcoal text-sm font-bold px-8 py-3.5 rounded shadow-sm ring-1 ring-warm-amber/10 transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98] flex items-center gap-2"
              >
                <div className="shimmer-layer absolute inset-0 transform -translateX-full bg-gradient-to-r from-transparent via-warm-amber/10 to-transparent group-hover:animate-shimmer z-10 transition-transform"></div>
                <span className="relative z-20">See Case Studies</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 relative z-20">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-full">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern technology team collaborating in bright office workspace"
              className="rounded-2xl shadow-2xl w-full max-w-full h-auto"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg max-w-xs">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                  alt="Happy customer testimonial avatar"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 truncate">It's live!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
