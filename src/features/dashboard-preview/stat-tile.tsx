import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function StatTile({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: number;
}) {
  const isPositive = delta >= 0;

  return (
    <div className="rounded-xl border border-white/10 bg-white/3 p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-2 flex items-baseline justify-between gap-2">
        <p className="text-2xl font-semibold text-foreground">{value}</p>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 text-xs font-semibold",
            isPositive ? "text-emerald-400" : "text-red-400",
          )}
        >
          {isPositive ? (
            <ArrowUpRight className="size-3.5" />
          ) : (
            <ArrowDownRight className="size-3.5" />
          )}
          {Math.abs(delta)}%
        </span>
      </div>
    </div>
  );
}
