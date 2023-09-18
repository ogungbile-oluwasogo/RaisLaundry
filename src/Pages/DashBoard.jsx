import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import style from "./DashBoard.module.css";
import gsap from "gsap";

const DashBoard = ({ token }) => {
  const el = useRef();
  const dashXRef = useRef();
  const dashYRef = useRef();
  const dashUpRef = useRef();

  useEffect(() => {
    document.title = "Dashboard";

    gsap.fromTo(
      dashXRef.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 2 }
    );
    gsap.fromTo(
      dashYRef.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1 }
    );
    gsap.fromTo(
      dashUpRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Iron.", "Clean.", "Wash.", "Remove Stains."],
      startDelay: 200,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={style["dashboard-wrapper"]}>
      <h1 ref={dashUpRef}>Dashboard</h1>
      <p className={style.namedisplay}>
        <i className="fa-solid fa-user"></i>
        {token.user.user_metadata.name} | <i className="fa-solid fa-phone"></i>
        {token.user.user_metadata.phone}
      </p>
      <h3>
        We <span ref={el}></span>
      </h3>

      <main className={style["dashboard-main"]}>
        <div ref={dashXRef}>
          <i className="fa-solid fa-address-book"></i>
          <p>Check Your Contact Info</p>
          <Link to="my-contact">My contact</Link>
        </div>
        <div ref={dashYRef}>
          <i className="fa-solid fa-bag-shopping"></i>
          <p>Place Order Now</p>
          <Link to="place-order">Order Now</Link>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;

// riasKey123@ //my password for supabase rias project
