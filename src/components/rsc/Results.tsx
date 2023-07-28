import { FC } from "react";
import RoundedScore from "@/components/rsc/RoundedScore";

interface ResultsProps {
  resultScore: number;
}

const Results: FC<ResultsProps> = ({ resultScore }) => {
  return (
    <div className=" dt:h-[28rem] dt:w-[19.5rem] dt:rounded-3xl flex flex-col items-center w-full bg-gradient-to-b from-rsc-light-slate-blue to-rsc-light-royal-blue space-y-5 py-5 rounded-b-3xl">
      <div className="text-xl font-bold text-gray-300">Your Result</div>
      <RoundedScore resultScore={resultScore} />
      <div className="flex flex-col mx-[2.5rem]">
        <p className="text-3xl font-semibold text-center text-white">Great</p>
        <p className="text-center text-gray-300 text-[18] overflow-hidden h-20 line-clamp-5 my-3">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Results;
