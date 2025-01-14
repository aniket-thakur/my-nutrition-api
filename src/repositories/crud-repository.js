const {SuccessResponse, ErrorResponse} = require('./../utils/common');
const {StatusCodes} = require('http-status-codes');

class CrudRepositroy{
    constructor(model){
        this.model = model;
    }

    async  create(data){
        const result = await this.model.create(data);
        return result;  
    }
}

module.exports = CrudRepositroy;