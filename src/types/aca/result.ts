export type Result = {
  years?: number;
  months?: number;
  days?: number;
};

export type CalcResult = Result & { error?: string };
