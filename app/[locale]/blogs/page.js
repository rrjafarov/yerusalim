import React from "react";
import "./blogs.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BrandsHero from "@/components/BrandsPage/BrandsHero";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import BlogsPageHero from "@/components/BlogsPage/BlogsPageHero";
import BlogsPage from "@/components/BlogsPage/BlogsPage";

const page = () => {
  return (
    <div>
      <Header />
      <BlogsPageHero />
      <div className="productPageBackground">
        <Breadcrumbs />
        <BlogsPage />
      </div>
      <Footer />
    </div>
  );
};

export default page;
