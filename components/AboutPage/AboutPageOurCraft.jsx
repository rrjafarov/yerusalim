import React from "react";

const AboutPageOurCraft = ({craftData,t}) => {
  return (
    <div className="aboutPageOurCraft">
      <div className="container">
        <div className="aboutPageOurCraftItems">
          <h2>{t?.ourCraft}</h2>
          <div className="aboutPageOurCraftCards">
            <div className="row">
              {craftData?.map((item) => (
                <div className="xl-3 lg-3 md-3 sm-6" key={item.id}>
                  <div className="aboutPageOurCraftCard">
                    <div className="ourCraftCardImg">
                      {item.icon_svg_code && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.icon_svg_code,
                          }}
                        />
                      )}
                    </div>
                    <div className="ourCraftCardContent">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageOurCraft;
