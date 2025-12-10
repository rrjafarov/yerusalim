"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/Mixed/Breadcrumbs";
import Link from "next/link";
import "./support.scss";
import SupportPageLeftLinks from "@/components/SupportPaegs/SupportPageLeftLinks";

const SupportPage = ({ children }) => {
  return (
    <>
      <Header />
      <div className="productPageBackground">
        <div className="supportPages">
          <div className="supportPageHero">
            <h1>support</h1>
          </div>
          <Breadcrumbs />
          <div className="container">
            <div className="supportPageTitle">
              <h2>Support made simple</h2>
            </div>
            <div>
              <div className="row">
                <div className="xl-3 lg-4 md-4 sm-12">
                  <SupportPageLeftLinks />
                </div>
                <div className="xl-9 lg-8 md-8 sm-12">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SupportPage;
