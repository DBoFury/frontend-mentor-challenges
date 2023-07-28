import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="flex flex-col px-8 pb-16 space-y-16 text-white pt-44 font-raleway bg-fylo-footer lg:px-32">
      <Link href="/fylo-dark-theme-landing-page">
        <Image
          src={
            process.env.NODE_ENV === "production"
              ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/logo.svg"
              : "/fylo-dark-theme-landing-page/logo.svg"
          }
          alt="logo"
          width={160}
          height={80}
        />
      </Link>

      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between">
        <div className="flex items-start w-3/5 space-x-5 md:w-1/3">
          <Image
            src={
              process.env.NODE_ENV === "production"
                ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/icon-location.svg"
                : "/fylo-dark-theme-landing-page/icon-location.svg"
            }
            alt="location icon"
            width={20}
            height={20}
            className="pt-1"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-start space-x-4">
            <Image
              src={
                process.env.NODE_ENV === "production"
                  ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/icon-phone.svg"
                  : "/fylo-dark-theme-landing-page/icon-phone.svg"
              }
              alt="phone icon"
              width={17}
              height={17}
              className="pt-1"
            />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex items-start space-x-4">
            <Image
              src={
                process.env.NODE_ENV === "production"
                  ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/icon-email.svg"
                  : "/fylo-dark-theme-landing-page/icon-email.svg"
              }
              alt="email icon"
              width={20}
              height={20}
              className="pt-1"
            />
            <p>example@fylo.com</p>
          </div>
        </div>

        <ul className="flex flex-col pt-8 space-y-2 md:pt-0">
          <li>
            <Link
              className="footer-link"
              data-title="About Us"
              href="/fylo-dark-theme-landing-page">
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="footer-link"
              data-title="Jobs"
              href="/fylo-dark-theme-landing-page">
              Jobs
            </Link>
          </li>
          <li>
            <Link
              className="footer-link"
              data-title="Press"
              href="/fylo-dark-theme-landing-page">
              Press
            </Link>
          </li>
          <li>
            <Link
              className="footer-link"
              data-title="Blog"
              href="/fylo-dark-theme-landing-page">
              Blog
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col pt-5 space-y-2 md:pt-0">
          <li>
            <Link
              className="footer-link"
              data-title="Contact Us"
              href="/fylo-dark-theme-landing-page">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="footer-link"
              data-title="Terms"
              href="/fylo-dark-theme-landing-page">
              Terms
            </Link>
          </li>
          <li>
            <Link
              className="footer-link"
              data-title="Privacy"
              href="/fylo-dark-theme-landing-page">
              Privacy
            </Link>
          </li>
        </ul>

        <ul className="flex items-center justify-center pt-8 space-x-3 md:pt-0 md:items-start">
          <li className="group">
            <Link
              href="/fylo-dark-theme-landing-page"
              className="flex items-center justify-center w-10 h-10 border border-white rounded-full group-hover:border-fylo-cyan">
              <BiLogoFacebook
                size={25}
                className="group-hover:text-fylo-cyan"
              />
            </Link>
          </li>
          <li className="group">
            <Link
              href="/fylo-dark-theme-landing-page"
              className="flex items-center justify-center w-10 h-10 border border-white rounded-full group-hover:border-fylo-cyan">
              <BiLogoTwitter size={25} className="group-hover:text-fylo-cyan" />
            </Link>
          </li>
          <li className="group">
            <Link
              href="/fylo-dark-theme-landing-page"
              className="flex items-center justify-center w-10 h-10 border border-white rounded-full group-hover:border-fylo-cyan">
              <BiLogoInstagram
                size={25}
                className="group-hover:text-fylo-cyan"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
