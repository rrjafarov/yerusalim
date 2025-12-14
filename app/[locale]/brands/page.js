import React from "react";
import "./brands.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BrandsHero from "@/components/BrandsPage/BrandsHero";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import BrandsPage from "@/components/BrandsPage/BrandsPage";
import BrandsBreadcrumbs from "@/components/BrandsPage/BrandsBreadcrumbs";

const page = () => {
  return (
    <div>
      <Header />
      <BrandsHero />
      <div className="productPageBackground">
        {/* <Breadcrumbs /> */}
        <BrandsBreadcrumbs />
        <BrandsPage />
      </div>
      <Footer />
    </div>
  );
};

export default page;
