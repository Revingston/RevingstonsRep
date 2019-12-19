const mysql = require("mysql2");
/* const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "revingston",
  password: ""
});*/
const pool = mysql.createPool({
        connectionLimit: 5,
        host: "localhost",
        user: "root",
        password: "", 
        database: "revingston"
    });
    





    

    



        
    
