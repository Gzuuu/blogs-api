const { BlogPost, PostCategory, Category, User } = require('../models');

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

const getAll = async () => {
    const posts = BlogPost.findAll({ include:
        [{ model: User, as: 'user', attributes: { exclude: 'password' } },  
        { model: Category, as: 'categories', through: { attributes: [] } }] });
    return posts;
};

const getById = async (id) => {
    const post = await BlogPost.findByPk(id, { include:
        [{ model: User, as: 'user', attributes: { exclude: 'password' } },  
        { model: Category, as: 'categories', through: { attributes: [] } }] });

    if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };
    return { type: null, message: post };
};

const verifyHolder = (post, userId) => post.user.id !== userId;

const updatePost = async ({ userId, id, title, content }) => {
    const { type, message } = await getById(id);
    if (type) return { type, message };
    
    if (verifyHolder(message, userId)) {
        return { type: 'PERMISSION_DENIED', message: 'Unauthorized user' };
    }

    await BlogPost.update({ title, content }, { where: { id } });
    const post = await getById(id);
    return { type: null, message: post.message };
};

module.exports = {
    addBlogPost,
    getAll,
    getById,
    updatePost,
};