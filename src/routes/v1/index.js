const express = require('express');
const {infoController,userController} = require('../../controllers');
const router = express.Router();

router.get('/getInfo', infoController.info);
router.post('/create', userController.createUser);
router.post('/login', userController.userLogin);
module.exports = router;