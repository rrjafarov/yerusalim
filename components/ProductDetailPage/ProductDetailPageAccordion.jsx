"use client";
import React, { useState } from "react";
import { Collapse } from "antd";
import Image from "next/image";
import VideoPopup from "./VideoPopup";

const { Panel } = Collapse;

const ProductDetailPageAccordion = ({ productDetail }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="productDetailPageAccordion">
      <Collapse
        ghost
        defaultActiveKey={["1"]}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.4rem",
              height: "2.4rem",
              fontSize: "2.5rem",
              lineHeight: 1,
              fontWeight: 500,
              color: "#711111",
            }}
          >
            {isActive ? (
              // 🔹 ACTIVE olanda – minus SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 11.25C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18Z"
                  fill="currentColor" // rəngi wrapper-dən götürür (#711111)
                />
              </svg>
            ) : (
              // 🔹 BAĞLI olanda – plus
              "+"
            )}
          </span>
        )}
      >
        {/* 1-ci accordion */}
        {productDetail?.about && (
          <>
            <div className="acordionLineDP"></div>
            <Panel header="About Product" key="1">
              <div className="productDetailPageAccordionContent">
                <div
                  className="blogContentApiDescriptionItems"
                  dangerouslySetInnerHTML={{ __html: productDetail?.about }}
                />
              </div>
            </Panel>
          </>
        )}

        <div className="acordionLineDP"></div>
        <Panel header="Specs" key="1">
          <div className="productDetailPageAccordionContent">
            <div className="productDetailPageAccordionContentSpesifications">
              <ul>
                <li>
                  <span>Wax:</span>
                  <p>Soy–coconut blend</p>
                </li>
                <li>
                  <span>Wick: </span>
                  <p>100% cotton, zinc-free</p>
                </li>
                <li>
                  <span>Wax:</span>
                  <p>Soy–coconut blend</p>
                </li>
                <li>
                  <span>Net weight: </span>
                  <p>1100g</p>
                </li>
                <li>
                  <span>Wax:</span>
                  <p>Soy–coconut blend</p>
                </li>
                <li>
                  <span>Made in: </span>
                  <p>Baku</p>
                </li>
              </ul>
            </div>
          </div>
        </Panel>

        <div className="acordionLineDP"></div>

        {productDetail?.safety_info && (
          <>
            <Panel header="Safety info" key="1">
              <div className="productDetailPageAccordionContent">
                <div
                  className="blogContentApiDescriptionItems"
                  dangerouslySetInnerHTML={{
                    __html: productDetail?.safety_info,
                  }}
                />
              </div>
            </Panel>
          </>
        )}

        {productDetail?.youtube_url && (
          <>
            <div className="acordionLineDP"></div>
            <Panel header="Video" key="1">
              <div className="productDetailPageAccordionContent">
                <div
                  className="productDetailPageAccordionContentVideo"
                  onClick={handleOpenVideo}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${productDetail.cover_image}`}
                    alt="videoCover"
                    width={475}
                    height={300}
                  />
                  <div className="playButton">
                    <Image
                      src="/img/videoPlay.png"
                      alt="play"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              </div>
            </Panel>
          </>
        )}

        {productDetail?.delivery_content && (
          <>
            <div className="acordionLineDP"></div>
            <Panel header="Delivery" key="1">
              <div className="productDetailPageAccordionContent">
                <div className="productDetailPageAccordionContentDelivery">
                  {/* <ul>
                <li>
                  <span>Delivery:</span>
                  <p>
                    1–3 days across Azerbaijan; same-day in Baku (order by
                    14:00).
                  </p>
                </li>
              </ul> */}
                  <div
                    className="blogContentApiDescriptionItems"
                    dangerouslySetInnerHTML={{
                      __html: productDetail?.delivery_content,
                    }}
                  />
                </div>
              </div>
            </Panel>
          </>
        )}
      </Collapse>

      {isVideoOpen && <VideoPopup onClose={handleCloseVideo} youtubeUrl={productDetail?.youtube_url} />}
    </div>
  );
};

export default ProductDetailPageAccordion;
