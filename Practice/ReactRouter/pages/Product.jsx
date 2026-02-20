import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <Link to='/product/men'>Men's Section</Link>
      <Link to='/product/women'>Women's Section</Link>
    </div>
  )
}

export default Product
