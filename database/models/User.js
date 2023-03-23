module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password : {
            type: dataTypes.STRING
        },
        user_category_id: {
            type: dataTypes.INTEGER
        },
        user_image: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)
    
    User.associate = function (models) {
        User.belongsTo(models.User_category, {
            as: "User_category",
            foreignKey: "user_category_id"
        })
    }
   

    return User
}