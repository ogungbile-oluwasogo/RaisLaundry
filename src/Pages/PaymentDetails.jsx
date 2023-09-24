import style from "./PaymentDetails.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PaymentDetails = () => {
  useEffect(() => {
    document.title = "Payment Details";
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={style["payment-wrapper"]}>
      <h2>Payment Details</h2>
      <p data-aos="slide-down">
        This is our Official Rais Payment method, more payment method shall be
        added soon.
      </p>
      <div className={style["account-details"]}>
        <div data-aos="fade-left">
          <h4 style={{ color: "darkgreen" }}>Opay</h4>
          <p>
            Account Number: <span>8131058753</span>
          </p>
          <p>
            Account Name: <span>Olaoye Ridwan</span>
          </p>
        </div>
        <div data-aos="fade-right">
          <h4 style={{ color: "darkgreen" }}>Palmpay</h4>
          <p>
            Account Number: <span>8131058753</span>
          </p>
          <p>
            Account Name: <span>Olaoye Ridwan</span>{" "}
          </p>
        </div>
        <div data-aos="fade-left">
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
  );
};

export default PaymentDetails;
