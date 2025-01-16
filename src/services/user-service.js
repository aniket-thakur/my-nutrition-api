const{StatusCodes} = require('http-status-codes');
const {UserRepository} = require('./../repositories');
const bcrypt = require('bcrypt');
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
        // throw new Error("Error creating new User");
        throw new Error(err);
    }
}

async function userLogin(data){
    try{
        const user = await UserRepo.find(data.username);
        if(!user){
            const userPassword = data.password;
            const passwordHash = user.password;
            const match = await bcrypt.compare(userPassword, passwordHash);
            if(match){
                return "Username validated!!";
            }
        }
        return "Username or password Incorrect";
    }
    catch(err){
        console.log(err.message);
        throw new Error(err);
    }
    
}

module.exports = {createUser, userLogin};