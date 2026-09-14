import "../components_css/Offer.css"
import { Customer } from "../Popular/Customer.jsx"
import {Boxes} from "./Boxes.jsx"
export function Offer(){
    return(
        <>
        <div id="title">Offers</div>
        <h3 id="off">Delicious  Food   Amazing    Deals </h3>
        <div id="offer-boxes">
            <Boxes/>
</div>
<Customer/>
        </>
    )
}
