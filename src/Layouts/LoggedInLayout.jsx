import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../Components/UserHeader";
import Footer from "./Footer";

const LoggedInLayout = () => {
  return (
    <Fragment>
      <header>
        <UserHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default LoggedInLayout;
