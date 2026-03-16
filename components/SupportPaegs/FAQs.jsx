"use client";

import React, { useRef } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FAQs = ({ faqData,t }) => {
  const contentRef = useRef(null);
  return (
    <div className="faqS">
      <h3>{t?.faq}</h3>

      <div className="faqSaccordion">
        <Collapse
          // ghost
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition="end"
          expandIcon={({ isActive }) => (
            <span className={`faqIcon ${isActive ? "open" : ""}`}>
              {/* horizontal (–) */}
              <svg width="18" height="2" viewBox="0 0 18 2" fill="none">
                <rect width="18" height="2" rx="1" fill="#AB1D1D" />
              </svg>

              {/* vertical (|) – yalnız BAĞLI olanda görünür → + işarəsi */}
              <svg
                className="vertical"
                width="2"
                height="18"
                viewBox="0 0 2 18"
                fill="none"
              >
                <rect width="2" height="18" rx="1" fill="#AB1D1D" />
              </svg>
            </span>
          )}
        >
          {faqData?.map((item, index) => (
            <Panel header={item?.question} key={index + 2}>
              {/* <p className="accordionParagraph">{item?.answer}</p> */}
              <div
                className="faqAnswer"
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: item?.answer }}
              />
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default FAQs;
