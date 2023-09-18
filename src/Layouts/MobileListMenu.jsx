import { NavLink } from "react-router-dom";
import style from "./MobileListMenu.module.css";

const MobileListMenu = ({ showNavHandler }) => {
  return (
    <div className={style["mobile-list-wrapper"]}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : undefined)}
            onClick={showNavHandler}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="services"
            className={({ isActive }) => (isActive ? style.active : undefined)}
            onClick={showNavHandler}
          >
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/price-list"
            className={({ isActive }) => (isActive ? style.active : undefined)}
            onClick={showNavHandler}
          >
            Price List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? style.active : undefined)}
            onClick={showNavHandler}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-up"
            className={({ isActive }) => (isActive ? style.active : undefined)}
            onClick={showNavHandler}
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? style.active : undefined)}
            onClick={showNavHandler}
          >
            Log in
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileListMenu;
