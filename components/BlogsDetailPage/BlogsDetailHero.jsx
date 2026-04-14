// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const BlogsDetailHero = ({ blogData }) => {

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);

//     return new Intl.DateTimeFormat("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     }).format(date);
//   };

//   return (
//     <div className="blogsDetailHero">
//       <div className="container">
//         <div className="blogsDetailHeroItem">
//           <Image
//             src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${blogData.main_image}`}
//             alt="banner"
//             width={1260}
//             height={650}
//           />
//           <div className="blogsDetailHeroItemTitle">
//             <span>{formatDate(blogData.published_date)}</span>
//             <h1>{blogData.title}</h1>
//           </div>
//           <div className="blogsDetailHeroItemHashtag">
//             {blogData?.hastags &&
//               Object.values(blogData.hastags).map((hashtag, index) => (
//                 <span key={index}>
//                   #{hashtag.name}
//                 </span>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogsDetailHero;











"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLocale } from "next-intl";

const BlogsDetailHero = ({ blogData }) => {
  const locale = useLocale();

  const months = {
    az: ["Yan", "Fev", "Mar", "Apr", "May", "İyn", "İyl", "Avq", "Sen", "Okt", "Noy", "Dek"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    ru: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const d = new Date(dateString);

    if (isNaN(d.getTime())) return "";

    const monthList = months[locale] || months["en"];
    const day = d.getDate();
    const year = d.getFullYear();

    return `${monthList[d.getMonth()]} ${day}, ${year}`;
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