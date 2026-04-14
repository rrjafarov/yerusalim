// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const BlogCard = ({ title, date, image, url, id }) => {
//   const formatDate = (dateString) => {
//     if (!dateString) return "";

//     const d = new Date(dateString);

//     if (isNaN(d.getTime())) return "";

//     return new Intl.DateTimeFormat("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     }).format(d);
//   };

//   return (
//     <div>
//       <div className="blogsLogo">
//         <Link href={`/blogs/${url}-${id}`}>
//           <Image src={image} alt="blog" width={610} height={350} />
//         </Link>

//         <div className="blogsLogoTitle">
//           <span>{title}</span>
//         </div>

//         <div className="blogsLogoDate">
//           <span>{formatDate(date)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;
























"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLocale } from "next-intl";

const BlogCard = ({ title, date, image, url, id }) => {
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
    <div>
      <div className="blogsLogo">
        <Link href={`/blogs/${url}-${id}`}>
          <Image src={image} alt="blog" width={610} height={350} />
        </Link>

        <div className="blogsLogoTitle">
          <span>{title}</span>
        </div>

        <div className="blogsLogoDate">
          <span>{formatDate(date)}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
