const express = require('express');
const { userMiddleware } = require('../middlewares');
const { userController } = require('../controller');

const router = express.Router();

router.post(
'/',
userMiddleware.verifyEmail,
userMiddleware.verifyName,
userMiddleware.verifyPassword,
userController.userCreate,
);

module.exports = router;
