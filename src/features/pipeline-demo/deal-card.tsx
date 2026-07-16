"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pencil } from "lucide-react";

import { cn } from "@/lib/utils";
import { formatCurrency } from "./format-currency";
import { stageOrder, stages } from "./stages";
import { usePipelineDemoStore } from "./store";
import type { Deal } from "./types";

export function DealCard({ deal }: { deal: Deal }) {
  const stage = stages.find((item) => item.id === deal.stageId)!;
  const stageIndex = stageOrder.indexOf(deal.stageId);
  const isFirstStage = stageIndex === 0;
  const isLastStage = stageIndex === stageOrder.length - 1;

  const isHighlighted = usePipelineDemoStore(
    (state) => state.highlightedDealId === deal.id,
  );
  const moveDeal = usePipelineDemoStore((state) => state.moveDeal);
  const updateDealValue = usePipelineDemoStore((state) => state.updateDealValue);

  const [isEditing, setIsEditing] = useState(false);
  const [draftValue, setDraftValue] = useState(String(deal.value));

  function startEditing() {
    setDraftValue(String(deal.value));
    setIsEditing(true);
  }

  function commitValue() {
    const parsed = Number(draftValue);
    if (Number.isFinite(parsed) && parsed !== deal.value) {
      updateDealValue(deal.id, parsed);
    }
    setIsEditing(false);
  }

  return (
    <motion.div
      layout
      layoutId={deal.id}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
      className="relative overflow-hidden rounded-lg border border-white/10 bg-muted p-3 shadow-md shadow-black/20"
    >
      {isHighlighted && (
        <motion.span
          initial={{ opacity: 0.55 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 bg-brand/25"
        />
      )}

      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span
            className={cn(
              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold",
              stage.accentBg,
              stage.accentText,
            )}
          >
            {deal.initials}
          </span>
          <span className="truncate text-xs font-medium text-foreground">
            {deal.company}
          </span>
        </div>

        {!isEditing && (
          <button
            type="button"
            onClick={startEditing}
            aria-label="Editar valor"
            className="inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
          >
            <Pencil className="size-3" />
          </button>
        )}
      </div>

      {isEditing ? (
        <input
          type="number"
          min={0}
          autoFocus
          value={draftValue}
          onChange={(event) => setDraftValue(event.target.value)}
          onBlur={commitValue}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.currentTarget.blur();
            }
            if (event.key === "Escape") {
              setIsEditing(false);
            }
          }}
          className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-2 py-1 text-sm font-semibold text-foreground outline-none focus:border-brand"
        />
      ) : (
        <p className="mt-2 text-sm font-semibold text-foreground">
          {formatCurrency(deal.value)}
        </p>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
        <button
          type="button"
          onClick={() => moveDeal(deal.id, "prev")}
          disabled={isFirstStage}
          aria-label="Mover a la etapa anterior"
          className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="size-3.5" />
        </button>

        <button
          type="button"
          onClick={() => moveDeal(deal.id, "next")}
          disabled={isLastStage}
          aria-label="Mover a la siguiente etapa"
          className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="size-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
