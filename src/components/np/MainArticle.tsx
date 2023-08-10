import { mainSectionText } from "@/helpers/np/articles-text";

const MainArticle = () => {
  return (
    <article className="flex flex-col space-y-5">
      <div className="w-full min-h-[17rem] h-[40vh] bg-cover bg-no-repeat bg-center bg-np-main-mobile cursor-pointer dt:bg-np-main-desktop dt:h-[30vh]" />
      <div className="flex flex-col pb-5 space-y-3 dt:flex-row dt:space-x-10">
        <h1 className="font-extrabold text-[2.3rem] leading-10 cursor-pointer text-np-very-dark-blue dt:text-6xl">
          {mainSectionText().title}
        </h1>
        <section className="flex flex-col justify-between space-y-5">
          <p className="text-np-dark-grayish-blue leading-[1.4rem] text-xs dt:text-sm">
            {mainSectionText().text}
          </p>
          <button className="self-start px-8 py-3 bg-np-soft-red text-np-off-white text-xs font-bold uppercase tracking-[0.2rem] dt:px-10 dt:py-4 dt:text-sm hover:bg-np-very-dark-blue focus:outline-none">
            Read More
          </button>
        </section>
      </div>
    </article>
  );
};

export default MainArticle;
