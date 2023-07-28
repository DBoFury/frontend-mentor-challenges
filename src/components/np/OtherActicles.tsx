import { otherSectionText } from "@/helpers/np/articles-text";
import { addLeadingZero } from "@/lib/np/add-leading-zero";
import { cn } from "@/lib/utils";

const OtherActicles = () => {
  return (
    <section className="flex flex-col space-y-6 dt:flex-row dt:space-y-0 dt:space-x-10 dt:justify-between">
      {otherSectionText().map((otherSectionActicle, index: number) => {
        return (
          <article key={index} className="flex flex-1 space-x-5">
            <div
              className={cn(
                "w-1/3 min-h-[8rem] bg-cover bg-no-repeat bg-center cursor-pointer",
                otherSectionActicle.img
              )}
            />
            <div className="flex flex-col w-2/3 space-y-2 py-[1px] dt:justify-center">
              <h1 className="text-2xl font-bold leading-5 text-np-grayish-blue">
                {addLeadingZero(index + 1)}
              </h1>
              <h2 className="font-extrabold cursor-pointer text-np-very-dark-blue dt:text-lg hover:text-np-soft-red">
                {otherSectionActicle.title}
              </h2>
              <p className="text-xs leading-5 text-np-dark-grayish-blue dt:text-sm">
                {otherSectionActicle.text}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default OtherActicles;
