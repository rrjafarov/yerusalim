
import React from "react";
import Link from "next/link";

const ProductDetailPageBreadcrumbs = ({ productDetail, t }) => {

  const categoryBreadcrumbs = productDetail.category?.[0] || null;

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
          {categoryBreadcrumbs && (
            <>
              <span>/</span>
              <li>
                <Link href={`/products?category=${categoryBreadcrumbs.url_slug}-${categoryBreadcrumbs.id}`}>
                  {categoryBreadcrumbs.name}
                </Link>
              </li>
            </>
          )}
          <span>/</span>
          <li>{productDetail?.name}</li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductDetailPageBreadcrumbs;