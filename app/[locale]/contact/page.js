import ContactPageHero from "@/components/ContactPage/ContactPageHero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import "./contact.scss";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import ContactPageMain from "@/components/ContactPage/ContactPageMain";
import ContactMap from "@/components/ContactPage/ContactMap";

const page = () => {
  return (
    <div>
      <Header />
      <ContactPageHero />
      <div className="productPageBackground">
        <Breadcrumbs />
        <ContactPageMain />
        <ContactMap />
      </div>
      <Footer />
    </div>
  );
};

export default page;
