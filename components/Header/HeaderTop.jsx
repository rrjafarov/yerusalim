// import Link from "next/link";
// import React from "react";

// const HeaderTop = ({ topLinkData }) => {
//   return (
//     <div>
//       <div className="headerTop">
//         <div className="container">
//           <div className="headerTopItem">
//             <span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M14.5303 18.5303C14.2374 18.8232 13.7627 18.8232 13.4698 18.5303L7.46978 12.5303C7.17689 12.2374 7.17689 11.7627 7.46978 11.4698L13.4698 5.46978C13.7627 5.17689 14.2374 5.17689 14.5303 5.46978C14.8232 5.76268 14.8232 6.23744 14.5303 6.53033L9.06061 12.0001L14.5303 17.4698C14.8232 17.7627 14.8232 18.2374 14.5303 18.5303Z"
//                   fill="white"
//                 />
//               </svg>
//             </span>
//             <Link href="/products">
//               <p>
//                 Buy new products under the 24% Sale *{" "}
//                 <strong>Shop now</strong>{" "}
//               </p>
//             </Link>
//             <span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M9.46967 5.46967C9.76256 5.17678 10.2373 5.17678 10.5302 5.46967L16.5302 11.4697C16.8231 11.7626 16.8231 12.2373 16.5302 12.5302L10.5302 18.5302C10.2373 18.8231 9.76256 18.8231 9.46967 18.5302C9.17678 18.2373 9.17678 17.7626 9.46967 17.4697L14.9394 11.9999L9.46967 6.53022C9.17678 6.23732 9.17678 5.76256 9.46967 5.46967Z"
//                   fill="white"
//                 />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderTop;

































"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const slideOutLeft = `
  @keyframes slideOutLeft {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(-100%); opacity: 0; }
  }
`;

const slideInRight = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;

const storageKey = "headerTopClosed";

const HeaderTop = ({ topLinkData }) => {
  const items = topLinkData?.data?.data || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [anim, setAnim] = useState("in");
  const [wrapperWidth, setWrapperWidth] = useState("auto");
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem(storageKey) === "true") {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (linkRef.current) {
      setWrapperWidth(linkRef.current.scrollWidth);
    }
  }, [currentIndex]);

  const startInterval = () => {
    if (items.length <= 1) return;
    intervalRef.current = setInterval(() => goNext(), 3000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  const goNext = () => {
    setAnim("out");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setAnim("in");
    }, 400);
  };

  const goPrev = () => {
    setAnim("out");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      setAnim("in");
    }, 400);
  };

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    goPrev();
    startInterval();
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    goNext();
    startInterval();
  };

  const handleClose = () => {
    localStorage.setItem(storageKey, "true");
    setIsVisible(false);
  };

  if (!isVisible || !items.length) return null;

  return (
    <>
      <style>{slideOutLeft}</style>
      <style>{slideInRight}</style>
      <div>
        <div className="headerTop">
          <div className="container">
            <div className="headerTopItem" style={{ position: "relative" }}>
              <span onClick={handlePrev} style={{ cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.5303 18.5303C14.2374 18.8232 13.7627 18.8232 13.4698 18.5303L7.46978 12.5303C7.17689 12.2374 7.17689 11.7627 7.46978 11.4698L13.4698 5.46978C13.7627 5.17689 14.2374 5.17689 14.5303 5.46978C14.8232 5.76268 14.8232 6.23744 14.5303 6.53033L9.06061 12.0001L14.5303 17.4698C14.8232 17.7627 14.8232 18.2374 14.5303 18.5303Z" fill="white"/>
                </svg>
              </span>

              <div
                style={{
                  overflow: "hidden",
                  display: "flex",
                  width: wrapperWidth === "auto" ? "auto" : `${wrapperWidth}px`,
                  transition: "width 0.4s ease",
                }}
              >
                <Link
                  ref={linkRef}
                  href={items[currentIndex].redirect_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    animation: anim === "out"
                      ? "slideOutLeft 0.4s ease forwards"
                      : "slideInRight 0.4s ease forwards",
                    whiteSpace: "nowrap",
                  }}
                >
                  <p>{items[currentIndex].title}</p>
                </Link>
              </div>

              <span onClick={handleNext} style={{ cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2373 5.17678 10.5302 5.46967L16.5302 11.4697C16.8231 11.7626 16.8231 12.2373 16.5302 12.5302L10.5302 18.5302C10.2373 18.8231 9.76256 18.8231 9.46967 18.5302C9.17678 18.2373 9.17678 17.7626 9.46967 17.4697L14.9394 11.9999L9.46967 6.53022C9.17678 6.23732 9.17678 5.76256 9.46967 5.46967Z" fill="white"/>
                </svg>
              </span>

              <span
                onClick={handleClose}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.4697 7.46972C23.7626 7.17683 24.2373 7.17683 24.5302 7.46972C24.8231 7.76262 24.8231 8.2374 24.5302 8.53027L17.0605 16L24.5302 23.4697C24.8231 23.7626 24.8231 24.2374 24.5302 24.5303C24.2373 24.8231 23.7626 24.8231 23.4697 24.5303L15.9999 17.0605L8.53022 24.5303C8.23734 24.8231 7.76257 24.8231 7.46967 24.5303C7.17678 24.2374 7.17678 23.7626 7.46967 23.4697L14.9394 16L7.46967 8.53027C7.17678 8.23738 7.17678 7.76262 7.46967 7.46972C7.76256 7.17683 8.23732 7.17683 8.53022 7.46972L15.9999 14.9394L23.4697 7.46972Z" fill="white"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;