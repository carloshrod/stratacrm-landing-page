"use client";

import { LayoutGroup } from "framer-motion";

import { PipelineColumn } from "./pipeline-column";
import { stages } from "./stages";
import { usePipelineDemoStore } from "./store";

export function PipelineBoard() {
  const deals = usePipelineDemoStore((state) => state.deals);

  return (
    <LayoutGroup>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage) => (
          <PipelineColumn
            key={stage.id}
            stage={stage}
            deals={deals.filter((deal) => deal.stageId === stage.id)}
          />
        ))}
      </div>
    </LayoutGroup>
  );
}
