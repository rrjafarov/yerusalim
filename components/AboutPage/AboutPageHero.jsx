import Image from "next/image";
import React from "react";

const AboutPageHero = ({ aboutData }) => {
  return (
    <div className="aboutPageHero">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${aboutData.banner_image}`}
        alt="banner"
        width={1440}
        height={1200}
      />
      <div className="aboutPageHeroTitle">
        <h1>{aboutData.page_name}</h1>
      </div>
    </div>
  );
};

export default AboutPageHero;
