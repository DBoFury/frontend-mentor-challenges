"use client";

import { useState } from "react";
import Form from "@/components/icc/Form";
import { CardDetails } from "@/types/icc/card";

import "./styles.css";

const page = () => {
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);

  return (
    <div className="flex flex-col min-h-screen font-space-grotesk dt:flex-row">
      <Form setCardDetails={setCardDetails} />
    </div>
  );
};

export default page;
