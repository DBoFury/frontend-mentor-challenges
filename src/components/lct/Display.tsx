"use client";

import { FC, useState, useEffect } from "react";

interface DisplayProps {
  endDate: Date | string;
}

const Display: FC<DisplayProps> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date(endDate);
      const timeDiff = Math.max(targetDate.getTime() - Date.now(), 0);
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endDate]);

  return (
    <>
      {timeLeft !== null ? (
        <div className="relative flex h-[10vh] max-h-[4rem] w-full max-w-[21rem] justify-around text-3xl text-soft-red md:h-[9%] md:max-h-none md:max-w-[30rem] md:text-5xl lg:h-[13%] lg:max-w-[45rem] lg:text-7xl dt:h-[14%] dt:max-w-[47rem]">
          <div className="relative flex items-center justify-center w-1/5">
            <div className="absolute inset-0 grid grid-rows-2">
              <div className="rounded-t-sm bg-lct-desaturated-blue-dark after:absolute after:top-1/2 after:z-20 after:h-[10%] after:w-[6%] after:-translate-y-1/2 after:rounded-r-full after:bg-lct-blackish-blue md:rounded-t-md"></div>
              <span className="absolute inset-0 z-10 m-auto h-[0.01rem] w-full bg-gray-900 opacity-40"></span>
              <div className="rounded-b-sm bg-lct-desaturated-blue-light lct-shadow-display after:absolute after:right-0 after:top-1/2 after:z-20 after:h-[10%] after:w-[6%] after:-translate-y-1/2 after:rounded-l-full after:bg-lct-blackish-blue md:rounded-b-md"></div>
            </div>

            <span className="relative">{timeLeft?.days}</span>
            <span className="absolute -bottom-5 text-[0.5rem] uppercase leading-3 tracking-[0.2em] text-lct-grayish-blue md:-bottom-7 md:text-[0.7rem] lg:-bottom-10 lg:text-[1rem]">
              days
            </span>
          </div>

          <div className="relative flex items-center justify-center w-1/5">
            <div className="absolute inset-0 grid grid-rows-2">
              <div className="rounded-t-sm bg-lct-desaturated-blue-dark after:absolute after:top-1/2 after:z-20 after:h-[10%] after:w-[6%] after:-translate-y-1/2 after:rounded-r-full after:bg-lct-blackish-blue md:rounded-t-md"></div>
              <span className="absolute inset-0 z-10 m-auto h-[0.01rem] w-full bg-gray-900 opacity-40"></span>
              <div className="rounded-b-sm bg-lct-desaturated-blue-light lct-shadow-display after:absolute after:right-0 after:top-1/2 after:z-20 after:h-[10%] after:w-[6%] after:-translate-y-1/2 after:rounded-l-full after:bg-lct-blackish-blue md:rounded-b-md"></div>
            </div>

            <span className="relative">{timeLeft?.hours}</span>
            <span className="absolute -bottom-5 text-[0.5rem] uppercase leading-3 tracking-[0.2em] text-lct-grayish-blue md:-bottom-7 md:text-[0.7rem] lg:-bottom-10 lg:text-[1rem]">
              hours
            </span>
          </div>

          <div className="relative flex items-center justify-center w-1/5">
            <div className="absolute inset-0 grid grid-rows-2">
              <div className="rounded-t-sm bg-lct-desaturated-blue-dark after:absolute after:top-1/2 after:z-20 after:h-[10%] after:w-[6%] after:-translate-y-1/2 after:rounded-r-full after:bg-lct-blackish-blue md:rounded-t-md"></div>
              <span className="absolute inset-0 z-10 m-auto h-[0.01rem] w-full bg-gray-900 opacity-40"></span>
              <div className="rounded-b-sm bg-lct-desaturated-blue-light lct-shadow-display after:absolute after:right-0 after:top-1/2 after:z-20 after:h-[10%] after:w-[6%] after:-translate-y-1/2 after:rounded-l-full after:bg-lct-blackish-blue md:rounded-b-md"></div>
            </div>

            <span className="relative">{timeLeft?.minutes}</span>
            <span className="absolute -bottom-5 text-[0.5rem] uppercase leading-3 tracking-[0.2em] text-lct-grayish-blue md:-bottom-7 md:text-[0.7rem] lg:-bottom-10 lg:text-[1rem]">
              minutes
            </span>
          </div>

          <div className="relative flex items-center justify-center w-1/5">
            <div className="absolute inset-0 grid grid-rows-2">
              <div className="rounded-t-sm bg-lct-desaturated-blue-dark after:absolute after:top-1/2 after:z-20 after:h-[10%] after:w-[6%] after:-translate-y-1/2 after:rounded-r-full after:bg-lct-blackish-blue md:rounded-t-md"></div>
              <span className="absolute inset-0 z-10 m-auto h-[0.01rem] w-full bg-gray-900 opacity-40"></span>
              <div className="rounded-b-sm bg-lct-desaturated-blue-light lct-shadow-display after:absolute after:right-0 after:top-1/2 after:z-20 after:h-[10%] after:w-[6%] after:-translate-y-1/2 after:rounded-l-full after:bg-lct-blackish-blue md:rounded-b-md"></div>
            </div>

            <span className="relative">{timeLeft?.seconds}</span>
            <span className="absolute -bottom-5 text-[0.5rem] uppercase leading-3 tracking-[0.2em] text-lct-grayish-blue md:-bottom-7 md:text-[0.7rem] lg:-bottom-10 lg:text-[1rem]">
              seconds
            </span>
          </div>
        </div>
      ) : (
        <div className="relative flex h-[10vh] max-h-[4rem] w-full max-w-[21rem] justify-around text-3xl text-slate-400 md:h-[9%] md:max-h-none md:max-w-[30rem] md:text-5xl lg:h-[13%] lg:max-w-[45rem] lg:text-7xl dt:h-[14%] dt:max-w-[47rem]">
          {["days", "hours", "minutes", "seconds"].map((period) => {
            return (
              <div
                key={period}
                className="relative flex items-center justify-center w-1/5">
                <div className="absolute inset-0 grid grid-rows-2 animate-pulse">
                  <div className="rounded-t-sm bg-lct-grayish-blue md:rounded-t-md"></div>
                  <div className="rounded-b-sm bg-lct-grayish-blue shadow-display md:rounded-b-md"></div>
                </div>

                <span className="relative">00</span>
                <span className="absolute -bottom-5 text-[0.5rem] uppercase leading-3 tracking-[0.2em] text-lct-grayish-blue md:text-[0.7rem] lg:-bottom-10 lg:text-[1rem]">
                  {period}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Display;
