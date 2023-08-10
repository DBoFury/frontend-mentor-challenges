import Display from "@/components/lct/Display";
import FacebookIcon from "@/components/lct/ui/icons/FacebookIcon";
import InstagramIcon from "@/components/lct/ui/icons/InstagramIcon";
import PinterestIcon from "@/components/lct/ui/icons/PinterestIcon";

const page = () => {
  return (
    <div className="h-screen font-red-hat-text">
      <div className="relative flex items-center justify-center w-full h-full overflow-clip bg-gradient-to-b from-lct-blackish-blue to-lct-very-dark-blue">
        <div className="absolute w-full h-full bg-center bg-no-repeat bg-cover bg-lct-stars" />
        <div className="absolute bottom-12 right-0 z-10 h-full w-[200vw] bg-lct-pattern-hills bg-contain bg-bottom bg-no-repeat sm:w-[150vw] md:w-[100vw] lg:bottom-0" />
        <div className="absolute bottom-0 right-0 z-0 h-full w-[200vw] bg-lct-pattern-hills bg-contain bg-bottom bg-no-repeat sm:w-[150vw] md:w-[100vw] lg:hidden" />
        <main className="flex flex-col items-center justify-center w-full h-full text-white mb-36 space-y-11">
          <h1 className="text-center text-base uppercase tracking-[0.4rem] md:absolute md:top-44 md:text-3xl md:tracking-[0.5rem]">
            We′re launching soon
          </h1>
          <Display endDate={"2023-08-26"} />
        </main>
        <div className="absolute bottom-12 z-20 flex w-[40%] justify-around md:bottom-20 md:justify-center md:space-x-8">
          <FacebookIcon className="cursor-pointer hover:fill-lct-soft-red" />
          <PinterestIcon className="cursor-pointer hover:fill-lct-soft-red" />
          <InstagramIcon className="cursor-pointer hover:fill-lct-soft-red" />
        </div>
      </div>
    </div>
  );
};

export default page;
