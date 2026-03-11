// "use client";
// import FilterPriceRange from "./FilterPriceRange";
// import React, { useRef, useState, useEffect } from "react";
// import { Collapse } from "antd";
// import RangeSlider from "../RangeSlider";

// const { Panel } = Collapse;

// const FilterAccordion = ({ selectedCategory,filterAttributes }) => {
//   // 🔹 Accordion scroll ref və thumb state-ləri
//   const scrollRefCategories = useRef(null);
//   const [thumbStyleCategories, setThumbStyleCategories] = useState({
//     height: "0%",
//     translateY: 0,
//   });
//   const scrollRefFragrance1 = useRef(null);
//   const [thumbStyleFragrance1, setThumbStyleFragrance1] = useState({
//     height: "0%",
//     translateY: 0,
//   });
//   const scrollRefFragrance2 = useRef(null);
//   const [thumbStyleFragrance2, setThumbStyleFragrance2] = useState({
//     height: "0%",
//     translateY: 0,
//   });

//   // 🔹 Price range state
//   const [priceRange, setPriceRange] = useState([0, 999]);

//   // 🔹 Custom scrollbar update function
//   const updateThumb = (el, setThumbStyle) => {
//     if (!el) return;
//     const { scrollTop, scrollHeight, clientHeight } = el;

//     if (scrollHeight <= clientHeight) {
//       setThumbStyle({ height: "0%", translateY: 0 });
//       return;
//     }

//     const visibleRatio = clientHeight / scrollHeight;
//     const thumbHeight = visibleRatio * 100;
//     const maxOffset = clientHeight - visibleRatio * clientHeight;
//     const translateY = (scrollTop / (scrollHeight - clientHeight)) * maxOffset;

//     setThumbStyle({ height: `${thumbHeight}%`, translateY });
//   };

//   useEffect(() => {
//     if (scrollRefCategories.current)
//       updateThumb(scrollRefCategories.current, setThumbStyleCategories);
//     if (scrollRefFragrance1.current)
//       updateThumb(scrollRefFragrance1.current, setThumbStyleFragrance1);
//     if (scrollRefFragrance2.current)
//       updateThumb(scrollRefFragrance2.current, setThumbStyleFragrance2);
//   }, []);

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
//         <Panel header={selectedCategory?.namea || "Kategoriyalar"} key="1">
//           <div className="filterAccordionContent">
//             <div
//               className="filterAccordionScroll"
//               ref={scrollRefCategories}
//               onScroll={() =>
//                 updateThumb(
//                   scrollRefCategories.current,
//                   setThumbStyleCategories,
//                 )
//               }
//             >
//               <ul>
//                 <li>Jar Candels</li>
//                 <li>Festive</li>
//                 <li>Floral</li>
//                 <li>Jar Candels</li>
//                 <li>Festive</li>
//                 <li>Floral</li>
//                 <li>Jar Candels</li>
//                 <li>Festive</li>
//                 <li>Floral</li>
//                 <li>Jar Candels</li>
//                 <li>Festive</li>
//                 <li>Floral</li>
//                 <li>Jar Candels</li>
//                 <li>Festive</li>
//                 <li>Floral</li>
//               </ul>
//             </div>
//             <div className="filterAccordionCustomScrollbar">
//               <div
//                 className="filterAccordionCustomThumb"
//                 style={{
//                   height: thumbStyleCategories.height,
//                   transform: `translateY(${thumbStyleCategories.translateY}px)`,
//                 }}
//               />
//             </div>
//           </div>
//         </Panel>
//         <div className="filterAccordionLine"></div>

//         {/* Price accordion */}
//         <Panel header="Price" key="4">
//           <div className="filterAccordionContentPrices">
//             <div className="filterAccordionContentPricesItems">
//               <div className="filterAccordionContentPricesItemsMinPrice">
//                 <p>Min.</p>
//                 <div className="minPriceValue">{priceRange[0]}</div>
//               </div>
//               <div className="filterAccordionContentPricesItemsMinPrice">
//                 <p>Max.</p>
//                 <div className="minPriceValue">{priceRange[1]}</div>
//               </div>
//             </div>
//             <RangeSlider value={priceRange} onChange={setPriceRange} />
//           </div>
//         </Panel>
//         <div className="filterAccordionLine"></div>

