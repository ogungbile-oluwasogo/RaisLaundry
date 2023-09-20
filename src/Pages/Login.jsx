import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { useState } from "react";
import { supabase } from "../Hooks/client";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;

      setToken(data);
      navigate("/dashboard");
    } catch (error) {
      setBtnLoading(false);
      setError(error.message);
    }

    // await signInWithEmailAndPassword(auth, email, password)
    //   .then((data) => {
    //     console.log(data);
    //     navigate("/dashboard");
    //   })
    //   .catch((error) => {
    //     setError(error.code);
    //   });
  };

  return (
    <div className={style["login-wrapper"]}>
      <h1>Login</h1>
      <p style={{ color: "red" }}>{error}</p>
      <form action="" onSubmit={loginHandler}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>Forgot Password ? </span>
        <a href="/">Click here</a>
        <button>{btnLoading ? "Submitting..." : "Login"}</button>
        <span>Don't have a Rias Dry Cleaners account ? </span>

        <Link to="/sign-up">Click here to sign up</Link>
      </form>
    </div>
  );
};

export default Login;
