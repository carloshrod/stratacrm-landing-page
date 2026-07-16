import { Hero } from "@/components/marketing/hero/hero";
import { PipelineDemoSection } from "@/features/pipeline-demo/pipeline-demo-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <PipelineDemoSection />
    </main>
  );
}
