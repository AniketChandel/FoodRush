
import "../components_css/Table.css"

export function Table({restaurant_id,getFoods}){

    async function addfood(e){
        e.preventDefault()

        const form = new FormData(e.target)
        console.log("restaurant_id:", restaurant_id);
        form.append("restaurant_id", restaurant_id)

        const resp = await fetch("http://localhost:5000/addfood", {
            method: "POST",
            body: form
        })

        const result = await resp.json()
        console.log(result)
        if (result.success) {
    getFoods()
    e.target.reset()
}
    }

    return(
        <>
            

            <div id="addingfoods">
                <form onSubmit={addfood} className="food-form">

                    <h1 id="add">Add New Food</h1>

                    <label className="add">Food Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter the name of food"
                    />

                    <label className="add">Food Price</label>
                    <input
                        type="number"
                        name="price"
                        required
                        min={10}
                        placeholder="Enter the food price"
                    />

                    <label className="add">Food Description</label>
                    <input
                        type="text"
                        name="desc"
                        placeholder="Enter about food"
                        maxLength={2000}
                    />

                    <label className="add">Category</label>
                    <select name="category" required>
                        <option value="">Select Category</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Burger">Burger</option>
                        <option value="Biryani">Biryani</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Drinks">Drinks</option>
                    </select>

                    <label className="add">Food Type</label>
                    <div className="food-type">
                        <label>
                            <input type="radio" name="type" value="veg" required />
                            Veg
                        </label>

                        <label>
                            <input type="radio" name="type" value="nonveg" />
                            Non-Veg
                        </label>
                    </div>

                    <button type="submit">Save Food</button>

                </form>
            </div>
        </>
    )
}

