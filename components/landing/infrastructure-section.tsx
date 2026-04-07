"use client";

import { useEffect, useState, useRef } from "react";

const journey = [
  {
    phase: "Week 1",
    title: "Onboarding",
    nodes: "Intake",
    status: "entry",
    description: "Apply with active project proof. Get sorted into your house. Join first accountability cohort. Set first public streak goal.",
  },
  {
    phase: "Weeks 2–8",
    title: "Execution Loop",
    nodes: "Daily build",
    status: "active",
    description: "Post daily progress updates. Maintain streaks. Build in public. Get feedback from peers and mentors. Earn house points. Climb leaderboards.",
  },
  {
    phase: "Weeks 8–12",
    title: "Team Formation",
    nodes: "Co-founder match",
    status: "active",
    description: "Use AI matching to find complementary cofounders. Validate fit through shared building sprints. Lock in team dynamics before launching together.",
  },
  {
    phase: "Month 4+",
    title: "Acceleration Path",
    nodes: "Pitch room",
    status: "milestone",
    description: "Qualify for pitch rooms based on shipping velocity. Present to accelerator partners and operators. Get direct intros. Transition from builder to backed founder.",
  },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % journey.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/20" />
            User Journey
          </span>

          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-stretch">
            {/* Pipeline map visual */}
            <div
              className={`w-48 lg:w-72 xl:w-80 shrink-0 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-full h-full border border-foreground/10 bg-foreground/[0.02] p-4 lg:p-6">
                <p className="text-xs font-mono text-muted-foreground mb-4">FOUNDER PIPELINE</p>
                <div className="space-y-3">
                  {[
                    "Solo builder",
                    "Streak performer",
                    "Team contributor",
                    "Pitch finalist",
                    "Funded founder",
                  ].map((node, idx) => (
                    <div key={node} className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="w-5 text-[#eca8d6] font-mono">{idx + 1}</span>
                      <span>{node}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="flex flex-col justify-center">
              <h2
                className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Solo builder
                <br />
                <span className="text-muted-foreground">to funded founder.</span>
              </h2>

              <p
                className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg transition-all duration-1000 delay-100 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                A structured four-phase path from first streak to first check. Every mechanic accelerates the transition.
              </p>
            </div>
          </div>
        </div>

        {/* Journey phases */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Big active card */}
          <div
            className={`lg:col-span-8 relative p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Animated dots background */}
            <div className="absolute inset-0 opacity-40">
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                <defs>
                  <style>{`
                    @keyframes drawLine {
                      0%   { stroke-dashoffset: 1000; opacity: 0; }
                      15%  { opacity: 1; }
                      70%  { opacity: 0.7; }
                      100% { stroke-dashoffset: 0; opacity: 0; }
                    }
                    .connecting-line {
                      stroke: #eca8d6;
                      stroke-width: 1.2;
                      fill: none;
                      stroke-dasharray: 1000;
                      animation: drawLine 3s ease-in-out infinite;
                    }
                  `}</style>
                </defs>
                {[...Array(12)].map((_, i) => {
                  const x1 = 10 + (i % 4) * 25;
                  const y1 = 15 + Math.floor(i / 4) * 35;
                  const x2 = 10 + ((i + 1) % 4) * 25;
                  const y2 = 15 + Math.floor((i + 1) / 4) * 35;
                  return (
                    <line
                      key={`line-${i}`}
                      x1={`${x1}%`} y1={`${y1}%`}
                      x2={`${x2}%`} y2={`${y2}%`}
                      className="connecting-line"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  );
                })}
              </svg>
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#eca8d6]"
                  style={{
                    left: `${10 + (i % 4) * 25}%`,
                    top: `${15 + Math.floor(i / 4) * 35}%`,
                    animation: `pulse 2s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <span className="font-mono text-xs text-[#eca8d6]">
                Phase {activePhase + 1} of {journey.length}
              </span>
              <div className="mt-6 mb-4">
                <span className="text-5xl lg:text-6xl font-display">{journey[activePhase].phase}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-display mb-4">{journey[activePhase].title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                {journey[activePhase].description}
              </p>
            </div>
          </div>

          {/* Phase selector stack */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {journey.map((phase, index) => (
              <div
                key={phase.phase}
                className={`p-5 border transition-all duration-300 cursor-default ${
                  activePhase === index
                    ? "border-foreground/30 bg-foreground/[0.04]"
                    : "border-foreground/10"
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => setActivePhase(index)}
                onMouseEnter={() => setActivePhase(index)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activePhase === index ? "bg-[#eca8d6]" : "bg-foreground/20"
                    }`}
                  />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {phase.status}
                  </span>
                </div>
                <span className="font-medium block text-sm">{phase.phase}</span>
                <span className="text-xs text-muted-foreground">{phase.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing network note */}
        <div
          className={`mt-8 p-6 border border-foreground/10 flex flex-wrap items-center justify-between gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-muted-foreground text-sm max-w-xl">
            <strong className="text-foreground">Ongoing:</strong> Alumni stay active as mentors. Give back to new cohorts. Build long-term relationships. Create a multi-generational talent graph.
          </p>
          <span className="text-sm font-mono text-[#eca8d6]">Network effects compound over time</span>
        </div>
      </div>
    </section>
  );
}
