import { useState } from "react";
import { supabase } from "../Hooks/client";

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
    <div>
      <p>{message}</p>
      <form onSubmit={handleForgotPassword}>
        <label>
          Email:
          <input type="email" onChange={emailhandler} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
