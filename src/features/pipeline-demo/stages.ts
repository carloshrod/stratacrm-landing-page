import type { Stage } from "./types";

export const stages: Stage[] = [
  {
    id: "leads",
    name: "Leads",
    accentBg: "bg-sky-500/15",
    accentText: "text-sky-400",
  },
  {
    id: "contacted",
    name: "Contactado",
    accentBg: "bg-amber-500/15",
    accentText: "text-amber-400",
  },
  {
    id: "proposal",
    name: "Propuesta",
    accentBg: "bg-violet-500/15",
    accentText: "text-violet-400",
  },
  {
    id: "closed",
    name: "Cerrado",
    accentBg: "bg-emerald-500/15",
    accentText: "text-emerald-400",
  },
];

export const stageOrder = stages.map((stage) => stage.id);
