import Link from "next/link";
import React from "react";

const ContactBreadcrumbs = () => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>/</span>
          <li>Contact us</li>
        </ul>
      </nav>
    </div>
  );
};

export default ContactBreadcrumbs;
