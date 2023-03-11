import { useState } from "react";
import useShop from "../../ShowContext"
import "./product.css"

const Product = ({product}) => {
    const {addToCart, removeFromCart, products} = useShop();
    const [isInCart, setIsInCart] = useState(false);
    const handleAddToCart = () =>{
        if(isInCart){
            removeFromCart()
        }else{
        addToCart(product)
    }
        console.log(products)
    }

  return (
   <div className="card"
   style={{
    minHeight:"100%",
    background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0,0,0,0.1)),
    url(${product.urlImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
   }}
   
   >
    <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
    </div>
    <button className={`btn ${isInCart ? "btn-secondary":  "btn-primary" }`}
    onClick={handleAddToCart}>
        {isInCart ? "-" : "+"}
    </button>
   </div>
  )
}

export default Product