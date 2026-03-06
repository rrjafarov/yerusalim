"use client";
import Link from "next/link";
import React from "react";

const ProductDetailPageSetting = ({
  attributes,
  variants,
  selectedVariant,
  setSelectedVariant,
}) => {
  return (
    <div className="productDetailPageRightSettingItems">
      <ul>
         {/* SPECIAL ATTRIBUTES */}
        {attributes?.map((attr) => {
          const topAttr = attr?.top_attributes?.[0];

          return (
            <li key={attr.id}>
              <span className="productDpTitle">
                {topAttr?.name?.toUpperCase()}:
              </span>

              <p className="productDpValue">
                <Link href="#">
                  {attr?.name}
                </Link>
              </p>
            </li>
          );
        })}




        {/* SIZE VARIANTS */}
        <li>
          <span className="productDpTitle">SIZE:</span>

          <div className="productDpValueSize">
            {variants?.map((variant) => (
              <button
                key={variant.product_code}
                onClick={() => setSelectedVariant(variant)}
                style={
                  selectedVariant?.product_code === variant.product_code
                    ? { backgroundColor: "#F2EEE7" }
                    : {}
                }
              >
                <span>{variant.size}</span>
              </button>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetailPageSetting;
