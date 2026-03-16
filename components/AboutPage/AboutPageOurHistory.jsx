import Image from "next/image";
import React from "react";

const AboutPageOurHistory = ({ aboutData,t }) => {
  return (
    <div className="aboutPageOurHistory">
      <div className="aboutPageOurHistoryItems">
        <div className="aboutPageOurHistoryLeft">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${aboutData.story_image_1}`}
            alt="ourHistory"
            width={1000}
            height={700}
          />
        </div>
        <div className="aboutPageOurHistoryRight">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${aboutData.story_image_2}`}
            alt="ourHistory"
            width={1000}
            height={700}
          />
        </div>

        <div className="aboutPageOurHistoryItemsContent">
          <h2>{aboutData.story_title}</h2>
          <div
            className="blogContentApiDescriptionItems"
            dangerouslySetInnerHTML={{ __html: aboutData.story_description }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPageOurHistory;
