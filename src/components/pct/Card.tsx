import { cn } from "@/lib/utils";
import { Plan } from "@/types/pct/data";
import { FC } from "react";

interface CardProps {
  planItem: Plan;
  planType: "annually" | "monthly";
  index: number;
}

const Card: FC<CardProps> = ({ planItem, planType, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-6 rounded-lg bg-white p-7 px-6 text-center shadow-lg dt:h-[27.5rem] dt:w-[22rem] dt:px-8",
        {
          "dt:rounded-none dt:rounded-l-lg": index === 0,
          "bg-gradient-to-b from-pct-lg-start to-pct-lg-end dt:h-[30rem] dt:py-12":
            index === 1,
          "dt:rounded-none dt:rounded-r-lg": index === 2,
        }
      )}>
      <h3
        className={cn("text-lg text-pct-grayish-blue", {
          "text-white": index === 1,
        })}>
        {planItem.title}
      </h3>
      <div
        className={cn(
          "flex items-center justify-center text-pct-dark-grayish-blue",
          {
            "text-white": index === 1,
          }
        )}>
        <h3 className="text-[2.5rem]">$</h3>
        <h1 className="ml-1 text-7xl">{planItem.price[planType]}</h1>
      </div>
      <div
        className={cn(
          "flex flex-col space-y-4 pt-2 text-[0.9rem] text-pct-grayish-blue",
          {
            "text-white": index === 1,
          }
        )}>
        <span className="w-full border-b border-pct-off-white border-opacity-40"></span>
        <p>{`${planItem.plan.storage} Storage`}</p>
        <span className="w-full border-b border-pct-off-white border-opacity-40"></span>
        <p>{`${planItem.plan.allowedUsers} Users Allowed`}</p>
        <span className="w-full border-b border-pct-off-white border-opacity-40"></span>
        <p>{`Send up to ${planItem.plan.sendLimit}`}</p>
        <span className="w-full border-b border-pct-off-white border-opacity-40"></span>
      </div>
      <button
        className={cn(
          "rounded-lg bg-gradient-to-r from-pct-lg-start to-pct-lg-end px-20 py-3 text-sm font-thin uppercase tracking-widest text-white hover:from-white hover:to-white hover:text-pct-lg-end hover:ring-1 hover:ring-pct-lg-end focus:outline-none",
          {
            "from-white to-white text-lg-end hover:from-pct-lg-end hover:to-pct-lg-end hover:text-white hover:ring-1 hover:ring-white":
              index === 1,
          }
        )}>
        Learn More
      </button>
    </div>
  );
};

export default Card;