//         {/* 2-ci accordion */}
//         <Panel header="Fragrance" key="3">
//           <div className="filterAccordionContent filterAccordionContentSearch">
//             <div className="filterAccordionSearch">
//               <input type="text" placeholder="Search..." />
//               <p>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                 >
//                   <path
//                     d="M11.25 11.25L14.25 14.25"
//                     stroke="black"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                   <path
//                     d="M7.5 12.25C10.1234 12.25 12.25 10.1234 12.25 7.5C12.25 4.87665 10.1234 2.75 7.5 2.75C4.87665 2.75 2.75 4.87665 2.75 7.5C2.75 10.1234 4.87665 12.25 7.5 12.25Z"
//                     stroke="black"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                 </svg>
//               </p>
//             </div>
//             <div
//               className="filterAccordionScroll"
//               ref={scrollRefFragrance1}
//               onScroll={() =>
//                 updateThumb(
//                   scrollRefFragrance1.current,
//                   setThumbStyleFragrance1,
//                 )
//               }
//             >
//               <ul className="searchUL">
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Black
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Red
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Blue
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Yellow
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Black
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Red
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Blue
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Yellow
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Black
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Red
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Blue
//                 </li>
//                 <li>
//                   <input className="searchCheck" type="checkbox" /> Yellow
//                 </li>
//               </ul>
//             </div>
//             <div className="filterAccordionCustomScrollbar">
//               <div
//                 className="filterAccordionCustomThumb"
//                 style={{
//                   height: thumbStyleFragrance1.height,
//                   transform: `translateY(${thumbStyleFragrance1.translateY}px)`,
//                 }}
//               />
//             </div>
//           </div>
//         </Panel>
//         <div className="filterAccordionLine"></div>
//       </Collapse>
//     </div>
//   );
// };

// export default FilterAccordion;











"use client";
import FilterPriceRange from "./FilterPriceRange";
import React, { useRef, useState, useEffect } from "react";
import { Collapse } from "antd";
import RangeSlider from "../RangeSlider";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { IoIosClose } from "react-icons/io";

const { Panel } = Collapse;

