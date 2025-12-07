// "use client";

// import React from "react";
// import { Collapse } from "antd";

// const { Panel } = Collapse;

// const FilterAccordion = () => {
//   return (
//     <div className="filterAccordion">
//       <Collapse
//         ghost
//         defaultActiveKey={["1", "2"]}
//         expandIconPosition="end"
//         expandIcon={({ isActive }) => (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             style={{
//               transform: isActive ? "rotate(0deg)" : "rotate(180deg)",
//               transition: "transform 0.25s ease",
//             }}
//           >
//             <g opacity="0.4">
//               <path
//                 d="M13.333 10L7.99968 4.66667L2.66634 10"
//                 stroke="black"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </g>
//           </svg>
//         )}
//       >
//         {/* 1-ci accordion */}
//         <Panel header="Categories" key="1">
//           <div className="filterAccordionContent">
//             <ul>
//               <li>Jar Candels</li>
//               <li>Jar Candels</li>
//               <li>Jar Candels</li>
//               <li>Jar Candels</li>
//               <li>Jar Candels</li>
//               <li>Jar Candels</li>
//               <li>Jar Candels</li>
//               <li>Jar Candels</li>
//             </ul>
//           </div>
//         </Panel>

//         <div className="filterAccordionLine"></div>

//         {/* 2-ci accordion */}
//         <Panel header="Fragrance" key="2">
//           <div></div>
//         </Panel>
//         <div className="filterAccordionLine"></div>
//       </Collapse>
//     </div>
//   );
// };

// export default FilterAccordion;







"use client";

import React, { useRef, useState, useEffect } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FilterAccordion = () => {
  // 🔹 1-ci accordion (Categories) üçün ref və state
  const scrollRefCategories = useRef(null);
  const [thumbStyleCategories, setThumbStyleCategories] = useState({
    height: "0%",
    translateY: 0,
  });

  // 🔹 2-ci accordion (Fragrance - birinci) üçün ref və state
  const scrollRefFragrance1 = useRef(null);
  const [thumbStyleFragrance1, setThumbStyleFragrance1] = useState({
    height: "0%",
    translateY: 0,
  });

  // 🔹 3-ci accordion (Fragrance - ikinci) üçün ref və state
  const scrollRefFragrance2 = useRef(null);
  const [thumbStyleFragrance2, setThumbStyleFragrance2] = useState({
    height: "0%",
    translateY: 0,
  });

  const updateThumb = (el, setThumbStyle) => {
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;

    // scroll yoxdursa – custom barı gizlət
    if (scrollHeight <= clientHeight) {
      setThumbStyle({ height: "0%", translateY: 0 });
      return;
    }

    const visibleRatio = clientHeight / scrollHeight;
    const thumbHeight = visibleRatio * 100; // % ilə

    const maxOffset = clientHeight - visibleRatio * clientHeight;
    const translateY = (scrollTop / (scrollHeight - clientHeight)) * maxOffset;

    setThumbStyle({
      height: `${thumbHeight}%`,
      translateY,
    });
  };

  useEffect(() => {
    if (scrollRefCategories.current) {
      updateThumb(scrollRefCategories.current, setThumbStyleCategories);
    }
    if (scrollRefFragrance1.current) {
      updateThumb(scrollRefFragrance1.current, setThumbStyleFragrance1);
    }
    if (scrollRefFragrance2.current) {
      updateThumb(scrollRefFragrance2.current, setThumbStyleFragrance2);
    }
  }, []);

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
          <div className="filterAccordionContent">
            <div
              className="filterAccordionScroll"
              ref={scrollRefCategories}
              onScroll={() =>
                updateThumb(
                  scrollRefCategories.current,
                  setThumbStyleCategories
                )
              }
            >
              <ul>
                <li>Jar Candels</li>
                <li>Festive</li>
                <li>Floral </li>
                <li>Jar Candels</li>
                <li>Festive</li>
                <li>Floral </li>
                <li>Jar Candels</li>
                <li>Festive</li>
                <li>Floral </li>
                <li>Jar Candels</li>
                <li>Festive</li>
                <li>Floral </li>
                <li>Jar Candels</li>
                <li>Festive</li>
                <li>Floral </li>
              </ul>
            </div>

            {/* Custom scrollbar */}
            <div className="filterAccordionCustomScrollbar">
              <div
                className="filterAccordionCustomThumb"
                style={{
                  height: thumbStyleCategories.height,
                  transform: `translateY(${thumbStyleCategories.translateY}px)`,
                }}
              />
            </div>
          </div>
        </Panel>
        <div className="filterAccordionLine"></div>

        {/* 2-ci accordion */}
        <Panel header="Fragrance" key="2">
          <div className="filterAccordionContent filterAccordionContentSearch">
            <div className="filterAccordionSearch">
              <input type="text" placeholder="Search..." />
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.25 11.25L14.25 14.25"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 12.25C10.1234 12.25 12.25 10.1234 12.25 7.5C12.25 4.87665 10.1234 2.75 7.5 2.75C4.87665 2.75 2.75 4.87665 2.75 7.5C2.75 10.1234 4.87665 12.25 7.5 12.25Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>

            <div
              className="filterAccordionScroll"
              ref={scrollRefFragrance1}
              onScroll={() =>
                updateThumb(
                  scrollRefFragrance1.current,
                  setThumbStyleFragrance1
                )
              }
            >
              <ul className="searchUL">
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Black
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Red
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Blue
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Yellow
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Black
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Red
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Blue
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Yellow
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Black
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Red
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Blue
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Yellow
                </li>
              </ul>
            </div>

            {/* Custom scrollbar */}
            <div className="filterAccordionCustomScrollbar">
              <div
                className="filterAccordionCustomThumb"
                style={{
                  height: thumbStyleFragrance1.height,
                  transform: `translateY(${thumbStyleFragrance1.translateY}px)`,
                }}
              />
            </div>
          </div>
        </Panel>
        <div className="filterAccordionLine"></div>

        {/* 3-ci accordion */}
        <Panel header="Burn time / Product life" key="3">
          <div className="filterAccordionContent filterAccordionContentSearch">
            <div className="filterAccordionSearch">
              <input type="text" placeholder="Search..." />
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.25 11.25L14.25 14.25"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 12.25C10.1234 12.25 12.25 10.1234 12.25 7.5C12.25 4.87665 10.1234 2.75 7.5 2.75C4.87665 2.75 2.75 4.87665 2.75 7.5C2.75 10.1234 4.87665 12.25 7.5 12.25Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>

            <div
              className="filterAccordionScroll"
              ref={scrollRefFragrance2}
              onScroll={() =>
                updateThumb(
                  scrollRefFragrance2.current,
                  setThumbStyleFragrance2
                )
              }
            >
              <ul className="searchUL">
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Black
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Red
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Blue
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Yellow
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Black
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Red
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Blue
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Yellow
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Black
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Red
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Blue
                </li>
                <li>
                  <input className="searchCheck" type="checkbox" />
                  Yellow
                </li>
              </ul>
            </div>

            {/* Custom scrollbar */}
            <div className="filterAccordionCustomScrollbar">
              <div
                className="filterAccordionCustomThumb"
                style={{
                  height: thumbStyleFragrance2.height,
                  transform: `translateY(${thumbStyleFragrance2.translateY}px)`,
                }}
              />
            </div>
          </div>
        </Panel>
        <div className="filterAccordionLine"></div>
      </Collapse>
    </div>
  );
};

export default FilterAccordion;
