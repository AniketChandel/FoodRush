import "../components_css/Popular.css"
import {pop} from  "../popularfood.js"
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
export function Popular(){
function addincart(food) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let alreadyAdded = cart.find((item) => item.id === food.id);

    if (alreadyAdded) {
        toast.error("Already Added To Cart");
        return;
    }
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${food.name} Added To Cart`);
}

const navigate=useNavigate()
    return(
    <>
    
    <div id="title">Popular Foods</div>
    <div id="boxes">
   {
    pop.map((v, i) => {
        if (v.id <= 5) {
            return (
                <div className="box1" key={v.id}>
                    <img   onClick={() => {

navigate(`/foods/${v.name}`) 
                    }}
                    src={v.image} alt={v.name} 
                          />

                    <h3 id="food-name">{v.name}</h3>

                    <div id="box2">
                        <h3 id="food-price">₹{v.price}</h3>
                        <h3 id="food-rating">⭐ {v.rating}</h3>
                    
                    <button id="order" onClick={() => addincart(v)} >Add To Cart</button>
                    </div>
                </div>
            );
        }

        return null;
    })
}
<img onClick={()=>{
navigate("../popular")
}} id="arrow" src="./arrow.png" alt="view" />


    </div>
    </>
    )
}