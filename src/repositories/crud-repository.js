const AppError = require('./../utils/errors/app-error');
const { server, logger }  = require('./../config');
const {StatusCodes} = require('http-status-codes');

class CrudRepositroy{
    constructor(model){
        this.model = model;
    }

    async  create(data){
        const result = await this.model.create(data);
        return result;  
    }

    async find(data){
        console.log(data);
        const result = await this.model.findOne({'username' : data});
        if (!result){
            logger.error(`Error in find crud :${result}`,'root',{});
            throw new AppError("",StatusCodes.NOT_FOUND);
        }
        console.log(result);
        return result;
    }
}

module.exports = CrudRepositroy;