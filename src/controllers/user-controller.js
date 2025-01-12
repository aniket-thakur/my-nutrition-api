const userService = require('./../services/index');

async function createUser(req,res){
    try{
        const newUser = await userService.createUser(req.body)
        return res.json(newUser);
    }
    catch(err){
        res.json({message : err.message})
    }
}

module.exports = {createUser};