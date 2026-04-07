"use client";

import { useEffect, useState, useRef } from "react";

const visionPoints = [
  "The default path from teenage builder to funded founder",
  "The reputation layer for early-stage execution velocity",
  "The talent graph connecting builders, mentors, accelerators, and capital",
  "The cultural home for ambitious young people who build",
];

const teamMembers = [
  {
    name: "Aadrika Maurya",
    title: "Co-Founder & CEO",
    linkedin: "https://www.linkedin.com/in/aadrika-maurya/",
    description:
      "Launched Nerdy Network at 17 after building across STEM research and community-led programs. RSI India scholar and NYAS finalist, focused on turning young builder ambition into consistent execution.",
    tags: ["Founder", "Community", "STEM research"],
  },
  {
    name: "Akshat Singh Kushwaha",
    title: "Co-Founder & CTO",
    linkedin: "https://www.linkedin.com/in/akshat-singh-kushwaha/",
    description:
      "AI systems builder coding since age 10, with hands-on work across RAG pipelines, LLM fine-tuning, and production engineering in high-school years. Leads technical architecture for reliable, scalable execution infrastructure.",
    tags: ["AI systems", "Infrastructure", "Engineering"],
  },
];

const advisors = [
  { role: "Accelerator Partner", detail: "Partner at top-tier accelerator" },
  { role: "Teen Founder", detail: "Successfully exited at a young age" },
  { role: "EdTech Expert", detail: "Former senior role at leading EdTech co" },
  { role: "Community Builder", detail: "Built notable builder community at scale" },
];

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeVision, setActiveVision] = useState(0);
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
      setActiveVision((prev) => (prev + 1) % visionPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="team" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Vision Header */}
        <div className="mb-24">
          <span
            className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/30" />
            Vision
          </span>

          <h2
            className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            10 years
            <br />
            <span className="text-muted-foreground">from now.</span>
          </h2>

          <p
            className={`text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-10 transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Every major startup will trace its founding team back to Nerdy Network. We become:
          </p>

          {/* Rotating vision points */}
          <div className="space-y-2 max-w-2xl">
            {visionPoints.map((pt, i) => (
              <div
                key={pt}
                className={`flex items-start gap-4 p-4 border transition-all duration-500 ${
                  activeVision === i
                    ? "border-foreground/30 bg-foreground/[0.03]"
                    : "border-foreground/10"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
                onMouseEnter={() => setActiveVision(i)}
              >
                <span
                  className={`w-2 h-2 rounded-full mt-1.5 shrink-0 transition-colors duration-300 ${
                    activeVision === i ? "bg-[#eca8d6]" : "bg-foreground/20"
                  }`}
                />
                <span className={`text-lg leading-snug transition-colors duration-300 ${
                  activeVision === i ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team grid */}
        <div className="mb-20">
          <span
            className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-10 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/30" />
            Team
          </span>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`p-8 lg:p-10 border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/25 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 400}ms` }}
              >
                {/* Avatar placeholder */}
                <div className="w-12 h-12 border border-foreground/20 bg-foreground/[0.04] flex items-center justify-center mb-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    {member.name.slice(0, 1).toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-display mb-1">{member.name}</h3>
                <span className="text-sm font-mono text-[#eca8d6] block mb-5">{member.title}</span>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{member.description}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-xs font-mono text-[#eca8d6] hover:text-foreground transition-colors mb-6"
                >
                  LinkedIn
                </a>

                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 border border-foreground/10 text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Advisors */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {advisors.map((adv, i) => (
              <div
                key={adv.role}
                className={`p-5 border border-foreground/10 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 60 + 600}ms` }}
              >
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-2">Advisor</span>
                <span className="font-medium text-sm block mb-1">{adv.role}</span>
                <span className="text-xs text-muted-foreground">{adv.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <div
          className={`p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            &ldquo;The best 15-year-old builders today will run billion-dollar companies in 10 years. We&apos;re building the network that identifies them, connects them, and accelerates them. This isn&apos;t just a product. It&apos;s a generational talent engine.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#eca8d6]" />
            <span className="text-sm font-mono text-muted-foreground">Aadrika Maurya, Co-Founder & CEO, Nerdy Network</span>
          </div>
        </div>
      </div>
    </section>
  );
}
