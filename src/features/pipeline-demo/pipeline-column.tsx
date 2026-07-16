"use client";

import { AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/format-currency";
import { DealCard } from "./deal-card";
import type { Deal, Stage } from "./types";

export function PipelineColumn({
  stage,
  deals,
}: {
  stage: Stage;
  deals: Deal[];
}) {
  const total = deals.reduce((sum, deal) => sum + deal.value, 0);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-semibold text-foreground">
          {stage.name}
        </span>
        <span
          className={cn(
            "inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold",
            stage.accentBg,
            stage.accentText,
          )}
        >
          {deals.length}
        </span>
      </div>

      <p className="px-1 text-[11px] text-muted-foreground">
        {formatCurrency(total)}
      </p>

      <div className="flex min-h-20 flex-col gap-2 rounded-xl bg-black/20 p-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </AnimatePresence>

        {deals.length === 0 && (
          <p className="px-2 py-6 text-center text-[11px] text-muted-foreground">
            Sin deals en esta etapa
          </p>
        )}
      </div>
    </div>
  );
}
