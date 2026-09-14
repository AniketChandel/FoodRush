import "../components_css/Order.css"
import { Orders } from "../Order.js"

export function MyOrder() {

    return (
        <>
         

            <div id="my-order-bg">

                <h1 id="my-order-title">My Orders</h1>

                <div id="order-list">

                    {Orders.map((v) => (

                        <div className="order-card" key={v.id}>

                            <div className="order-food">
                                <img src={v.image} />
                            </div>

                            <div className="order-info">

                                <h2>{v.food}</h2>

                                <p className="restaurant-name">
                                    {v.restaurant}
                                </p>

                                <p>Quantity: {v.quantity}</p>

                                <p className="order-date">
                                    {v.date}
                                </p>

                            </div>

                            <div className="order-status">

                                <h2>₹{v.price * v.quantity}</h2>

                                <span className={
                                    v.status === "Delivered"
                                        ? "delivered"
                                        : "on-way"
                                }>
                                    {v.status}
                                </span>

                                <button>
                                    View Details
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    )
}