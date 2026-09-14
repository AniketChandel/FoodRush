import "../components_css/Ownerdetails.css"
import { useNavigate } from "react-router-dom";
export function Ownerdetails(){
  const navigate=useNavigate()
   async function submitdetails(e){
    e.preventDefault();
    const form=new FormData(e.target)
 const response = await fetch("http://localhost:5000/addRestaurant", {
        method: "POST",
        body: form
    });
  const result = await response.json();
  console.log("backend result:", result);

localStorage.setItem("restaurant_id", result.restaurant_id);

console.log("saved id:", localStorage.getItem("restaurant_id"));
    alert(result.message);

    navigate("/menu");
    
  
    }
return(
<>
<div id="owner-box">

<h1 id="owner-title">Restaurant Details</h1>
<form onSubmit={submitdetails}>
<h3 className="owner-name">Restaurant Name</h3>
<input className="owner-info" name="name" type="text" placeholder="Enter the Restaurant Name" />

<h3 className="owner-name">Restaurant Phone Number</h3>
<input className="owner-info" type="tel" name="number" maxLength="10" placeholder="Enter the Restaurant Number" />

<h3 className="owner-name">Restaurant Address</h3>
<input className="owner-info" type="text" name="address" placeholder="Enter the Restaurant Address" />

<h3 className="owner-name">Restaurant State</h3>
<input className="owner-info" type="text" name="state" placeholder="Enter the Restaurant State" />

<h3 className="owner-name">Restaurant City</h3>
<input className="owner-info" type="text" name="city" placeholder="Enter the Restaurant City" />

<h3 className="owner-name">Restaurant Description</h3>
<textarea className="owner-info" name="description" placeholder="Enter the Restaurant Description"></textarea>

<h3 className="owner-name">Restaurant Opening Time</h3>
<input className="owner-info" name="opening" type="time" />

<h3 className="owner-name">Restaurant Closing Time</h3>
<input className="owner-info" name="closing" type="time" />

<h3 className="owner-name">Restaurant Image</h3>
<input className="owner-info" required name="image" type="file" accept="image/*" />

<button id="save-details">Save Restaurant</button>
</form>
</div>

</>)
} 