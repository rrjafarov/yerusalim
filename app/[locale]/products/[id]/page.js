import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import ProductDetailPage from "@/components/ProductDetailPage/ProductDetailPage";
import React from "react";
import "../products.scss";
import Advantages from "@/components/HomePage/Advantages";
import ProductDetailPageSimilars from "@/components/ProductDetailPage/ProductDetailPageSimilars";


const page = () => {
  return (
    <div>
      <Header />
      <div className="productPageBackground">
        <Breadcrumbs />
        <ProductDetailPage />
      </div>
      <Advantages />
      <ProductDetailPageSimilars />
      <Footer />
    </div>
  );
};

export default page;
