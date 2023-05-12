module.exports = (sequelize, dataTypes) => {
    const PostCategories = sequelize.define(
        'PostCategory',
        {
            postId: dataTypes.INTEGER,
            categoryId: dataTypes.INTEGER,
        },
        {
        underscored: true,
        tableName: 'posts_categories',
        timestamps: false,
        },
    );

    PostCategories.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategories,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });

        models.Category.belongsToMany(models.BlogPost, {
            as: 'posts',
            through: PostCategories,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    };

    return PostCategories;
};