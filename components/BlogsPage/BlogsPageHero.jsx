import React from "react";

const BlogsPageHero = ({blogNameData}) => {
  return (
    <div className="blogsPageHero">
      <h1>{blogNameData.data.page_name}</h1>
    </div>
  );
};

export default BlogsPageHero;
