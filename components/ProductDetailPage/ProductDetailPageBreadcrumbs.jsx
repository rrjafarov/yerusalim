import React from "react";
import Link from "next/link";

const ProductDetailPageBreadcrumbs = ({productDetail,t}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">{t?.breadcrumbs}</Link>
          </li>
          <span>/</span>
          <li>
            <Link href="/products">{t?.products}</Link>
          </li>
          <span>/</span>
          <li>{productDetail?.name}</li>
        </ul>
      </nav>
    </div>
  );
};
export default ProductDetailPageBreadcrumbs;
