const express = require('express');
const { tokenMiddleware, postMiddleware } = require('../middlewares');
const { postController } = require('../controller');

const router = express.Router();

router.post(
'/',
tokenMiddleware.validateToken,
postMiddleware.verifyPostData,
postController.postInsert,
);

router.get(
'/',
tokenMiddleware.validateToken,
postController.getPosts,
);

router.get(
'/:id',
tokenMiddleware.validateToken,
postController.getPostById,
);

module.exports = router;