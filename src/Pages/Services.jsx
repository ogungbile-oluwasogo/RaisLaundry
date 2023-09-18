import { Fragment } from "react";
import style from "./Services.module.css";

const Services = () => {
  return (
    <Fragment>
      <div className={style["services-wrapper"]}>
        <h1>Our Services</h1>
      </div>
      <div className={style["what-we-do"]}>
        <h1>WHAT WE DO</h1>
        <div></div>
        <p>
          Here at Sagzy Laundries, we offer a variety of services, these
          include:
        </p>
      </div>
      <div className={style.services}>
        <img src="drycleaner.jpeg" alt="" />
        <div>
          <h2>DRYCLEANING & LAUNDRY​</h2>
          <div className={style.borderline}></div>
          <p>
            We dry clean or wash your items according to the care label. Clothes
            are ironed and returned on a hanger or folded depending on your
            choice.
          </p>
          <a href="order">Order Now</a>
        </div>
      </div>
      <div className={style.services}>
        <div>
          <h2>IRONING ONLY​</h2>
          <div className={style.borderline}></div>
          <p>
            You wash and dry and we do the ironing and packaging of the clothes
            in either hanger or neatly folded in our folding nylon.
          </p>
          <a href="order">Order Now</a>
        </div>
        <img src="ironing-only.jpeg" alt="" />
      </div>
      <div className={style.services}>
        <img src="sameday.jpeg" alt="" />
        <div>
          <h2>SAME DAY SERVICE</h2>
          <div className={style.borderline}></div>
          <p>
            If you need a garment ready for a function or any special occasion,
            we can clean it for you that same day. Drop your item off with us in
            the morning and it will be ready for collection within hours.
          </p>
          <a href="order">Order Now</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
