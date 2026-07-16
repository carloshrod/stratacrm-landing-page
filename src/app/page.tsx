import { Hero } from "@/components/marketing/hero/hero";
import { ProblemSolutionSection } from "@/components/marketing/problem-solution/problem-solution";
import { PipelineDemoSection } from "@/features/pipeline-demo/pipeline-demo-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <PipelineDemoSection />
      <ProblemSolutionSection />
    </main>
  );
}
