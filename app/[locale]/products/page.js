import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductPageHero from "@/components/ProductPage/ProductPageHero";
import React from "react";
import "./products.scss";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import SeoContent from "@/components/HomePage/SeoContent";
import ProductPageDetails from "@/components/ProductPage/ProductPageDetails";

const page = () => {
  return (
    <div>
      <Header />
      <ProductPageHero />
      <div className="productPageBackground">
        <Breadcrumbs />
        <ProductPageDetails />
      </div>
      <SeoContent />

      <Footer />
    </div>
  );
};

export default page;
