"use client";

import CardDetails from "@/components/icd/CardDetails";
import MainSection from "@/components/icd/MainSection";
import { formSchema } from "@/helpers/icd/form";
import { useState } from "react";
import * as z from "zod";

const page = () => {
  const [cardDetails, setCardDetails] = useState<z.infer<
    typeof formSchema
  > | null>(null);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen space-y-24 font-space-grotesk lg:flex-row lg:space-y-0">
      <CardDetails cardDetails={cardDetails} />
      <MainSection setCardDetails={setCardDetails} />
    </main>
  );
};

export default page;
