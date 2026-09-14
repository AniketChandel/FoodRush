import {toast} from "react-toastify"
import "../components_css/Bill.css"
export function Bill(){
     const cart = JSON.parse(localStorage.getItem("cart")) || []
         let totalprice = 0

    cart.forEach((food) => {
        totalprice = totalprice + Number(food.price)
    })

    return(
        <>
    <div id="bill-box">   
  <h2 id="title">Bill Details</h2>
   
 <p id="total">Item Total
         <p className="money"  id="money1">{totalprice}</p>
     </p>

    <p id="total" >Delivery Fee 
    <p className="money" id="money2">₹40</p>
    </p>
 <hr />

    <h3 id="totalamt">Total Amount </h3>
    <p id="money3">{totalprice+40}</p>
</div>
    <button id="order-btn" onClick={()=>{
    toast.success("Order Placed")
    }}>Place Order</button>


        </>
    )
}