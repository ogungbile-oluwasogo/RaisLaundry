import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { useState, useEffect } from "react";
import { supabase } from "../Hooks/client";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    document.title = "Log In";
    AOS.init({ duration: 1700 });
  }, []);

  const showPasswordHandler = () => {
    setShowPass((show) => !show);
  };

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
    <div className={style["login-wrapper"]} data-aos="flip-up">
      <h1 data-aos="slide-down" data-aos-delay="600">
        Login
      </h1>
      <p style={{ color: "red" }}>{error}</p>
      <form
        action=""
        onSubmit={loginHandler}
        data-aos="zoom-out"
        data-aos-delay="1100"
      >
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          Password
          <span onClick={showPasswordHandler}>
            {showPass ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </span>
        </label>
        <input
          type={showPass ? "text" : "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <span>Forgot Password ? </span>
        <Link to="/forgot-password">Click here</Link>
        <button>{btnLoading ? "Submitting..." : "Login"}</button>
        <span>Don't have a Rais Dry Cleaners account ? </span>

        <Link to="/sign-up">Click here to sign up</Link>
      </form>
    </div>
  );
};

export default Login;
