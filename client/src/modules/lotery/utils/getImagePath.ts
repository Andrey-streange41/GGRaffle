import { CategoryType } from "../../../lib/common/constants/CategoryType";

const getImagePath = (category: CategoryType): string => {
  let imagePath;
  switch (category) {
    case CategoryType.CS:
      imagePath = require(`../assets/images/cs-go-cover.png`);
      break;
    case CategoryType.Rust:
      imagePath = require(`../assets/images/rust-cover.png`);
      break;
    case CategoryType.Crypto:
      imagePath = require(`../assets/images/crypto-cover.png`);
      break;
    case CategoryType.RealItems:
      imagePath = require(`../assets/images/real-cover.png`);
      break;
    default:
      imagePath = require('../assets/images/expensive-cover.png');
      break;
  }
  return imagePath;
};

export default getImagePath;
