import { FC } from "react";
import { cn } from "@/lib/utils";
import { timeframesName } from "@/helpers/ttd/timeframes-names";
import CountUp from "react-countup";
import { Activity } from "@/types/ttd/data";
import Image from "next/image";

interface ActivityCardProps {
  item: Activity;
  timestamp: "daily" | "weekly" | "monthly";
}

const ActivityCard: FC<ActivityCardProps> = ({ item, timestamp }) => {
  return (
    <div className="relative">
      <div
        className={cn(
          "relative z-0 -mb-8 flex h-[4.75rem] justify-end rounded-xl",
          `bg-ttd-${item.color}`
        )}>
        <div className="overflow-hidden">
          <Image
            src={
              process.env.NODE_ENV === "production"
                ? `/frontend-mentor-challenges/time-tracking-dashboard/icon-${item.title
                    .toLowerCase()
                    .replace(" ", "-")}.svg`
                : `/time-tracking-dashboard/icon-${item.title
                    .toLowerCase()
                    .replace(" ", "-")}.svg`
            }
            alt={`${item.title} icon`}
            width={70}
            height={70}
            className="mr-5 -mt-1"
          />
        </div>
      </div>
      <div className="relative z-10 cursor-pointer rounded-2xl bg-ttd-dark-blue text-ttd-pale-blue hover:bg-ttd-desaturated-blue ">
        <div className="flex flex-col justify-between space-y-1 px-7 py-[1.425rem] dt:space-y-7 dt:py-7">
          <div className="flex items-center justify-between text-white">
            <h4 className="text-lg font-medium">{item.title}</h4>
            <div className="cursor-pointer">
              <Image
                src={
                  process.env.NODE_ENV === "production"
                    ? "/frontend-mentor-challenges/time-tracking-dashboard/icon-ellipsis.svg"
                    : "/time-tracking-dashboard/icon-ellipsis.svg"
                }
                alt="ellipsis icon"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="flex items-center justify-between md:flex-col md:items-start md:space-y-2 dt:space-y-1">
            <h3 className="text-3xl font-thin text-white md:text-4xl dt:text-6xl">
              <CountUp end={item.timeframes[timestamp].current} duration={3} />
              hrs
            </h3>
            <p className="md:text-xs dt:text-base">
              Last {timeframesName()[timestamp]} -{" "}
              {item.timeframes[timestamp].previous}hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
