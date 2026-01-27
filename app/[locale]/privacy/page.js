import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import PrivacyPageHero from "@/components/SupportPaegs/PrivacyPageHero";
import React from "react";
import "../support/support.scss"
import PrivacyPage from "@/components/SupportPaegs/PrivacyPage";

const page = () => {
  return (
    <div>
      <PrivacyPageHero />
      <div className="productPageBackground">
        <Breadcrumbs />
        <PrivacyPage />
      </div>
    </div>
  );
};

export default page;
