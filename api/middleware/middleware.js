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

module.exports = {
    logger,
    queryValidation,
}