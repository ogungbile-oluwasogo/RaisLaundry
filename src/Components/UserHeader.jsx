import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoggedMobileMenu from "./LoggedMobileMenu";
import style from "./UserHeader.module.css";

const UserHeader = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const handleLogout = () => {
    const userLogout = window.confirm("Are you sure you want to sign out ?");
    if (userLogout) {
      sessionStorage.removeItem("token");
      navigate("/");
    }
  };

  const showNavHandler = () => {
    setShowNav((onShow) => !onShow);
  };

  return (
    <>
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
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      </div>
      <div className={style.header}>
        <div className={style.logo}>
          <h1>
            <span>Rais</span>Laundry
          </h1>
        </div>
        <div className={style.menulist}>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
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
              >
                Referral Link
              </NavLink>
            </li>
          </ul>
          <div className={style["mobile-navbar"]} onClick={showNavHandler}>
            {showNav ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
        {/* <div className={style["mobile-navbar"]} onClick={showNavHandler}>
          {showNav ? (
            <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
              )}
            </div> */}
      </div>
      {showNav && <LoggedMobileMenu showNavHandler={showNavHandler} />}
      <div className={style.whatsapp}>
        <a href="https://wa.me/08131058753">
          <svg
            style={{ color: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              fill="#43C854"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
};

export default UserHeader;
