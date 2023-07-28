export const getDifficultyColor = (
  difficulty: "newbie" | "junior" | "intermediate",
  style: "background" | "border"
) => {
  const difficultyColors = {
    newbie: {
      background: "bg-challenge-newbie",
      border: "border-challenge-newbie",
    },
    junior: {
      background: "bg-challenge-junior",
      border: "border-challenge-junior",
    },
    intermediate: {
      background: "bg-challenge-intermediate",
      border: "border-challenge-intermediate",
    },
  };

  return difficultyColors[difficulty][style];
};

export const getDifficultyScore = (
  difficulty: "newbie" | "junior" | "intermediate"
) => {
  const difficultyScores = {
    newbie: 1,
    junior: 2,
    intermediate: 3,
  };

  return difficultyScores[difficulty];
};
