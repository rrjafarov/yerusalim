"use client";
import { FaBasketShopping } from "react-icons/fa6";
import { createPortal } from "react-dom";
import React from "react";

const CartToast = ({ isVisible }) => {
  return createPortal(
    <div className={`cartToast ${isVisible ? "cartToast--visible" : ""}`}>
      <span><FaBasketShopping className="toastIcon" />Səbətə əlavə olundu</span>
    </div>,
    document.body
  );
};

export default CartToast;










// ! alt alta


