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
  t,
}) => {
  return (
    <div className="productDetailPageRightSettingItems">
      <ul>
        {/* SPECIAL ATTRIBUTES */}
        {attributes?.map((attr) => {
          const topAttr = attr?.top_attributes?.[0];

          return (
            <li key={attr.id}>
              <span className="productDpTitle">{topAttr?.name}:</span>

              <p className="productDpValue">
                <Link href={`/products?attribute=${attr?.id}`}>{attr?.name}</Link>
              </p>
            </li>
          );
        })}

        {/* SIZE VARIANTS */}
        {/* <li>
          <span className="productDpTitle">{t?.size}:</span>

          <div className="productDpValueSize">
            {variants?.map((variant, index) => (
              <button

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
        </li> */}

        {variants?.some((variant) => variant?.size) && (
          <li>
            <span className="productDpTitle">{t?.size}:</span>

            <div className="productDpValueSize">
              {variants
                ?.filter((variant) => variant?.size) // yalnız size olanlar
                .map((variant, index) => (
                  <button
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
        )}
      </ul>
    </div>
  );
};

export default ProductDetailPageSetting;
