import style from "../Pages/PriceList.module.css";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SeeMorePrice = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Buba & Sokoto (1 pair -2pcs)</p>
        <p>₦ 500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Buba - Native top (1pc)</p>
        <p>₦ 250</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Chair cover Large</p>
        <p>₦ 600</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Chair cover small</p>
        <p>₦ 300</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Dress & Jacket 2pcs (dry-cleaning)</p>
        <p>₦ 1,500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Dress & Trouser/Short 2pcs</p>
        <p>₦ 1,000</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>DRESS/GOWN</p>
        <p>₦ 800</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Duve (any size)</p>
        <p>₦ 2,200</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>HOODIE</p>
        <p>₦ 500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>IRO & BUBA (2pcs)</p>
        <p>₦ 500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>IRO,BUBA & SCARF (3pcs)</p>
        <p>₦ 600</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Jacket (Drycleaning)</p>
        <p>₦ 500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Jalamia</p>
        <p>₦ Jalamia</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Jumpsuit</p>
        <p>₦ 500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Lawyers Bib/wig/collar</p>
        <p>₦ 600</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Overall - Up & Down (2pcs)</p>
        <p>₦ 800</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Pillow (with the foam)</p>
        <p>₦ 1,300</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Pillow case</p>
        <p>₦ 250</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Pull over</p>
        <p>₦ 500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Scarf/Native cap/face cap</p>
        <p>₦ 400</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Shawl/Apron/ Napkin</p>
        <p>₦ 400</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>SHIRT (male/female)</p>
        <p>₦ 500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Short</p>
        <p>₦ 300</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Singlet (any color )</p>
        <p>₦ 250</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>SKIRT</p>
        <p>₦ 400</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Suits 2pcs (dry-cleaning)</p>
        <p>₦ 1,500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Suits 3pcs (dry-cleaning)</p>
        <p>₦ 1,700</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>SWEATER</p>
        <p>₦ 700</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>T-SHIRT/POLO</p>
        <p>₦ 400</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Throw pillow</p>
        <p>₦ 800</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>TROUSERS</p>
        <p>₦ 500</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>T-SHIRT/POLO</p>
        <p>₦ 400</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Towel (large)</p>
        <p>₦ 600</p>
      </div>
      <div className={style["pricing-list-inner"]} data-aos="flip-left">
        <p>Winter jacket</p>
        <p>₦ 1200</p>
      </div>
    </Fragment>
  );
};

export default SeeMorePrice;
