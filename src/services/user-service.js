const{StatusCodes} = require('http-status-codes');
const {UserRepository} = require('./../repositories');
const AppError = require('./../utils/errors/app-error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const UserRepo = new UserRepository();
const saltRounds = 10;
async function createUser(data) {
    try{
        // console.log("data: ",data);
        const salt = await bcrypt.genSalt(saltRounds);
        const hpass = await bcrypt.hash(data.password, salt);
        data.password = hpass;
        const result =  await UserRepo.create(data);
        return result;  

    }
    catch(err){
        if(err.name == 'ValidationError'){ 
            const message = Object.values(err.errors).map(e => e.message);
            throw new AppError(message[0],StatusCodes.INTERNAL_SERVER_ERROR);
        }
        // throw new Error("Error creating new User");
        throw new AppError(err,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function userLogin(data){
    try{
        const user = await UserRepo.find(data.username).catch(err=>{
                if(err instanceof AppError){
                    throw new AppError("Username not found.",StatusCodes.NOT_FOUND);
                }
            });

        const userPassword = data.password;
        const passwordHash = user.password;
        const match = await bcrypt.compare(userPassword, passwordHash);
        if(!match){
            throw new AppError("Wrong Password", StatusCodes.UNAUTHORIZED);
        }
        const token =jwt.sign({email : user.email},"myprivatekey")
        // console.log(test);
        return {msg :"Username validated!!", token:token};
    }
    catch(err){
        if(err instanceof AppError){
            throw err;
        }
            throw new AppError("Unexpected Error Occured", StatusCodes.INTERNAL_SERVER_ERROR);
    }  
}

module.exports = {createUser, userLogin};