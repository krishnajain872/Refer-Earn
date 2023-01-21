const express = require("express");
const mongoose = require("mongoose");
const app = express();

// middleware
// app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// port 
port = process.env.PORT || 3000;


// DataBase Connections
require("./connections/connection")


// Routes

app.use(require("./api/referApi"));



app.get("/", (req, res) => {
    res.send("this is a referal system");
})




app.listen(port, (e) => {
    e ? console.log(e) :
        console.log("backend is runnning")
})