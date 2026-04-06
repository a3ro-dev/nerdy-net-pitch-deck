"use client";

import { useEffect, useState, useRef } from "react";

const quarters = [
  {
    period: "Q1 2026",
    label: "Curated Launch",
    status: "now",
    items: [
      "Close 200 handpicked founding builders",
      "Launch first 4 houses with sorting quiz",
      "Ship streak mechanics and daily check-ins",
      "Run first 2 pitch rooms with pilot accelerator partners",
      "Validate core retention loops",
    ],
  },
  {
    period: "Q2 2026",
    label: "Viral Mechanics",
    status: "next",
    items: [
      "Open invite system (3 invites per builder)",
      "Launch AI team matching beta",
      "Expand to 10 pitch rooms with 6 accelerator partners",
      "Ship leaderboards and house competition features",
      "Target: 2,000 active builders",
    ],
  },
  {
    period: "Q3 2026",
    label: "Accelerator Pipeline",
    status: "soon",
    items: [
      "First 20 accelerator placements",
      "Launch premium execution cohorts",
      "Ship advanced mentor matching",
      "International expansion (first 3 countries)",
      "Target: 8,000 active builders",
    ],
  },
  {
    period: "Q4 2026",
    label: "Platform Maturation",
    status: "soon",
    items: [
      "Hit 15,000 active builders",
      "60+ accelerator placements total",
      "Launch talent partnership program",
      "Ship mobile app (iOS and Android)",
      "First multi-generational houses (alumni mentoring)",
    ],
  },
  {
    period: "2027",
    label: "Scale + Dominance",
    status: "future",
    items: [
      "Expand to 100,000+ builders",
      "200+ annual accelerator placements",
      "Launch international house systems",
      "Expand to adjacent markets",
      "Marketplace features: fundraising, equity mgmt",
    ],
  },
  {
    period: "2028",
    label: "Ecosystem Expansion",
    status: "future",
    items: [
      "Nerdy Network Fund: direct investment in top builders",
      "API for third-party integrations",
      "White-label execution infrastructure for institutions",
      "Acquisition + partnership opportunities",
    ],
  },
];

const statusColors: Record<string, string> = {
  now:    "#eca8d6",
  next:   "#a78bfa",
  soon:   "#67e8f9",
  future: "currentColor",
};

export function RoadmapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredQuarter, setHoveredQuarter] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="roadmap" ref={sectionRef} className="relative py-32 lg:py-40 bg-[oklch(0.09_0.01_260)] text-white overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute h-px bg-white" style={{ top: `${10 * (i + 1)}%`, left: 0, right: 0 }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-px bg-white" style={{ left: `${12.5 * (i + 1)}%`, top: 0, bottom: 0 }} />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span
            className={`inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-white/20" />
            Roadmap
          </span>
          <h2
            className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Q1 2026
            <br />
            <span className="text-white/25">to ecosystem.</span>
          </h2>
        </div>

        {/* Timeline grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quarters.map((q, i) => (
            <div
              key={q.period}
              className={`relative p-6 lg:p-8 border transition-all duration-500 cursor-default ${
                hoveredQuarter === i
                  ? "border-white/30 bg-white/[0.04]"
                  : "border-white/10 hover:border-white/20"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 70}ms` }}
              onMouseEnter={() => setHoveredQuarter(i)}
              onMouseLeave={() => setHoveredQuarter(null)}
            >
              {/* Period + label */}
              <div className="flex items-start justify-between gap-2 mb-5">
                <div>
                  <span
                    className="text-2xl lg:text-3xl font-display block"
                    style={{ color: hoveredQuarter === i ? statusColors[q.status] : "white" }}
                  >
                    {q.period}
                  </span>
                  <span className="text-xs font-mono text-white/40 mt-0.5 block">{q.label}</span>
                </div>
                <span
                  className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-white/10 shrink-0"
                  style={{ color: statusColors[q.status] }}
                >
                  {q.status}
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-2">
                {q.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: statusColors[q.status] }}
                    />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    backgroundColor: statusColors[q.status],
                    width: hoveredQuarter === i ? "100%" : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          className={`mt-10 flex flex-wrap gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {Object.entries({ now: "Current focus", next: "Next quarter", soon: "This year", future: "Long-term" }).map(
            ([key, label]) => (
              <span key={key} className="flex items-center gap-2 text-xs font-mono text-white/40">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColors[key] }} />
                {label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
