"use client";

import { useState, useEffect } from "react";
import Switch from "@/components/pct/ui/Switch";
import Card from "@/components/pct/Card";
import { Plan } from "@/types/pct/data";

const page = () => {
  const [planData, setPlanData] = useState<Plan[]>([]);
  const [planType, setPlanType] = useState<"annually" | "monthly">("annually");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NODE_ENV === "production"
            ? "/frontend-mentor-challenges/pricing-component-with-toggle/data.json"
            : "/pricing-component-with-toggle/data.json"
        );
        const jsonData = await response.json();
        setPlanData(jsonData);
      } catch (error) {
        console.error("Error fetching JSON file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden font-bold font-montserrat bg-pct-very-light-grayish-blue">
      <div
        className={`absolute top-0 right-0 w-3/4 translate-x-5 -translate-y-20 bg-right-top bg-no-repeat bg-contain h-1/4 ${
          process.env.NODE_ENV ? "bg-pct-image-top-prod" : "bg-pct-image-top"
        } md:h-1/2 dt:h-3/4`}
      />
      <div
        className={`absolute bottom-0 left-0 hidden w-1/2 bg-left-bottom bg-no-repeat bg-contain h-1/2 ${
          process.env.NODE_ENV
            ? "bg-pct-image-bottom-prod"
            : "bg-pct-image-bottom"
        } md:block`}
      />
      <main className="related z-10 my-[4.5rem] flex flex-col space-y-20">
        <section className="flex flex-col items-center space-y-8">
          <h1 className="text-[2rem] text-pct-grayish-blue">Our Pricing</h1>
          <Switch planType={planType} setPlanType={setPlanType} />
        </section>
        <section className="flex flex-col space-y-10 dt:flex-row dt:items-center dt:space-y-0">
          {planData.map((planItem, index) => {
            return (
              <Card
                key={index}
                index={index}
                planItem={planItem}
                planType={planType}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default page;
