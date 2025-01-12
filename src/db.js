const mongoose = require('mongoose');
const {logger }  = require('./config');

async function connectdb(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/my-nutrition-db');
        logger.info('Database Connected','root',{});
        
    }
    catch(err){
        logger.error('Database connection error', 'error',{err});
        // process.exit(1);
    }
};

module.exports = {connectdb};