const FilterAccordion = ({
  selectedCategory,
  filterAttributes,
  categories,
}) => {
  const scrollRefs = useRef({});
  const [thumbStyles, setThumbStyles] = useState({});
  const [priceRange, setPriceRange] = useState([0, 999]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Local state — checkbox dərhal aktiv olsun
  const [selectedAttributes, setSelectedAttributes] = useState(() =>
    searchParams.getAll("attribute"),
  );

  // Bütün attr-ları düz map et: id → name (axtarmaq üçün)
  const attrNameMap = {};
  filterAttributes?.forEach((attr) => {
    attrNameMap[String(attr.id)] = attr.name;
  });

  const updateURL = (updated) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("attribute");
    updated.forEach((v) => params.append("attribute", v));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleAttributeChange = (attrId) => {
    const id = String(attrId);
    const updated = selectedAttributes.includes(id)
      ? selectedAttributes.filter((v) => v !== id)
      : [...selectedAttributes, id];

    setSelectedAttributes(updated);
    updateURL(updated);
  };

  const handleRemoveSelected = (id) => {
    const updated = selectedAttributes.filter((v) => v !== String(id));
    setSelectedAttributes(updated);
    updateURL(updated);
  };

  const updateThumb = (el, key) => {
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;

    if (scrollHeight <= clientHeight) {
      setThumbStyles((prev) => ({
        ...prev,
        [key]: { height: "0%", translateY: 0 },
      }));
      return;
    }

    const visibleRatio = clientHeight / scrollHeight;
    const thumbHeight = visibleRatio * 100;
    const maxOffset = clientHeight - visibleRatio * clientHeight;
    const translateY = (scrollTop / (scrollHeight - clientHeight)) * maxOffset;

    setThumbStyles((prev) => ({
      ...prev,
      [key]: { height: `${thumbHeight}%`, translateY },
    }));
  };

  useEffect(() => {
    if (filterAttributes?.length) {
      filterAttributes.forEach((attr) => {
        if (scrollRefs.current[attr.id]) {
          updateThumb(scrollRefs.current[attr.id], attr.id);
        }
      });
    }
  }, [filterAttributes]);

  const groupedAttributes = (() => {
    const grouped = {};
    filterAttributes?.forEach((attr) => {
      if (!Array.isArray(attr.top_attributes)) return;
      attr.top_attributes.forEach((topAttr) => {
        if (!grouped[topAttr.id]) {
          grouped[topAttr.id] = { topAttr, values: [] };
        }
        grouped[topAttr.id].values.push(attr);
      });
    });
    return Object.values(grouped);
  })();

  return (
    <div className="filterAccordion">
      {/* Seçilmiş filterlər — yalnız seçim varsa göstər */}
      {selectedAttributes.length > 0 && (
        <div className="selectedFilters">
          {selectedAttributes.map((id) => (
            <div className="selectedFilter" key={id}>
              <span>
                {attrNameMap[id] || id}
                <p onClick={() => handleRemoveSelected(id)}>
                  <IoIosClose className="closeSelectFilter" />
                </p>
              </span>
            </div>
          ))}
        </div>
      )}

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
        {/* 1-ci accordion */}
        <Panel
          header={
            selectedCategory &&
            (!selectedCategory.top_category ||
              selectedCategory.top_category.length === 0)
              ? selectedCategory.name
              : "Kategoriyalar"
          }
          key="1"
        >
          <div className="filterAccordionContent">
            <div
              className="filterAccordionScroll"
              ref={(el) => (scrollRefs.current["categories"] = el)}
              onScroll={() =>
                updateThumb(scrollRefs.current["categories"], "categories")
              }
            >
              <ul>
                {(() => {
                  const isTopCategory =
                    selectedCategory &&
                    (!selectedCategory.top_category ||
                      selectedCategory.top_category.length === 0);

                  if (isTopCategory) {
                    const subCategories = categories.filter(
                      (cat) =>
                        Array.isArray(cat.top_category) &&
                        cat.top_category.some(
                          (tc) => tc.id === selectedCategory.id,
                        ),
                    );
                    return subCategories.map((cat) => (
                      <li
                        key={cat.id}
                        onClick={() =>
                          router.push(
                            `/products?category=${cat.url_slug}-${cat.id}`,
                          )
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {cat.name}
                      </li>
                    ));
                  } else {
                    return categories.map((cat) => (
                      <li
                        key={cat.id}
                        onClick={() =>
                          router.push(
                            `/products?category=${cat.url_slug}-${cat.id}`,
                          )
                        }
                        style={{
                          cursor: "pointer",
                          fontWeight:
                            selectedCategory && cat.id === selectedCategory.id
                              ? "900"
                              : "400",
                        }}
                      >
                        {cat.name}
                      </li>
                    ));
                  }
                })()}
              </ul>
            </div>
            <div className="filterAccordionCustomScrollbar">
              <div
                className="filterAccordionCustomThumb"
                style={{
                  height: thumbStyles["categories"]?.height || "0%",
                  transform: `translateY(${thumbStyles["categories"]?.translateY || 0}px)`,
                }}
              />
            </div>
          </div>
        </Panel>
        <div className="filterAccordionLine"></div>

        {/* Price accordion */}
        <Panel header="Price" key="4">
          <div className="filterAccordionContentPrices">
            <div className="filterAccordionContentPricesItems">
              <div className="filterAccordionContentPricesItemsMinPrice">
                <p>Min.</p>
                <div className="minPriceValue">{priceRange[0]}</div>
              </div>
              <div className="filterAccordionContentPricesItemsMinPrice">
                <p>Max.</p>
                <div className="minPriceValue">{priceRange[1]}</div>
              </div>
            </div>
            <RangeSlider value={priceRange} onChange={setPriceRange} />
          </div>
        </Panel>
        <div className="filterAccordionLine"></div>

        {groupedAttributes.map(({ topAttr, values }) => (
          <React.Fragment key={topAttr.id}>
            <Panel header={topAttr.name} key={`attr-${topAttr.id}`}>
              <div className="filterAccordionContent filterAccordionContentSearch">
                <div
                  className="filterAccordionScroll"
                  ref={(el) => (scrollRefs.current[topAttr.id] = el)}
                  onScroll={() =>
                    updateThumb(scrollRefs.current[topAttr.id], topAttr.id)
                  }
                >
                  <ul className="searchUL">
                    {values.map((val) => (
                      <li key={val.id}>
                        <input
                          className="searchCheck"
                          type="checkbox"
                          checked={selectedAttributes.includes(String(val.id))}
                          onChange={() => handleAttributeChange(val.id)}
                        />
                        {val.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="filterAccordionCustomScrollbar">
                  <div
                    className="filterAccordionCustomThumb"
                    style={{
                      height: thumbStyles[topAttr.id]?.height || "0%",
                      transform: `translateY(${thumbStyles[topAttr.id]?.translateY || 0}px)`,
                    }}
                  />
                </div>
              </div>
            </Panel>
            <div className="filterAccordionLine"></div>
          </React.Fragment>
        ))}
      </Collapse>
    </div>
  );
};

export default FilterAccordion;
