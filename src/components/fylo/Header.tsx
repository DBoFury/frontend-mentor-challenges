import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="w-full text-white font-raleway">
      <nav className="flex items-center justify-between px-6 py-12 mx-auto bg-fylo-intro sm:px-12 md:px-20 lg:px-28">
        <Link
          href="/fylo-dark-theme-landing-page"
          className="relative w-20 h-10 overflow-hidden sm:h-16 sm:w-32 md:h-20 md:w-40 lg:h-24 lg:w-48">
          <Image
            src={
              process.env.NODE_ENV === "production"
                ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/logo.svg"
                : "/fylo-dark-theme-landing-page/logo.svg"
            }
            alt="logo"
            fill
            className="object-contain"
          />
        </Link>

        <ul className="flex space-x-3 text-xs sm:space-x-10 sm:text-sm md:text-base lg:text-lg">
          <li>
            <Link
              className="header-link"
              data-title="Features"
              href="/fylo-dark-theme-landing-page">
              Features
            </Link>
          </li>
          <li>
            <Link
              className="header-link"
              data-title="Team"
              href="/fylo-dark-theme-landing-page">
              Team
            </Link>
          </li>
          <li>
            <Link
              className="header-link"
              data-title="Sign In"
              href="/fylo-dark-theme-landing-page">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
