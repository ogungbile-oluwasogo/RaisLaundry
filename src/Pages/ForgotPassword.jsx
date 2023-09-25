import { useState } from "react";
import { supabase } from "../Hooks/client";
import style from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailhandler = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        throw error;
      }
      if (data) {
        setMessage(
          "Password reset email sent successfully. Please check your inbox."
        );
      }
    } catch (error) {
      setMessage(`Error sending password reset email: ${error.message}`);
    }
  };

  return (
    <div className={style["forgotpass-wrapper"]}>
      <p>
        Input your registered email address in the form below to receive a link
        to reset your password
      </p>
      <p style={{ color: "orangered" }}>{message}</p>
      <form onSubmit={handleForgotPassword}>
        <label>Email:</label>
        <br />
        <input type="email" onChange={emailhandler} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
