export type Article = {
  title: string;
  text: string;
};

export type OtherArticle = {
  img: string;
} & Article;
