import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-10 space-y-5 related sm:px-0 bg-fylo-intro">
      <div className="z-20">
        <Image
          src="/fylo-dark-theme-landing-page/illustration-intro.png"
          alt="intro image"
          width={700}
          height={760}
        />
      </div>
      <div className="z-20 flex flex-col space-y-4 items-center justify-center text-center max-w-[28rem] text-white">
        <h1 className="font-semibold text-lg sm:text-[1.65rem] sm:leading-[1.6] md:text-3xl">
          All your files in one secore location, accessible anywhere.
        </h1>
        <p className="sm:w-[90%] text-xs sm:text-[0.85rem] md:text-lg md:leading-normal">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
      </div>
      <button className="z-20 px-16 py-3 text-[0.7rem] font-semibold md:text-base text-white rounded-full bg-gradient-to-r from-fylo-cyan to-fylo-blue focus:outline-none hover:from-fylo-cyan hover:to-fylo-cyan">
        Get Started
      </button>

      <div className="absolute bottom-0 w-full h-full bg-bottom bg-no-repeat bg-contain bg-fylo-mobile sm:bg-fylo-desktop" />
    </section>
  );
};

export default Hero;
