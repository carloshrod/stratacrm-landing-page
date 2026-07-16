export type TimeRange = "7d" | "30d";

export type TrendPoint = {
  label: string;
  revenue: number;
  leads: number;
};

type RangeData = {
  points: TrendPoint[];
  conversionRate: number;
  revenueDelta: number;
  leadsDelta: number;
  conversionDelta: number;
};

export const rangeData: Record<TimeRange, RangeData> = {
  "7d": {
    points: [
      { label: "Lun", revenue: 3200, leads: 14 },
      { label: "Mar", revenue: 2800, leads: 11 },
      { label: "Mié", revenue: 4100, leads: 18 },
      { label: "Jue", revenue: 3600, leads: 15 },
      { label: "Vie", revenue: 5200, leads: 22 },
      { label: "Sáb", revenue: 2100, leads: 8 },
      { label: "Dom", revenue: 1800, leads: 6 },
    ],
    conversionRate: 24.1,
    revenueDelta: 12.4,
    leadsDelta: 8.1,
    conversionDelta: 2.3,
  },
  "30d": {
    points: [
      { label: "Sem 1", revenue: 14200, leads: 58 },
      { label: "Sem 2", revenue: 16800, leads: 64 },
      { label: "Sem 3", revenue: 15100, leads: 60 },
      { label: "Sem 4", revenue: 19400, leads: 72 },
      { label: "Sem 5", revenue: 21300, leads: 78 },
    ],
    conversionRate: 27.4,
    revenueDelta: 18.9,
    leadsDelta: 14.6,
    conversionDelta: 4.7,
  },
};

export const timeRangeOptions: { value: TimeRange; label: string }[] = [
  { value: "7d", label: "7 días" },
  { value: "30d", label: "30 días" },
];
