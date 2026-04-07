"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Pitch Rooms",
    subtitle: "invite-only",
    description: "Curated rooms where handpicked builders pitch live to operators, mentors, and accelerator partners. Only builders with active projects and execution proof allowed. Top teams get direct pipeline into accelerators.",
    code: `// Invite-only access
const pitchRoom = new Room({
  type: 'invite-only',
  access: 'execution-proof-required',
  partners: ['YC', 'Techstars', 'OnDeck'],
  outcome: 'accelerator-pipeline'
})`,
  },
  {
    number: "02",
    title: "Streak System",
    subtitle: "daily accountability",
    description: "Builders set public goals and post daily progress to maintain streaks. Breaking a streak has social cost. Maintaining streaks builds credibility and unlocks pitch room access.",
    code: `// Public accountability engine
builder.setGoal({
  public: true,
  deadline: '2025-03-01',
  dailyCheckIn: true,
  streakVisible: 'peers + mentors'
})
// Day 14 streak — unlocks pitch room`,
  },
  {
    number: "03",
    title: "Houses System",
    subtitle: "belonging + identity",
    description: "On signup, builders take a sorting quiz. They join a house of similar builders that competes on streak completions, shipped projects, and hackathon wins. Creates belonging, identity, and intrinsic motivation.",
    code: `// House sorting on signup
const house = sortingQuiz({
  workEthic: 'high',
  buildingStyle: 'full-stack',
  tempo: 'fast'
}) // → assigned: House Helix
// House leaderboard: #1 of 12 houses`,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[oklch(0.09_0.01_260)] text-white overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — titre + image cerisier */}
        <div className="relative mb-0 lg:mb-0 grid lg:grid-cols-2 gap-4 lg:gap-12 items-end">
          {/* Titre colonne gauche */}
          <div className="overflow-hidden pb-0 lg:pb-32">
            <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-8">
                <span className="w-12 h-px bg-white/20" />
                The Solution
              </span>
            </div>
            
            <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.85] transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}>
              <span className="block">Pitch.</span>
              <span className="block text-white/30">Streak.</span>
              <span className="block text-white/10">Ship.</span>
            </h2>
          </div>

          {/* Process loop visual */}
          <div className={`relative h-[320px] lg:h-[640px] overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <div className="absolute inset-6 border border-white/15 bg-white/[0.02] p-6 lg:p-10">
              <p className="text-xs font-mono text-white/50 mb-8">EXECUTION LOOP</p>
              <div className="space-y-6">
                {[
                  "Pitch intent publicly",
                  "Maintain daily streak",
                  "Ship weekly output",
                  "Unlock mentor feedback",
                ].map((line, i) => (
                  <div key={line} className="flex items-center gap-4">
                    <span className="w-8 h-8 border border-white/20 flex items-center justify-center text-xs font-mono text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/70">{line}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Fade sur le bord gauche */}
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.09_0.01_260)] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Horizontal Steps Layout */}
        <div className="grid lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`relative text-left p-8 lg:p-12 border transition-all duration-500 ${
                activeStep === index 
                  ? "bg-[#000000] border-white/60" 
                  : "bg-[#000000] border-white/25 hover:border-white/50"
              }`}
            >
              {/* Step number with animated line */}
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-4xl font-display transition-colors duration-300 ${
                  activeStep === index ? "text-[#eca8d6]" : "text-white/20"
                }`}>
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-white/10 overflow-hidden">
                  {activeStep === index && (
                    <div className="h-full bg-[#eca8d6]/50 animate-progress" />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-display mb-2">
                {step.title}
              </h3>
              <span className="text-xl text-white/40 font-display block mb-6">
                {step.subtitle}
              </span>

              {/* Description */}
              <p className={`text-white/60 leading-relaxed transition-opacity duration-300 ${
                activeStep === index ? "opacity-100" : "opacity-60"
              }`}>
                {step.description}
              </p>

              {/* Active indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#eca8d6] transition-transform duration-500 origin-left ${
                activeStep === index ? "scale-x-100" : "scale-x-0"
              }`} />
            </button>
          ))}
        </div>

        {/* Code Preview - Large terminal */}
        
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 6s linear forwards;
        }
      `}</style>
    </section>
  );
}
