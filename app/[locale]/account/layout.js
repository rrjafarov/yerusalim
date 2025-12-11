"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./account.scss";
import AccountHero from "@/components/Account/AccountHero";
import AccountTopLinks from "@/components/Account/AccountTopLinks";

const AccountPage = ({ children }) => {
  return (
    <>
      <Header />
      <AccountHero />
      <div className="accountBackground">
        <div className="container">
          <div className="account">
            <div className="accountTopLinks">
              <AccountTopLinks />
            </div>

            <div className="accountTopLinks">{children}</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AccountPage;
