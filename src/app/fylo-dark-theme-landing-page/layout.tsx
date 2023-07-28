import { FC, ReactNode } from "react";
import Header from "@/components/fylo/Header";
import Footer from "@/components/fylo/Footer";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Fylo Dark Theme Landing Page",
  description: "Fylo Dark Theme Landing Page",
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
