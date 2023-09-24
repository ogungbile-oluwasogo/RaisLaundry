import { Fragment } from "react";
import { Link } from "react-router-dom";
import style from "./Services.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    document.title = "Our Services";
    AOS.init({ duration: 1700 });
  }, []);

  return (
    <Fragment>
      <div className={style["services-wrapper"]}>
        <h1>Our Services</h1>
      </div>
      <div className={style["what-we-do"]}>
        <h1 data-aos="fade-up">WHAT WE DO</h1>
        <div></div>
        <p data-aos="fade-down">
          Here at Rais Laundries, we offer a variety of services, these include:
        </p>
      </div>
      <div className={style.services}>
        <img src="drycleaner.jpeg" alt="" data-aos="flip-up" />
        <div>
          <h2>DRYCLEANING & LAUNDRY​</h2>
          <div className={style.borderline}></div>
          <p data-aos="fade-down">
            We dry clean or wash your items according to the care label. Clothes
            are ironed and returned on a hanger or folded depending on your
            choice.
          </p>
          <Link to="/login" data-aos="fade-up" data-aos-delay="400">
            Order Now
          </Link>
        </div>
      </div>
      <div className={style.services}>
        <div>
          <h2>IRONING ONLY​</h2>
          <div className={style.borderline}></div>
          <p data-aos="fade-up">
            You wash and dry and we do the ironing and packaging of the clothes
            in either hanger or neatly folded in our folding nylon.
          </p>
          <Link to="/login" data-aos="fade-up" data-aos-delay="400">
            Order Now
          </Link>
        </div>
        <img src="ironing-only.jpeg" alt="" data-aos="zoom-in" />
      </div>
      <div className={style.services}>
        <img src="sameday.jpeg" alt="" data-aos="flip-down" />
        <div>
          <h2>SAME DAY SERVICE</h2>
          <div className={style.borderline}></div>
          <p data-aos="fade-up">
            If you need a garment ready for a function or any special occasion,
            we can clean it for you that same day. Drop your item off with us in
            the morning and it will be ready for collection within hours.
          </p>
          <Link to="/login" data-aos="fade-up" data-aos-delay="400">
            Order Now
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
