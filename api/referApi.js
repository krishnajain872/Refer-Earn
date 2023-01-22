const express = require("express");
const router = express.Router();

// models
const ReferEarnModel = require("../models/ReferModel");


// ReferEarn Get 
router.get("/ReferEarn/:id", async (req, res) => {
	try {
		const ReferEarn = await ReferEarnModel.find({ _id: req.params.id })
		res.status(202).send(ReferEarn);
		console.log(ReferEarn);

	} catch (e) {
		res.status(404).send(e);
		console.log(e);
	}
})
router.get("/ReferEarn", async (req, res) => {
	try {
		const ReferEarn = await ReferEarnModel.find()
		res.status(202).send(ReferEarn);
		console.log(ReferEarn);

	} catch (e) {
		res.status(404).send(e);
		console.log(e);
	}
})

function generateReferralID() {
	let code = "";
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < 10; i++) {
		code += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return code;
}

// ReferEarn POST
router.post(`/ReferEarn`, async (req, res) => {
	try {
		const code = generateReferralID();
		const data = {

			code: code,
			date: req.body.date,
			link: `/ReferEarn/${code}`,
			user: req.body.user,
			// referedUser: req.body.referedUser,
			rewards: req.body.rewards

		};
		const ReferEarn = new ReferEarnModel(
			data
		);
		console.log(ReferEarn);

		const ReferEarnSave = await ReferEarn.save();
		//  ReferEarnSave.
		res.status(200).send(ReferEarnSave);
		console.log(ReferEarnSave);

	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
})



// delete ReferEarn
router.delete("/ReferEarn/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		// const ReferEarn = await ReferEarnModel.findById(_id);
		// console.log(blog);
		const ReferEarn = await ReferEarnModel.findByIdAndDelete(_id);
		// const SAVE_del_blog = await Blog.save(_id);
		if (!ReferEarn) {
			console.log(ReferEarn + "   ReferEarn deleted")
			return res.status(404).send("ReferEarn not exist");
		} else {
			res.status(200).send(ReferEarn)
		}
		// res.status(201).send(blog);
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}

})




// update something in a ReferEarn with id 
// router.patch("/ReferEarn/:id", async (req, res) => {
// 	try {
// 		const _id = req.params.id
// 		let updateReferEarn = await ReferEarnModel.findOneAndUpdate(_id,
// 			{ $push: { referedUser: req.body.referedUser } }, { new: true }
// 		);
// 		updateReferEarn = await ReferEarnModel.find({ id: _id }).catch((err) => { console.log('not workings' + err) });
// 		res.send(updateReferEarn);

// 	} catch (err) {
// 		res.status(404).send(err);
// 	}
// })


module.exports = router