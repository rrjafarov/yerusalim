import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import PrivacyPageHero from "@/components/SupportPaegs/PrivacyPageHero";
import React from "react";
import "../support/support.scss"
import PrivacyPage from "@/components/SupportPaegs/PrivacyPage";

const page = () => {
  return (
    <div>
      <Header />
      <PrivacyPageHero />
      <div className="productPageBackground">
        <Breadcrumbs />
        <PrivacyPage />
      </div>
      <Footer />
    </div>
  );
};

export default page;
