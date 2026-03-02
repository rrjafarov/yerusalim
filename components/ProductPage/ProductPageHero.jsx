import React from 'react'
const ProductPageHero = ({selectedCategory}) => {
  return (
    <div className='productPageHero'>
      <h1>{selectedCategory?.name || "Məhsullar"}</h1>
    </div>
  )
}

export default ProductPageHero












