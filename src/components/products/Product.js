import React from 'react'
import {Link, Outlet} from 'react-router-dom'


function Product() {
  return (
    <div className='products'>
     <div className='productNav'>
     <Link to="/products/search">Search</Link>
     <Link to="/products/list">List</Link>
     <Link to="/products/add">Add</Link>
     </div>
     <Outlet />
    </div>
  )
}

export default Product
