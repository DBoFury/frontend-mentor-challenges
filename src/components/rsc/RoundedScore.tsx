import { FC } from "react";

interface RoundedScoreProps {
  resultScore: number;
}

const RoundedScore: FC<RoundedScoreProps> = ({ resultScore }) => {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-gradient-to-b from-rsc-violet-blue to-rsc-persian-blue">
      <p className="text-5xl font-semibold text-center text-white">
        {resultScore}
      </p>
      <p className="mt-2 text-gray-400">of 100</p>
    </div>
  );
};

export default RoundedScore;
