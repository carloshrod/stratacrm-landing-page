import { Hero } from "@/components/marketing/hero/hero";
import { ProblemSolutionSection } from "@/components/marketing/problem-solution/problem-solution";
import { FeaturesSection } from "@/components/marketing/features/features";
import { PricingSection } from "@/components/marketing/pricing/pricing";
import { TestimonialsSection } from "@/components/marketing/testimonials/testimonials";
import { FinalCtaSection } from "@/components/marketing/final-cta/final-cta";
import { PipelineDemoSection } from "@/features/pipeline-demo/pipeline-demo-section";
import { DashboardPreviewSection } from "@/features/dashboard-preview/dashboard-preview-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <PipelineDemoSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <DashboardPreviewSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </main>
  );
}
