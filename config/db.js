const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "prueba_db"
});

db.connect((err) => {
  if (err) {
    console.log("Error de conexión:", err);
  } else {
    console.log("Conectado a la DB");
  }
});