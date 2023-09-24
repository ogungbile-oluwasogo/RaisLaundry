import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import SeeMorePrice from "../Components/SeeMorePrice";
import style from "./PriceList.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PriceList = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    document.title = "Price List";
    AOS.init({ duration: 2000 });
  }, []);

  const showMoreHandler = () => {
    setShowMore((show) => !show);
  };

  return (
    <Fragment>
      <div className={style["price-wrapper"]}>
        <h1>Pricelist</h1>
      </div>
      <div className={style.pricelist}>
        <h1 data-aos="fade-left">Pricing List</h1>
        <div></div>
        <p data-aos="fade-right">
          Below is a price list of some of our most commonly dealt with
          garments. If you have any further queries on our services, please feel
          free to <Link to="/contact">contact us</Link>.
        </p>
      </div>
      <div className={style["pricing-wrapper"]}>
        <h2>DRY CLEANING</h2>
        <div className={style.dryline}></div>
        <div className={style["pricing-list-inner"]} data-aos="flip-left">
          <p>Agbada, Buba & Sokoto (1pair - 3pcs)</p>
          <p>₦ 1,500</p>
        </div>
        <div className={style["pricing-list-inner"]} data-aos="flip-right">
          <p>Bag (School/hand bag)</p>
          <p>₦ 600</p>
        </div>
        <div className={style["pricing-list-inner"]} data-aos="flip-left">
          <p>Bath Mat</p>
          <p>₦ 500</p>
        </div>
        <div className={style["pricing-list-inner"]} data-aos="flip-right">
          <p>Bathrobe</p>
          <p>₦ 500</p>
        </div>
        <div className={style["pricing-list-inner"]} data-aos="flip-left">
          <p>BED TOPPER</p>
          <p>₦ 5,000</p>
        </div>
        <div className={style["pricing-list-inner"]} data-aos="flip-left">
          <p>Bedsheet</p>
          <p>₦ 500</p>
        </div>
        <div className={style["pricing-list-inner"]} data-aos="flip-left">
          <p>Blazers/Jacket (dry-cleaning)</p>
          <p>₦ 800</p>
        </div>
        <div className={style["pricing-list-inner"]} data-aos="flip-right">
          <p>Blouse/Camisole/Female tops</p>
          <p>₦ 400</p>
        </div>
        <div className={style["pricing-list-inner"]} data-aos="flip-left">
          <p>Boubou</p>
          <p>₦ 700</p>
        </div>
        <div className={style["pricing-list-inner"]} data-aos="flip-left">
          <p>Boxers</p>
          <p>₦ 200</p>
        </div>
        {showMore && <SeeMorePrice />}
        <button onClick={showMoreHandler} data-aos="fade-up">
          {!showMore ? "VIEW FULL LIST" : "VIEW LESS LIST"}
        </button>
      </div>
    </Fragment>
  );
};

export default PriceList;
