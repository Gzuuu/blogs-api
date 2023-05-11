const { categoryService } = require('../service');

const addCategory = async (req, res) => {
    const category = await categoryService.addCategory(req.body);
    return res.status(201).json(category);
};

const getAll = async (_req, res) => {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
};

module.exports = {
    addCategory,
    getAll,
};
