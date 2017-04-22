var mongoose = require('mongoose');
var Category = mongoose.model('Category');

exports.getCategories = getCategories;
exports.getCategory = getCategory;

function getCategories(callback) {
	Category.find().sort().exec(callback);
}

function getCategory(categoryId, callback) {
	Category.findOne({ id: categoryId }).populate('User').exec(callback);
}