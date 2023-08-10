import Image from "next/image";
import { FC } from "react";

interface BalanceProps {
  balance: number;
}

const Balance: FC<BalanceProps> = ({ balance }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-ecc-soft-red">
      <div className="text-white">
        <p className="text-xs">My balance</p>
        <h5 className="text-lg font-bold md:text-xl">${balance}</h5>
      </div>
      <Image
        src={"/frontend-mentor-challenges/expenses-chart-component/logo.svg"}
        alt="logo"
        width={30}
        height={30}
      />
    </div>
  );
};

export default Balance;
