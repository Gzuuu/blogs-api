const { BlogPost, PostCategory, Category } = require('../models');

const addBlogPost = async ({ userId, title, content, categoryIds }) => {
    const posts = await BlogPost.create({ title, content, userId });
    const { id } = posts.dataValues;

    const allCategories = await Category.findAll({ where: { id: categoryIds } });

    if (allCategories.length !== categoryIds.length) {
        return { type: 'CATEGORY_NOT_FOUND', message: 'one or more "categoryIds" not found' };
    }

    await Promise.all(categoryIds.map((categoryId) => PostCategory
    .create({ postId: id, categoryId })));
    return { type: null, message: posts };
};

module.exports = {
    addBlogPost,
};