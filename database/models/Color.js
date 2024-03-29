module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'colors',
        timestamps: false
    };
    const Color = sequelize.define(alias, cols, config)

    Color.associate = function(models){
        Color.belongsToMany(models.Product, {
          as: "Color",
              through : "products_features",
               foreignKey : "product_id",
                otherKey : "color_id",
                timestamps: false
        })
            }

    return Color
}