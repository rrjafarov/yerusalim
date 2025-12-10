// import React from "react";

// const FAQs = () => {
//   return (
//     <div className="faqS">
//       <h3>Frequently asked questions</h3>

//       <div className="faqSaccordion">

//       </div>
//     </div>
//   );
// };

// export default FAQs;

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
          ghost
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

          <Panel header="How to track my order?" key="2">
            <p>
              You can track your order from your account page under the orders
              section. We will also send you an email with tracking details once
              your order has been shipped.
            </p>
          </Panel>

          <Panel header="What is your return policy?" key="3">
            <p>
              Returns are accepted within 14 days of delivery, provided the
              products are unused, in original packaging and with a receipt or
              proof of purchase.
            </p>
          </Panel>

          <Panel header="How can I contact support?" key="4">
            <p>
              You can reach our support team via email or live chat. We are
              available Monday to Friday from 09:00 to 18:00.
            </p>
          </Panel>
          <Panel header="How to track my order?" key="2">
            <p>
              You can track your order from your account page under the orders
              section. We will also send you an email with tracking details once
              your order has been shipped.
            </p>
          </Panel>

          <Panel header="What is your return policy?" key="3">
            <p>
              Returns are accepted within 14 days of delivery, provided the
              products are unused, in original packaging and with a receipt or
              proof of purchase.
            </p>
          </Panel>
          <Panel header="How to track my order?" key="2">
            <p>
              You can track your order from your account page under the orders
              section. We will also send you an email with tracking details once
              your order has been shipped.
            </p>
          </Panel>

          <Panel header="What is your return policy?" key="3">
            <p>
              Returns are accepted within 14 days of delivery, provided the
              products are unused, in original packaging and with a receipt or
              proof of purchase.
            </p>
          </Panel>
          
        </Collapse>
      </div>
    </div>
  );
};

export default FAQs;
