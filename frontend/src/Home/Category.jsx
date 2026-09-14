import {categories as cat} from "../category.js"

import "../components_css/Category.css"
export function Category(){
    return(
        <>
        <div id="title">Explore By Category</div>
        
            {
                cat.map((v,i)=>{
return(
 
    <div key={i}  className="cat-box">
     <img src={v.image}></img>
     
   
<h2>{v.name}</h2>
</div>
    
    
)
           })
            }
       
        </>
    )
}