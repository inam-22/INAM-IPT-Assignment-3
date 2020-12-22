const express = require("express");
const bodyParser = require("body-parser");
let mysql = require('mysql');
const route= express();
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'garments_db'
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  route.post("/add-product", (req, res) => {
    let sql =
      `INSERT INTO products(name,price) VALUES ('${req.body.name}','${req.body.price}')`;
    connection.query(sql, (error, results, fields) => {
    
      res.send("Product added successfully");
    });
 
});

route.post("/add-user", (req, res) => {
    let sql =
      `INSERT INTO users(name,address,cell_phone) VALUES ('${req.body.name}','${req.body.address}','${req.body.cell_phone}')`;
    connection.query(sql, (error, results, fields) => {
    
      res.send("User added successfully");
    });
 
});

route.post("/add-order", (req, res) => {
    let sql =
      `INSERT INTO orders(product_id,user_id,quantity) VALUES ('${req.body.product_id}','${req.body.user_id}','${req.body.quantity}')`;
    connection.query(sql, (error, results, fields) => {
    
      res.send("Order added successfully");
    });
 
});

route.listen(3000);
