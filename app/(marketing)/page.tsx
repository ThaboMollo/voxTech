import { FinalCta } from "@/components/home/final-cta";
import { FeaturedWork } from "@/components/home/featured-work";
import { HeroSection } from "@/components/home/hero-section";
import { InsightsOpportunitiesPreview } from "@/components/home/insights-opportunities-preview";
import { ProblemSection } from "@/components/home/problem-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { SolutionPillars } from "@/components/home/solution-pillars";
import { WhyVoxTech } from "@/components/home/why-voxtech";
import { CredibilityStrip } from "@/components/home/credibility-strip";
import { PageShell } from "@/components/layout/page-shell";

export default function HomePage() {
  return (
    <PageShell className="gap-8 pb-24 pt-8 md:pb-32 md:pt-10">
      <HeroSection />
      <CredibilityStrip />
      <ProblemSection />
      <SolutionPillars />
      <ServicesPreview />
      <FeaturedWork />
      <WhyVoxTech />
      <InsightsOpportunitiesPreview />
      <FinalCta />
    </PageShell>
  );
}
