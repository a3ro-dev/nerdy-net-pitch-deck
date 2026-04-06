"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const useOfFunds = [
  { label: "Product & Engineering", pct: "43%", amount: "$650K", detail: "2 engineers, 1 designer, AI infra" },
  { label: "Growth & Community",    pct: "27%", amount: "$400K", detail: "Community manager, marketer, events" },
  { label: "Operations & Founder",  pct: "20%", amount: "$300K", detail: "Ops lead, legal, compliance, tools" },
  { label: "Runway & Buffer",       pct: "10%", amount: "$150K", detail: "18–19 months cushion" },
];

const milestones = [
  { when: "Month 12", bullets: ["15,000 active builders", "60 accelerator placements", "$550K revenue", "8 international markets"] },
  { when: "Month 18", bullets: ["40,000 active builders", "150 accelerator placements", "$3M ARR", "Series A ready: $8–12M at $40–50M"] },
];

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section id="ask" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236,168,214,0.25), transparent 40%)`,
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
              {/* Left — raise details */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                  <span className="w-8 h-px bg-foreground/30" />
                  The Ask
                </span>

                <h2 className="text-6xl md:text-7xl lg:text-[72px] font-display tracking-tight mb-4 leading-[0.95]">
                  Raising
                  <br />
                  <span className="text-[#eca8d6]">$1.5M Seed</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
                  ~$86K/month burn &rarr; 17–18 months runway. Early sponsorship and cohort revenue extend this to ~20 months.
                </p>

                {/* Use of funds */}
                <div className="mb-10 space-y-3">
                  {useOfFunds.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="flex-1 flex items-center gap-3">
                        <div
                          className="h-2 bg-[#eca8d6] shrink-0 transition-all duration-1000"
                          style={{
                            width: isVisible ? `${parseInt(item.pct)}%` : "0%",
                            maxWidth: "120px",
                          }}
                        />
                        <span className="text-sm text-foreground font-medium whitespace-nowrap">{item.label}</span>
                      </div>
                      <span className="text-sm font-mono text-muted-foreground shrink-0">{item.amount}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  >
                    Book a call
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-6 font-mono">
                  [Founder Name] &middot; [Email] &middot; [Calendar Link]
                </p>
              </div>

              {/* Right — milestones */}
              <div className="hidden lg:block w-[480px] shrink-0">
                <p className="text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest">
                  18-Month Milestones
                </p>
                <div className="flex flex-col gap-4">
                  {milestones.map((m) => (
                    <div key={m.when} className="p-6 border border-foreground/10 bg-foreground/[0.02]">
                      <span className="text-xs font-mono text-[#eca8d6] block mb-3">{m.when}</span>
                      <ul className="space-y-2">
                        {m.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-3.5 h-3.5 text-[#eca8d6] shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bridge image */}
                <div className="mt-6 h-40 overflow-hidden">
                  <img
                    src="/images/bridge.png"
                    alt="Network connections"
                    className="w-full h-full object-contain object-bottom opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
