const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const app = express();

app.use("/assets",express.static("assets"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Krsna18',
    database: 'nodejs',
    port: 4000
});

//connect ot database
connection.connect(function(error){
    if(error){
console.log("Error with connecting database!",error);
    } 
    else console.log("connected to database successfully...")
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",encoder,function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("select * from logindetails where username = ? and pwd =?",[username,pwd],function(error,results,fields){
        if(results.length > 0)
            {
                res.redirect("/welcome.html");
            }
            else{
                res.redirect("/");
            }
            res.end();
    });
});
app.get("/welcome",function(req,res){
    res.sendFile(__dirname+"/welcome.html")
})
//set app port
app.listen(4000);