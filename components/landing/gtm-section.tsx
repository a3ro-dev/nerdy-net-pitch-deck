"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const phases = [
  {
    number: "01",
    name: "Curated Launch",
    timeframe: "Months 1–3",
    kpi: "65% WAU · 40% 14-day streaks",
    description:
      "Start with 200 handpicked builders from existing networks — hackathon winners, Indie Hackers contributors, YC Startup School participants, school tech club leaders. Invite-only creates exclusivity and signal quality. High-touch onboarding ensures cultural fit and execution velocity.",
    channels: ["Hackathon winner outreach", "YC Startup School", "School tech clubs", "Indie Hackers"],
  },
  {
    number: "02",
    name: "Viral Expansion",
    timeframe: "Months 4–9",
    kpi: "2.5x viral coefficient · 10K builders",
    description:
      "Each builder gets 3 invites to extend to trusted peers. Shipped projects become social proof and referral engines. House competition drives recruitment for team strength. Integration with hackathon ecosystems for pipeline.",
    channels: ["3-invite referral system", "House competition", "Hackathon integrations", "Shipped project PR"],
  },
  {
    number: "03",
    name: "Accelerator Network",
    timeframe: "Months 10–18",
    kpi: "60+ placements · standard path established",
    description:
      "Launch 8–12 pitch rooms with partner accelerators. Public case studies of placed founders. PR around successful teen founder outcomes. Sponsored content in tech and founder media.",
    channels: ["Accelerator partnerships", "Founder PR", "Sponsor content", "Tech media"],
  },
  {
    number: "04",
    name: "Platform Dominance",
    timeframe: "Year 2+",
    kpi: "100K+ builders · recognized brand",
    description:
      "Become the default network for any teenager building anything. Launch international houses for global builder community. Expand to adjacent markets: college founders, indie builders, researcher networks.",
    channels: ["International houses", "Adjacent markets", "Brand campaigns", "Alumni flywheel"],
  },
];

const channels = [
  "Hackathon participants (direct)",
  "High school tech clubs",
  "Indie Hackers + Reddit",
  "YC Startup School",
  "Twitter/X founder community",
  "YouTube + podcast sponsorships",
];

export function GtmSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gtm" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <span
              className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-12 h-px bg-foreground/30" />
              Go-To-Market
            </span>
            <h2
              className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Four-phase
              <br />
              <span className="text-muted-foreground">playbook.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <p
              className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Curated launch to category dominance. Each phase unlocks the next — quality begets quality, velocity compounds velocity.
            </p>
          </div>
        </div>

        {/* Phase cards */}
        <div className="grid lg:grid-cols-4 gap-4 mb-12">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`relative p-6 lg:p-8 border overflow-hidden transition-all duration-500 cursor-default ${
                activePhase === i
                  ? "border-foreground bg-foreground/[0.04]"
                  : "border-foreground/10 hover:border-foreground/30"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={() => setActivePhase(i)}
            >
              <span className="font-mono text-xs text-muted-foreground block mb-4">{phase.number}</span>
              <h3 className="text-xl lg:text-2xl font-display mb-1">{phase.name}</h3>
              <span className="text-xs font-mono text-[#eca8d6] block mb-4">{phase.timeframe}</span>

              <p
                className={`text-sm text-muted-foreground leading-relaxed mb-6 transition-all duration-300 ${
                  activePhase === i ? "opacity-100 max-h-40" : "opacity-60 max-h-16 overflow-hidden"
                }`}
              >
                {phase.description}
              </p>

              <div className="space-y-1.5">
                {phase.channels.map((ch) => (
                  <div key={ch} className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <ArrowRight className="w-3 h-3 text-[#eca8d6] shrink-0" />
                    {ch}
                  </div>
                ))}
              </div>

              {/* KPI badge */}
              <div className="mt-6 pt-4 border-t border-foreground/10">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-1">KPI</span>
                <span className="text-xs font-mono">{phase.kpi}</span>
              </div>

              {/* Active bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eca8d6] origin-left transition-transform duration-500"
                style={{ transform: activePhase === i ? "scaleX(1)" : "scaleX(0)" }}
              />
            </div>
          ))}
        </div>

        {/* Distribution channels strip */}
        <div
          className={`p-6 lg:p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-5">Distribution channels</p>
          <div className="flex flex-wrap gap-3">
            {channels.map((ch) => (
              <span
                key={ch}
                className="px-3 py-1.5 border border-foreground/10 text-xs font-mono text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-colors"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
