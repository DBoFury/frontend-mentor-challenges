import { AnimationEvent, FC, RefObject } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CompletedProps {
  isCompleted: boolean;
  setIsCompleted: (value: boolean) => void;
  completedRef: RefObject<HTMLDivElement>;
  handleAnimationEndCompleted: (event: AnimationEvent<HTMLDivElement>) => void;
}

const Completed: FC<CompletedProps> = ({
  isCompleted,
  setIsCompleted,
  completedRef,
  handleAnimationEndCompleted,
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center space-y-8 px-8 max-w-[26rem]",
        {
          "animate-in zoom-in duration-700": isCompleted,
          "animate-out zoom-out duration-700 fill-mode-forwards": !isCompleted,
        }
      )}
      ref={completedRef}
      onAnimationEnd={handleAnimationEndCompleted}
      style={{ display: "none" }}>
      <Image
        src="/frontend-mentor-challenges/interactive-card-details-form/icon-complete.svg"
        alt="Complete Icon"
        width={80}
        height={80}
      />
      <div className="flex flex-col items-center justify-center space-y-3">
        <h1 className="uppercase text-2xl tracking-widest text-icd-very-dark-violet">
          Thank you!
        </h1>
        <p className="text-lg text-icd-dark-grayish-violet">
          We've added your card details
        </p>
      </div>
      <Button
        onClick={() => setIsCompleted(false)}
        className="w-full bg-icd-very-dark-violet text-lg py-7">
        Continue
      </Button>
    </div>
  );
};

export default Completed;
