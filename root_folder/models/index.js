// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category.
Category.hasOne(Product, {
  foreignKey: 'category_id',
  //deletes the associated Category.
  onDelete: 'CASCADE',
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// A product belongs to a single category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: 'ProductTag' })

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: 'ProductTag' })


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
