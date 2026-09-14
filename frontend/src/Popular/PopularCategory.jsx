import {useState} from "react"
import {categories} from "../category.js"
import{Heading} from "../Home/Heading";
export function PopularCategory(){
    const n=5;
    const [start,newstate]=useState(0)
 function changeDish(){
  if(start<categories.length-n){
          newstate(start+1)
      }
  }
      
      return(
          <>
    <h1 id="pop2">Explore Categories</h1>
  
  
  <div className="pop3">
      {
  
         categories.slice(start,start+n).map((v,i)=>{
    
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
  
          </>
        
      )
  }