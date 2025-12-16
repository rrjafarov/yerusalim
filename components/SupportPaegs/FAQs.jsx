
"use client";

import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FAQs = () => {
  return (
    <div className="faqS">
      <h3>Frequently asked questions</h3>

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
          <Panel header="How to pre order products?" key="1">
            <p className="accordionParagraph">
              Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur autQuasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut
            </p>
          </Panel>


          <Panel header="How to pre order products?" key="2">
            <p className="accordionParagraph">
              Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur autQuasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut
              Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur autQuasi architecto
              beatae vitae dicta sunt explicabo. 
            </p>
          </Panel>
          

 
          
        </Collapse>
      </div>
    </div>
  );
};

export default FAQs;
