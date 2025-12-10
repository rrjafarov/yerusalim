import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Login from "@/components/Login/Login";
import React from "react";
import "../login.scss"
import SignUp from "@/components/Login/SignUp";
const page = () => {
  return (
    <div>
      <Header />
      <div className="productPageBackground">
        <SignUp />
      </div>
      <Footer />
    </div>
  );
};

export default page;
