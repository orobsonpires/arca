var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoryTypeSchema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String
	}
});

module.exports = mongoose.model('CategoryType', CategoryTypeSchema);