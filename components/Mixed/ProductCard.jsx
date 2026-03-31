"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useAddToCartMutation } from "@/redux/cartService";
import CartToast from "@/components/CartToast";
const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  image,
  slug,
  specialBadge,
  productVariants,
  t,
}) => {
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const [isAdded, setIsAdded] = useState(false);

  const variants = Object.values(productVariants || {}).flat();
  const prices = variants.map((v) => parseFloat(v.price));
  const oldPrices = variants
    .map((v) => parseFloat(v.old_price))
    .filter((v) => !isNaN(v));

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const minOldPrice = oldPrices.length ? Math.min(...oldPrices) : null;
  const maxOldPrice = oldPrices.length ? Math.max(...oldPrices) : null;

  const displayPrice =
    minPrice === maxPrice ? `${minPrice}` : `${minPrice} - ${maxPrice}`;
  const displayOldPrice =
    minOldPrice === maxOldPrice
      ? minOldPrice
      : minOldPrice && maxOldPrice
        ? `${minOldPrice} - ${maxOldPrice}`
        : null;

  const handleAddToCart = async () => {
    try {
      await addToCart({
        productId: id,
        quantity: 1,
        selectedVariantIndex: 0,
      }).unwrap();

      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 5000);
    } catch (error) {
      console.log("Cart error:", error);
    }
  };

  const basketSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M7.58517 0C8.8838 0 9.91351 -0.00101381 10.7307 0.0966797C11.5631 0.196234 12.2508 0.405154 12.8352 0.875977C12.9342 0.955761 13.0295 1.04095 13.1203 1.12988C13.6567 1.6551 13.9453 2.31367 14.1418 3.12891C14.3347 3.92898 14.4544 4.95152 14.6067 6.24121L14.8264 8.10352C15.0292 9.82181 15.1911 11.176 15.1682 12.2383C15.1448 13.3183 14.9301 14.2053 14.2932 14.9219C13.6563 15.638 12.8012 15.9547 11.7317 16.1045C10.6794 16.2518 9.3153 16.25 7.58517 16.25C5.85503 16.25 4.4909 16.2518 3.43869 16.1045C2.36923 15.9547 1.51398 15.638 0.877167 14.9219C0.240317 14.2054 0.0255208 13.3183 0.00216675 12.2383C-0.0207825 11.176 0.141111 9.8218 0.343964 8.10352L0.56369 6.24121C0.715944 4.95153 0.835693 3.92898 1.02853 3.12891C1.22504 2.31371 1.51372 1.65509 2.05002 1.12988C2.14087 1.04095 2.23619 0.955763 2.33517 0.875977C2.91954 0.405118 3.60725 0.196252 4.43967 0.0966797C5.25683 -0.00103502 6.28654 -1.20523e-07 7.58517 0ZM7.58517 1.25C6.25583 1.25 5.31388 1.2511 4.5881 1.33789C3.878 1.42284 3.45048 1.58272 3.11935 1.84961C3.05156 1.90426 2.98626 1.96251 2.92404 2.02344C2.62026 2.32101 2.41096 2.72662 2.24338 3.42188C2.07211 4.13247 1.96075 5.06756 1.8049 6.3877L1.58517 8.25C1.37794 10.0054 1.23157 11.2566 1.25217 12.2109C1.27239 13.1472 1.45342 13.6886 1.81076 14.0908C2.16825 14.493 2.68501 14.7363 3.61252 14.8662C4.55779 14.9985 5.81772 15 7.58517 15C9.35261 15 10.6125 14.9985 11.5578 14.8662C12.4854 14.7363 13.0021 14.493 13.3596 14.0908C13.717 13.6886 13.898 13.1473 13.9182 12.2109C13.9388 11.2566 13.7924 10.0054 13.5852 8.25L13.3654 6.3877C13.2096 5.06754 13.0982 4.13247 12.927 3.42188C12.7594 2.72657 12.5501 2.32102 12.2463 2.02344C12.1841 1.96251 12.1188 1.90426 12.051 1.84961C11.7199 1.58276 11.2924 1.42282 10.5822 1.33789C9.85646 1.25112 8.9145 1.25 7.58517 1.25ZM10.0852 3.33301C10.4302 3.33301 10.71 3.61298 10.7102 3.95801V5.625C10.7102 7.35089 9.31106 8.75 7.58517 8.75C5.85943 8.74983 4.46017 7.35078 4.46017 5.625V3.95801C4.46035 3.61308 4.74025 3.33318 5.08517 3.33301C5.43024 3.33301 5.71 3.61298 5.71017 3.95801V5.625C5.71017 6.66043 6.54979 7.49983 7.58517 7.5C8.62071 7.5 9.46017 6.66053 9.46017 5.625V3.95801C9.46035 3.61308 9.74025 3.33318 10.0852 3.33301Z"
        fill="white"
      />
    </svg>
  );

  return (
    <>
      <CartToast t={t} isVisible={isAdded} />

      <div className="productCard" key={id}>
        <Link href={`/products/${slug}-${id}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${image}`}
            alt="product"
            width={100}
            height={100}
          />
        </Link>

        <div className="productCardContent">
          <div className="productCardPrices">
            <div className="productCardNewPrice">
              <span>{displayPrice}</span>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M12.9595 4.10449C13.3032 4.10449 13.6334 4.24133 13.8765 4.48438C14.1193 4.72738 14.2554 5.05686 14.2554 5.40039V6.38574C19.161 7.23007 22.896 12.8005 22.896 19.4404C22.896 19.784 22.7591 20.1134 22.5161 20.3564C22.2732 20.5994 21.9437 20.7362 21.6001 20.7363C21.2564 20.7363 20.9262 20.5995 20.6831 20.3564C20.4402 20.1135 20.3042 19.784 20.3042 19.4404C20.3042 16.7602 19.6079 14.3186 18.4683 12.459C17.3842 10.69 15.9073 9.46115 14.2554 9.03223V17.2803C14.2554 17.6238 14.1193 17.9533 13.8765 18.1963C13.6334 18.4393 13.3032 18.5762 12.9595 18.5762C12.6158 18.5761 12.2864 18.4393 12.0435 18.1963C11.8005 17.9533 11.6636 17.6239 11.6636 17.2803V9.03223C10.0122 9.4619 8.53489 10.6977 7.45068 12.4707C6.31088 14.3346 5.61572 16.7766 5.61572 19.4404C5.61569 19.7841 5.47886 20.1134 5.23584 20.3564C4.99281 20.5995 4.6635 20.7363 4.31982 20.7363C3.97615 20.7363 3.64685 20.5994 3.40381 20.3564C3.16079 20.1134 3.02396 19.7841 3.02393 19.4404C3.02393 12.8007 6.75817 7.23038 11.6636 6.38574V5.40039C11.6636 5.05675 11.8005 4.72741 12.0435 4.48438C12.2864 4.24139 12.6158 4.10456 12.9595 4.10449Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="0.432"
                  />
                </svg>
              </p>
            </div>
            <div className="productCardOldPrice">
              <span>{displayOldPrice}</span>
            </div>
          </div>

          <div className="productCardTitle">
            <p>{name}</p>
          </div>
        </div>

        {variants.length > 1 ? (
          <Link href={`/products/${slug}-${id}`} className="productCardButton">
            <p>{basketSvg}</p>
            <span>{t?.addToCart}</span>
          </Link>
        ) : (
          <button
            className="productCardButton"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            <p>
              {isLoading ? <span className="cartLoader"></span> : basketSvg}
            </p>
            <span>{t?.addToCart}</span>
          </button>
        )}

        {specialBadge?.includes("best_seller") && (
          <div className="productCardBestSeller">
            <span>{t?.bestSeller}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
