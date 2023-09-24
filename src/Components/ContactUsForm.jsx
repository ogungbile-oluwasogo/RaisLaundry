import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactUsForm.module.css";
import { useNavigation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsForm = () => {
  const form = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cs4jgkk",
        "template_ccnv1ho",
        form.current,
        "3h0vX9Qb5g1xNvOzD"
      )
      .then(
        (result) => {
          setFeedbackMessage("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          setFeedbackMessage("Message not sent");
        }
      );
  };

  return (
    <div className={style["contactform-wrapper"]}>
      <h2>SEND A MESSAGE</h2>
      {feedbackMessage && <p style={{ color: "green" }}>{feedbackMessage}</p>}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="from_name" data-aos="fade-up" required />
        <label>Phone:</label>
        <input type="number" name="from_phone" data-aos="fade-down" required />
        <label>Message:</label>
        <textarea name="message" required data-aos="zoom-in" />
        <button type="submit" value="send" data-aos="fade-up">
          {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
