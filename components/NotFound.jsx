import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
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
            <span>404 Error</span>
            <strong>oops.. Sorry</strong>
            <p>Page is not working.. Please refresh the link or try again. or Go back to Home Page</p>
            <Link href="/">Go back</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
