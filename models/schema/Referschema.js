const mongoose = require("mongoose");

const ReferEarn_Schema = mongoose.Schema(

	{
		date: {
			type: Date,
			required: true,
			default: Date.now(),
			trim: true
		},
		link: {
			type: String,
			required: true

		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			unique: true,
			ref: 'User',
		},
		code: {
			type: String,
			required: true,

		},
		// referedUser: [{ type: mongoose.Schema.Types.Array, ref: 'User' }],
		rewards: [{
			rewardName: { type: String },
			rewardPoints: { type: Number },
			rewardDate: { type: Date, default: Date.now(), trim: true }
		}]

	}
	, { timestamps: true })
module.exports = ReferEarn = ReferEarn_Schema;