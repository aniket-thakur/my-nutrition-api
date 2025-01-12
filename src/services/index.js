const{StatusCodes} = require('http-status-codes');

const userModel = require('./../models/userModel');


async function createUser(data) {
    try{
           const newuser = new userModel(data);
           return await newuser.save();
    }
    catch(err){
        throw new Error("Error creating new User");
    }
}

module.exports = {createUser};