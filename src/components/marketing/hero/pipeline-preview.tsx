"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type Deal = {
  company: string;
  value: string;
  initials: string;
};

type Stage = {
  name: string;
  accentBg: string;
  accentText: string;
  deals: Deal[];
};

const stages: Stage[] = [
  {
    name: "Leads",
    accentBg: "bg-sky-500/15",
    accentText: "text-sky-400",
    deals: [
      { company: "Nova Retail", value: "$4,200", initials: "NR" },
      { company: "Bright Path", value: "$1,850", initials: "BP" },
    ],
  },
  {
    name: "Contactado",
    accentBg: "bg-amber-500/15",
    accentText: "text-amber-400",
    deals: [
      { company: "Ferro Logistics", value: "$9,600", initials: "FL" },
      { company: "Quill Studio", value: "$2,300", initials: "QS" },
    ],
  },
  {
    name: "Propuesta",
    accentBg: "bg-violet-500/15",
    accentText: "text-violet-400",
    deals: [{ company: "Atlas Health", value: "$14,000", initials: "AH" }],
  },
  {
    name: "Cerrado",
    accentBg: "bg-emerald-500/15",
    accentText: "text-emerald-400",
    deals: [{ company: "Vero Systems", value: "$7,450", initials: "VS" }],
  },
];

export function PipelinePreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/4 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/3 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-xs font-medium text-muted-foreground">
          Pipeline
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:gap-4 sm:p-6">
        {stages.map((stage, stageIndex) => (
          <div key={stage.name} className="flex flex-col gap-3">
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
                {stage.deals.length}
              </span>
            </div>

            <div className="flex flex-col gap-2 rounded-xl bg-black/20 p-2">
              {stage.deals.map((deal, dealIndex) => (
                <motion.div
                  key={deal.company}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + stageIndex * 0.1 + dealIndex * 0.08,
                    ease: "easeOut",
                  }}
                  className="rounded-lg border border-white/10 bg-muted p-3 shadow-md shadow-black/20"
                >
                  <div className="flex items-center gap-2">
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
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {deal.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
