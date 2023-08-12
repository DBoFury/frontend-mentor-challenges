import * as z from "zod";
import { formSchema } from "@/helpers/icd/form";
import { FC } from "react";
import Image from "next/image";

interface CardDetailsProps {
  cardDetails: z.infer<typeof formSchema> | null;
}

const CardDetails: FC<CardDetailsProps> = ({ cardDetails }) => {
  return (
    <div className="relative h-64 w-full bg-icd-main-mobile bg-cover bg-no-repeat lg:bg-icd-main-desktop lg:min-h-screen lg:w-[30rem]">
      <div className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[50%] w-80 h-44 bg-icd-card-back bg-contain bg-no-repeat lg:w-96 lg:h-52 lg:top-[65%] lg:left-full lg:-translate-x-[50%]">
        <span className="absolute tracking-wider font-thin text-white inset-x-64 inset-y-[4.75rem] text-sm lg:inset-y-[5.75rem] lg:inset-x-72">
          {cardDetails?.cvc || "000"}
        </span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-[55%] translate-y-[7%] w-80 h-44 bg-icd-card-front bg-contain bg-no-repeat lg:w-96 lg:h-52 lg:top-1/4 lg:left-full lg:-translate-x-[75%]">
        <Image
          className="absolute inset-5"
          src="/frontend-mentor-challenges/interactive-card-details-form/card-logo.svg"
          alt="Card Logo"
          width={60}
          height={350}
        />
        <span className="absolute text-white tracking-widest text-[1.345rem] inset-y-[6rem] inset-x-5 lg:text-[1.5rem]">
          {cardDetails?.cardNumber || "0000 0000 0000 0000"}
        </span>
        <span className="absolute uppercase font-thin tracking-wider text-xs text-white inset-y-[8.6rem] inset-x-5 lg:inset-y-[10rem]">
          {cardDetails?.name || "Jane Appleseed"}
        </span>
        <span className="absolute uppercase font-thin tracking-wider text-xs text-white inset-y-[8.6rem] inset-x-[16.5rem] lg:inset-y-[10rem] lg:inset-x-[18.5rem]">
          {cardDetails
            ? `${cardDetails.exp.month}/${cardDetails.exp.year.substring(2, 4)}`
            : "00/00"}
        </span>
      </div>
    </div>
  );
};

export default CardDetails;
