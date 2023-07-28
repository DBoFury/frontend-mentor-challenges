import type { Metadata } from "next";
import {
  Raleway,
  Open_Sans,
  Lexend_Deca,
  Big_Shoulders_Display,
  Poppins,
  DM_Sans,
  Space_Grotesk,
  Red_Hat_Text,
  Inter,
  Montserrat,
  Fraunces,
  Kumbh_Sans,
  Hanken_Grotesk,
  Rubik,
  Bebas_Neue,
} from "next/font/google";

import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const lexend_deca = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend-deca",
});

const big_shoulders_display = Big_Shoulders_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-big-shoulders-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-dm-sans",
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const red_hat_text = Red_Hat_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-text",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
  variable: "--font-montserrat",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const kumbh_sans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kumbh-sans",
});

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Frontend Mentor projects",
  description: "A compilation of Frontend Mentor tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative ${raleway.variable} ${open_sans.variable} ${lexend_deca.variable} ${big_shoulders_display.variable} ${poppins.variable} ${dm_sans.variable} ${space_grotesk.variable} ${red_hat_text.variable} ${inter.variable} ${montserrat.variable} ${fraunces.variable} ${kumbh_sans.variable} ${hanken_grotesk.variable} ${rubik.variable} ${bebas_neue.variable}`}>
        {children}
      </body>
    </html>
  );
}
