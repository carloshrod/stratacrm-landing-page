export type StageId = "leads" | "contacted" | "proposal" | "closed";

export type Deal = {
  id: string;
  company: string;
  initials: string;
  value: number;
  stageId: StageId;
};

export type Stage = {
  id: StageId;
  name: string;
  accentBg: string;
  accentText: string;
};
