const { User } = require('../models');

const findByEmail = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user || user.dataValues.password !== password) {
        console.log('sexo');
        return { type: 'NOT_FOUND', message: 'Invalid fields' };
    }
    return { type: null, message: user };
};

module.exports = {
    findByEmail,
};
