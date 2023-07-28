import { newSectionText } from "@/helpers/np/articles-text";

const NewArticles = () => {
  return (
    <div className="bg-np-very-dark-blue px-4 dt:w-[50rem]">
      <h1 className="pt-5 text-2xl font-bold tracking-wide text-np-soft-orange dt:text-4xl dt:pt-8">
        New
      </h1>
      <section className="flex flex-col h-full">
        {newSectionText().map((newSectionArticle, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <article className="py-5 dt:py-8">
                <h2 className="font-bold cursor-pointer text-np-off-white dt:text-xl hover:text-np-soft-orange">
                  {newSectionArticle.title}
                </h2>
                <p className="pt-2 text-xs font-semibold text-np-dark-grayish-blue dt:text-sm">
                  {newSectionArticle.text}
                </p>
              </article>
              {index !== newSectionText().length - 1 && (
                <span className="w-full border-b border-np-off-white border-opacity-40"></span>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default NewArticles;
