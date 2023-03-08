import React from 'react'
import "./style.css"

const Header = () => {
  return (
    <div className='menu'>
        <a href=''>Logo</a>
        <ul className='menu-items'>
            <li>
            <a href=''>Home</a>
            </li>
            <li>
            <a href=''>About</a>
            </li>
            <li>
            <a href=''>Contact</a>
            </li>
            <li>
            <a href=''>Cart</a>
            </li>
        </ul>
        <a href=''>5</a>
    </div>
  )
}

export default Header