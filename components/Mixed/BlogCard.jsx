import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div>
      <div className="blogsLogo">
        <Link href="#">
          <Image src="/img/homeBlog.png" alt="blog" width={610} height={350} />
        </Link>
        <div className="blogsLogoTitle">
          <span>How to Choose the Right Scent for Every Room..</span>
        </div>
        <div className="blogsLogoDate">
          <span>Mon 20 Oct</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
