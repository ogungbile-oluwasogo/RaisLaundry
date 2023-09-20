import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "./RootLayout.module.css";

const Header = ({ showNav, showNavHandler }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={style["top-header"]}>
        <div>
          <p>
            <i className="fa-solid fa-phone-flip"></i> 09067502626
          </p>
          <p>We are open 7 days a week from 8am - 8pm, Sun: 3pm - 8pm</p>
        </div>
        <div>
          <p>
            <i className="fa-solid fa-phone-flip"></i> Call Us: 09067502626 |
          </p>

          <Link to="/sign-up">
            <i className="fa-solid fa-user"></i> Sign Up
          </Link>
          <Link to="/login">
            <i className="fa-solid fa-unlock-keyhole"></i> Login
          </Link>
        </div>
      </div>
      <div className={style.header}>
        <div className={style.logo} onClick={() => navigate("/")}>
          <h1>
            <span>Rais</span>Laundry
            {/* <i className="fa-solid fa-droplet"></i> */}
          </h1>
        </div>
        <div className={style.menulist}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/price-list"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
              >
                Price List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-up"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
              >
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={style.placeorder}>
                Place An Order
              </NavLink>
            </li>
          </ul>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <a href="https://wa.me/08131058753">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className={style["mobile-navbar"]} onClick={showNavHandler}>
          {showNav ? (
            <i className="fa-solid fa-x"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
