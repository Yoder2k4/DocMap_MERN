const Review = require('../models/reviews');

module.exports.addComment = async (req, res) => {
	const { userId, doctorId } = req.params;
	const { rating, subject, reviewBody, email, username } = req.body;
	const review = new Review({
		rating,
		subject,
		reviewBody,
		email,
		username,
		doctor: doctorId,
		author: userId,
	});
	await review.save();
	res.json(review);
};
