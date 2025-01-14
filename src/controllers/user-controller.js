const userService = require('./../services/index');
const { StatusCodes } = require('http-status-codes');
const {SuccessResponse,ErrorResponse} = require('./../utils/common');

async function createUser(req,res){
    try{
        const newUser = await userService.createUser(req.body)
        // console.log(newUser.name);
        SuccessResponse.message =`${newUser.name} Registered Successfully`;
        SuccessResponse.data = newUser;
        
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
        // return res.json(newUser);
    }
    catch(err){

        console.log("Errror : ",err.message);
        console.log(err);
        ErrorResponse.error = err.message;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    
    }
}

module.exports = {createUser};