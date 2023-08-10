import { FC, useEffect, useRef } from "react";
import { navbarLinks } from "@/helpers/np/navbar-links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface AsideNavBarProps {
  openNavBar: boolean;
  setOpenNavBar: (openNavBar: boolean) => void;
}

const AsideNavBar: FC<AsideNavBarProps> = ({ openNavBar, setOpenNavBar }) => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenNavBar(false);
      }
    };

    if (openNavBar) {
      document.body.classList.add("body-no-scroll");
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.classList.remove("body-no-scroll");
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openNavBar, setOpenNavBar]);

  return (
    <aside
      ref={navbarRef}
      className={cn(
        "fixed font-inter top-0 right-0 py-3 px-3 h-screen min-w-[65vw] bg-white z-50 transition-transform duration-500 ease-in-out transform translate-x-full",
        {
          "translate-x-0": openNavBar,
          "translate-x-full": !openNavBar,
        }
      )}
      role="navigation">
      <div className="flex justify-end my-auto p-[0.625rem] pr-7 h-0">
        <button
          className={cn({
            hidden: !openNavBar,
          })}
          onClick={() => setOpenNavBar(false)}>
          <Image
            src={
              "/frontend-mentor-challenges/news-homepage/menu-close-icon.svg"
            }
            alt="close menu icon"
            width={30}
            height={30}
          />
        </button>
      </div>
      <ul className="mt-[6rem] flex flex-col space-y-2">
        {navbarLinks().map((navbarLink, index) => {
          return (
            <li key={index}>
              <Link
                onClick={() => setOpenNavBar(false)}
                className="block px-4 py-2 text-lg font-bold text-very-dark-blue"
                href="/news-homepage">
                {navbarLink}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AsideNavBar;
