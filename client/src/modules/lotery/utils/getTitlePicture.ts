import { BlogTitleType } from "../../../lib/common/constants/BlogTitleType";

const getTitlePicture = (category: BlogTitleType): string => {
  let imagePath;
  switch (category) {
    case BlogTitleType.HowToPlay:
      imagePath = require(`../assets/images/title-how-to-play.png`);
      break;
    case BlogTitleType.FAQ:
      imagePath = require(`../assets/images/faq-title.png`);
      break;
    case BlogTitleType.BlogAndNews:
      imagePath = require(`../assets/images/blog-news-title.png`);
      break;
  }
  return imagePath;
};

export default getTitlePicture;
