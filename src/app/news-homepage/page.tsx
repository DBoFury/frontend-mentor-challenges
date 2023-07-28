"use client";

import { useState } from "react";
import Header from "@/components/np/Header";
import MainArticle from "@/components/np/MainArticle";
import NewArticles from "@/components/np/NewArticles";
import OtherActicles from "@/components/np/OtherActicles";
import AsideNavBar from "@/components/np/AsideNavBar";

const page = () => {
  const [openNavBar, setOpenNavBar] = useState<boolean>(false);

  return (
    <>
      <Header openNavBar={openNavBar} setOpenNavBar={setOpenNavBar} />
      <AsideNavBar openNavBar={openNavBar} setOpenNavBar={setOpenNavBar} />
      <main className="flex font-inter flex-col mx-auto px-[1.25rem] mb-10 space-y-5 bg-np-off-white max-w-[72rem] dt:px-0 dt:space-y-16">
        <div className="flex flex-col dt:flex-row dt:space-x-6">
          <MainArticle />
          <NewArticles />
        </div>
        <OtherActicles />
      </main>
      {openNavBar && (
        <span className="fixed inset-0 z-30 bg-gray-900 bg-opacity-50" />
      )}
    </>
  );
};

export default page;
