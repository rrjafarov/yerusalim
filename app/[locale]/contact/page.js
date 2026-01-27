import ContactPageHero from "@/components/ContactPage/ContactPageHero";
import React from "react";
import "./contact.scss";
import ContactPageMain from "@/components/ContactPage/ContactPageMain";
import ContactMap from "@/components/ContactPage/ContactMap";
import ContactBreadcrumbs from "@/components/ContactPage/ContactBreadcrumbs";

const page = () => {
  return (
    <div>
      <ContactPageHero />
      <div className="productPageBackground">
        <ContactBreadcrumbs />
        <ContactPageMain />
        <ContactMap />
      </div>
    </div>
  );
};

export default page;
