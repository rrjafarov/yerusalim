"use client";
import Link from "next/link";
import React from "react";

const ProductDetailPageSetting = ({
  attributes,
  variants,
  selectedVariant,
  setSelectedVariant,
  selectedVariantIndex,
  setSelectedVariantIndex,
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
                <Link href="#">{attr?.name}</Link>
              </p>
            </li>
          );
        })}

        {/* SIZE VARIANTS */}
        <li>
          <span className="productDpTitle">SIZE:</span>

          <div className="productDpValueSize">
            {variants?.map((variant, index) => (
              <button
                // key={variant.product_code}
                // onClick={() => setSelectedVariant(variant)}

                key={variant.product_code}
                onClick={() => {
                  setSelectedVariant(variant);
                  setSelectedVariantIndex(index);
                }}
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
