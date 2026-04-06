"use client";

import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Zap, Database, Award } from "lucide-react";

const moats = [
  {
    icon: Users,
    title: "Network Effects",
    description: "More builders = more diverse skills for matching. More shipped projects = more social proof. More accelerator placements = stronger brand signal. Cross-side: builders attract mentors, mentors attract builders.",
    image: "/images/isolated.jpg",
  },
  {
    icon: Database,
    title: "Data Moat",
    description: "We track what others can't see: daily shipping velocity, streak consistency, collaboration patterns. Creates a unique dataset on early-stage founder potential — predictive signal for accelerators and investors.",
    image: "/images/encrypted.jpg",
  },
  {
    icon: Award,
    title: "Cultural Moat",
    description: "Identity systems are sticky. Users don't just use Nerdy Network — they belong to a house. Multi-generational culture compounds as alumni mentor new cohorts. Switching costs include losing house and streak history.",
    image: "/images/audit.jpg",
  },
  {
    icon: TrendingUp,
    title: "Habit Moat",
    description: "Daily posting becomes reflexive behavior. Builders check in even when they don't want to — peer pressure and loss aversion. Habit formation creates 10x higher retention than passive platforms.",
    image: "/images/permissions.jpg",
  },
];

const forces = [
  { label: "Gen Z entrepreneurship", stat: "69%", detail: "report high optimism about starting a business" },
  { label: "Passive community death", stat: "2024", detail: "Buildspace shutdown proved passive engagement fails" },
  { label: "Gamification market", stat: "$40.2B", detail: "global gamification market, growing to $99.2B by 2032" },
  { label: "Accelerator pipeline gap", stat: "<2%", detail: "YC acceptance rate — they need better signal earlier" },
];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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
      setActiveFeature((prev) => (prev + 1) % moats.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-now" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/20" />
            Why Now + Moat
          </span>

          <h2
            className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Timing is
            <br />
            <span className="text-muted-foreground">everything.</span>
          </h2>

          {/* Why Now forces */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {forces.map((force, i) => (
              <div key={force.label} className="p-5 border border-foreground/10 bg-foreground/[0.02]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-3xl lg:text-4xl font-display block mb-2">{force.stat}</span>
                <span className="text-xs font-mono text-[#eca8d6] block mb-1">{force.label}</span>
                <span className="text-xs text-muted-foreground">{force.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Moat section */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Large visual card */}
          <div
            className={`lg:col-span-7 relative p-8 lg:p-12 border border-foreground/10 min-h-[380px] overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Dynamic feature image */}
            <div className="absolute inset-0 pointer-events-none items-center justify-end hidden lg:flex">
              {moats.map((moat, index) => (
                <img
                  key={moat.image}
                  src={moat.image}
                  alt={moat.title}
                  className="absolute h-3/4 w-3/4 object-contain object-right transition-opacity duration-500"
                  style={{ opacity: activeFeature === index ? 0.6 : 0 }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <span className="font-mono text-sm text-muted-foreground">Competitive moats</span>
              <div className="mt-8">
                <span className="text-7xl lg:text-8xl font-display">6</span>
                <span className="block text-muted-foreground mt-2">Distinct structural moats built in</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
              {["Network", "Data", "Cultural", "Habit", "Brand", "Curation"].map((m, index) => (
                <span
                  key={m}
                  className={`px-3 py-1 border border-foreground/10 text-xs font-mono text-muted-foreground transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 80 + 300}ms` }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Moat cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {moats.map((moat, index) => (
              <div
                key={moat.title}
                className={`p-6 border transition-all duration-500 cursor-default ${
                  activeFeature === index
                    ? "border-foreground/30 bg-foreground/[0.04]"
                    : "border-foreground/10"
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 w-10 h-10 flex items-center justify-center border transition-colors ${
                      activeFeature === index
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/20"
                    }`}
                  >
                    <moat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{moat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{moat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
