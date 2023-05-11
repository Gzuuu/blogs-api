const { verifyToken } = require('../auth/authFunctions');

const validateToken = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) return res.status(401).json({ message: 'Token not found' });
        verifyToken(token);
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    validateToken,
};