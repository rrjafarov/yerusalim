import React from 'react'
const ProductPageHero = ({selectedCategory,t}) => {
  return (
    <div className='productPageHero'>
      <h1>{selectedCategory?.name || t?.products}</h1>
    </div>
  )
}

export default ProductPageHero












