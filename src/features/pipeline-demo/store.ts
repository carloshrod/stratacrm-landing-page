import { create } from "zustand";

import { stageOrder } from "./stages";
import type { Deal } from "./types";

const initialDeals: Deal[] = [
  { id: "nova-retail", company: "Nova Retail", initials: "NR", value: 4200, stageId: "leads" },
  { id: "bright-path", company: "Bright Path", initials: "BP", value: 1850, stageId: "leads" },
  { id: "ferro-logistics", company: "Ferro Logistics", initials: "FL", value: 9600, stageId: "contacted" },
  { id: "quill-studio", company: "Quill Studio", initials: "QS", value: 2300, stageId: "contacted" },
  { id: "atlas-health", company: "Atlas Health", initials: "AH", value: 14000, stageId: "proposal" },
  { id: "solstice-corp", company: "Solstice Corp", initials: "SC", value: 6200, stageId: "proposal" },
  { id: "vero-systems", company: "Vero Systems", initials: "VS", value: 7450, stageId: "closed" },
  { id: "delta-works", company: "Delta Works", initials: "DW", value: 3100, stageId: "closed" },
];

type PipelineDemoState = {
  deals: Deal[];
  highlightedDealId: string | null;
  moveDeal: (dealId: string, direction: "prev" | "next") => void;
  updateDealValue: (dealId: string, value: number) => void;
  resetDemo: () => void;
};

export const usePipelineDemoStore = create<PipelineDemoState>((set) => {
  let highlightTimeout: ReturnType<typeof setTimeout> | undefined;

  function triggerHighlight(dealId: string) {
    if (highlightTimeout) clearTimeout(highlightTimeout);
    set({ highlightedDealId: dealId });
    highlightTimeout = setTimeout(() => {
      set({ highlightedDealId: null });
    }, 900);
  }

  return {
    deals: initialDeals,
    highlightedDealId: null,

    moveDeal: (dealId, direction) => {
      set((state) => ({
        deals: state.deals.map((deal) => {
          if (deal.id !== dealId) return deal;
          const currentIndex = stageOrder.indexOf(deal.stageId);
          const nextIndex =
            direction === "next" ? currentIndex + 1 : currentIndex - 1;
          if (nextIndex < 0 || nextIndex >= stageOrder.length) return deal;
          return { ...deal, stageId: stageOrder[nextIndex] };
        }),
      }));
      triggerHighlight(dealId);
    },

    updateDealValue: (dealId, value) => {
      const safeValue = Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0;
      set((state) => ({
        deals: state.deals.map((deal) =>
          deal.id === dealId ? { ...deal, value: safeValue } : deal,
        ),
      }));
      triggerHighlight(dealId);
    },

    resetDemo: () => {
      if (highlightTimeout) clearTimeout(highlightTimeout);
      set({ deals: initialDeals, highlightedDealId: null });
    },
  };
});
