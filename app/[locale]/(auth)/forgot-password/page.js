import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Login from "@/components/Login/Login";
import React from "react";
import "../login.scss"
import ForgotPassword from "@/components/Login/ForgotPassword";
const page = () => {
  return (
    <div>
      <Header />
      <div className="productPageBackground">
        <ForgotPassword />
      </div>
      <Footer />
    </div>
  );
};

export default page;
