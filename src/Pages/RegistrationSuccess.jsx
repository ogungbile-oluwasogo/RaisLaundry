import { Link } from "react-router-dom";
import style from "./RegistrationSuccess.module.css";
import { RotateLoader } from "react-spinners";
import { useEffect, useState } from "react";

const RegistrationSuccess = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <RotateLoader color="#00b3d4" loading={loading} size={50} />
        </div>
      ) : (
        <div className={style["registration-success-wrapper"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // height="17em"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          <h2 className={style["success-header"]}>
            Your registration is successful
          </h2>
          <p>
            Now that your registration is successful, you can now{" "}
            <Link to="/login">Sign In</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default RegistrationSuccess;
