import React from "react";

const AboutMisionVision = ({ aboutData }) => {
  return (
    <div className="aboutMisionVision">
      <div className="container">
        <div className="aboutMisionVisionItems">
          <div className="row">
            <div className="xl-4 lg-4 md-6 sm-12">
              <div className="aboutMisionVisionItem">
                <div className="titleBlock">
                  <span>01</span>
                  <h3>{aboutData.mission_title}</h3>
                </div>
                <div
                  className="blogContentApiDescriptionItems"
                  dangerouslySetInnerHTML={{
                    __html: aboutData.mission_desc,
                  }}
                />
              </div>
            </div>
            <div className="xl-4 lg-4 md-6 sm-12">
              <div className="aboutMisionVisionItem">
                <div className="titleBlock">
                  <span>02</span>
                  <h3>{aboutData.vision_title}</h3>
                </div>
                <div
                  className="blogContentApiDescriptionItems"
                  dangerouslySetInnerHTML={{
                    __html: aboutData.vision_desc,
                  }}
                />
              </div>
            </div>
            <div className="xl-4 lg-4 md-6 sm-12">
              <div className="aboutMisionVisionItem">
                <div className="titleBlock">
                  <span>03</span>
                  <h3>{aboutData.future_goals_title}</h3>
                </div>

                <div
                  className="blogContentApiDescriptionItems"
                  dangerouslySetInnerHTML={{
                    __html: aboutData.future_goals_desc,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMisionVision;
