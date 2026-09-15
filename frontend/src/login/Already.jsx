import "../components_css/Login.css"
import { useNavigate } from "react-router-dom";
export function Already(){
  const navigate=useNavigate()
   async function submitdetails(e){

e.preventDefault();
const form =new FormData(e.target)
const res = await fetch(("https://foodrush-backend-l966.onrender.com/login"), {
    method: "POST",
    body: form
}
)
const result=await res.json();
if(result.success === true){
    localStorage.setItem("user_id", result.user_id);
}
else if(result.success===true && result.role==="customer"){
  navigate("/home")
}
else if(result.success===true && result.role==="owner"){
  navigate("/menu",{
       state: {
            owner_id: result.id,
            res_name: result.name,
            res_image: result.image
        }
  })
}
    }
    return(
        <>
        <form onSubmit={submitdetails}>
      <div id="login-box">
        <h1 id="login-title">FoodRush</h1>
        <h3 id="login-t">Login</h3>
        <h4 className="login-det" >Name</h4>
        <input className="login-detail" name="name"  type="text" placeholder="enter your name"></input>
        <h4 className="login-det">Email</h4>
        <input className="login-detail" name="email" type="email" placeholder="enter your gmail"></input>
        <h4 className="login-det">Password</h4>
        <input className="login-detail" maxLength={10} name="password" type="tel" placeholder="enter your password"></input>
          <button id="login-save" type="submit">Login</button>
        </div>  
        </form>
      
        </>
    )
}