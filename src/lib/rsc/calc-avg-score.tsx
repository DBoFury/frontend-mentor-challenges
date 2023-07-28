import { CategoryScore } from "@/types/rsc/data";

export const calculateAverageScore = (data: CategoryScore[]) => {
  if (data.length === 0) {
    return 0;
  }

  const totalScore = data.reduce((sum, item) => sum + item.score, 0);
  const averageScore = totalScore / data.length;

  return Math.floor(averageScore);
};
