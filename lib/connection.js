var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost:27017/arca';

mongoose.connect(dbUrl);

// Close the Mongoose connection on ctrl+C
process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Connection disconnected');
		process.exit(0);
	});
});

require('../models/categoryType');
require('../models/category');
require('../models/user');