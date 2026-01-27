import React from "react";
import "./about.scss";
import AboutPageHero from "@/components/AboutPage/AboutPageHero";
import AboutHeroUnderContent from "@/components/AboutPage/AboutHeroUnderContent";
import AboutPageOurHistory from "@/components/AboutPage/AboutPageOurHistory";
import AboutPageOurCraft from "@/components/AboutPage/AboutPageOurCraft";
import AboutMisionVision from "@/components/AboutPage/AboutMisionVision";
import PhotoGallery from "@/components/Mixed/PhotoGallery";
import AboutOurBrands from "@/components/AboutPage/AboutOurBrands";
import AboutPageDirector from "@/components/AboutPage/AboutPageDirector";
import AboutBreadcrumbs from "@/components/AboutPage/AboutBreadcrumbs";

const page = () => {
  return (
    <div>
      <AboutPageHero />
      <div className="productPageBackground">
        <AboutBreadcrumbs/>
        <AboutHeroUnderContent />
        <AboutPageOurHistory />
        <AboutPageOurCraft />
        <AboutMisionVision />
        <PhotoGallery />
      </div>
      <AboutOurBrands />
      <AboutPageDirector />
    </div>
  );
};

export default page;
