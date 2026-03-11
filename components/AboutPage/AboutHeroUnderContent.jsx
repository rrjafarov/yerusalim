import React from "react";

const AboutHeroUnderContent = ({ aboutData }) => {
  return (
    <div className="container">
      <div className="aboutHeroUnderContent">
        <h2>{aboutData.title}</h2>
        <div
          className="blogContentApiDescriptionItems"
          dangerouslySetInnerHTML={{ __html: aboutData.description }}
        />
      </div>
    </div>
  );
};

export default AboutHeroUnderContent;
