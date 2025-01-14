const userModel = require('./../models/userModel');
const CrudRepo = require('./crud-repository');

class UserRepository extends CrudRepo{
    constructor(){
        super(userModel);
    }
}

module.exports = UserRepository;