import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface PersonCardProps {
  timestamp: "daily" | "weekly" | "monthly";
  setTimestamp: (value: "daily" | "weekly" | "monthly") => void;
}

const PersonCard: FC<PersonCardProps> = ({ timestamp, setTimestamp }) => {
  return (
    <div className="relative">
      <div className="relative z-10 flex items-center px-8 py-8 rounded-xl bg-ttd-blue md:flex-col md:items-start md:space-y-8 md:pb-28 dt:space-y-10 dt:pb-20">
        <div className="relative rounded-full h-[4.25rem] w-[4.25rem]  border-2 border-white md:h-[5.25rem] md:w-[5.25rem]">
          <Image
            src={
              "/frontend-mentor-challenges/time-tracking-dashboard/image-jeremy.png"
            }
            alt="profile image"
            fill
            className="object-contain rounded-full"
          />
        </div>
        <div className="flex flex-col ml-5 md:ml-0 md:w-44 dt:w-48">
          <h5 className="font-thin text-ttd-pale-blue">Report for</h5>
          <h4 className="text-2xl font-thin text-white md:text-4xl dt:text-5xl">
            Jeremy Robson
          </h4>
        </div>
      </div>
      <div className="relative z-0 flex justify-around px-3 pb-5 -mt-8 text-lg rounded-xl bg-ttd-dark-blue pt-14 text-ttd-desaturated-blue md:flex-col md:space-y-4 md:px-6">
        <p
          onClick={() => setTimestamp("daily")}
          className={cn("cursor-pointer hover:text-white", {
            "text-white": timestamp === "daily",
          })}>
          Daily
        </p>
        <p
          onClick={() => setTimestamp("weekly")}
          className={cn("cursor-pointer hover:text-white", {
            "text-white": timestamp === "weekly",
          })}>
          Weekly
        </p>
        <p
          onClick={() => setTimestamp("monthly")}
          className={cn("cursor-pointer hover:text-white", {
            "text-white": timestamp === "monthly",
          })}>
          Monthly
        </p>
      </div>
    </div>
  );
};

export default PersonCard;
