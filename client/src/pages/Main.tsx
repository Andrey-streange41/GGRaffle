import { BlogTitleType } from "../lib/common/constants/BlogTitleType";
import { CategoryType } from "../lib/common/constants/CategoryType";
import { BackgroundElements } from "../lib/ui/BackgroundElements";
import TrapezoidButton from "../lib/ui/buttons/TrapezoidButton";
import TicketSwipeList from "../modules/lotery/atoms/TicketSwipeList/TicketSwipeList";
import BlogContainer from "../modules/blog/molecules/BlogContainer/BlogContainer";
import TicketCategorySection from "../modules/lotery/moleculs/TicketCategorySection/TicketCategorySection";
import "./Main.scss";
import BlogAndNews from "../modules/blog/organisms/BlogAndNews/BlogAndNews";
import HowToPlay from "../modules/blog/organisms/HowToPlay/HowToPlay";


const Main = () => {
 

  

  return (
    <div className="main">

      {/*absolute pictures */}
      <BackgroundElements />
      <p className="play-with-us">Play with us and win awesome prizes!</p>
      <p className="main-descr">
        Unique CS:GO and Rust skins crypto and other cool stuff
      </p>
      <div className="trapezzoid-button-wrapper">
         <TrapezoidButton className="trappezoid-button-red" onClick={ () => {} }>
          <span>join now </span> 
        </TrapezoidButton>
      </div>
        <section className="dont-miss-awesome-section">
          <span className="dont-miss">don't miss</span>
          <span>the most awesome draws</span>
        </section>
        <TicketSwipeList  />
        <section className="pick-your-prize">
          <span >pick your </span> <span> prize</span>
        </section>
        <section className="pick-your-prize">
          <span>and test your </span> <span> luck!</span>
        </section>
        {renderTicketCategorySections()}
        <HowToPlay category={BlogTitleType.HowToPlay} />
        <BlogAndNews category={BlogTitleType.BlogAndNews} />
        
    </div>
  );
};

export default Main;


const renderTicketCategorySections = () => {
  const categories = Object.values(CategoryType); // Из обьекта  масив
 return categories.map((el, index) => (
   <TicketCategorySection key={index} category={el} />
 ));
};


