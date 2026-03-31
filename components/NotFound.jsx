import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = ({t}) => {
  return (
    <div className="notFound">
      <Image
        src="/img/notFound1.png"
        alt="Not Found"
        width={5000}
        height={1000}
      />

      <div className="notFoundContent">
        <div className="container" id="notFoundContent1">
            <span>{t?.notfound}</span>
            <strong>{t?.notfoundSub}</strong>
            <p>{t?.notfoundDesc}</p>
            <Link href="/">{t?.notfoundButton}</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
