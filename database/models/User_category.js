module.exports = (sequelize, dataTypes) => {
    let alias = 'User_category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rol: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'users_categories',
        timestamps: false
    };
    const User_category = sequelize.define(alias, cols, config)

    User_category.associate = function (models) {
        User_category.hasMany(models.User, {
            as : "User",
            foreignKey: "user_category_id"
        })
    }

    return User_category
}