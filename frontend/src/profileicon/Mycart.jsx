import "../components_css/Cart.css"

import { Bill } from "./Bill"
import { useState } from "react"
export function Mycart(){
   function deletefood(id) {
let newcart = cart.filter((food) => food.id !== id)
setCart(newcart)
localStorage.setItem("cart", JSON.stringify(newcart))
}
   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    return(
        <>
        <div id="cart-bg">
        <div id="cart-box">
        <h1 id="cart-heading">My Cart</h1>
        <img id="cart" src="./cart.png"></img>
        </div>
        {cart.map((food) => (
        <div className="cart-boxes" key={food.id}>

    <img id="cart-image" src={food.image} />

    <div id="cart-details">
        <h2 id="cart-name">{food.name}</h2>
        <h2 id="cart-price">`Rs. {food.price}`</h2>
         </div>
         <div id="cart-details">
            <h2 id="cart-category">{food.category}</h2>
         </div>
         <div id="cart-details">
            <button>-</button>
            <h2 id="cart-quantity">Quantity</h2>
            <button>+</button>
         </div>
           <div id="cart-details">
            <button id="add-btn">Add</button>
         </div>
         <div id="cart-details">
            <button id="delete-btn" onClick={()=>{
             deletefood(food.id)  
            }}>Delete</button>
         </div>
       

</div>
))}
           <Bill/> 
          
        </div>
   
        </>
    )
}