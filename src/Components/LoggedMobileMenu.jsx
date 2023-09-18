import style from "./LoggedMobileMenu.module.css";
import { NavLink } from "react-router-dom";

const LoggedMobileMenu = ({ showNavHandler }) => {
  return (
    <div>
      <div className={style["mobile-list-wrapper"]}>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              onClick={showNavHandler}
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="place-order"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              onClick={showNavHandler}
            >
              Place Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="payment-details"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              onClick={showNavHandler}
            >
              Payment Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="referral"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              onClick={showNavHandler}
            >
              Referral Link
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoggedMobileMenu;
