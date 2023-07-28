import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ui/ArrowIcon";

const How = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-8 pb-20 space-y-5 text-white font-raleway bg-fylo-main sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="relative overflow-hidden">
        <Image
          src={
            process.env.NODE_ENV === "production"
              ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/illustration-stay-productive.png"
              : "/fylo-dark-theme-landing-page/illustration-stay-productive.png"
          }
          alt="stay productive illustration"
          width={550}
          height={500}
        />
      </div>
      <div className="flex flex-col w-full space-y-3 sm:w-1/3">
        <h1 className="text-lg font-semibold leading-snug md:text-2xl lg:text-5xl">
          Stay productive,
          <br /> wherever you are
        </h1>
        <p className="text-xs leading-relaxed md:text-base">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs
        </p>
        <p className="text-xs leading-relaxed md:text-base">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <Link
          href="/fylo-dark-theme-landing-page"
          className="flex flex-col self-start space-y-1 text-fylo-cyan group">
          <div className="flex flex-row items-center space-x-2 text-sm">
            <span className="group-hover:text-white">See how Fylo works</span>
            <ArrowIcon className="group-hover:fill-white" />
          </div>
          <hr className="border-fylo-cyan group-hover:border-white" />
        </Link>
      </div>
    </section>
  );
};

export default How;
