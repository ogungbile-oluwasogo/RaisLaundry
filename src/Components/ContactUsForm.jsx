import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactUsForm.module.css";
import { useNavigation } from "react-router-dom";

const ContactUsForm = () => {
  const form = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
        <input type="text" name="from_name" required />
        <label>Phone:</label>
        <input type="number" name="from_phone" required />
        <label>Message:</label>
        <textarea name="message" required />
        <button type="submit" value="send">
          {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
