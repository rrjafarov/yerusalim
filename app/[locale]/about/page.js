import React from "react";
import "./about.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import AboutPageHero from "@/components/AboutPage/AboutPageHero";
import AboutHeroUnderContent from "@/components/AboutPage/AboutHeroUnderContent";
import AboutPageOurHistory from "@/components/AboutPage/AboutPageOurHistory";
import AboutPageOurCraft from "@/components/AboutPage/AboutPageOurCraft";
import AboutMisionVision from "@/components/AboutPage/AboutMisionVision";
import PhotoGallery from "@/components/Mixed/PhotoGallery";
import AboutOurBrands from "@/components/AboutPage/AboutOurBrands";
import AboutPageDirector from "@/components/AboutPage/AboutPageDirector";

const page = () => {
  return (
    <div>
      <Header />
      <AboutPageHero />
      <div className="productPageBackground">
        <Breadcrumbs />
        <AboutHeroUnderContent />
        <AboutPageOurHistory />
        <AboutPageOurCraft />
        <AboutMisionVision />
        <PhotoGallery />
      </div>
      <AboutOurBrands />
      <AboutPageDirector />
      <Footer />
    </div>
  );
};

export default page;
