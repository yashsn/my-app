const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'saphana12##',
  database : 'app_db',
  insecureAuth : true
});

const app = express();
app.use(bodyParser.json({type:'application/json'}))
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

app.get('/prices', function (req, res) {
  connection.connect();

  connection.query('SELECT * FROM prices', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });

  connection.end();
});


// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/prices so you can see the data.');
});



