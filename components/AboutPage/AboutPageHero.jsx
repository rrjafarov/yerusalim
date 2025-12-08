import Image from "next/image";
import React from "react";

const AboutPageHero = () => {
  return (
    <div className="aboutPageHero">
      <Image
        src="/img/aboutBanner.png"
        alt="banner"
        width={1440}
        height={1200}
      />
      <div className="aboutPageHeroTitle">
        <h1>About Us</h1>
      </div>
    </div>
  );
};

export default AboutPageHero;
