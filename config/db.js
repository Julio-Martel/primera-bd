const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "prueba_db"
});

db.connect((err) => {
  if (err) {
    console.log("Error DB:", err);
  } else {
    console.log("DB conectada");
  }
});

module.exports = db;