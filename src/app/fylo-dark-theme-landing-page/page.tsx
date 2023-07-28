import { FC } from "react";
import Hero from "@/components/fylo/Hero";
import Features from "@/components/fylo/Features";
import How from "@/components/fylo/How";
import Reviews from "@/components/fylo/Reviews";

import "./styles.css";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen font-raleway overflow-x-clip">
      <Hero />
      <Features />
      <How />
      <Reviews />
    </main>
  );
};

export default page;
