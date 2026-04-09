import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogsDetailHero = ({ blogData }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="blogsDetailHero">
      <div className="container">
        <div className="blogsDetailHeroItem">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${blogData.main_image}`}
            alt="banner"
            width={1260}
            height={650}
          />
          <div className="blogsDetailHeroItemTitle">
            <span>{formatDate(blogData.published_date)}</span>
            <h1>{blogData.title}</h1>
          </div>
          <div className="blogsDetailHeroItemHashtag">
            {blogData?.hastags &&
              Object.values(blogData.hastags).map((hashtag, index) => (
                <span key={index}>
                  #{hashtag.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetailHero;
