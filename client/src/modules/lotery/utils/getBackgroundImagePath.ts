import { CategoryType } from "../../../lib/common/constants/CategoryType";

const getBackgroundImagePath = (category: CategoryType): string => {
  let imagePath;
  switch (category) {
    case CategoryType.CS:
      imagePath = require(`../assets/images/BG-image-cs-go.png`);
      break;
    case CategoryType.Rust:
      imagePath = require(`../assets/images/BG-image-Rust.png`);
      break;
    case CategoryType.Crypto:
      imagePath = require(`../assets/images/BG-crypto.png`);
      break;
    case CategoryType.RealItems:
      imagePath = require(`../assets/images/BG-real.png`);
      break;
    default:
      imagePath = require(`../assets/images/BG-crypto.png`);
      break;
  }
  return imagePath;
};

export default getBackgroundImagePath;
