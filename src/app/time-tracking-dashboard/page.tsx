"use client";

import { useState, useEffect } from "react";
import PersonCard from "@/components/ttd/PersonCard";
import ActivityCard from "@/components/ttd/ActivityCard";
import { Activity } from "@/types/ttd/data";

const page = () => {
  const [data, setData] = useState<Activity[]>([]);
  const [timestamp, setTimestamp] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NODE_ENV === "production"
            ? "/frontend-mentor-challenges/time-tracking-dashboard/data.json"
            : "/time-tracking-dashboard/data.json"
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
    <div className="flex items-center justify-center min-h-screen font-rubik bg-ttd-very-dark-blue">
      <main className="flex w-[20.5rem] flex-col justify-center py-10 md:w-[44rem] md:flex-row md:space-x-5 md:space-y-0 dt:h-[32rem] dt:w-[69.5rem] dt:space-x-7 dt:py-0">
        <PersonCard timestamp={timestamp} setTimestamp={setTimestamp} />
        <section className="grid w-full grid-cols-1 mt-5 gap-y-8 md:grid-cols-2 md:gap-5 dt:h-full dt:grid-cols-3 dt:gap-x-6 dt:gap-y-8">
          {data.map((item, index) => {
            return (
              <ActivityCard key={index} item={item} timestamp={timestamp} />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default page;
