module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id: { type: dataTypes.INTEGER, primaryKey : true, autoIncrement: true },
        displayName: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        image: dataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'users',
        underscored: true,
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost, {
            as: 'BlogPosts',
            foreignKey: 'userId',
        });
    };

    return User;
};