import Link from "next/link";
import React from "react";

const CartBreadcrumbs = ({t}) => {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">{t?.breadcrumbs}</Link>
          </li>
          <span>/</span>
          <li>{t?.basket}</li>
        </ul>
      </nav>
    </div>
  );
};

export default CartBreadcrumbs;
