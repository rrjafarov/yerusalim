"use client"
import Link from "next/link";
import React, { useState } from "react";

const ProductDetailPageSetting = () => {
  const [activeSize, setActiveSize] = useState("8.5 oz"); // default aktiv

  return (
    <div className="productDetailPageRightSettingItems">
      <ul>
        <li>
          <span className="productDpTitle">OLFACTIVE FAMILIES:</span>
          <p className="productDpValue">
            <Link href="#">Floral</Link>
            <strong>/</strong>
            <Link href="#"> Fresh</Link>
          </p>
        </li>
        <li>
          <span className="productDpTitle">SMELLS LIKE:</span>
          <p className="productDpValue">
            <Link href="#">Juniper, evergreen </Link>
            <strong>and</strong>
            <Link href="#"> winter air</Link>
          </p>
        </li>
        <li>
          <span className="productDpTitle">FEELS LIKE:</span>
          <p className="productDpValue">a winter log cabin escape</p>
        </li>

        <li>
          <span className="productDpTitle">SIZE:</span>
          <div className="productDpValueSize">
            <button
              onClick={() => setActiveSize("8.5 oz")}
              style={
                activeSize === "8.5 oz"
                  ? { backgroundColor: "#F2EEE7" }
                  : {}
              }
            >
              <span>8.5 oz</span>
            </button>
            <button
              onClick={() => setActiveSize("27 oz")}
              style={
                activeSize === "27 oz"
                  ? { backgroundColor: "#F2EEE7" }
                  : {}
              }
            >
              <span>27 oz</span>
            </button>
            <button
              onClick={() => setActiveSize("50 oz")}
              style={
                activeSize === "50 oz"
                  ? { backgroundColor: "#F2EEE7" }
                  : {}
              }
            >
              <span>50 oz</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetailPageSetting;
