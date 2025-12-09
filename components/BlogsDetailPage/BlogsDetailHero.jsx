import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogsDetailHero = () => {
  return (
    <div className="blogsDetailHero">
      <div className="container">
        <div className="blogsDetailHeroItem">
          <Image
            src="/img/blogsHero.png"
            alt="banner"
            width={1260}
            height={650}
          />
          <div className="blogsDetailHeroItemTitle">
            <span>Oct 1,2026</span>
            <h1>How to Choose the Right Scent for Every Room..</h1>
          </div>
          <div className="blogsDetailHeroItemHashtag">
            <Link href="#">#Blog</Link>
            <Link href="#">#Candle</Link>
            <Link href="#">#Candycare</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetailHero;
