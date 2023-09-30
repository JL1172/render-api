const express = require("express");
const UserData = require("./user-model");
const { queryValidation, validateId, validatePost } = require("../middleware/middleware");

const router = express.Router();

//getWQuery
router.get("/", queryValidation, async (req, res, next) => {
    try {
        const user = await UserData.findAll(req.query)
        res.status(200).json({ message: "data fetch was success", data: user })
    } catch (err) {
        next(err);
    }
})
//getWQuery
//getWId
router.get("/:id", validateId, (req, res, next) => {
    res.status(200).json({ message: "fetch by id was successful", data: req.user });
})
//getWId
//post
router.post("/",validatePost, async(req,res,next)=> {
    try {
        const newUser = await UserData.insert(req.body);
        res.status(201).json({message : "new user successfully created",data : newUser});
    } catch(err) {
        next(err)
    }
})
//post

router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message,
        cutomMessage: "error"
    })
})

module.exports = router;