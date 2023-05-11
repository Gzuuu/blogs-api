const loginMiddleware = require('./loginMiddleware');
const userMiddleware = require('./userMiddleware');
const tokenMiddleware = require('./tokenMiddleware');
const categoryMiddleware = require('./categoryMiddleware');

module.exports = {
    loginMiddleware,
    userMiddleware,
    tokenMiddleware,
    categoryMiddleware,
};