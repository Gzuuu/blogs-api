module.exports = (sequelize, dataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { type: dataTypes.INTEGER, primaryKey : true, autoIncrement: true },
        title: dataTypes.STRING,
        content: dataTypes.STRING,
        userId: dataTypes.INTEGER,
        published: dataTypes.DATE,
        updated: dataTypes.DATE,
    },{
        timestamps : false,
        underscored: true,
        tableName: 'blog_posts',
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'userId'
        });
    };

    return BlogPost;
};