module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL(10, 2)
        },
        image : {
            type: dataTypes.STRING
        },
        discount: {
            type: dataTypes.DECIMAL(10, 2)
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        type : {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)
    
    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: "Category",
            foreignKey: "category_id"
        })
    Product.belongsToMany(models.Color, {
            as: "Color",
            through : "products_features",
            foreignKey : "product_id",
            otherKey : "color_id",
            timestamps: false
        })

    Product.belongsToMany(models.Size, {
            as: "Size",
            through : "products_features",
            foreignKey : "product_id",
            otherKey : "size_id",
            timestamps: false
        })
    }
   

    return Product
}