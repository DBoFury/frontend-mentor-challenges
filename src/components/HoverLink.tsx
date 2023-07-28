import { FC, ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { getDifficultyColor, getDifficultyScore } from "@/helpers/difficulty";

interface HoverLinkProps {
  children: ReactNode;
  difficulty: "newbie" | "junior" | "intermediate";
  description: string;
}

const HoverLink: FC<HoverLinkProps> = ({
  children,
  description,
  difficulty,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="text-center text-white bg-night text-[18px] w-80 md:w-[400px] lg:w-[460px]">
        <div>
          <div className="pb-2 text-left">{description}</div>
          <div
            className={cn(
              "flex items-center rounded-lg w-fit border-2",
              getDifficultyColor(difficulty, "border")
            )}>
            <span
              className={cn(
                "p-1 px-4 rounded-l-sm font-bold",
                getDifficultyColor(difficulty, "background")
              )}>
              {getDifficultyScore(difficulty)}
            </span>
            <p className="px-3 uppercase text-[0.9rem]">{difficulty}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverLink;
