const {userService} = require('./../services');
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
        ErrorResponse.error = err.message;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    
    }
}

async function userLogin(req, res){
    try{
        const result = await userService.userLogin(req.body);
        SuccessResponse.message = result;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    catch(err){
        console.log(err);
        ErrorResponse.error = err.message;
        return res
                .status(StatusCodes.NOT_FOUND)
                .json(ErrorResponse);
    }
        
}


module.exports = {createUser, userLogin};