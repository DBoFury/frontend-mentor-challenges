"use client";

import { AnimationEvent, FC, useEffect, useRef, useState } from "react";
import Completed from "./Completed";
import CardForm from "./CardForm";
import * as z from "zod";
import { formSchema } from "@/helpers/icd/form";

interface MainSectionProps {
  setCardDetails: (value: z.infer<typeof formSchema>) => void;
}

const MainSection: FC<MainSectionProps> = ({ setCardDetails }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const completedRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleAnimationEndCompleted = (e: AnimationEvent<HTMLDivElement>) => {
    if (!isCompleted) {
      if (formRef.current) {
        formRef.current.style.display = "";
      }
      if (completedRef.current) {
        completedRef.current.style.display = "none";
      }
    }
  };

  const handleAnimationEndForm = (e: AnimationEvent<HTMLDivElement>) => {
    if (isCompleted) {
      if (formRef.current) {
        formRef.current.style.display = "none";
      }
      if (completedRef.current) {
        completedRef.current.style.display = "";
      }
    }
  };

  return (
    <section className="lg:flex-1 lg:flex lg:items-center lg:justify-start lg:ml-56">
      <Completed
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
        completedRef={completedRef}
        handleAnimationEndCompleted={handleAnimationEndCompleted}
      />
      <CardForm
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
        formRef={formRef}
        handleAnimationEndForm={handleAnimationEndForm}
        setCardDetails={setCardDetails}
      />
    </section>
  );
};

export default MainSection;
