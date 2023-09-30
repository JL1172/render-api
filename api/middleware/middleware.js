const UserData = require("../user/user-model");

function logger(req, res, next) {
    console.log(`
    --activity--
    METHOD : ${req.method}
    URL : ${req.url}
    TIMESTAMP : ${new Date()} 
    USER : ${process.env.USERNAME}
    --activity--
    `)
    next();
}

async function queryValidation(req, res, next) {
    try {
        const user = await UserData.findAll(req.params);
        if (!user) {
            next({status : 400, message : "ensure correct queries are used"})
        } else {
            next(); 
        }
    } catch (err){
        next(err);
    }
}

async function validateId (req,res,next) {
    try {
        const foundId = await UserData.findId(req.params.id); 
        if (!foundId) {
            next({status : 404, message : `user with id ${req.params.id} not found`});
        } else {
            req.user = foundId;
            next(); 
        }
    } catch (err) {
        next(err)
    }
}

async function validatePost(req,res,next) {
    try {
        const {occupation,email,address,age,name} = req.body;
        if (!occupation || !email || !address || !age || !name) {
            next({status:422, message : "new user must have occupation, name, email, address, and age"})
        } else {
            next(); 
        }
    } catch (err) {next(err)}
}

module.exports = {
    logger,
    queryValidation,
    validateId,
    validatePost
}