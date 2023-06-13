import mysql from "mysql2" //uses default import
import credentials from "./credentials.js" //uses default import

const db = mysql.createConnection(credentials)

db.query(
    "SELECT * FROM address",
    function(err, results){
        console.log(err);
        console.table(results);
        db.destroy();
    }
)
