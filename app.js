const mysql = require("mysql2");
 const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "revingston",
  password: ""
});
 const sql = `SELECT * FROM users WHERE name=? AND age=?`;
const filter = ["Tom", 29];
connection.query(sql, filter, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
 connection.end();



    

    



        
    
