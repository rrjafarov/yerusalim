import Link from "next/link";
import React from "react";

const AboutBreadcrumbs = ({aboutData,t}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">{t?.breadcrumbs}</Link>
          </li>
          <span>/</span>
          <li>{t?.about}</li>
        </ul>
      </nav>
    </div>
  );
};

export default AboutBreadcrumbs;
