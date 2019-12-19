const mysql = require("mysql2");
const pool = mysql.createPool({
        connectionLimit: 5,
        host: "localhost",
        user: "root",
        password: "", 
        database: "revingston"
    });
    pool.query("SELECT * FROM users", function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
         pool.end(function(err) {
          if (err) {
            console.log(err.message);
          }
          console.log("пул закрыт");
        });
        
connection.end();

    





    

    



        
    
