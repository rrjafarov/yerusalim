import Link from "next/link";
import React from "react";

const AboutBreadcrumbs = ({aboutData}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>{aboutData.page_name}</li>
        </ul>
      </nav>
    </div>
  );
};

export default AboutBreadcrumbs;
