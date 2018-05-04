const mongoose = require('mongoose');

// Cosmetic Schema
const cosmeticSchema = mongoose.Schema({
	item:{
		type: String,
		required: true
	},
	type:{
		type: String,
		required: true
	},
	
	
	brand:{
		type: String
	},
	price:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const cosmetic = module.exports = mongoose.model('Cosmetic', cosmeticSchema);

// Get Cosmetics
module.exports.getCosmetics = (callback, limit) => {
	Cosmetic.find(callback).limit(limit);
}

// Get Cosmetic
module.exports.getCosmeticById = (id, callback) => {
	Cosmetic.findById(id, callback);
}

// Add Cosmetic
module.exports.addCosmetic = (cosmetic, callback) => {
	Cosmetic.create(cosmetic, callback);
}

// Update Cosmetic
module.exports.updateCosmetic = (id, cosmetic, options, callback) => {
	var query = {_id: id};
	var update = {
		item: cosmetic.item,
		type: cosmetic.type,
		
		brand: cosmetic.brand,
		price: cosmetic.price,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Cosmetic.findOneAndUpdate(query, update, options, callback);
}

// Delete Cosmetic
module.exports.removeCosmetic = (id, callback) => {
	var query = {_id: id};
	Cosmetic.remove(query, callback);
}
