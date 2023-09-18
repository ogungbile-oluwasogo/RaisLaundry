import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MobileListMenu from "./MobileListMenu";

const RootLayout = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav((onshow) => !onshow);
  };

  return (
    <Fragment>
      <header>
        <Header showNavHandler={showNavHandler} showNav={showNav} />
        {showNav && <MobileListMenu showNavHandler={showNavHandler} />}
      </header>
      {/* MAIN BODY PART */}
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default RootLayout;
