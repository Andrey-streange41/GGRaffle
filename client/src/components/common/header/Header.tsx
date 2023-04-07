import IconButton from "../../../lib/ui/buttons/IconButton";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

const headerNav = [
  { text: "CS:GO", to: "/cs-go" },
  { text: "Rust", to: "/rust" },
  { text: "Crypto", to: "/crypto" },
  { text: "Real items", to: "/real-items" },
  { text: "Blog & News", to: "/blog-news" },
];

const Header = () => {
  const location = useLocation();

  let active = headerNav.findIndex((el) => el.to === location.pathname);
  if (active === -1) active = 0;
  return (
    <header>
      <img className="logo" src="/ggraffles.svg" alt="logo" />
      

      <nav className="header-nav">
        {headerNav.map((el,i) => (
          <Link
            key={i}
            className={`nav-item ${active === i ? "active" : ""}`}
            to={el.to}
          >
            {el.text}
          </Link>
        ))}
      </nav>

      <section className="icons-container">
        <section className="icon-buttons-section">
          <IconButton icon={<img alt="profile" src="/profile-ico.svg" />} />
          <IconButton chart icon={<img alt="cart" src="/cart-ico.svg" />} />
        </section>
        <img className="burger-menu" src="/burger-ico.svg" alt="burger-menu" />
      </section>
    </header>
  );
};

export default Header;
