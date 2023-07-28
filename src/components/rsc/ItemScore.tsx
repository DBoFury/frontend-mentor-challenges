import { FC } from "react";
import { cn } from "@/lib/utils";
import { CategoryScore } from "@/types/rsc/data";
import Image from "next/image";

interface ItemScoreProps {
  score: CategoryScore;
}

const ItemScore: FC<ItemScoreProps> = ({ score }) => {
  console.log(`/results-summary-component/${score.icon}`);

  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 py-4 rounded-xl space-x-2",
        score.theme.backgroundColor
      )}>
      <div className="flex items-center space-x-3">
        {score.icon && (
          <Image
            src={
              process.env.NODE_ENV === "production"
                ? `/frontend-mentor-challenges/results-summary-component/${score.icon}.svg`
                : `/results-summary-component/${score.icon}.svg`
            }
            alt={`${score.category} icon`}
            width={30}
            height={30}
          />
        )}
        <p className={cn("font-semibold", score.theme.textColor)}>
          {score.category}
        </p>
      </div>
      <div className="flex items-center">
        <p className="font-bold">
          <span className="text-black">{score.score}</span>
          <span className="text-gray-400"> / 100</span>
        </p>
      </div>
    </div>
  );
};

export default ItemScore;
