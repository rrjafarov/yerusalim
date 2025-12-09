import Image from "next/image";
import React from "react";

const AboutPageOurHistory = () => {
  return (
    <div className="aboutPageOurHistory">
      <div className="aboutPageOurHistoryItems">
        <div className="aboutPageOurHistoryLeft">
          <Image
            src="/img/aboutOurHistory01.png"
            alt="ourHistory"
            width={1000}
            height={700}
          />
        </div>
        <div className="aboutPageOurHistoryRight">
          <Image
            src="/img/aboutOurHistory02.png"
            alt="ourHistory"
            width={1000}
            height={700}
          />
        </div>

        <div className="aboutPageOurHistoryItemsContent">
          <h2>Our Story</h2>
          <p>
            We started with a simple idea: the right light can change how a
            space feels. <br /> <br /> From our studio, we hand-pour small batches with
            meticulous attention to detail—so every candle you bring home glows
            beautifully, night after night.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPageOurHistory;
