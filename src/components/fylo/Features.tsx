import Image from "next/image";
import { FC } from "react";

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <section className="relative flex items-center justify-center w-full px-8 py-20 sm:px-32 bg-fylo-main">
      <div className="grid gap-y-14 justify-items-center sm:grid-cols-2 max-w-[75rem]">
        <div className="feature-item">
          <div>
            <Image
              src={
                process.env.NODE_ENV === "production"
                  ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/icon-access-anywhere.svg"
                  : "/fylo-dark-theme-landing-page/icon-access-anywhere.svg"
              }
              alt="desktop icon"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="text-sm font-semibold sm:text-base md:text-lg">
              Access your files, anywhere
            </h1>
            <p className="text-[0.6rem] sm:text-sm md:text-base">
              The ability to use a smartphone, tablet or computer to access your
              accound means your files follow you everywhere.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <Image
              src={
                process.env.NODE_ENV === "production"
                  ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/icon-security.svg"
                  : "/fylo-dark-theme-landing-page/icon-security.svg"
              }
              alt="desktop icon"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="text-sm font-semibold sm:text-base md:text-lg">
              Security you can trust
            </h1>
            <p className="text-[0.6rem] sm:text-sm md:text-base">
              2-factor authentification and user-controlled encryption are just
              a couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <Image
              src={
                process.env.NODE_ENV === "production"
                  ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/icon-collaboration.svg"
                  : "/fylo-dark-theme-landing-page/icon-collaboration.svg"
              }
              alt="desktop icon"
              width={75}
              height={75}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="text-sm font-semibold sm:text-base md:text-lg">
              Real-time collaboration
            </h1>
            <p className="text-[0.6rem] sm:text-sm md:text-base">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div>
            <Image
              src={
                process.env.NODE_ENV === "production"
                  ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/icon-any-file.svg"
                  : "/fylo-dark-theme-landing-page/icon-any-file.svg"
              }
              alt="desktop icon"
              width={85}
              height={85}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="text-sm font-semibold sm:text-base md:text-lg">
              Store any type of file
            </h1>
            <p className="text-[0.6rem] sm:text-sm md:text-base">
              Whether you`re sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
