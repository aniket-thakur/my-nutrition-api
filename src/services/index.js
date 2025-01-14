const{StatusCodes} = require('http-status-codes');

const userModel = require('./../models/userModel');


async function createUser(data) {
    try{
        //    const newuser = new userModel(data);
        //    return await newuser.save();
        console.log("data: ",data);
        const result = await userModel.create(data);
        return result;  
    }
    catch(err){
        // throw new Error("Error creating new User");
        throw new Error(err);
    }
}

module.exports = {createUser};