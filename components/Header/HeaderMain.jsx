"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import SearchResults from "@/components/Mixed/SearchResults";
import MobileSearch from "@/components/Mixed/MobileSearch";
import ProductDropdownMenu from "@/components/Mixed/ProductDropdownMenu";

const HeaderMain = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("typing");
  const [idx, setIdx] = useState(0);

  // 🔹 input-un real dəyəri
  const [searchValue, setSearchValue] = useState("");

  const [searchOpen, setSearchOpen] = useState(false);

  const closeSearch = () => setSearchOpen(false);

  // ✅ ƏLAVƏ OLUNDU: MobileSearch open/close state
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // ✅ YENİ: ProductDropdownMenu açmaq üçün state
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  // ✅ YENİ: Button referansı dropdown mövqeyi üçün
  const productButtonRef = useRef(null);

  // 🔹 Statik placeholder mətnləri
  const placeholders = [
    "Search products, brands, anything ..",
    "phone, golden, candle axtar...",
  ];

  // 🔹 Placeholder üçün typewriter animasiyası
  useEffect(() => {
    let timeout;
    const full = placeholders[idx] || "";

    if (mode === "typing") {
      timeout = setTimeout(() => {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) {
          setMode("pausing");
        }
      }, 150);
    } else if (mode === "pausing") {
      timeout = setTimeout(() => {
        setMode("deleting");
      }, 1000);
    } else if (mode === "deleting") {
      timeout = setTimeout(() => {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIdx((prev) => (prev + 1) % placeholders.length);
          setMode("typing");
        }
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [text, mode, idx, placeholders]);

  return (
    <div className="container">
      <div className="headerMain">
        <div className="headerMainItem">
          <div className="headerLogo">
            <div className="mobileHamburgerMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M26.7433 21.9209C27.1214 21.9594 27.4161 22.2787 27.4161 22.667C27.416 23.0551 27.1213 23.3746 26.7433 23.4131L26.6661 23.417H5.33313C4.91919 23.4168 4.58331 23.0809 4.58313 22.667C4.58313 22.2529 4.91908 21.9172 5.33313 21.917H26.6661L26.7433 21.9209ZM26.7433 15.2539C27.1214 15.2924 27.4161 15.6117 27.4161 16C27.4161 16.3883 27.1214 16.7076 26.7433 16.7461L26.6661 16.75H5.33313C4.91908 16.7498 4.58313 16.4141 4.58313 16C4.58313 15.5859 4.91908 15.2502 5.33313 15.25H26.6661L26.7433 15.2539ZM26.7433 8.58691C27.1213 8.62538 27.416 8.94488 27.4161 9.33301C27.4161 9.72128 27.1214 10.0406 26.7433 10.0791L26.6661 10.083H5.33313C4.91908 10.0828 4.58313 9.7471 4.58313 9.33301C4.58331 8.91907 4.91919 8.5832 5.33313 8.58301H26.6661L26.7433 8.58691Z"
                  fill="#22282F"
                />
              </svg>
            </div>
            <Link href="/">
              <img src="/icons/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="mobileNavbarIcons">
            <div className="mobileNavbarIcon">
              <Link href="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M13.75 13C16.1891 13.0002 18.166 14.9778 18.166 17.417C18.1658 18.8436 17.0096 20 15.583 20H6.41602C4.98969 19.9996 3.83318 18.8434 3.83301 17.417C3.83301 14.9778 5.81089 13.0002 8.25 13H13.75ZM8.25 14.5C6.63932 14.5002 5.33301 15.8063 5.33301 17.417C5.33318 18.0149 5.81811 18.4996 6.41602 18.5H15.583C16.1812 18.5 16.6658 18.0152 16.666 17.417C16.666 15.8063 15.3607 14.5002 13.75 14.5H8.25ZM11 2C13.4391 2.00018 15.416 3.97784 15.416 6.41699C15.4158 8.85599 13.439 10.8328 11 10.833C8.561 10.8328 6.58318 8.85599 6.58301 6.41699C6.58301 3.97784 8.56089 2.00018 11 2ZM11 3.5C9.38932 3.50018 8.08301 4.80627 8.08301 6.41699C8.08318 8.02756 9.38943 9.33283 11 9.33301C12.6106 9.33283 13.9158 8.02756 13.916 6.41699C13.916 4.80627 12.6107 3.50018 11 3.5Z"
                    fill="#22282F"
                  />
                </svg>
              </Link>
            </div>
            <div className="mobileNavbarIcon">
              <Link href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M10.9812 1.99512C12.2604 1.99512 13.2753 1.99461 14.0896 2.0752C14.9172 2.15716 15.6129 2.32893 16.2361 2.71875C16.6866 3.00065 17.0869 3.35624 17.4197 3.77051C17.88 4.34373 18.1318 5.01474 18.3103 5.82715C18.4859 6.62653 18.6046 7.63456 18.7546 8.90527L18.9958 10.9502C19.1968 12.6523 19.3562 13.9946 19.3572 15.0615C19.3581 16.1425 19.1995 17.0479 18.6814 17.833C18.431 18.2125 18.1266 18.5545 17.7791 18.8477C17.0601 19.454 16.1797 19.718 15.1062 19.8438C14.0466 19.9678 12.695 19.9668 10.9812 19.9668C9.26717 19.9668 7.91494 19.9679 6.85522 19.8438C5.78186 19.718 4.90127 19.454 4.18237 18.8477C3.83495 18.5545 3.5304 18.2124 3.28003 17.833C2.76211 17.0479 2.60332 16.1423 2.60425 15.0615C2.60523 13.9946 2.76463 12.6523 2.96558 10.9502L3.20679 8.90527C3.35681 7.63452 3.47556 6.62655 3.65112 5.82715C3.82958 5.01471 4.08143 4.34375 4.54175 3.77051C4.87456 3.35617 5.27485 3.00069 5.72534 2.71875C6.34852 2.32884 7.0442 2.15719 7.87183 2.0752C8.68624 1.99457 9.70174 1.99512 10.9812 1.99512ZM10.9812 3.49512C9.67192 3.49512 8.74366 3.49579 8.02026 3.56738C7.31041 3.63769 6.87124 3.77124 6.52124 3.99023C6.21287 4.18322 5.93847 4.42632 5.71069 4.70996C5.45219 5.0319 5.26901 5.45262 5.11597 6.14941C4.96004 6.85948 4.85054 7.78064 4.69702 9.08105L4.45483 11.126C4.24958 12.8646 4.10513 14.1039 4.10425 15.0625C4.1034 16.0067 4.24517 16.572 4.53198 17.0068C4.70327 17.2664 4.9115 17.5006 5.14917 17.7012C5.54738 18.0371 6.09231 18.2446 7.03003 18.3545C7.98211 18.466 9.23049 18.4668 10.9812 18.4668C12.7316 18.4668 13.9794 18.466 14.9314 18.3545C15.8692 18.2446 16.414 18.037 16.8123 17.7012C17.05 17.5006 17.2581 17.2665 17.4294 17.0068C17.7164 16.5719 17.858 16.0069 17.8572 15.0625C17.8563 14.1039 17.7118 12.8646 17.5066 11.126L17.2644 9.08105C17.1109 7.78068 17.0014 6.85947 16.8455 6.14941C16.6924 5.45265 16.5093 5.03189 16.2507 4.70996C16.0229 4.42638 15.7485 4.18317 15.4402 3.99023C15.0902 3.77134 14.651 3.63766 13.9412 3.56738C13.2178 3.49584 12.2902 3.49512 10.9812 3.49512ZM13.7263 5.65625C14.1405 5.65634 14.4763 5.99209 14.4763 6.40625V8.23633C14.4761 10.1664 12.9114 11.7314 10.9812 11.7314C9.05104 11.7314 7.48634 10.1664 7.48608 8.23633V6.40625C7.48608 5.99204 7.82187 5.65625 8.23608 5.65625C8.65022 5.65634 8.98608 5.99209 8.98608 6.40625V8.23633C8.98634 9.33802 9.87947 10.2314 10.9812 10.2314C12.0829 10.2314 12.9761 9.33802 12.9763 8.23633V6.40625C12.9763 5.99215 13.3123 5.65643 13.7263 5.65625Z"
                    fill="#22282F"
                  />
                </svg>
              </Link>
            </div>

            <div
              className="mobileNavbarIcon"
              onClick={() => setMobileSearchOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M10.083 2C14.5472 2 18.1668 5.61886 18.167 10.083C18.167 12.0451 17.4665 13.843 16.3037 15.2432L18.8633 17.8027C19.1562 18.0956 19.1562 18.5704 18.8633 18.8633C18.5704 19.1562 18.0956 19.1562 17.8027 18.8633L15.2432 16.3037C13.843 17.4665 12.0451 18.167 10.083 18.167C5.61886 18.1668 2 14.5472 2 10.083C2.00018 5.61896 5.61896 2.00018 10.083 2ZM10.083 3.5C6.44739 3.50018 3.50018 6.44739 3.5 10.083C3.5 13.7188 6.44728 16.6668 10.083 16.667C13.7189 16.667 16.667 13.7189 16.667 10.083C16.6668 6.44728 13.7188 3.5 10.083 3.5Z"
                  fill="#22282F"
                />
              </svg>
            </div>
          </div>

          <div className="headerMainRight">
            <div className="productsMenuButton" style={{ position: 'relative' }}>
              <button
                ref={productButtonRef}
                onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
              >
                <span>
                  {isProductMenuOpen ? (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="22" 
                      height="22" 
                      viewBox="0 0 22 22" 
                      fill="none"
                    >
                      <path 
                        d="M15.8517 4.85156C16.2097 4.49358 16.7906 4.49358 17.1486 4.85156C17.5065 5.20955 17.5065 5.79048 17.1486 6.14844L12.297 11L17.1486 15.8516C17.5065 16.2095 17.5065 16.7905 17.1486 17.1484C16.7906 17.5064 16.2097 17.5063 15.8517 17.1484L11.0001 12.2969L6.14856 17.1484C5.7906 17.5064 5.20967 17.5063 4.85168 17.1484C4.4937 16.7905 4.4937 16.2095 4.85168 15.8516L9.70325 11L4.85168 6.14844C4.4937 5.79046 4.4937 5.20954 4.85168 4.85156C5.20967 4.49358 5.79058 4.49358 6.14856 4.85156L11.0001 9.70312L15.8517 4.85156Z" 
                        fill="#F3F3F3"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="24"
                      viewBox="0 0 23 24"
                      fill="none"
                    >
                      <path
                        d="M3.7279 13C4.24262 13 4.65987 12.5523 4.65987 12C4.65987 11.4477 4.24262 11 3.7279 11C3.21319 11 2.79593 11.4477 2.79593 12C2.79593 12.5523 3.21319 13 3.7279 13Z"
                        fill="#F3F3F3"
                      />
                      <path
                        d="M18.6954 11H7.39986C6.91603 11 6.5238 11.4209 6.5238 11.94V12.06C6.5238 12.5791 6.91603 13 7.39986 13H18.6954C19.1792 13 19.5714 12.5791 19.5714 12.06V11.94C19.5714 11.4209 19.1792 11 18.6954 11Z"
                        fill="#F3F3F3"
                      />
                      <path
                        d="M18.6954 16H3.67198C3.18815 16 2.79593 16.4209 2.79593 16.94V17.06C2.79593 17.5791 3.18815 18 3.67198 18H18.6954C19.1792 18 19.5714 17.5791 19.5714 17.06V16.94C19.5714 16.4209 19.1792 16 18.6954 16Z"
                        fill="#F3F3F3"
                      />
                      <path
                        d="M18.6954 6H3.67198C3.18815 6 2.79593 6.42085 2.79593 6.94V7.06C2.79593 7.57915 3.18815 8 3.67198 8H18.6954C19.1792 8 19.5714 7.57915 19.5714 7.06V6.94C19.5714 6.42085 19.1792 6 18.6954 6Z"
                        fill="#F3F3F3"
                      />
                    </svg>
                  )}
                </span>
                <p>Products</p>
              </button>

              {/* ✅ YENİ: ProductDropdownMenu - Buttonun altında 2rem məsafədə */}
              {isProductMenuOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 2rem)',
                  left: 0,
                  zIndex: 1000
                }}>
                  <ProductDropdownMenu onClose={() => setIsProductMenuOpen(false)} />
                </div>
              )}
            </div>
            
            <div className="headerSearch">
              <input
                type="text"
                placeholder={text}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M15.25 15.25L11.8855 11.8795M13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                    stroke="#232323"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>

              {searchValue.trim().length > 0 && (
                <div className="headerSearchResults">
                  <SearchResults onClose={() => setSearchValue("")} />
                </div>
              )}
            </div>

            <div className="salesOff">
              <Link href="#">
                <img src="/icons/sales.svg" alt="sales" />
                <span>Sales Off</span>
              </Link>
            </div>
            <div className="headerMainLinks">
              <Link href="/login">
                <div className="userProfile">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M4.5 12.0498H6.27344C7.11174 12.4075 8.03047 12.6123 9 12.6123C9.968 12.6123 10.8892 12.4076 11.7256 12.0498H13.5C15.5437 12.0498 17.2002 13.7063 17.2002 15.75V16.3125C17.2002 16.8023 16.8023 17.2002 16.3125 17.2002H1.6875C1.19769 17.2002 0.799805 16.8023 0.799805 16.3125V15.75C0.799805 13.7063 2.45628 12.0498 4.5 12.0498ZM9 0.799805C11.3531 0.799805 13.2627 2.70941 13.2627 5.0625C13.2627 7.41559 11.3531 9.3252 9 9.3252C6.64691 9.3252 4.7373 7.41559 4.7373 5.0625C4.7373 2.70941 6.64691 0.799805 9 0.799805Z"
                        stroke="black"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  <p>Login/Sign Up</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g opacity="0.5">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.31307 3.64644C6.50834 3.45119 6.82485 3.45118 7.0201 3.64644L11.0201 7.64644C11.2154 7.8417 11.2154 8.15821 11.0201 8.35347L7.0201 12.3535C6.82485 12.5487 6.50834 12.5487 6.31307 12.3535C6.11781 12.1582 6.11781 11.8417 6.31307 11.6464L9.95956 7.99996L6.31307 4.35347C6.11781 4.15821 6.11781 3.8417 6.31307 3.64644Z"
                          fill="#22282F"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </Link>

              <Link href="/cart">
                <div className="userProfile">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M1.02599 8.49492C0.993847 8.33832 0.991485 8.17489 1.01909 8.01702C1.04669 7.85915 1.10353 7.711 1.18529 7.5838C1.26705 7.45661 1.37159 7.35371 1.49097 7.28293C1.61035 7.21215 1.74143 7.17534 1.87427 7.17529H17.1257C17.2586 7.17534 17.3896 7.21215 17.509 7.28293C17.6284 7.35371 17.7329 7.45661 17.8147 7.5838C17.8965 7.711 17.9533 7.85915 17.9809 8.01702C18.0085 8.17489 18.0062 8.33832 17.974 8.49492L16.3903 16.1906C16.2957 16.6503 16.0773 17.0584 15.77 17.3501C15.4626 17.6418 15.0837 17.8002 14.6937 17.8003H4.30628C3.91626 17.8002 3.53745 17.6418 3.23005 17.3501C2.92265 17.0584 2.70431 16.6503 2.60973 16.1906L1.02599 8.49598V8.49492Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.87646 11.4253V13.5503M12.1235 11.4253V13.5503M4.25293 7.17529L7.75097 0.800293M14.7471 7.17529L11.249 0.800293"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p>
                    Basket <strong>(2)</strong>
                  </p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g opacity="0.5">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.31307 3.64644C6.50834 3.45119 6.82485 3.45118 7.0201 3.64644L11.0201 7.64644C11.2154 7.8417 11.2154 8.15821 11.0201 8.35347L7.0201 12.3535C6.82485 12.5487 6.50834 12.5487 6.31307 12.3535C6.11781 12.1582 6.11781 11.8417 6.31307 11.6464L9.95956 7.99996L6.31307 4.35347C6.11781 4.15821 6.11781 3.8417 6.31307 3.64644Z"
                          fill="#22282F"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MobileSearch
        isOpen={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
      />
    </div>
  );
};

export default HeaderMain;