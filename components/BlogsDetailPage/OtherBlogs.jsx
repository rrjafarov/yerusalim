// import React from "react";
// import BlogCard from "../Mixed/BlogCard";

// const OtherBlogs = ({ otherBlogs }) => {
//   return (
//     <div className="otherBlogs">
//       <div className="container">
//         <div className="otherBlog">
//           <h3>Explore Next Blog </h3>
//           <div className="otherBlogCards">
//             <div className="row">
//               {otherBlogs.map((blogItem) => (
//                 <div key={blogItem.id} className="xl-6 lg-6 md-6 sm-12">
//                   <BlogCard
//                     title={blogItem.title}
//                     image={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${blogItem.main_image}`}
//                     date={blogItem.published_date}
//                     url={blogItem.url_slug}
//                     id={blogItem.id}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtherBlogs;









import React from "react";
import BlogCard from "../Mixed/BlogCard";

const OtherBlogs = ({ otherBlogs }) => {
  if (!otherBlogs || otherBlogs.length === 0) {
    return null;
  }

  return (
    <div className="otherBlogs">
      <div className="container">
        <div className="otherBlog">
          <h3>Explore Next Blog </h3>
          <div className="otherBlogCards">
            <div className="row">
              {otherBlogs.map((blogItem) => (
                <div key={blogItem.id} className="xl-6 lg-6 md-6 sm-12">
                  <BlogCard
                    title={blogItem.title}
                    image={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${blogItem.main_image}`}
                    date={blogItem.published_date}
                    url={blogItem.url_slug}
                    id={blogItem.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;