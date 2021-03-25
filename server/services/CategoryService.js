const CategoryService = function () { }
const Category = require('../models/Category');

CategoryService.prototype.getCategories =  async function () {
    return Category.findAll();
}

CategoryService.prototype.addCategory = async function (category) {
    return Category.create({
        name: category
    });
}

CategoryService.prototype.deleteCategory = async function (categoryId) {
    return Category.destroy({
        where: {
            id: categoryId
        }
    });
}

module.exports = CategoryService;