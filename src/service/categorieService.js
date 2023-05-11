const { Category } = require('../models');

const addCategory = ({ name }) => {
    const category = Category.create({ name });
    return category;
};

module.exports = {
    addCategory,
};
