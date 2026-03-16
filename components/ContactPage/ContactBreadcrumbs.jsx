import Link from "next/link";
import React from "react";

const ContactBreadcrumbs = ({contactData,t}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">{t?.breadcrumbs}</Link>
          </li>
          <span>/</span>
          <li>{contactData.page_name}</li>
        </ul>
      </nav>
    </div>
  );
};

export default ContactBreadcrumbs;
