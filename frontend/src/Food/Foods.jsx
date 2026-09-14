import "../components_css/Foods.css"
import { Heading } from "../Home/Heading"
import { useEffect, useState } from "react"

export function Foods() {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {

        const getFoods = async () => {

            try {

                const response = await fetch("http://localhost:5000/nearby-food", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const data = await response.json()

                console.log("food data:", data)

                setRestaurants(data)

            } catch (error) {
                console.log(error)
            }
        }

        getFoods()

    }, [])

    return (
        <>
        <div id="restaurant-box">
            <Heading />

            <div id="food-box"></div>

            <div id="title">Restaurants</div>

            <div id="restaurant-list">

                {restaurants.map((v, i) => (

                    <div id="food-box1" key={i}>

                        <img
                            src={
                                v.image
                                    ? `http://localhost:5000/uploads/${v.image}`
                                    : "/rest.png"
                            }
                            className="resturant-img"
                        />

                        <div className="describe">
                            <div className="describe-small" >
                            <p>{v.food_name.toUpperCase()}</p>
                           <p>{v.name? v.name.replace(/\b\w/g, char => char.toUpperCase()): "Restaurant"}</p>
                           <p>₹{v.price}</p>
                           
</div>
                            

                            
<div className="describe-big" >
                         
                            <p>{v.food_description}</p>

                            <p>{v.description}</p>

                            <p> {v.opening_time} - {v.closing_time}</p>
</div>
   </div>
                        </div>

                 

                ))}

            </div>
            </div>
        </>
    )
}