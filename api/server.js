const express = require("express");

//instantiating server
const server = express();
//instantiating server

//global middleware
server.use(express.json());
//global middleware

//routes
server.get("/sanity-test",(req,res)=> {
    res.json("sanity test")
})
//routes

module.exports = server;