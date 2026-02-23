// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const BlogCard = ({ title, date, image, url, id }) => {
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
//           <span>{date}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;






import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ title, date, image, url, id }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const d = new Date(dateString);

    if (isNaN(d.getTime())) return "";

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(d);
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























// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const BlogCard = ({ title, date, image, url, id }) => {

//   const formatDate = (dateString) => {
//     const d = new Date(dateString);
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
