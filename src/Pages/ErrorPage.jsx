import React from "react";
import { Link } from "react-router-dom";
import Header from "../Layouts/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <h2>An error occured</h2>
      <p>
        you must have entered an invalid link that does not exist on Rais
        Laundry app or your session has been time out.
      </p>
      <p>
        Click <Link to="/login">here</Link> to login
      </p>
    </>
  );
};

export default ErrorPage;
