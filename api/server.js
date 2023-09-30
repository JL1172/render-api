const express = require("express");
const helmet = require("helmet");

//instantiating server
const server = express();
//instantiating server

//global middleware
server.use(helmet());
server.use(express.json());
//global middleware

//routes
server.get("/sanity-test",(req,res)=> {
    res.json("sanity test")
})
//routes

module.exports = server;