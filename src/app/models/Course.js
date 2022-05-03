const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const Course = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, maxLength: 600 },
		image: { type: String, maxLength: 255 },
		slug: { type: String, slug: 'name', unique: true },
		videoId: { type: String, maxLength: 125 },
		level: { type: String, maxLength: 125 },
		deletedAt: { type: Date, default: Date.now },
	},
	{
		timestamps: true,
	}
);

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
