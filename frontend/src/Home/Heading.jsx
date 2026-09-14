import "../components_css/Home.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
export function Heading(){
  const navigate=useNavigate();
  const [pop,notpop]=useState(false);
  function popdisplay(){
   notpop(!pop);


  }
    return(
        <>
        <div id="heading" >
          <div id="logo-box"><img id="logo" src="/image1.png" alt="logo" onClick={()=>{navigate("/home")}} ></img></div>
            <div id="titlename" className="main-title"  onClick={()=>{navigate("/home")}} >FoodRush</div>
            <input id="search-bar" type="text" placeholder="Enter the dish name"></input>
           <button id="search">Search</button>
           <button id="sign-in" onClick={()=>{
            navigate("/cart")
           }} > Cart</button>
           <div id="profile-container">
           <button id="profile-box" onClick={popdisplay} ><img id="profile" src="./account.png" alt="profile-icon"  ></img></button>
 
      
{pop?(
               <div id="popup-box">
                <ul>
                    <a className="popup-details" onClick={()=>{
                      navigate("/myprofile")
                    }}  >My Profile</a>
                    <a className="popup-details" onClick={()=>{
                      navigate("/myorders")
                    }} >My Orders</a>
                    <a className="popup-details" onClick={()=>{
                      navigate("/cart");
                    }} >My Cart</a>
                    <a className="popup-details" onClick={()=>{
                      navigate("/")
                    }}>LogOut</a>

                </ul>
            
        </div>
): null}
</div>
</div>
 
        </>
)
}