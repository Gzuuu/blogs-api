module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define('Category', {
        id: { type: dataTypes.INTEGER, primaryKey : true, autoIncrement: true },
        name: dataTypes.STRING,
    },{
        timestamps: false,
        tableName: 'categories',
    });
    return Category;
};
