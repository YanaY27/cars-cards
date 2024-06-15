import clsx from "clsx";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header>
      <nav className={s.nav}>
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={activeClass}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={activeClass}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
