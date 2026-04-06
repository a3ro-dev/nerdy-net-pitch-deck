import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { GtmSection } from "@/components/landing/gtm-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { SecuritySection } from "@/components/landing/security-section";
import { RoadmapSection } from "@/components/landing/roadmap-section";
import { TeamSection } from "@/components/landing/team-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      {/* 01 Cover */}
      <HeroSection />
      {/* 02 Problem */}
      <FeaturesSection />
      {/* 03 Solution */}
      <HowItWorksSection />
      {/* 04 Product Architecture */}
      <IntegrationsSection />
      {/* 05 User Journey */}
      <InfrastructureSection />
      {/* 06 Traction */}
      <MetricsSection />
      {/* 07 Market Opportunity */}
      <TestimonialsSection />
      {/* 08 Business Model */}
      <PricingSection />
      {/* 09 Go-To-Market */}
      <GtmSection />
      {/* 10 Competitive Landscape */}
      <DevelopersSection />
      {/* 11 Why Now + Moat */}
      <SecuritySection />
      {/* 12 Roadmap */}
      <RoadmapSection />
      {/* 13 Team + Vision */}
      <TeamSection />
      {/* 14 The Ask */}
      <CtaSection />
      <FooterSection />
    </main>
  );
}
