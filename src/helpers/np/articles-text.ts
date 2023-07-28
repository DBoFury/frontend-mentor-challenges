import { Article, OtherArticle } from "@/types/np/article";

export const mainSectionText = (): Article => {
  return {
    title: "The Bright Future of Web 3.0?",
    text:
      "We dive into the next evolution of the web that claims " +
      "to put the power of the platforms back into the hands " +
      "of the people. But is it really fulfilling its promise?",
  };
};

export const newSectionText = (): Article[] => {
  return [
    {
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VS Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
};

export const otherSectionText = (): OtherArticle[] => {
  return [
    {
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
      img:
        process.env.NODE_ENV === "production"
          ? "bg-np-retro-pcs-prod"
          : "bg-np-retro-pcs",
    },
    {
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
      img:
        process.env.NODE_ENV === "production"
          ? "bg-np-top-laptops-prod"
          : "bg-np-top-laptops",
    },
    {
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
      img:
        process.env.NODE_ENV === "production"
          ? "bg-np-gaming-growth-prod"
          : "bg-np-gaming-growth",
    },
  ];
};
