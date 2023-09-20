import useInput from "../Hooks/use-input";
import style from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../Hooks/client";

const SignUp = () => {
  const navigate = useNavigate();

  const [loading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const {
    value: enteredName,
    inputIsValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPhone,
    inputIsValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    inputHandler: phoneInputHandler,
    inputBlurHandler: phoneInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    inputIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    inputIsValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    inputHandler: passwordInputHandler,
    inputBlurHandler: passwordInputBlurHandler,
  } = useInput((value) => value.length >= 6);

  const {
    value: enteredaddress,
    inputIsValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    inputHandler: addressInputHandler,
    inputBlurHandler: addressInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const { value: enteredAboutUs, inputHandler: aboutUsInputHandler } = useInput(
    (value) => value.trim()
  );

  const nameInputClasses = nameInputHasError && style["input-error"];
  const phoneInputClasses = phoneInputHasError && style["input-error"];
  const emailInputClasses = emailInputHasError && style["input-error"];
  const passwordInputClasses = passwordInputHasError && style["input-error"];
  const addressInputClasses = addressInputHasError && style["input-error"];

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredPhoneIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredAddressIsValid
  ) {
    formIsValid = true;
  }

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const email = enteredEmail;
    const password = enteredPassword;

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: enteredName,
            phone: enteredPhone,
            address: enteredaddress,
            aboutUs: enteredAboutUs,
          },
        },
      });
      if (error) throw error;
      navigate("/signup-successful");
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }

    // await createUserWithEmailAndPassword(auth, email, password)
    //   .then((data) => {
    //     console.log(data);
    //     navigate("/signup-successful");
    //   })
    //   .catch((error) => {
    //     setError(error.code);
    //   });

    if (!enteredNameIsValid) {
      return;
    }

    // console.log(
    //   enteredName,
    //   enteredPhone,
    //   email,
    //   password,
    //   enteredaddress,
    //   enteredAboutUs
    // );
  };

  return (
    <div className={style["sign-up-wrapper"]}>
      <h1>Sign Up</h1>
      <p>Please fill the form below to sign up.</p>

      {nameInputHasError && (
        <p className={style["form-text-error"]}>
          Please fill the form correctly
        </p>
      )}

      <p style={{ color: "red" }}>{error}</p>

      <form action="" onSubmit={submitFormHandler}>
        <div className={style["form-flex"]}>
          <div>
            <label>Customer's Name</label>
            <input
              className={nameInputClasses.toString()}
              type="text"
              placeholder="Enter your name"
              onChange={nameInputHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              className={phoneInputClasses.toString()}
              type="number"
              placeholder="Enter your phone number"
              onChange={phoneInputHandler}
              onBlur={phoneInputBlurHandler}
            />
          </div>
        </div>
        <div className={style["form-flex-block"]}>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter email"
              className={emailInputClasses.toString()}
              onChange={emailInputHandler}
              onBlur={emailInputBlurHandler}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className={passwordInputClasses.toString()}
              onChange={passwordInputHandler}
              onBlur={passwordInputBlurHandler}
              required
            />
          </div>
        </div>
        <div className={style["form-block"]}>
          <label>Pick up address</label>
          <input
            className={addressInputClasses.toString()}
            type="text"
            placeholder="Enter your address"
            onChange={addressInputHandler}
            onBlur={addressInputBlurHandler}
          />
          <label>How did you hear about Us?</label>
          <input
            type="text"
            placeholder="How did you know us e.g whatsapp"
            onChange={aboutUsInputHandler}
          />
        </div>
        <p>
          Already have an account ? <Link to="/login">Sign In</Link>
        </p>
        <button disabled={!formIsValid && !loading}>
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
