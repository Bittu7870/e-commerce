import React from "react";
import Header from "../components/Header/Header";
import Newsletter from "../components/Footer/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const PublicRoute = ({ component: Component }) => {
  return (
    <>
      <Header />
      <Component />
      <Newsletter />
      <Footer />
    </>
  );
};

export default PublicRoute;
