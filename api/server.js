const express = require("express");
const UserRouter = require("../api/user/user-router");
const {logger} = require("./middleware/middleware");

//instantiating server
const server = express();
//instantiating server

//global middleware
server.use(express.json());
server.use(logger); 
//global middleware

//routes
server.use("/api/users", UserRouter)
//routes




server.get("/sanity-test",(req,res)=> {
    res.json("sanity test")
})

module.exports = server;