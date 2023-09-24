import ContactUsForm from "../Components/ContactUsForm";
import style from "./ContactUs.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <div className={style["contact-wrapper"]}>
      <div className={style["contact-header-wrapper"]}>
        <h2 data-aos="slide-down">Contact Us</h2>
      </div>
      <h1 data-aos="fade-up">Want To Reach Us ?</h1>
      <p>
        Please contact us using the information below if you have anything you
        wish to let us know or for negotiations, dispute, or enquiries.
      </p>
      <div className={style["contact-flex"]} data-aos="fade-up">
        <div>
          <h2>CONTACT INFO</h2>
          <p>Please contact us using the information below.</p>
          <h4 data-aos="fade-down">
            Address
            <span>
              <i className="fa-solid fa-location-dot"> </i>
            </span>
          </h4>
          <p data-aos="flip-right">
            No. 9 Olowokekere Street, Adjacent Arisekola House, Behind TEN
            Motel, Ibadan, Oyo State.
          </p>
          <h4 data-aos="fade-right">
            Call Us
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
          </h4>
          <p data-aos="flip-left">08131058753, 09067502626</p>
          <h4 data-aos="fade-down">
            Email Us
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
          </h4>
          <p data-aos="zoom-in">olaoyeoyebamiji@gmail.com</p>
        </div>
        <div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
