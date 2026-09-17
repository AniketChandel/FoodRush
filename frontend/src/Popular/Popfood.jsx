import { Heading } from "../Home/Heading";
import {pop} from "../popularfood.js";
import "../components_css/Foods/Food.css"
import { useState } from "react";
import {PopularCategory} from "./PopularCategory.jsx";
import { Choose } from "./Choose.jsx";
import { Customer } from "./Customer.jsx";
import { Footer } from "../Home/Footer.jsx";
export function Popfood(){
    const n=4;
    const [start,setStart]=useState(0)
    function changeDish(){

    if(start<pop.length-n){
        setStart(start+1)
    }
}
    
    return(
        <>
  <Heading/>
  <img id="poster" src="./backimage.png" alt="image"></img>
  <h1 id="pop2">Explore Our Menu</h1>


<div className="pop3">
    {

       pop.slice(start,start+n).map((v,i)=>{
  
        return(
            <div className="popularFood-box" key={v.id}>
            <img className="pop-box" src={v.image} alt={v.name}></img>
            <p className="pop-name">{v.name}</p>
                   

            </div>
            
        )
        
       
})
       
    }
    <button onClick={changeDish} id="arrow-pop" > 
    <img src="./arrow.png" alt="Next" id="arrow" /> 
    </button>
</div>
  <PopularCategory/>
  <Choose/>
  <Customer/>
  <Footer/>
        </>
      
    )
}
