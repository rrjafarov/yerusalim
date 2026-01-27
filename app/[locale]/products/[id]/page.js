
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import ProductDetailPage from "@/components/ProductDetailPage/ProductDetailPage";
import React from "react";
import "../products.scss";
import Advantages from "@/components/HomePage/Advantages";
import ProductDetailPageSimilars from "@/components/ProductDetailPage/ProductDetailPageSimilars";


const page = () => {
  return (
    <div>
      <div className="productPageBackground">
        <Breadcrumbs />
        <ProductDetailPage />
      </div>
      <Advantages />
      <ProductDetailPageSimilars />
    </div>
  );
};

export default page;
