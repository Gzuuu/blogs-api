const { Category } = require('../models');

const addCategory = ({ name }) => {
    const category = Category.create({ name });
    return category;
};

const getAllCategories = () => Category.findAll();

module.exports = {
    addCategory,
    getAllCategories,
};
