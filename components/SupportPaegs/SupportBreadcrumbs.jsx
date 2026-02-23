import React from "react";
import Link from "next/link";

const SupportBreadcrumbs = () => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>Support</li>
        </ul>
      </nav>
    </div>
  );
};
export default SupportBreadcrumbs;










