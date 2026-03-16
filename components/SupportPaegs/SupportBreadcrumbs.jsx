import React from "react";
import Link from "next/link";

const SupportBreadcrumbs = ({t}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">{t?.breadcrumbs}</Link>
          </li>
          <span>/</span>
          <li>{t?.support}</li>
        </ul>
      </nav>
    </div>
  );
};
export default SupportBreadcrumbs;










