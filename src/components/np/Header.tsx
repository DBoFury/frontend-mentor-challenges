import { navbarLinks } from "@/helpers/np/navbar-links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HeaderProps {
  openNavBar: boolean;
  setOpenNavBar: (openNavBar: boolean) => void;
}

const Header: FC<HeaderProps> = ({ openNavBar, setOpenNavBar }) => {
  return (
    <header className="font-inter sticky -top-[1px] flex justify-between flex-wrap bg-white m-auto  py-5 px-5 dt:static dt:items-center max-w-[72rem] dt:my-10 dt:px-0">
      <Link
        href="/news-homepage"
        className="flex items-center justify-center focus:outline-none">
        <Image
          src={"/frontend-mentor-challenges/news-homepage/logo-icon.svg"}
          alt="logo"
          width={100}
          height={50}
        />
      </Link>
      <div className="flex justify-center h-0 my-auto dt:hidden">
        <button
          className={cn("flex justify-center items-center", {
            hidden: openNavBar,
          })}
          onClick={() => setOpenNavBar(true)}>
          <Image
            src={"/frontend-mentor-challenges/news-homepage/menu-icon.svg"}
            alt="menu icon"
            width={40}
            height={40}
          />
        </button>
      </div>
      <nav className="hidden dt:block">
        <ul className="flex space-x-10 font-medium text-np-dark-grayish-blue">
          {navbarLinks().map((navbarLink, index) => {
            return (
              <li key={index}>
                <Link
                  className="focus:outline-none hover:text-np-soft-red"
                  href="/news-homepage">
                  {navbarLink}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
