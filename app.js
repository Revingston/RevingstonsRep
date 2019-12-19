const mysql = require("mysql2");
 const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "revingston",
  password: ""
}).promise();
 
const sql = "INSERT INTO users (name, age) VALUES (?, ?)";
const user = ["Stan", 19];
connection.query(sql, user)
          .then(result =>{
            console.log(result[0]);
          })
          .catch(err =>{
            console.log(err);
          });

connection.end();



        
    
