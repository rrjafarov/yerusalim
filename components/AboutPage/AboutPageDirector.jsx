import Image from "next/image";
import React from "react";

const AboutPageDirector = ({ aboutData }) => {
  return (
    <div className="aboutPageDirector">
      <div className="container">
        <div className="aboutPageDirectorItems">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="aboutPageDirectorItemsContent">
                <div className="aboutPageDirectorItemsContentTopContent">
                  <img src="/img/rename.png" alt="#" />
                  <h3>{aboutData.dm_title}</h3>
                  <div
                    className="blogContentApiDescriptionItems"
                    dangerouslySetInnerHTML={{
                      __html: aboutData.dm_content,
                    }}
                  />
                </div>
                <div className="aboutPageDirectorItemsContentBottomContent">
                  <strong>{aboutData.dm_position_name}</strong>
                  <p>{aboutData.director_name}</p>
                </div>
              </div>
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="aboutPageDirectorItemsImage">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${aboutData.director_image}`}
                  alt="director"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageDirector;
