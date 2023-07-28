import { FC } from "react";
import ItemScore from "@/components/rsc/ItemScore";
import { CategoryScore } from "@/types/rsc/data";

interface SummaryProps {
  scores: CategoryScore[];
}

const Summary: FC<SummaryProps> = ({ scores }) => {
  return (
    <div className="dt:h-[28rem] dt:w-[22rem] dt:ml-[-2.25rem] dt:rounded-3xl dt:shadow-rsc-summary dt:flex-none flex-1 ">
      <div className="dt:ml-[2.25rem] py-5">
        <div className="flex flex-col justify-between px-10">
          <p className="text-xl font-extrabold text-rsc-dark-gray-blue">
            Summary
          </p>
          <div className="flex flex-col flex-1 my-5 space-y-4">
            {scores.map((score, index) => (
              <ItemScore key={index} score={score} />
            ))}
          </div>
          <button className="self-center w-full max-w-lg py-3 font-semibold text-white bg-rsc-dark-gray-blue hover:bg-gradient-to-b from-rsc-light-slate-blue to-rsc-light-royal-blue rounded-3xl">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
