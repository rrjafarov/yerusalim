"use client";

import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FilterAccordion = () => {
  return (
    <div className="filterAccordion">
      <Collapse
        ghost
        defaultActiveKey={["1", "2"]}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              transform: isActive ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.25s ease",
            }}
          >
            <g opacity="0.4">
              <path
                d="M13.333 10L7.99968 4.66667L2.66634 10"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        )}
      >
        {/* 1-ci accordion */}
        <Panel header="Categories" key="1">
          <div></div>
        </Panel>

        <div className="filterAccordionLine"></div>

        {/* 2-ci accordion */}
        <Panel header="Fragrance" key="2">
          <div></div>
        </Panel>
        <div className="filterAccordionLine"></div>

      </Collapse>
    </div>
  );
};

export default FilterAccordion;
