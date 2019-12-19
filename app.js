const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
 const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
 const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "revingston",
  password: "123456" });
 app.set("view engine", "hbs");
 // получение списка пользователей
app.get("/", function(req, res){
    pool.query("SELECT * FROM users", function(err, data) {
      if(err) return console.log(err);
      res.render("index.hbs", {
          users: data       });     });  });
connection.end();
