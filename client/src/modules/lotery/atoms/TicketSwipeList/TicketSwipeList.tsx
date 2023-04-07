import { useAppSelector } from "../../../../app/hooks";
import Ticket from "../../atoms/Ticket/Ticket";
import "./TicketSwipeList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore , {Autoplay}from 'swiper';

SwiperCore.use([Autoplay]);

const TicketSwipeList = () => {
  const tickets = useAppSelector((state) => state.ticketsReducer.ticketsList);


  return (
    <Swiper
      grabCursor
      spaceBetween={10}
      autoplay={{ delay: 2000 }}
      slidesPerView={"auto"}
      className="ticket-list"
    >
      {tickets.map((el, index) => (
        <SwiperSlide key={Math.random()} className="swiper-slide">
          <Ticket index={index} ticket={el} key={el.id} type="red" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TicketSwipeList;
