import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";
import { useLocation } from "wouter";
import { scrollToSection } from "@/lib/scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleEnterpriseClick = () => {
    setLocation("/");
    setTimeout(() => {
      scrollToSection("enterprise");
    }, 100);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 overflow-hidden">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-warm-amber" />
            <div className="ml-2 flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Buildwise Studios</span>
              <span className="text-xs text-gray-500">Enterprise AI Solutions</span>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={handleEnterpriseClick}
              className="bg-warm-amber hover:brightness-110"
            >
              Request Demo
            </Button>
            <Button
              variant="outline"
              onClick={handleEnterpriseClick}
              className="border-warm-amber text-warm-amber hover:bg-warm-amber-10"
            >
              Enterprise Solutions
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] overflow-hidden">
                <div className="flex flex-col gap-4 mt-8">
                  <Button
                    onClick={() => {
                      handleEnterpriseClick();
                      setIsOpen(false);
                    }}
                    className="bg-warm-amber hover:brightness-110 w-full text-gray-900 font-semibold"
                  >
                    Request Demo →
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleEnterpriseClick();
                      setIsOpen(false);
                    }}
                    className="w-full border-warm-amber text-warm-amber hover:bg-warm-amber-10"
                  >
                    Enterprise Solutions
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
