b) Create a Node.js file that demonstrate create database student DB and student table (Rno, Sname,Percentage ) in MySQL.

create_db.js

var mysql = require('mysql');

var con = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "root"

});

con.connect(function(err) {

  if (err) throw err;

  console.log("Connected!");

  con.query("CREATE DATABASE studentdb", function (err, result) {

    if (err) throw err;

    console.log("Database created");

  });

});

create_table.js

var mysql = require('mysql');

var con = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "root",

  database: "studentdb"

});

con.connect(function(err) {

  if (err) throw err;

  console.log("Connected!");

 

  var sql = "CREATE TABLE student(rollno int,name VARCHAR(255), percentage double)";

  con.query(sql, function (err, result) {

    if (err) throw err;

    console.log("Table created");

  });

});

Initiate :

 

C:\Users\Your Name>node create_db.js

 C:\Users\Your Name>node create_table.js