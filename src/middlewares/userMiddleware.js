const verifyName = (req, res, next) => {
    const { displayName } = req.body;
    if (!displayName) {
        return res.status(400)
        .json({ message: '"displayName" is required' });
    }
    if (displayName.length < 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
};

const verifyEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        return res.status(400)
        .json({ message: '"email" is required' });
    }
    if (!emailRegex.test(email)) {
        return res.status(400)
        .json({ message: '"email" must be a valid email' });
    }
    next();
};

const verifyPassword = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400)
        .json({ message: '"password" is required' });
    }
    if (password.length < 6) {
        return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
};

module.exports = {
    verifyName,
    verifyEmail,
    verifyPassword,
};
