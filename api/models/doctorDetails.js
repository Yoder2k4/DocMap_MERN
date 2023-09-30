const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorDetailSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	contact: {
		type: Number,
		required: true,
	},
	contactMail: {
		type: String,
		required: true,
	},
	experience: {
		type: Number,
		required: true,
	},
	specialisation: {
		type: String,
		required: true,
	},
	fees: {
		type: Number,
		required: true,
	},
	images: {
		pfpInfo: {
			url: {
				type: String,
			},
			filename: {
				type: String,
			},
		},
		bgInfo: {
			url: {                                               
				type: String,
			},
			filename: {
				type: String,
			},
		},
		_id: false,
	},
	clinics: [
		{
			place: {
				type: String,
				required: true,
			},
			location: {
				type: String,
				required: true,
			},
			timings: [
				{
					days: [],
					time: {
						open: {
							type: String,
							required: true,
						},
						close: {
							type: String,
							required: true,
						},
					},
					_id: false,
				},
			],
			_id: false,
		},
	],
	education: [
		{
			degree: {
				type: String,
				required: true,
			},
			institution: {
				type: String,
				required: true,
			},
			_id: false,
		},
	],
	doctorID: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('DoctorDetail', doctorDetailSchema);
