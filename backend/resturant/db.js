const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aniket@84",
    database: "foodrush"
});

db.connect((err) => {
    if (err) {
        console.log("MySQL connection failed");
            console.log(err);
    } else {
        console.log("MySQL connected");
    }
});

module.exports = db;