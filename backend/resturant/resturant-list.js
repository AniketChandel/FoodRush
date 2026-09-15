require("dotenv").config();
const express = require("express");

const db = require("./db");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcrypt");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const upload = multer({ dest: "uploads/" });


app.post("/restaurants/nearby", async (req, res) => {

    const { latitude, longitude } = req.body;

    const response = await fetch(
        `https://places-api.foursquare.com/places/search?ll=${latitude},${longitude}&radius=10000&query=restaurant`,
        {
            headers: {
                Authorization: `Bearer ${process.env.apikey}`,
                "X-Places-Api-Version": "2025-06-17"
            }
        }
    );

    const data = await response.json();

    for (let r of data.results) {
        db.query(
            `INSERT INTO restaurants (name, latitude, longitude, unique_id)
             VALUES (?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE name=?`,
            [r.name, r.latitude, r.longitude, r.fsq_place_id, r.name]
        );
    }

    res.json(data);
});
app.post("/nearby-food", (req, res) => {

    const sql = `
        SELECT 
            r.id,
            r.name,
            r.phone,
            r.address,
            r.state,
            r.city,
            r.description,
            r.opening_time,
            r.closing_time,
            r.image,
            r.latitude,
            r.longitude,
            f.food_name,
            f.price,
            f.description AS food_description,
            f.category,
            f.type
        FROM restaurants r
        JOIN foods f ON r.id = f.restaurant_id
    `

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err)

            return res.status(500).json({
                error: "Database error"
            })
        }

        console.log(result)

        res.json(result)
    })
})
app.post("/signup", upload.none(), async (req, res) => {
    const { name, email, phone, password, address, role } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const sql = `insert into users
    (name,email,phone,password,address,role)
    values (?,?,?,?,?,?)`;

    db.query(sql, [name,email,phone,hash,address,role], (err,result) => {
        if(err){
             return res.status(500).json({success:false});
        }

        res.json({
            success:true,
            user_id:result.insertId,
            role:role
        });
    });
});
app.get("/foods/:category", (req, res) => {

    const category = req.params.category;

    db.query(
        `SELECT r.name AS restaurant, f.food_name, f.price, f.category
         FROM restaurants r
         JOIN foods f ON r.id = f.restaurant_id
         WHERE f.category = ?`,
        [category],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.send("Error");
            }

            res.json(result);
        }
    );
});


app.post("/addRestaurant", upload.single("image"), (req, res) => {

    const {
        name,
        number,
        address,
        state,
        city,
        description,
        opening,
        closing
    } = req.body;

    const image = req.file ? req.file.filename : null;

    const sql = `
        INSERT INTO restaurants
        (name, phone, address, state, city, description, opening_time, closing_time, image)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        name,
        number,
        address,
        state,
        city,
        description,
        opening,
        closing,
        image
    ];

    db.query(sql, values, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error saving restaurant"
            });
        }

        res.json({
            message: "Restaurant added successfully",
            restaurant_id: result.insertId
        });
    });
});
app.get("/restaurants", (req, res) => {

    const sql = "select * from restaurants"

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err)
        }

        res.json(result)
    })

})
app.get("/myprofile/:userid",(req,res)=>{
    const sql='select * from users where id=?';
    const userid = req.params.userid;
    db.query(sql,[userid],(err,result)=>{
        if(err){
               return res.status(500).json({ error: err }); 
        }
         res.json(result[0]);
    })
})
app.get ("/restaurants",(req,res)=>{
const sql="select name,image from restaurants";
    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json(result);
    });

})
app.get("/food",(req,res)=>{
    const sql="select * from foods"
    db.query(sql,(err,result)=>{
        if(err){
               return res.status(500).json({ error: err });
        }
        res.json(result);
    })
})

   app.post("/addfood", upload.none(),(req, res) => {

   
       const { name, price, desc, category, type, restaurant_id } = req.body;

    const sql = `
        INSERT INTO foods
        (restaurant_id, food_name, price, description, category, type)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [restaurant_id,name,price,desc,category,type ];

db.query(sql,values,(err,result)=>{
    if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Error adding food"
            });
        }

        res.json({
            success: true,
            message: "Food added successfully"
        });
})
}); 
app.get("/foods/restaurant/:restaurant_id", (req,res)=>{

    const restaurant_id = req.params.restaurant_id;

    const sql = "SELECT * FROM foods WHERE restaurant_id = ?";

    db.query(sql, [restaurant_id], (err,result)=>{

        if(err){
            console.log(err);
            return res.status(500).json({
                error: "Error getting foods"
            });
        }

        res.json(result);
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});