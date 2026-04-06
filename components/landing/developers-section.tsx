"use client";

import { useState, useEffect, useRef } from "react";

const competitors = [
  {
    name: "Discord Communities",
    category: "Chat Platforms",
    why: "No accountability. No forcing function to ship. Ideas die in threads.",
    advantage: "Execution accountability, public streaks, structured progression.",
  },
  {
    name: "YC Startup School",
    category: "Online Courses",
    why: "Built for company-stage founders. No social dynamics or peer pressure. No team formation.",
    advantage: "Teen-focused, gamified, team matching, real-time accountability.",
  },
  {
    name: "Buildspace (shut down 2024)",
    category: "Builder Programs",
    why: "Passive engagement model. No retention mechanics beyond novelty. 30K participants, still shut down.",
    advantage: "Streaks + houses create ongoing engagement. Multi-generational network effects.",
  },
  {
    name: "Indie Hackers",
    category: "Founder Forums",
    why: "Optimized for revenue-generating businesses. Passive content consumption. Not teen-specific.",
    advantage: "Execution-first, accountability mechanics, age-appropriate progression.",
  },
  {
    name: "Replit Community",
    category: "Dev Platforms",
    why: "Focused on coding environment, not founder execution. No accountability or progression systems.",
    advantage: "Multi-disciplinary building, accountability streaks, team formation, accelerator pipeline.",
  },
  {
    name: "School Incubators",
    category: "Institutional",
    why: "Designed for college students. Require institutional affiliation. Slow academic timelines.",
    advantage: "Accessible to high schoolers. Fast-paced. Nights and weekends friendly. Global access.",
  },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="competitive" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute bottom-0 right-0 w-[55%] h-[85%] pointer-events-none transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2813%29-OQ2DiR3ElVsUg8kTvTL1kC5A3Q6maM.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Competitive Landscape
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9]">
            Not competing.
            <br />
            <span className="text-muted-foreground">Replacing.</span>
          </h2>
        </div>

        {/* Competitor table — left half only */}
        <div
          className={`max-w-[55%] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseLeave={() => setActive(null)}
        >
          <div className="space-y-2">
            {competitors.map((comp, i) => (
              <div
                key={comp.name}
                className={`border p-4 cursor-default transition-all duration-300 ${
                  active === i ? "border-foreground/30 bg-foreground/[0.04]" : "border-foreground/10 hover:border-foreground/20"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 60 + 200}ms` }}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive((prev) => (prev === i ? null : i))}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 pt-0.5">
                    <span className="text-xs font-mono text-muted-foreground block">{comp.category}</span>
                    <span className="font-medium text-sm">{comp.name}</span>
                  </div>
                  <div className={`flex-1 overflow-hidden transition-all duration-300 ${active === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1 border-t border-foreground/10">
                      <span className="text-foreground/60">Their gap: </span>{comp.why}
                    </p>
                    <p className="text-xs text-[#eca8d6] leading-relaxed mt-1">
                      <span>Our edge: </span>{comp.advantage}
                    </p>
                  </div>
                  {active !== i && (
                    <span className="text-xs text-muted-foreground font-mono shrink-0 self-center hidden md:inline">hover to expand</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
