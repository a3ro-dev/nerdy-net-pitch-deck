"use client";

import { useEffect, useState, useRef } from "react";

function buildAsciiPattern(rows: number, cols: number) {
  const lines: string[] = [];
  for (let row = 0; row < rows; row += 1) {
    let line = "";
    for (let col = 0; col < cols; col += 1) {
      const seed = (row * 31 + col * 17 + row * col * 7) % 23;
      line += seed > 15 ? "$" : " ";
    }
    lines.push(line);
  }
  return lines.join("\n");
}

const ASCII_BACKGROUND_PATTERN = buildAsciiPattern(60, 100);

const markets = [
  {
    label: "TAM",
    title: "Total Addressable Market",
    value: "$15–25B",
    description:
      "~2.0M high-intent teen and college builders globally. Embedded in the youth edtech and game-based learning market.",
    sublabel: "Global youth edtech + game-based learning",
  },
  {
    label: "SAM",
    title: "Serviceable Addressable Market",
    value: "$80M",
    description:
      "~800K high-intent builders in English-speaking, digitally native markets (US, UK, Canada, India). Annual revenue potential at $100 ARPU.",
    sublabel: "English-speaking digitally native builders",
  },
  {
    label: "SOM",
    title: "Serviceable Obtainable Market",
    value: "$10.5M",
    description:
      "150,000 active builders — our 3-year goal. ~19% penetration of SAM. $70 Year 3 ARPU target based on current cohort data.",
    sublabel: "150K builders · 19% SAM penetration · Year 3",
  },
];

const validationPoints = [
  {
    company: "Buildspace",
    outcome: "30K participants, $100M valuation — proved demand before shutdown in 2024.",
    metric: "$100M",
  },
  {
    company: "Replit",
    outcome: "Built $1.16B company targeting young hackers. 17M+ developers on platform.",
    metric: "$1.16B",
  },
  {
    company: "Indie Hackers",
    outcome: "Acquired by Stripe — proving the value of founder-focused networks.",
    metric: "Acquired",
  },
  {
    company: "Duolingo",
    outcome: "Streaks scaled a language app to multi-billion dollar business. Same mechanic, applied to founder execution.",
    metric: "$7B+",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
      setActiveIndex((prev) => (prev + 1) % markets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = markets[activeIndex];

  return (
    <section id="market" ref={sectionRef} className="relative py-32 lg:py-40 bg-foreground text-background overflow-hidden">
      {/* ASCII background pattern */}
      <div className="absolute inset-0 font-mono text-[10px] text-background/[0.02] leading-tight overflow-hidden whitespace-pre select-none" aria-hidden="true">
        {ASCII_BACKGROUND_PATTERN}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-16 lg:mb-20">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/40 mb-4">
              <span className="w-12 h-px bg-background/20" />
              Market Opportunity
            </span>
            <h2
              className={`text-4xl lg:text-5xl font-display transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Massive market,
              <span className="text-background/40"> broken infrastructure.</span>
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Market size rotating card */}
          <div className="lg:col-span-7 relative">
            <div
              key={activeIndex}
              className="animate-fadeSlideIn"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 border border-background/20 text-xs font-mono text-background/60 mb-4">
                  {active.label}
                </span>
                <h3 className="text-xl font-display text-background/60 mb-2">{active.title}</h3>
                <p className="text-6xl lg:text-8xl font-display">{active.value}</p>
              </div>
              <p className="text-xl text-background/60 leading-relaxed mt-6 max-w-xl">
                {active.description}
              </p>
              <p className="text-xs font-mono text-background/30 mt-4">{active.sublabel}</p>
            </div>

            {/* Progress tabs */}
            <div className="flex gap-2 mt-12">
              {markets.map((m, idx) => (
                <button
                  key={m.label}
                  onClick={() => setActiveIndex(idx)}
                  className="flex-1 h-1 bg-background/20 overflow-hidden"
                >
                  <div
                    className={`h-full bg-background transition-all duration-300 ${
                      idx === activeIndex ? "w-full" : idx < activeIndex ? "w-full opacity-50" : "w-0"
                    }`}
                    style={
                      idx === activeIndex
                        ? { animation: "progress 5s linear forwards" }
                        : {}
                    }
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-2 mt-3">
              {markets.map((m, idx) => (
                <button
                  key={m.label}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-1 text-xs font-mono py-1 transition-colors ${
                    idx === activeIndex ? "text-background" : "text-background/30 hover:text-background/60"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Competitive validation */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="text-xs font-mono text-background/30 uppercase tracking-widest mb-2">
              Competitive validation
            </p>
            {validationPoints.map((pt, i) => (
              <div
                key={pt.company}
                className={`p-5 border border-background/10 bg-background/5 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-medium text-sm">{pt.company}</span>
                  <span className="text-xs font-mono text-background/60 shrink-0">{pt.metric}</span>
                </div>
                <p className="text-xs text-background/50 leading-relaxed">{pt.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
