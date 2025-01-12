const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password :{
        type : String,
        required: true
    },
    age :{
        type : Number,
        required: true,
        min : 14
    }
}, {timestamps : true});
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;