import React from "react";
import TicketGridList from "../../atoms/TicketGridList/TicketGridList";
import "./TicketCategorySection.scss";
import { CategoryType } from "../../../../lib/common/constants/CategoryType";
import getBackgroundImagePath from "../../utils/getBackgroundImagePath";
import getImagePath from "../../utils/getImagePath";

interface GameSectionProps {
  category: CategoryType;
}

const GameSection = ({ category }: GameSectionProps) => {
  const cover = getImagePath(category);
  const bgImage = getBackgroundImagePath(category);

  return (
    <section className="main-section">
      <div style={{ backgroundImage: `url(${cover})` }} className="cs-go-cover">
        <div className="parallelogram">{category}</div>
      </div>
      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="main-section-wrapper"
      >
        <TicketGridList />
      </section>
    </section>
  );
};

export default GameSection;
