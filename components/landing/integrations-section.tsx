"use client";

import { useEffect, useState, useRef } from "react";

const systems = [
  {
    number: "01",
    title: "Invite-Only Pitch Rooms",
    category: "Discovery",
    description:
      "Curated rooms where handpicked builders pitch live to operators, mentors, and accelerator partners. Only builders with active projects and execution proof allowed. Top teams get direct pipeline into accelerators and capital.",
    stat: { value: "4+", label: "accelerator partners in discussions" },
  },
  {
    number: "02",
    title: "Streak-Based Building",
    category: "Accountability",
    description:
      "Builders set public goals with self-assigned deadlines and post daily progress to maintain streaks. Streaks are visible to peers and mentors. Breaking them has social cost. Maintaining them builds credibility and deal flow.",
    stat: { value: "68%", label: "daily active rate in beta" },
  },
  {
    number: "03",
    title: "Houses System",
    category: "Identity",
    description:
      "On signup, builders take a sorting quiz based on work ethic, building style, and execution tempo. Users are sorted into houses that compete on streak completions, shipped projects, and hackathon wins.",
    stat: { value: "78%", label: "completed house sorting quiz" },
  },
  {
    number: "04",
    title: "AI Team Matching",
    category: "Formation",
    description:
      "Builders swipe on projects, skills, and working styles. AI matches complementary skill sets and execution patterns. Reduces founder friction and early team churn. Optimizes for compatibility, not popularity.",
    stat: { value: "8", label: "teams formed in 30-day beta" },
  },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section id="product" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-24 items-end">
          <div className="lg:col-span-7">
            <span
              className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-12 h-px bg-foreground/30" />
              Product Architecture
            </span>
            <h2
              className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Four
              <br />
              <span className="text-muted-foreground">systems.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <p
              className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Four integrated systems that compound into sustained execution
              velocity. Each one reinforces the others — pitch rooms reward
              streaks, houses fuel competition, AI matching accelerates teams.
            </p>
          </div>
        </div>

        {/* Systems grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {systems.map((system, index) => (
            <div
              key={system.number}
              className={`relative group p-8 lg:p-10 border overflow-hidden transition-all duration-500 ${
                hoveredIndex === index
                  ? "border-foreground bg-foreground/[0.04]"
                  : "border-foreground/10 hover:border-foreground/30"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Category tag */}
              <span
                className={`absolute top-4 right-4 text-[10px] font-mono px-2 py-0.5 transition-colors ${
                  hoveredIndex === index
                    ? "bg-foreground text-background"
                    : "bg-foreground/10 text-muted-foreground"
                }`}
              >
                {system.category}
              </span>

              {/* Number */}
              <span className="font-mono text-sm text-muted-foreground">{system.number}</span>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-display mt-4 mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {system.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm lg:text-base">
                {system.description}
              </p>

              {/* Stat */}
              <div className="pt-6 border-t border-foreground/10">
                <span className="text-3xl font-display">{system.stat.value}</span>
                <span className="block text-xs text-muted-foreground font-mono mt-1">
                  {system.stat.label}
                </span>
              </div>

              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/10 overflow-hidden">
                <div
                  className={`h-full bg-[#eca8d6] transition-all duration-500 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div
          className={`mt-12 p-6 lg:p-8 border border-foreground/10 flex flex-wrap items-center justify-between gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-muted-foreground text-sm lg:text-base max-w-xl">
            Each system reinforces the next — streaks unlock pitch rooms, houses drive streak competition, AI matching reduces team churn before launch.
          </p>
          <div className="flex items-center gap-2 text-sm font-mono text-[#eca8d6]">
            <span className="w-2 h-2 rounded-full bg-[#eca8d6] animate-pulse" />
            Compounding execution velocity
          </div>
        </div>
      </div>
    </section>
  );
}
