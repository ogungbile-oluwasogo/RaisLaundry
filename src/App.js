import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import data from "./data/data";
import LoggedInLayout from "./Layouts/LoggedInLayout";
import RootLayout from "./Layouts/RootLayout";
import CheckOut from "./Pages/CheckOut";
import ContactUs from "./Pages/ContactUs";
import DashBoard from "./Pages/DashBoard";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyContactInfo from "./Pages/MyContactInfo";
import OrderNow from "./Pages/OrderNow";
import OrderSuccessful from "./Pages/OrderSuccessful";
import PriceList from "./Pages/PriceList";
import RegistrationSuccess from "./Pages/RegistrationSuccess";
import Services from "./Pages/Services";
import SignUp from "./Pages/SignUp";
import { BounceLoader } from "react-spinners";
import PaymentDetails from "./Pages/PaymentDetails";
import ReferralPage from "./Pages/ReferralPage";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(false);
  const { orderItems } = data;
  const [cartItems, setCartItems] = useState([]);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const total = cartItems.reduce(
    (acct, item) => acct + item.price * item.quantity,
    0
  );

  const TotalPrice = total.toLocaleString();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "services", element: <Services /> },
        { path: "price-list", element: <PriceList /> },
        { path: "contact", element: <ContactUs /> },
        { path: "sign-up", element: <SignUp /> },
        { path: "login", element: <Login setToken={setToken} /> },
        { path: "signup-successful", element: <RegistrationSuccess /> },
        { path: "forgot-password", element: <ForgotPassword /> },
      ],
    },
    token
      ? {
          path: "/dashboard",
          element: <LoggedInLayout />,
          children: [
            {
              index: true,
              element: <DashBoard token={token} />,
            },
            { path: "my-contact", element: <MyContactInfo token={token} /> },
            { path: "order-placed", element: <OrderSuccessful /> },
            { path: "payment-details", element: <PaymentDetails /> },
            { path: "referral", element: <ReferralPage /> },
            {
              path: "check-out",
              element: (
                <CheckOut
                  token={token}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  TotalPrice={TotalPrice}
                />
              ),
            },
            {
              path: "place-order",
              element: (
                <OrderNow
                  orderItems={orderItems}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              ),
            },
          ],
        }
      : "",
  ]);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <BounceLoader color="#00b3d4" loading={loading} size={50} />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
