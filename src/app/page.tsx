import Desktop from "@/components/Desktop";
import Mobile from "@/components/Mobile";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen space-y-4 text-night overflow-x-clip bg-magnolia">
      <Mobile />
      <Desktop />
      <span className="font-montserrat absolute hidden font-semibold text-[1.5vw] sm:block bottom-10 sm:right-4 lg:right-10 dt:text-xl">
        *hover over items to see additional information
        <br />
        **click to review
      </span>
      <div className="flex items-center self-center pb-4 space-x-4">
        <Link
          href="https://www.linkedin.com/in/oleg-didechkin/"
          rel="noopener noreferrer"
          target="_blank">
          <AiFillLinkedin size={50} />
        </Link>
        <Link
          href="https://github.com/DBoFury"
          rel="noopener noreferrer"
          target="_blank">
          <AiFillGithub size={50} />
        </Link>
        <Link
          href="https://t.me/golovakanta"
          rel="noopener noreferrer"
          target="_blank">
          <BsTelegram size={45} />
        </Link>
      </div>
    </main>
  );
}
