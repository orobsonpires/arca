var specieDB = require('../database/species');

exports.getSpecies = getSpecies;
exports.getSingleSpecies = getSingleSpecies;

function getSpecies(callback) {
	setTimeout(function() {
		callback(null, speciesDB);
	}, 500);
}

function getSingleSpecies(speciesId, callback) {
	getSpecies(function(error, data) {
		if(error)
			return callback(error);
		
		var result = data.find(function(item) {
			return item.id === speciesId;
		});
		
		callback(null, result);
	});
}