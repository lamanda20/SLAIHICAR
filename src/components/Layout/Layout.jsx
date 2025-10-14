import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import BackToTop from "../UI/BackToTopWtspButtons";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div className="main-content">
        <Routers />
      </div>
      <BackToTop />
      <Footer />
    </Fragment>
  );
};

export default Layout;
