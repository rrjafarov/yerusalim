import Image from "next/image";
import React from "react";

const AboutPageDirector = () => {
  return (
    <div className="aboutPageDirector">
      <div className="container">
        <div className="aboutPageDirectorItems">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="aboutPageDirectorItemsContent">
                <div className="aboutPageDirectorItemsContentTopContent">
                  <img src="/img/rename.png" alt="#" />
                  <h3>Director Message</h3>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. enim ad minimnostrud Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. enim ad
                    minimnostrud Lorem ipsum dolor sit amet, consectetu
                  </span>
                </div>
                <div className="aboutPageDirectorItemsContentBottomContent">
                    <strong>Director</strong>
                    <p>Name Surname</p>
                </div>
              </div>
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="aboutPageDirectorItemsImage">
                <Image
                  src="/img/director.png"
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
