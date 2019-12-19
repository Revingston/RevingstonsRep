const mysql = require("mysql2");
 const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "revingston",
  password: ""
});
const sql = `UPDATE users SET age=? WHERE name=?`;
const data = [34, "Tom"];
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
 
connection.end();




    

    



        
    
