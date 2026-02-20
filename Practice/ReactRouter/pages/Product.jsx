import React from 'react'
import { use } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const Product = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Product Page</h1>
      <Link to='/product/men'>Men's Section</Link>
      <Link to='/product/women'>Women's Section</Link>
      <button onClick={() => navigate('/courses')}>Go to Courses</button>
       <Outlet />
    </div>
  )
}

export default Product
