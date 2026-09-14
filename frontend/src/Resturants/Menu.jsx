
import "../components_css/Menu.css"
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "./Table";

export function Menu(){
    const [foods,setfoods]=useState([])
    const location = useLocation();

    const restaurant_id = localStorage.getItem("restaurant_id");

    const res_name = location.state?.res_name;
    const res_image = location.state?.res_image;

    console.log("restaurant id:", restaurant_id);

    async function getFoods() {
        const f = await fetch(
            `http://localhost:5000/foods/restaurant/${restaurant_id}`
        );

        const res = await f.json();
        setfoods(res);
    }

    useEffect(() => {
        if (restaurant_id) {
            getFoods();
        }
    }, [restaurant_id]);

    return(
        <>
            <h1 id="owner-title">Owner Dashboard</h1>

            <div id="owner-box">
                <h1>{res_name}</h1>
                <img src={res_image} alt="restuarant_image"></img>
            </div>

            <Table 
                restaurant_id={restaurant_id}
                getFoods={getFoods}
            />

            <div id="food-details">
                <h1 id="title">My Menu</h1>

                <table id="menu-table">
                    <tr>
                        <th>Food Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>

                    {foods.map((food) => (
                        <tr key={food.id}>
                            <td>{food.food_name}</td>
                            <td>{food.category}</td>
                            <td>₹{food.price}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}