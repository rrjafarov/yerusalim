import React from "react";
import Link from "next/link";

const ProductDetailPageBreadcrumbs = ({productDetail}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <span>/</span>
          <li>{productDetail?.name}</li>
        </ul>
      </nav>
    </div>
  );
};
export default ProductDetailPageBreadcrumbs;
