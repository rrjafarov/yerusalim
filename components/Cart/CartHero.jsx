"use client"
import React from "react";
import { useGetCartQuery } from "@/redux/cartService";

const CartHero = ({t}) => {
  const { data: cartData } = useGetCartQuery();
  const cartCount = cartData?.cart?.count ?? 0;

  return (
    <div className="cartPageHero">
      <h1>{t?.basket}({cartCount})</h1>
    </div>
  );
};

export default CartHero;
