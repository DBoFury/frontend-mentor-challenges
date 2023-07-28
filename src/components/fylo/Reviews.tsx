import Image from "next/image";
import EarlyAccess from "./EarlyAccess";

const Reviews = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-8 space-y-4 pb-44 bg-fylo-main md:flex-row md:space-x-10 md:px-12 md:space-y-0">
      <div className="relative">
        <div className="absolute h-[1.4rem] w-[1.5rem] z-0 -translate-y-full left-2 md:w-[2.25rem] md:h-[2rem] md:-translate-y-3/4 md:left-0 md:-translate-x-[20%]">
          <Image
            src={
              process.env.NODE_ENV === "production"
                ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/bg-quotes.png"
                : "/fylo-dark-theme-landing-page/bg-quotes.png"
            }
            alt="quotes icon"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-10 review-card">
          <div className="relative z-10 flex flex-col p-6 space-y-4">
            <p className="leading-relaxed md:text-sm">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch out team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-2">
              <div>
                <Image
                  src={
                    process.env.NODE_ENV === "production"
                      ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/profile-1.jpg"
                      : "/fylo-dark-theme-landing-page/profile-1.jpg"
                  }
                  alt="first review profile photo"
                  height={30}
                  width={30}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-semibold">Satish Patel</h2>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="review-card">
          <div className="flex flex-col p-6 space-y-4">
            <p className="leading-relaxed md:text-sm">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch out team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-2">
              <div>
                <Image
                  src={
                    process.env.NODE_ENV === "production"
                      ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/profile-2.jpg"
                      : "/fylo-dark-theme-landing-page/profile-2.jpg"
                  }
                  alt="second review profile photo"
                  height={30}
                  width={30}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-semibold">Satish Patel</h2>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="review-card">
          <div className="flex flex-col p-6 space-y-4">
            <p className="leading-relaxed md:text-sm">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch out team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-2">
              <div>
                <Image
                  src={
                    process.env.NODE_ENV === "production"
                      ? "/frontend-mentor-challenges/fylo-dark-theme-landing-page/profile-3.jpg"
                      : "/fylo-dark-theme-landing-page/profile-3.jpg"
                  }
                  alt="third review profile photo"
                  height={30}
                  width={30}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-semibold">Satish Patel</h2>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EarlyAccess />
    </section>
  );
};

export default Reviews;
