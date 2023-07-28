import { FC } from "react";
import BarChart from "@/components/ecc/BarChart";
import { Day } from "@/types/ecc/data";

interface SpendingsProps {
  daysData: Day[];
  totalThisMonth: number;
  percentChange: number;
}

const Spendings: FC<SpendingsProps> = ({
  daysData,
  totalThisMonth,
  percentChange,
}) => {
  return (
    <div className="flex flex-col p-3 py-5 space-y-4 bg-white rounded-lg text-ecc-dark-brown">
      <h3 className="text-lg font-bold">Spending - Last 7 days</h3>
      <BarChart daysData={daysData} />
      <span className="w-full border-b border-white border-opacity-40"></span>
      <div>
        <p className="text-sm text-ecc-medium-brown">Total this month</p>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">${totalThisMonth}</h2>
          <div className="flex flex-col items-end">
            <p className="font-bold">{`${
              percentChange !== 0 ? (percentChange > 0 ? "+" : "-") : ""
            }${percentChange}%`}</p>
            <p className="text-xs text-ecc-medium-brown">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spendings;
