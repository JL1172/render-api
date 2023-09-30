const express = require("express"); 
const UserData = require("./user-model");
const {queryValidation} = require("../middleware/middleware"); 

const router = express.Router();

//getWQuery
router.get("/",queryValidation,async(req,res,next)=> {
    try {
        const user = await UserData.findAll(req.query)
        res.status(200).json({message : "data fetch was success", data : user})
        next();
    } catch (err) {
        next(err);
    }
})
//getWQuery


router.use((error,req,res,next)=> {
    res.status(error.status || 500).json({
        message : error.message,
        cutomMessage : "error"
    })
})

module.exports = router;