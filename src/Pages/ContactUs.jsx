import ContactUsForm from "../Components/ContactUsForm";
import style from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={style["contact-wrapper"]}>
      <div className={style["contact-header-wrapper"]}>
        <h2>Contact Us</h2>
      </div>
      <h1>Want To Reach Us ?</h1>
      <p>
        Please contact us using the information below if you have anything you
        wish to let us know or for negotiations, dispute, or enquiries.
      </p>
      <div className={style["contact-flex"]}>
        <div>
          <h2>CONTACT INFO</h2>
          <p>Please contact us using the information below.</p>
          <h4>
            Address
            <span>
              <i className="fa-solid fa-location-dot"> </i>
            </span>
          </h4>
          <p>
            No. 9 Olowokekere Street, Adjacent Arisekola House, Behind TEN
            Motel, Ibadan, Oyo State.
          </p>
          <h4>
            Call Us
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
          </h4>
          <p>08131058753, 09067502626</p>
          <h4>
            Email Us
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
          </h4>
          <p>olaoyeoyebamiji@gmail.com</p>
        </div>
        <div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
