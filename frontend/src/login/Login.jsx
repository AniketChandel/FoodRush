import "../components_css/Login.css"
import { useNavigate } from "react-router-dom"
export function Login(){
    const navigate=useNavigate()
    async function submit(e){
e.preventDefault();
  const form = new FormData(e.target);
const res = await fetch("https://foodrush-backend-l966.onrender.com/signup", {
    method: "POST",
    body: form
})
const result=await res.json()
console.log(result);
if(result.success === true){
    localStorage.setItem("userid", result.user_id);
}
if(result.success===true && result.role==="customer"){
  navigate("/home")
}
else if(result.success===true && result.role==="owner"){
  navigate("/owner")
}
    }
    return(
        <>
        <form onSubmit={submit}>
      <div id="login-box">
        <h1 id="login-title">FoodRush</h1>
        <h3 id="login-t">Create Account</h3>
        <h4 className="login-det">Name</h4>
        <input className="login-detail" name="name" type="text" placeholder="enter your name"></input>
        <h4 className="login-det">Email</h4>
        <input className="login-detail" name="email" type="email" placeholder="enter your gmail"></input>
        <h4 className="login-det">Password</h4>
        <input className="login-detail" maxLength={10} type="password" name="password" placeholder="enter your password"></input>

        <h4 className="login-det" maxLength={10}>Phone</h4>
        <input className="login-detail" type="number" name="phone" placeholder="enter your phone number"></input>
                <h4 className="login-det" maxLength={500}>Address</h4>
        <input className="login-detail" type="text" name="address" placeholder="enter address"></input>
        <div className="choose1">
        <input  type="radio" name="role" value="customer"></input>
        <label>Customer</label>
        </div>
        <div className="choose1">
        <input  type="radio" name="role" value="owner"></input>
        <label>Resturant Owner</label>
        </div>
        


          <button id="login-save" type="submit">Save</button>
          <h3 id="login-t" onClick={()=>{
            navigate("/login")
          }} > Already have account</h3>
        </div>  
 </form>     
        </>
    )
}