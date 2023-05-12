const loginMiddleware = require('./loginMiddleware');
const userMiddleware = require('./userMiddleware');
const tokenMiddleware = require('./tokenMiddleware');
const categoryMiddleware = require('./categoryMiddleware');
const postMiddleware = require('./postMiddleware');

module.exports = {
    loginMiddleware,
    userMiddleware,
    tokenMiddleware,
    categoryMiddleware,
    postMiddleware,
};