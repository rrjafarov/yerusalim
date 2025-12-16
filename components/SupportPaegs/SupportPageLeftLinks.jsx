"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SupportPageLeftLinks = () => {
  const pathname = usePathname();

  const isActive = (target) => {
    return pathname.endsWith(target);
  };

  return (
    <div className="supportPageLeftLinks">
      <ul>
        <li className={isActive("/support/faq") ? "active" : ""}>
          <Link href="/support/faq">Faq</Link>
        </li>
        <li className={isActive("/support/payment-support") ? "active" : ""}>
          <Link href="/support/payment-support">Payment</Link>
        </li>
        <li className={isActive("/support/delivery-terms") ? "active" : ""}>
          <Link href="/support/delivery-terms">Delivery terms</Link>
        </li>
        {/* <li className={isActive("/support/for-user") ? "active" : ""}>
          <Link href="/support/for-user">For our users</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default SupportPageLeftLinks;
