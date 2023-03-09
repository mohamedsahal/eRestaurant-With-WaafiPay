import React from 'react'
import Products from '../components/products/Products'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className="header">
      <div className="home">
        <div className="leftSide">
          <h1>We do not cook, <br/>we create your<br/>emotions!</h1>
          <p>Consectetur numquam poro nemo veniam <br/>eligendi rem adipisci quo modi.</p>
          <Link to ="/contact">
          <button className="button">Contact us</button>
          </Link>
          <Link to ="/about">
          <button className="button about">About us</button>
          </Link>
        </div>

        <div className="rightSide">
          <img src="https://starbelly.bslthemes.com/wp-content/uploads/2022/05/illustration-2.png" alt=''/>
        </div>
      </div>
      <div className="product">
        <h1>Most popular dishes</h1>
      <Products/>
      </div>
    
    </div>

      
  

    </>
   )
}

export default Home