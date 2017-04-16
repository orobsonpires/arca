var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
	id : {
		type : string,
		required : true,
		unique : true
	},
	name : {
		type : string,
		required : true
	},
	scientificName : {
		type : string
	},
	conservationStatus : {
		type : string
	},
	binomialName : {
		type : string
	},
	parentCategory : {
		type : Schema.Types.ObjectID,
		ref : 'Category'
	},
	registerBy : {
		type : Schema.Types.ObjectID,
		ref : 'User'
	}
});

module.exports = mongoose.model('Species', SpeciesSchema);