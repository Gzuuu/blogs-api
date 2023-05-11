const { User } = require('../models');

const findByEmail = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.dataValues.password !== password) {
        return { type: 'NOT_FOUND', message: 'Invalid fields' };
    }
    return { type: null, message: user };
};

const newUser = async ({ email, password, displayName, image }) => {
    const alreadyExist = await User.findOne({ where: { email } });

    if (alreadyExist) {
        return { type: 'ALREADY_EXIST', message: 'User already registered' };
    }
    const user = await User.create({ email, password, displayName, image });

    return { type: null, message: user };
};

const getUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return { type: null, message: users };
};

module.exports = {
    findByEmail,
    newUser,
    getUsers,
};
