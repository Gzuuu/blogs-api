const { categoryService } = require('../service');

const addCategory = async (req, res) => {
    const category = await categoryService.addCategory(req.body);
    return res.status(201).json(category);
};

module.exports = {
    addCategory,
};
