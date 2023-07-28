import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, HTMLProps } from "react";

interface CardProps extends HTMLProps<HTMLDivElement> {
  image: string;
  name: string;
  text: string;
  textColor: string;
}

const Card: FC<CardProps> = ({
  image,
  name,
  text,
  textColor,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("h-[30rem] w-[21rem] dt:h-[36rem]", className)}
      {...props}>
      <div className="flex flex-col justify-around h-full p-12 dt:py-8 dt:px-14">
        <Image
          src={
            process.env.NODE_ENV === "production"
              ? `/frontend-mentor-challenges/${image}`
              : image
          }
          alt={`${name} icon`}
          height={30}
          width={30}
        />
        <div className="dt:mt-[-2rem]">
          <p className="text-very-light-gray uppercase font-big-shoulders-display text-[38px] mb-6">
            {name}
          </p>
          <p className="text-3cpcc-transparent-white font-lexend-deca dt:mb-10 dt:leading-8">
            {text}
          </p>
        </div>
        <div>
          <Link
            className={cn(
              "font-lexend-deca bg-3cpcc-transparent-white py-3 px-8 rounded-full focus:outline-none hover:ring-2 hover:ring-3cpcc-transparent-white hover:bg-transparent hover:text-3cpcc-transparent-white",
              textColor
            )}
            href="/3-column-preview-card-component">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
