// import style from "./UpdatePassword.module.css";
import { supabase } from "../Hooks/client";
import { useState } from "react";

const UpdatePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.updateUser({
        email: email,
        password: password,
      });
      if (error) throw error;

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={updateHandler}>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
