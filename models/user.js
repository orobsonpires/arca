var mongoose = require('mongoose');
var async = require('async');
var postFind = require('mongoose-post-find');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	id : {
		type : String,
		required : true,
		unique : true
	},
	userName : {
		type : String,
		required : true,
		unique : true
	},
	password : {
		type : String,
		required : true
	},
	email : {
		type : String,
		required : true,
		unique : true
	},
	image: {
		type: String,
		default: 'images/user.png'
	},
	registeredCategories: {
		type: [Schema.Types.Mixed]
	}
});


function _attachRegisteredCategories(Category, result, callback) {
	Category.find({resgisteredBy: result._id}, function(error, categories) {
		if(error) {
			return callback(error);
		}
		
		result.registeredCategories = categories;
		callback(null, result);
	});
}

// listen for find and findOne
UserSchema.plugin(postFind, {
	find: function(result, callback) {
		
		let Category = mongoose.model('Category');
		
		async.each(result, function(item, callback) {
			_attachRegisteredCategories(Category, item, callback);
		}, function(error) {
			if(error)
				return callback(error);
			
			callback(null, result);
		});
	},
	findOne: function(result, callback) {
		let Category = mongoose.model('Category');
		
		_attachRegisteredCategories(Category, result, callback);
	}
});

module.exports = mongoose.model('User', UserSchema);
