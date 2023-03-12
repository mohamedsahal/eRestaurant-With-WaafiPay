import React from 'react'
import ProductCart from '../components/cart/ProductCart'
import Payments from '../components/payments/Payments'

const Cart = () => {
  return (
    <div className="cart-container">
       <ProductCart/>
       <Payments/>
    </div>
   
  )
}

export default Cart