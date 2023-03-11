import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import useShop from '../../ShowContext'

const Header = () => {
  const {products} = useShop();
  return (
    <div className = "navBar">
    <div className='menu'>
       <Link to ="/" className='logo'>eShop</Link>
        <div className='links'>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
        <Link to ="/cart">Cart</Link>
        </div>
        <Link to ="/cart"><span className='cart'>{products.length}</span></Link>
    </div>
    </div>
  )
}

export default Header