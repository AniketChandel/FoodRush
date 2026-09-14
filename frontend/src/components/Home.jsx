import { Category } from "../Home/Category.jsx"
import { Footer } from "../Home/Footer.jsx"
import {Heading} from "../Home/Heading.jsx"
import { Main } from "../Home/Main.jsx"
import { Location } from "../Home/Location.jsx"
import { Offer } from "../Home/Offer.jsx"
import { Popular } from "../Home/Popular.jsx"
import { Resturant } from "../Home/Resturant.jsx"
 import { useEffect } from "react";
import { Login } from "../login/Login.jsx"
export function Home(){

    return(
        <>
    
        <Location/>
        
        <Heading/>
        <Main/>
        <Popular/>
        <Category/>
        <Resturant/>
         <Offer/>
         <Footer/>
        </>
    )

}