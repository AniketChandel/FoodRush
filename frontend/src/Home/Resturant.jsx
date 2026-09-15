import "../components_css/Resturant.css"
import { useEffect, useState } from "react"

export function Resturant() {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {

        async function getRestaurants() {

            const response = await fetch("https://foodrush-backend-l966.onrender.com/restaurants")

            const result = await response.json()

            setRestaurants(result)
        }

        getRestaurants()

    }, [])

    return (
        <>
            <div id="title">Popular Restaurants Near Me</div>

            <div id="boxes">

                {restaurants.slice(0, 5).map((restaurant) => (

                    <div className="box1" key={restaurant.id}>

                        <img
                            src={`https://foodrush-backend-l966.onrender.com/uploads/${restaurant.image}`}
                            alt={restaurant.name}
                        />

                        <h3 id="restaurant-name">
                            {restaurant.name}
                        </h3>

                        <button id="order">
                            View Restaurant
                        </button>

                    </div>

                ))}

            </div>
        </>
    )
}