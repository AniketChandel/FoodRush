import { Home } from "../components/Home.jsx";
import {Routes, Route} from "react-router-dom"
import { Popular } from "../components/Popular.jsx";
import { Ownerdetails } from "../Resturants/Ownerdetails.jsx";
import { Foods } from "../Food/Foods.jsx";
import { Login } from "../login/Login.jsx";
import { Already } from "../login/Already.jsx";
import { Resturant } from "../Home/Resturant.jsx";
import { Menu } from "../Resturants/Menu.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Myprofile } from "../profileicon/Myprofile.jsx";
import { Mycart } from "../profileicon/Mycart.jsx";
import { Popfood } from "../Popular/Popfood.jsx";
import { MyOrder } from "../profileicon/Myorder.jsx";
export function HomePage(){
return(
  
  
    <>
  <ToastContainer />
  
<Routes>
  <Route path="/" element={<Login/>}  />
  <Route path="/login" element={<Already/>}/>
  <Route path="/owner" element={<Ownerdetails/>}/>
<Route path="/home" element={<Home />} />
<Route path="/menu" element={<Menu/>}/>
<Route path="/cart" element={<Mycart/>}/>
<Route path="/myorders" element={<MyOrder/>}/>
<Route path="/myprofile" element={<Myprofile/>}/>
<Route path="/popular" element={<Popfood/>}/>
<Route path="/login" element={<Already/>}/>
<Route path="/foods/:category" element={<Foods />} />
    </Routes>

  
    

 </>
 /*
 /*<Ownerdetails/>*/


   
   
)

}