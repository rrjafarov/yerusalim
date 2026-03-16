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
          <li>{aboutData.page_name}</li>
        </ul>
      </nav>
    </div>
  );
};

export default AboutBreadcrumbs;
