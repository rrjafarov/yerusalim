






"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderLang from "../Header/HeaderLang";
// import "./MobileMenuHamburgerAccordions.scss";

const MobileMenuHamburger = ({ isOpen, onClose }) => {
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setActive(isOpen);
  }, [isOpen]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`mobileMenuHamburger ${active ? "active" : ""}`}>
      <div className="mobileMenuHamburgerTop">
        <button className="mobileMenuHamburgerClose" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M23.4697 7.46978C23.7626 7.17689 24.2374 7.17689 24.5303 7.46978C24.8231 7.76268 24.8231 8.23745 24.5303 8.53033L17.0605 16.0001L24.5303 23.4698C24.8231 23.7627 24.8231 24.2375 24.5303 24.5303C24.2374 24.8232 23.7626 24.8232 23.4697 24.5303L16 17.0606L8.53027 24.5303C8.2374 24.8232 7.76262 24.8232 7.46973 24.5303C7.17683 24.2374 7.17683 23.7627 7.46973 23.4698L14.9395 16.0001L7.46973 8.53033C7.17683 8.23743 7.17683 7.76267 7.46973 7.46978C7.76262 7.17689 8.23738 7.17689 8.53027 7.46978L16 14.9395L23.4697 7.46978Z"
              fill="#22282F"
            />
          </svg>
        </button>
        <img src="/icons/logo.svg" alt="logo" />
      </div>

      <div className="mobileMenuHamburgerCartLoginButtons">
        <div className="mobileMenuHamburgerLogin">
          <Link href="/login">
            <p>
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
            </p>
            <span>Login/ Sign up</span>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    d="M6.31323 3.64648C6.5085 3.45123 6.825 3.45123 7.02026 3.64648L11.0203 7.64648C11.2155 7.84174 11.2155 8.15826 11.0203 8.35352L7.02026 12.3535C6.825 12.5488 6.5085 12.5488 6.31323 12.3535C6.11797 12.1583 6.11797 11.8417 6.31323 11.6465L9.95972 8L6.31323 4.35352C6.11797 4.15825 6.11797 3.84175 6.31323 3.64648Z"
                    fill="#22282F"
                  />
                </g>
              </svg>
            </p>
          </Link>
        </div>

        <div className="mobileMenuHamburgerLogin">
          <Link href="/login">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M1.02599 8.49478C0.993847 8.33819 0.991485 8.17475 1.01909 8.01688C1.04669 7.85902 1.10353 7.71086 1.18529 7.58367C1.26705 7.45647 1.37159 7.35358 1.49097 7.28279C1.61035 7.21201 1.74143 7.1752 1.87427 7.17516H17.1257C17.2586 7.1752 17.3896 7.21201 17.509 7.28279C17.6284 7.35358 17.7329 7.45647 17.8147 7.58367C17.8965 7.71086 17.9533 7.85902 17.9809 8.01688C18.0085 8.17475 18.0062 8.33819 17.974 8.49478L16.3903 16.1905C16.2957 16.6502 16.0773 17.0583 15.77 17.35C15.4626 17.6416 15.0837 17.8001 14.6937 17.8002H4.30628C3.91626 17.8001 3.53745 17.6416 3.23005 17.35C2.92265 17.0583 2.70431 16.6502 2.60973 16.1905L1.02599 8.49584V8.49478Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.87646 11.4252V13.5502M12.1235 11.4252V13.5502M4.25293 7.17516L7.75097 0.800156M14.7471 7.17516L11.249 0.800156"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </p>
            <span>Basket</span>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    d="M6.31323 3.64648C6.5085 3.45123 6.825 3.45123 7.02026 3.64648L11.0203 7.64648C11.2155 7.84174 11.2155 8.15826 11.0203 8.35352L7.02026 12.3535C6.825 12.5488 6.5085 12.5488 6.31323 12.3535C6.11797 12.1583 6.11797 11.8417 6.31323 11.6465L9.95972 8L6.31323 4.35352C6.11797 4.15825 6.11797 3.84175 6.31323 3.64648Z"
                    fill="#22282F"
                  />
                </g>
              </svg>
            </p>
          </Link>
        </div>
      </div>

      <div className="mobileMenuHamburgerAccordions">
        <ul>
          {[
            "New products",
            "Best seller",
            "Categories",
            "All Products",
            "Sale of",
          ].map((item, idx) => (
            <li key={idx}>
              <div
                className={`accordionHeader ${
                  activeIndex === idx ? "active" : ""
                }`}
                onClick={() => toggleAccordion(idx)}
              >
                <span> {item}</span>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.46973 5.46973C9.76262 5.17683 10.2374 5.17683 10.5303 5.46973L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76262 18.8232 9.46973 18.5303C9.17683 18.2374 9.17683 17.7626 9.46973 17.4697L14.9395 12L9.46973 6.53027C9.17683 6.23738 9.17683 5.76262 9.46973 5.46973Z"
                      fill="#22282F"
                    />
                  </svg>
                </p>
              </div>
              <div
                className={`accordionContent ${
                  activeIndex === idx ? "active" : ""
                }`}
              >
                This is the static content for <strong>{item}</strong>.
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mobileMenuHamburgerMenuLinks">
        <div className="row">
          <div className="xl-6 lg-6 md-6 sm-6">
            <div className="mobileMenuHamburgerMenuLinksLeft">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl-6 lg-6 md-6 sm-6">
            <div className="mobileMenuHamburgerMenuLinksLeft">
              <ul>
                <li>
                  <Link href="#">Offers</Link>
                </li>
                <li>
                  <Link href="/support/faq">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mobileMenuHamburgerContactUs">
        <div>
          <Link href="#">WhtasApp</Link>
        </div>
        <div className="mobileLIne"></div>
        <div>
          <Link href="#">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.75596 7.02402L7.82996 6.04002C8.12362 5.77044 8.33003 5.41925 8.42268 5.03153C8.51533 4.64381 8.49001 4.23725 8.34996 3.86402L7.89196 2.64102C7.72085 2.18444 7.3821 1.81027 6.94473 1.59474C6.50736 1.37922 6.00427 1.33855 5.53796 1.48102C3.82196 2.00602 2.50296 3.60102 2.90896 5.49502C3.17596 6.74102 3.68696 8.30502 4.65496 9.96902C5.62496 11.637 6.73296 12.869 7.68296 13.735C9.11696 15.04 11.167 14.714 12.486 13.484C12.8395 13.1544 13.0541 12.7023 13.0858 12.2199C13.1176 11.7375 12.9642 11.2612 12.657 10.888L11.817 9.86802C11.5636 9.55957 11.2238 9.33398 10.8411 9.22028C10.4585 9.10659 10.0506 9.10998 9.66996 9.23002L8.28195 9.66702C7.92351 9.2971 7.60939 8.88666 7.34596 8.44402C7.09169 7.99638 6.89353 7.51912 6.75596 7.02302V7.02402Z"
                  fill="#291D2D"
                />
              </svg>
            </p>{" "}
            +994 000 00 00
          </Link>
        </div>
        <div className="mobileLIne"></div>
        <div>
          <HeaderLang />
        </div>
      </div>
    </div>
  );
};

export default MobileMenuHamburger;
