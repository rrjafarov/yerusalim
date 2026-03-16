"use client";
import Image from "next/image";
import React, { useRef } from "react";

const DeliveryTerms = ({ supportData }) => {
  const contentRef = useRef(null);

  return (
    <div className="deliverySupport">
      <h3>{supportData.name}</h3>

      <div className="deliverySupportImages">
        <div className="deliverySupportImage">          
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${supportData?.photo_gallery?.[0]}`}
            alt="payment"
            width={870}
            height={340}
          />
        </div>
      </div>

      <div className="deliverySupportContent">
        <div className="deliverySupportContentItem">
          <h3>{supportData.title}</h3>
          <div
            className="supportAnswer"
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: supportData.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryTerms;
