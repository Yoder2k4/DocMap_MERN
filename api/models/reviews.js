const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
	rating: {
		type: Number,
	},
	subject: {
		type: String,
	},
	reviewBody: {
		type: String,
	},
	email: {
		type: String,
	},
	username: {
		type: String,
	},
	time: {
		type: Date,
		default: Date.now,
	},
	doctor: {
		type: Schema.Types.ObjectId,
		ref: 'DoctorDetail',
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'PatientDetail',
		required: true,
	},
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
