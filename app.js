const mysql = require("mysql2");
 const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "revingston",
  password: ""
});
const sql = "SELECT * FROM users";
connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
    for(let i=0; i < users.length; i++){
      console.log(users[i].name);
    }
});
 connection.end();


    

    



        
    
