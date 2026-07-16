type ChartTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
  formatValue: (value: number) => string;
};

export function ChartTooltip({
  active,
  payload,
  label,
  formatValue,
}: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-lg border border-white/10 bg-muted px-3 py-2 shadow-xl shadow-black/40">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold text-foreground">
        {formatValue(payload[0].value)}
      </p>
    </div>
  );
}
