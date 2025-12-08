import React from "react";
import "./about.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import AboutPageHero from "@/components/AboutPage/AboutPageHero";
import AboutHeroUnderContent from "@/components/AboutPage/AboutHeroUnderContent";

const page = () => {
  return (
    <div>
      <Header />
      <AboutPageHero />
      <div className="productPageBackground">
        <Breadcrumbs />
        <AboutHeroUnderContent />
      </div>
      <Footer />
    </div>
  );
};

export default page;
