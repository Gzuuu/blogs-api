const express = require('express');
const { userMiddleware, tokenMiddleware } = require('../middlewares');
const { userController } = require('../controller');

const router = express.Router();

router.post(
'/',
userMiddleware.verifyEmail,
userMiddleware.verifyName,
userMiddleware.verifyPassword,
userController.userCreate,
);

router.get('/', tokenMiddleware.validateToken, userController.getAll);

module.exports = router;
