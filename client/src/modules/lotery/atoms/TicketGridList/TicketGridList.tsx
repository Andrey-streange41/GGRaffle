import React, { useState } from "react";
import "./TicketGridList.scss";
import { useAppSelector } from "../../../../app/hooks";
import Ticket from "../Ticket/Ticket";
import TrapezoidButton from "../../../../lib/ui/buttons/TrapezoidButton";

interface TicketGridListProps{}

const TicketGridList : React.FC <TicketGridListProps> = () => {
  const tickets = useAppSelector((state) => state.ticketsReducer.ticketsList);
  const ticketSlice = tickets.slice(0, 6);
  const [showFullList, setShowFullList] = useState(false);

  return (
    <section className="cs-go-grid-wrapper">
      <section className="cs-go-grid-list">
        {(showFullList ? tickets : ticketSlice).map((el, i) => (
          <div key={el.title} className="ticket-wrapp">
            <Ticket
              className="cursor-default"
              index={i}
              type="blue"
              ticket={el}
            />
          </div>
        ))}
      </section>
      <div className="show-all-button">
        <TrapezoidButton
          className={showFullList ? " rotated trapezoid-button" : "trapezoid-button"}
          onClick={() => setShowFullList(!showFullList)}
        >
          <span>{showFullList ? "hide" : "show all"} </span>
        </TrapezoidButton>
      </div>
    </section>
  );
};

export default TicketGridList;

