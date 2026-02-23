// "use client";

// import React, { useState, useEffect } from "react";

// const HeaderLang = () => {
//   const [selectedLang, setSelectedLang] = useState("AZ");
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const languages = ["AZ", "EN", "RU"];

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const wrapperStyle = {
//     position: "relative",
//     ...(isMobile && {
//       display:"flex",
//       gap:"1rem",
//       fontSize: "1.4rem",
//     }),
//   };

//   const dropdownStyle = {
//     position: "absolute",
//     top: "100%",
//     marginTop: "0.6rem",
//     left: isMobile ? 0 : -12,
//     minWidth: isMobile ? "100%" : "5rem",
//     padding: "0.4rem 0",
//     borderRadius: "0.4rem",
//     background: "#ffffff",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
//     zIndex: 20,
//   };

//   const liStyle = {
//     listStyle: "none",
//   };

//   const buttonStyle = {
//     width: "100%",
//     padding: "0.4rem 0.8rem",
//     border: "none",
//     background: "transparent",
//     fontSize: "1.3rem",
//     fontWeight: 500,
//     textAlign: "center",
//     textTransform: "uppercase",
//     cursor: "pointer",
//   };

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleSelect = (lang, e) => {
//     e.stopPropagation();
//     setSelectedLang(lang);
//     setIsOpen(false);
//   };

//   return (
//     <div
//       className="headerMidTopRightLang"
//       style={wrapperStyle}
//       onClick={handleToggle}
//     >
//       <span>{selectedLang}</span>

//       <p>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="10"
//           height="6"
//           viewBox="0 0 10 6"
//           fill="none"
//         >
//           <path
//             d="M0.5 0.5L4.75 5L9 0.5"
//             stroke="#202020"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </p>

//       {isOpen && (
//         <ul
//           style={dropdownStyle}
//           onClick={(e) => e.stopPropagation()}
//         >
//           {languages
//             .filter((l) => l !== selectedLang)
//             .map((lang) => (
//               <li key={lang} style={liStyle}>
//                 <button
//                   type="button"
//                   style={buttonStyle}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.background = "#f3f3f3")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.background = "transparent")
//                   }
//                   onClick={(e) => handleSelect(lang, e)}
//                 >
//                   {lang}
//                 </button>
//               </li>
//             ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HeaderLang;







// !


"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const HeaderLang = () => {
  const [selectedLang, setSelectedLang] = useState("AZ");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const languages = ["AZ", "EN", "RU"];
  const locales = ["az", "en", "ru"];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ URL-dən dili oxuyur və yoxlayır
  useEffect(() => {
    if (!pathname) return;

    const locale = pathname.split("/")[1];

    if (locales.includes(locale)) {
      setSelectedLang(locale.toUpperCase());
    }
  }, [pathname]);

  const wrapperStyle = {
    position: "relative",
    ...(isMobile && {
      display: "flex",
      gap: "1rem",
      fontSize: "1.4rem",
    }),
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    marginTop: "0.6rem",
    left: isMobile ? 0 : -12,
    minWidth: isMobile ? "100%" : "5rem",
    padding: "0.4rem 0",
    borderRadius: "0.4rem",
    background: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    zIndex: 20,
  };

  const liStyle = {
    listStyle: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.4rem 0.8rem",
    border: "none",
    background: "transparent",
    fontSize: "1.3rem",
    fontWeight: 500,
    textAlign: "center",
    textTransform: "uppercase",
    cursor: "pointer",
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (lang, e) => {
    e.stopPropagation();

    const newLocale = lang.toLowerCase();

    const segments = pathname.split("/").filter(Boolean);

    let rest = segments;

    if (locales.includes(segments[0])) {
      rest = segments.slice(1);
    }

    const newPath = `/${newLocale}/${rest.join("/")}`;

    setSelectedLang(lang);
    setIsOpen(false);

    router.replace(newPath);
  };

  return (
    <div
      className="headerMidTopRightLang"
      style={wrapperStyle}
      onClick={handleToggle}
    >
      <span>{selectedLang}</span>

      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M0.5 0.5L4.75 5L9 0.5"
            stroke="#202020"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>

      {isOpen && (
        <ul
          style={dropdownStyle}
          onClick={(e) => e.stopPropagation()}
        >
          {languages
            .filter((l) => l !== selectedLang)
            .map((lang) => (
              <li key={lang} style={liStyle}>
                <button
                  type="button"
                  style={buttonStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f3f3f3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                  onClick={(e) => handleSelect(lang, e)}
                >
                  {lang}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default HeaderLang;
