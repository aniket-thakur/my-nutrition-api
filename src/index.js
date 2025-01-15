const express = require('express');
const { server, logger }  = require('./config');
const apiRoutes = require('./routes');
const db = require('./db');

const app = express();
app.use(express.json());

app.use('/api',apiRoutes);  // whenever a request has '/api' it will redirect it to apiRoutes -> routes/index.js

app.listen(server.PORT , () =>{
    console.log(`Listening to ${server.PORT}`);
    logger.info('Connection established....','root',{});
})

db.connectdb();