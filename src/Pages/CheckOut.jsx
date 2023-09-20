import { useEffect } from "react";
import style from "./CheckOut.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const CheckOut = ({ token, cartItems, setCartItems, TotalPrice }) => {
  const orderFormRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    document.title = "Submit Order";

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, [setCartItems]);

  const total = cartItems.reduce(
    (acct, item) => acct + item.quantity * item.price,
    0
  );

  const submitOrder = (e) => {
    e.preventDefault();
    setBtnLoading(true);

    emailjs
      .sendForm(
        "service_1x9c4uk",
        "template_hl2293g",
        orderFormRef.current,
        "3h0vX9Qb5g1xNvOzD"
      )
      .then(
        (result) => {
          console.log("Message sent successfully");
          orderFormRef.current.reset();
          localStorage.removeItem("cartItems");
          navigate("/dashboard/order-placed");
        },
        (error) => {
          console.log("Message not sent");
        }
      );
  };

  const totalPrice = total.toLocaleString();

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <HashLoader color="#00b3d4" loading={loading} size={50} />
        </div>
      ) : (
        <div className={style["checkout-wrapper"]}>
          <h1>Fill in Pickup / Delivery Details</h1>
          <div className={style.line}></div>
          <p>
            Please fill the form below to let us know where to pick up and
            deliver your garments. If you already have a RaisLaundry account,
            the form will auto fill your previous details.
          </p>
          <h3>You Are Paying: ₦{totalPrice}</h3>
          <form ref={orderFormRef} onSubmit={submitOrder}>
            <input
              type="text"
              name="from_name"
              defaultValue={token.user.user_metadata.name}
              placeholder="Name"
              required
            />

            <input
              type="number"
              name="from_phone"
              defaultValue={token.user.user_metadata.phone}
              placeholder="Phone"
              required
            />

            <input
              type="text"
              name="from_address"
              defaultValue={token.user.user_metadata.address}
              placeholder="Phone"
              required
            />

            <input
              type="text"
              name="message"
              style={{ display: "none" }}
              defaultValue={cartItems.map(
                (item) =>
                  `Item: ${item.name} Price: ₦${item.price} Qty: ${item.quantity} ||`
              )}
              placeholder="Address"
              required
            />
            <button>{btnLoading ? "Submitting..." : "Submit"}</button>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckOut;
