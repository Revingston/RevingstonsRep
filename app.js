const mysql = require("mysql2");
 const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "revingston",
  password: ""
}).promise();
 
// получение объектов
connection.query("SELECT * FROM users")
          .then(result =>{
            console.log(result);
          })
          .catch(err =>{
            console.log(err);
          });
connection.end();



        
    
