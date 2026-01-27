import React from "react";
import "./cart.scss";
import CartHero from "@/components/Cart/CartHero";
import Cart from "@/components/Cart/Cart";
import CartBreadcrumbs from "@/components/Cart/CartBreadcrumbs";

const page = () => {
  return (
    <div>
      <CartHero />
      <div className="productPageBackground">
        <CartBreadcrumbs />
        <Cart />
      </div>
    </div>
  );
};

export default page;
