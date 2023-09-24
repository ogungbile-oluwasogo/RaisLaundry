import style from "./OrderSuccessful.module.css";
import { RiseLoader } from "react-spinners";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OrderSuccessful = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    AOS.init({ duration: 2000 });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <RiseLoader color="#00b3d4" loading={loading} size={30} />
        </div>
      ) : (
        <div className={style["success-wrapper"]} data-aos="fade-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="180"
            height="180"
            viewBox="0 0 48 48"
            data-aos="fade-left"
          >
            <linearGradient
              id="HoiJCu43QtshzIrYCxOfCa_VFaz7MkjAiu0_gr1"
              x1="21.241"
              x2="3.541"
              y1="39.241"
              y2="21.541"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".108" stop-color="#0d7044"></stop>
              <stop offset=".433" stop-color="#11945a"></stop>
            </linearGradient>
            <path
              data-aos="slide-left"
              fill="url(#HoiJCu43QtshzIrYCxOfCa_VFaz7MkjAiu0_gr1)"
              d="M16.599,41.42L1.58,26.401c-0.774-0.774-0.774-2.028,0-2.802l4.019-4.019	c0.774-0.774,2.028-0.774,2.802,0L23.42,34.599c0.774,0.774,0.774,2.028,0,2.802l-4.019,4.019	C18.627,42.193,17.373,42.193,16.599,41.42z"
            ></path>
            <linearGradient
              id="HoiJCu43QtshzIrYCxOfCb_VFaz7MkjAiu0_gr2"
              x1="-15.77"
              x2="26.403"
              y1="43.228"
              y2="43.228"
              gradientTransform="rotate(134.999 21.287 38.873)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#2ac782"></stop>
              <stop offset="1" stop-color="#21b876"></stop>
            </linearGradient>
            <path
              data-aos="flip-up"
              fill="url(#HoiJCu43QtshzIrYCxOfCb_VFaz7MkjAiu0_gr2)"
              d="M12.58,34.599L39.599,7.58c0.774-0.774,2.028-0.774,2.802,0l4.019,4.019	c0.774,0.774,0.774,2.028,0,2.802L19.401,41.42c-0.774,0.774-2.028,0.774-2.802,0l-4.019-4.019	C11.807,36.627,11.807,35.373,12.58,34.599z"
            ></path>
          </svg>
          <h3 data-aos="fade-up">Your Order Has Been Placed Successfully</h3>
          <p data-aos="fade-down" data-aos-delay="700">
            One of our representative will contact you shortly using the
            information you provided
          </p>
          <h4>Payment Details</h4>
          <div
            className={style["account-details"]}
            data-aos="flip-up"
            data-aos-delay="800"
          >
            <div>
              <h4 style={{ color: "darkgreen" }}>Opay</h4>
              <p>
                Account Number: <span>8131058753</span>
              </p>
              <p>
                Account Name: <span>Olaoye Ridwan</span>{" "}
              </p>
            </div>
            <div>
              <h4 style={{ color: "darkgreen" }}>Palmpay</h4>
              <p>
                Account Number: <span>8131058753</span>
              </p>
              <p>
                Account Name: <span>Olaoye Ridwan</span>{" "}
              </p>
            </div>
            <div>
              <h4 style={{ color: "darkgreen" }}>VFD Microfinance Bank</h4>
              <p>
                Account Number: <span>1008037194</span>
              </p>
              <p>
                Account Name: <span>Olaoye Ridwan</span>{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSuccessful;
