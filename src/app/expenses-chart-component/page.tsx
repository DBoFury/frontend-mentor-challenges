"use client";

import { useState, useEffect } from "react";
import Balance from "@/components/ecc/Balance";
import Spendings from "@/components/ecc/Spendings";
import { Day } from "@/types/ecc/data";

const page = () => {
  const [daysData, setDaysData] = useState<Day[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/expenses-chart-component/data.json");
        const jsonData = await response.json();
        setDaysData(jsonData);
      } catch (error) {
        console.error("Error fetching JSON file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen bg-ecc-cream font-dm-sans">
      <div className="m-auto">
        <div className="flex w-[15rem] flex-col space-y-3 sm:w-[17rem] md:w-[20rem] lg:w-[22rem] dt:w-[26rem]">
          <Balance balance={921.48} />
          <Spendings
            daysData={daysData}
            totalThisMonth={478.33}
            percentChange={2.4}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
