import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./OrderNow.module.css";
import gsap from "gsap";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OrderNow = ({ orderItems, cartItems, setCartItems }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const elRef = useRef(null);
  const elsideRef = useRef(null);

  useEffect(() => {
    document.title = "Place Order";
    AOS.init({ duration: 1300 });
    gsap.fromTo(
      elRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      elsideRef.current,
      { opacity: 0, x: 70 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, [setCartItems]);

  const addToCart = (e) => {
    e.preventDefault();

    const itemToAdd = orderItems.find((item) => item.name === selectedItem);
    if (itemToAdd) {
      const existingItem = cartItems.find((item) => item.name === selectedItem);

      if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      } else {
        itemToAdd.quantity = 1;
        const updatedCart = [itemToAdd, ...cartItems];
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }

      setSelectedItem("");
    }

    // console.log(cartItems);
  };

  const removeCart = (itemToRemove) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this item from cart"
    );
    if (confirmRemove) {
      const updatedRemovedCart = cartItems.filter(
        (item) => item !== itemToRemove
      );
      setCartItems(updatedRemovedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedRemovedCart));
    }
  };

  const total = cartItems.reduce((acct, item) => acct + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acct, item) => acct + item.quantity * item.price,
    0
  );

  const totalPriceLocal = totalPrice.toLocaleString();
  return (
    <div className={style["order-now-wrapper"]}>
      <h1 ref={elRef}>Place Order Online</h1>
      <div className={style.line}></div>
      <p ref={elsideRef}>
        Please select the item you would like to dryclean, and click ADD TO
        ORDER button, then repeat action if you want to add other types of
        garments. Once you have added all items, then click the PROCEED button.
      </p>
      <form action="" data-aos="fade-right" data-aos-mirror="true">
        <select
          name=""
          id=""
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
        >
          {orderItems.map((item) => (
            <option key={item.id} className={style.option} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <button onClick={addToCart} data-aos="slide-left">
          Add To Order
        </button>
      </form>
      <div>
        {cartItems.length === 0 ? (
          <p>No Order Added Yet</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <div key={item.id} className={style.product} data-aos="zoom-out">
                <li>
                  {item.name} - ₦{item.price}
                </li>
                <li>
                  Qty: <span>{item.quantity}</span>
                </li>
                <button
                  onClick={() => removeCart(item)}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Remove Item
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>

      <div>
        <p style={{ color: "darkgreen", fontWeight: "bold" }}>
          Total Qty: {total}
        </p>
        <p style={{ color: "darkgreen", fontWeight: "bold" }}>
          Total Price: ₦{totalPriceLocal}
        </p>
      </div>
      {cartItems.length === 0 ? (
        <p>Please select an Item before clicking on proceed</p>
      ) : (
        ""
      )}
      <Link to={cartItems.length === 0 ? "" : "/dashboard/check-out"}>
        PROCEED
      </Link>
    </div>
  );
};

export default OrderNow;
