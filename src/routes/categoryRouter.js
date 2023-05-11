const express = require('express');
const { categoryMiddleware, tokenMiddleware } = require('../middlewares');
const { categoryController } = require('../controller');

const router = express.Router();

router.post(
'/',
tokenMiddleware.validateToken,
categoryMiddleware.verifyName,
categoryController.addCategory,
);

module.exports = router;