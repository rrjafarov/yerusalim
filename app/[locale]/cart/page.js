import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import "./cart.scss";
import CartHero from "@/components/Cart/CartHero";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import Cart from "@/components/Cart/Cart";
import CartBreadcrumbs from "@/components/Cart/CartBreadcrumbs";

const page = () => {
  return (
    <div>
      <Header />
      <CartHero />
      <div className="productPageBackground">
        {/* <Breadcrumbs /> */}
        <CartBreadcrumbs />
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default page;
