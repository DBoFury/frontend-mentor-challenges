import { getTodayWeekDay } from "@/helpers/ecc/get-week-day";
import { cn } from "@/lib/utils";
import { Day } from "@/types/ecc/data";
import React, { useEffect, useRef } from "react";

interface BarChartProps {
  daysData: Day[];
}

const BarChart: React.FC<BarChartProps> = ({ daysData }) => {
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    barRefs.current.forEach((barRef, index) => {
      if (barRef) {
        const height = (daysData[index].amount / getMaxAmount()) * 100;
        barRef.style.height = `${height}%`;
      }
    });
  }, [daysData]);

  const getMaxAmount = () => {
    return daysData.reduce((max, item) => Math.max(max, item.amount), 0);
  };

  return (
    <div className="dt:[12rem] flex h-[8rem] items-end justify-between md:h-[15rem]">
      {daysData.map((item, index) => {
        return (
          <div
            key={item.day}
            className="flex h-[90%] w-[12%] flex-col items-center justify-end space-y-2">
            <div
              ref={(el) => (barRefs.current[index] = el)}
              className={cn(
                "group relative w-full rounded-[0.25rem] duration-1000 ease-in-out focus:outline-none",
                getTodayWeekDay() === item.day
                  ? "bg-ecc-cyan hover:bg-ecc-cyan-bright"
                  : "bg-ecc-soft-red hover:bg-ecc-soft-red-bright"
              )}
              style={{ height: "0%" }}>
              <div className="absolute -top-[1.7rem] left-1/2 hidden -translate-x-1/2 transform rounded-md bg-ecc-dark-brown p-1 text-[0.55rem] text-white transition-all group-hover:block md:-top-[2rem] md:text-[0.7rem] lg:-top-[2.2rem] lg:text-[0.9rem] dt:-top-[2.8rem] dt:p-[0.4rem] dt:text-[1rem]">
                ${item.amount}
              </div>
            </div>
            <p className="text-xs text-ecc-medium-brown">{item.day}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
