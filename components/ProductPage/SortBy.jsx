"use client";
import React from "react";
import { Select } from "antd";

const SortBy = () => {
  const handleChange = (value) => {
    console.log("Selected sort:", value);
    // burda sort funksiyanı çağırarsan
  };

  return (
    <div className="sortBy">
      <span>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 16.25C7.41421 16.25 7.75 16.5858 7.75 17C7.75 17.4142 7.41421 17.75 7 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H7ZM15 11.25C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H15ZM21 6.25C21.4142 6.25 21.75 6.58579 21.75 7C21.75 7.41421 21.4142 7.75 21 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H21Z"
              fill="#22282F"
            />
          </svg>
        </p>
        Sort by:
      </span>

      <Select
        defaultValue="priceLowToHigh"
        onChange={handleChange}
        bordered={false}
        dropdownMatchSelectWidth={false}
        suffixIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g opacity="0.4">
              <path
                d="M2.66699 6L8.00032 11.3333L13.3337 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        }
        // style={{
        //   minWidth: "140px",
        //   height: "32px",
        //   display: "flex",
        //   alignItems: "center",
        // }}
        dropdownStyle={{
          minWidth: "19rem",
        }}
        options={[
          {
            value: "priceLowToHigh",
            label: "Price low to high",
          },
          {
            value: "priceHighToLow",
            label: "Price high to low",
          },
          {
            value: "newest",
            label: "Newest",
          },
        ]}
      />
    </div>
  );
};

export default SortBy;
