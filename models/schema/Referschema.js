const mongoose = require("mongoose");

// const user_Schema = mongoose.Schema(
// 	{
// 		userId: {
// 			type: String
// 			// type: mongoose.Schema.Types.ObjectId
// 			, required: true,
// 			unique: true
// 		}

// 	}
// )

// const referedUser_Schema = mongoose.Schema(
// 	{
// 		referedUserId: [{
// 			type: mongoose.Schema.Types.ObjectId
// 			,
// 		}]

// 	}
// )

const ReferEarn_Schema = mongoose.Schema(

	{


		code: {
			type: String,
			// unique: true,
			// required: true,

		},

		date: {
			type: Date,
			required: true,
			default: Date.now(),
			trim: true
		},
		link: {
			type: String,
			// unique: true,
			// required: true

		},
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		referedUser: [{ type: mongoose.Schema.Types.Array, ref: 'User' }],
		rewards: [{
			rewardName: { type: String },
			rewardPoints: { type: Number },
			rewardDate: { type: Date, default: Date.now(), trim: true }
		}]

	}
	, { timestamps: true })
module.exports = ReferEarn = ReferEarn_Schema;