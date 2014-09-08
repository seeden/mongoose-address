'use strict';

var _ = require('underscore');

var type = exports.type = {
	SHIPPING: 'SHIPPING',
	BILLING: 'BILLING'
};

module.exports = function addressPlugin (schema, options) {
	if(!options) {
		options = {};
	}

	var path = options.path || 'address',
		type = options.type || false,
		primary = options.primary || false,
		created = options.created || false,
		updated = options.updated || false;

	var data = {
		street1 	: { type: String },
		street2 	: { type: String },
		city 		: { type: String },
		state 		: { type: String }, //TEXAS
		zip 		: { type: String },
		country     : { type: String } //USA
	};

	if(created) {
		data.created = { type: Date, default: Date.now };
	}

	if(updated) {
		data.updated = { type: Date, default: Date.now };
	}

	if(primary) {
		data.primary = { type: Boolean, default: false };
	}

	if(type) {
		data.type = { type: String, enum: _.values(type) };
	}

	schema.path(path, data);

	return schema;
};