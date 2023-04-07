import { ITicket } from "../../../../lib/interfaces";
import "./Ticket.scss";
import TrapezoidButton from "../../../../lib/ui/buttons/TrapezoidButton";
import { ProgressBar } from "../../../../components/ui/ProgressBar";
import { TicketsType } from "../../../../lib/common/constants/TicketsType";
import classNames from "../../../../lib/common/utils/classNames";

interface IComponentProps {
  ticket: ITicket;
  type?: "red" | "blue";
  index: number;
  className?: string;
}

const Ticket = ({ ticket, index, type, className }: IComponentProps) => {
  const dateTimeExpires = ticket.dateTimeExpires;
  const dateObject = new Date(dateTimeExpires);
  const time = dateObject.toLocaleTimeString("en-US", { hour12: false });
  const date = dateObject.toISOString().slice(0, 10);

  return (
    <div className={`tikket-card ` + className}>
      <div className="weapon-container">
        <div
          style={{
            backgroundImage: `url(/card-logo.svg)`,
          }}
        >
          <div className="vector"></div>
          <div className="knife"> </div>
          <div className={`${type === "blue" ? "times hidden" : "times"}`}>
            {time}
          </div>
          <div className={`${type === "blue" ? "days hidden" : "days"}`}>
            {" "}
            Less than {ticket.termInDays} days left
          </div>
        </div>
      </div>
      <section className="ticket-info-container">
        <div className="ticket-info">
          <h2>{ticket.title}</h2>
          <span>$ {ticket.knifeValue}</span>
        </div>
        <div className="one-ticket-info">
          <h2>Ticket price</h2>
          <span>$ {ticket.price}</span>
        </div>
      </section>
      <ProgressBar
        amount={ticket.ticketAmount}
        value={ticket.ticketPurchaset}
        background={type === TicketsType.Blue ? "#F8B83C" : ""}
        color={"white"}
      />
      <section className="expire-section">
        <span>Draw</span> <span>{date} PM</span>
      </section>
      <div className="trapezzoid-button-wrapperr">
        <TrapezoidButton
          className={classNames(
            type === TicketsType.Red ? "trappezoid-button-red" : ""
          )}
          onClick={() => {}}
        >
          enter now
        </TrapezoidButton>
      </div>
    </div>
  );
};

export default Ticket;
