var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
	id : {
		type : String,
		required : true,
		unique : true
	},
	name : {
		type : String,
		required : true
	},
	scientificName : {
		type : String
	},
	conservationStatus : {
		type : String
	},
	binomialName : {
		type : String
	},
	type : {
		type : Schema.Types.ObjectId,
		ref : 'CategoryType'
	},
	parentCategory : {
		type : Schema.Types.ObjectId,
		ref : 'Category'
	},
	registerBy : {
		type : Schema.Types.ObjectId,
		ref : 'User'
	}
});

module.exports = mongoose.model('Category', CategorySchema);