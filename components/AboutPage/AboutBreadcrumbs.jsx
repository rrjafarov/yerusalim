import Link from "next/link";
import React from "react";

const AboutBreadcrumbs = () => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default AboutBreadcrumbs;
