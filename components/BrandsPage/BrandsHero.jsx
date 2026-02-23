import React from "react";

const BrandsHero = ({brandsNameData}) => {
  return (
    <div className="brandsPageHero">
      <h1>{brandsNameData.data.page_name}</h1>
    </div>
  );
};

export default BrandsHero;
