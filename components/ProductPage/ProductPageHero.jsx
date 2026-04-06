import React from 'react'
const ProductPageHero = ({selectedCategory,t, productsPageInfo}) => {
  return (
    <div className='productPageHero'>
      <h1>{selectedCategory?.name || productsPageInfo.page_name}</h1>
    </div>
  )
}

export default ProductPageHero












