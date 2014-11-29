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

	var path = options.path || 'address';

	var data = {
		country       : { type: String }, //USA
		state 		  : { type: String }, //TEXAS
		county        : { type: String }, //
		city 		  : { type: String }, //NY
		district      : { type: String }, //brooklin
		street1 	  : { type: String },
		street1Number : { type: Number },
		street2 	  : { type: String },
		street2Number : { type: Number },
		zip 		  : { type: String }
	};

	if(options.primary) {
		data.primary = { type: Boolean, default: false };
	}

	if(options.types) {
		data.type = { type: String, enum: _.values(options.types) };
	}

	if(options.phone) {
		data.phone = { type: String };
	}

	var subSchema = {};
	subSchema[path] = data;

	schema.add(subSchema);

	return schema;
};