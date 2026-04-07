"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Accelerator Placements",
    description: "Scout bounties for placed teams",
    price: { monthly: 8000, annual: 10000 },
    priceLabel: "per placement",
    features: [
      "Direct pipeline to YC, Techstars, On Deck",
      "$8K–$10K per placed team",
      "Transparent builder velocity metrics",
      "Pre-vetted execution proof",
      "Diversity pipeline to high schoolers",
    ],
    cta: "Primary revenue",
    highlight: false,
  },
  {
    name: "Sponsored Pitch Rooms",
    description: "Premium sponsorship packages for curated pitch events",
    price: { monthly: 50000, annual: 75000 },
    priceLabel: "per sponsor/year",
    features: [
      "$50K–$75K annual sponsorship packages",
      "Recruiting access to top builders",
      "Co-branded pitch events",
      "Early talent identification",
      "Brand visibility to 15K+ builders",
    ],
    cta: "Highest margin",
    highlight: true,
  },
  {
    name: "Premium Cohorts",
    description: "High-touch 8-week masterminds with coaching",
    price: { monthly: 750, annual: 1000 },
    priceLabel: "per seat",
    features: [
      "$750–$1,000 per seat",
      "1:1 coaching included",
      "Guaranteed pitch room access",
      "Mentor office hours",
      "Alumni network access",
    ],
    cta: "Recurring revenue",
    highlight: false,
  },
];

export function PricingSection() {
  const [isAnnual] = useState(true);
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

  return (
    <section id="model" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-12 h-px bg-foreground/30" />
              Business Model
            </span>
            <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Five revenue
              <br />
              <span className="text-stroke">streams.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 relative p-0 h-96 lg:h-auto">
            {/* Revenue composition visual */}
            <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
              <div className="h-full border border-foreground/10 bg-foreground/[0.02] p-6 lg:p-8">
                <p className="text-xs font-mono text-muted-foreground mb-6">ANNUAL REVENUE MIX</p>
                <div className="space-y-4">
                  {plans.map((plan, idx) => (
                    <div key={plan.name}>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-muted-foreground">{plan.name}</span>
                        <span className="font-mono text-foreground/70">${plan.price.annual.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-foreground/10">
                        <div
                          className={`h-full ${idx === 1 ? "bg-[#eca8d6]" : "bg-foreground/40"}`}
                          style={{ width: `${Math.max(18, Math.round((plan.price.annual / 75000) * 100))}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Pricing cards - Horizontal layout with overlap */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-0">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-background border transition-all duration-700 ${
                  plan.highlight 
                    ? "border-foreground lg:-mx-2 lg:z-10 lg:scale-105" 
                    : "border-foreground/10 lg:first:-mr-2 lg:last:-ml-2"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-8 right-8 flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-mono uppercase tracking-widest">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  {/* Plan header */}
                  <div className="mb-8 pb-8 border-b border-foreground/10">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-display mt-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-display">
                        ${(isAnnual ? plan.price.annual : plan.price.monthly)?.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 font-mono">
                      {plan.priceLabel}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                      plan.highlight
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue targets */}
        <div className={`mt-16 grid grid-cols-3 gap-4 transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          {[
            { year: "Year 1", rev: "$550K", users: "10K users · $55 ARPU" },
            { year: "Year 2", rev: "$3.0M", users: "50K users · $60 ARPU" },
            { year: "Year 3", rev: "$10.5M", users: "150K users · $70 ARPU" },
          ].map((t) => (
            <div key={t.year} className="p-6 border border-foreground/10 bg-foreground/[0.02]">
              <span className="text-xs font-mono text-muted-foreground block mb-2">{t.year}</span>
              <span className="text-3xl lg:text-4xl font-display block mb-1">{t.rev}</span>
              <span className="text-xs text-muted-foreground font-mono">{t.users}</span>
            </div>
          ))}
        </div>

        <div className={`mt-8 flex flex-wrap items-center gap-6 pt-8 border-t border-foreground/10 text-sm text-muted-foreground transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#eca8d6]" />
            Accelerator placements · $8–10K each
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#eca8d6]" />
            Talent pipeline partnerships (Year 2+)
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#eca8d6]" />
            SaaS + platform subscription fees
          </span>
        </div>
      </div>

      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1.5px currentColor;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
