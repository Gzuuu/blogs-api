const express = require('express');
const { loginMiddleware } = require('../middlewares');
const { userController } = require('../controller');

const router = express.Router();

router.post('/', loginMiddleware.loginVerify, userController.userLogin);

module.exports = router;