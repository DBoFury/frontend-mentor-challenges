"use client";

import { useState, useEffect } from "react";
import { calculateAverageScore } from "@/lib/rsc/calc-avg-score";
import Results from "@/components/rsc/Results";
import Summary from "@/components/rsc/Summary";
import { CategoryScore } from "@/types/rsc/data";

function page() {
  const [data, setData] = useState<CategoryScore[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NODE_ENV === "production"
            ? "/frontend-mentor-challenges/results-summary-component/data.json"
            : "/results-summary-component/data.json"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching JSON file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-hanken-grotesk dt:justify-center dt:items-center dt:flex-row">
      <Results resultScore={calculateAverageScore(data)} />
      <Summary scores={data} />
    </div>
  );
}

export default page;
